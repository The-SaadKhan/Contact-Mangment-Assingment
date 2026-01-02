import React, { useState } from 'react';
import './ContactList.css';

const ContactList = ({ contacts, onContactDeleted, onSort }) => {
  const [sortField, setSortField] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        onContactDeleted(id);
        setDeleteConfirm(null);
      } else {
        alert('Failed to delete contact');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      alert('Failed to delete contact. Please try again.');
    }
  };

  const handleSort = (field) => {
    const newOrder = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(newOrder);
    onSort(field, newOrder);
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (contacts.length === 0) {
    return (
      <div className="contact-list-container">
        <h2>Contact List</h2>
        <div className="empty-state">
          <p>No contacts yet. Add your first contact above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-list-container">
      <div className="list-header">
        <h2>Contacts ({contacts.length})</h2>
        <div className="sort-controls">
          <label>Sort by:</label>
          <select onChange={(e) => handleSort(e.target.value, sortOrder)} value={sortField}>
            <option value="createdAt">Date Added</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
          <button 
            onClick={() => handleSort(sortField, sortOrder === 'asc' ? 'desc' : 'asc')}
            className="order-btn"
            title={sortOrder === 'asc' ? 'Sort Descending' : 'Sort Ascending'}
          >
            {sortOrder === 'asc' ? '↑ A-Z' : '↓ Z-A'}
          </button>
        </div>
      </div>

      <div className="contact-grid">
        {contacts.map((contact) => (
          <div key={contact._id} className="contact-card">
            <div className="contact-header">
              <h3>{contact.name}</h3>
              <button
                className="delete-btn"
                onClick={() => setDeleteConfirm(contact._id)}
                title="Delete contact"
              >
                🗑️
              </button>
            </div>
            
            <div className="contact-info">
              <div className="info-item">
                <span className="info-label">📧 Email:</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="info-item">
                <span className="info-label">📱 Phone:</span>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </div>
              {contact.message && (
                <div className="info-item message">
                  <span className="info-label">💬 Message:</span>
                  <p>{contact.message}</p>
                </div>
              )}
              <div className="info-item date">
                <span className="info-label">🕒 Added:</span>
                <span>{formatDate(contact.createdAt)}</span>
              </div>
            </div>

            {deleteConfirm === contact._id && (
              <div className="delete-confirm">
                <p>Delete this contact?</p>
                <div className="confirm-buttons">
                  <button 
                    className="confirm-yes"
                    onClick={() => handleDelete(contact._id)}
                  >
                    Yes
                  </button>
                  <button 
                    className="confirm-no"
                    onClick={() => setDeleteConfirm(null)}
                  >
                    No
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
