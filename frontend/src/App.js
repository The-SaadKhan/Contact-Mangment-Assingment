import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://contact-mangment-assingment.onrender.com/api/contacts');
      const data = await response.json();
      
      if (data.success) {
        setContacts(data.data);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleContactAdded = (newContact) => {
    setContacts(prev => [newContact, ...prev]);
    
    // Show success message
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleContactDeleted = (id) => {
    setContacts(prev => prev.filter(contact => contact._id !== id));
  };



  const handleSort = (field, order) => {
    const sortedContacts = [...contacts].sort((a, b) => {
      let aValue = a[field];
      let bValue = b[field];

      if (field === 'name' || field === 'email') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      } else if (field === 'createdAt') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (order === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setContacts(sortedContacts);
  };

  return (
    <div className="App dark-mode">
      <header className="app-header">
        <div className="header-content">
          <h1>Contact Manager</h1>
          <p>Your Professional Contact Management Solution</p>
        </div>
      </header>

      {showSuccess && (
        <div className="success-message">
          ✅ Contact added successfully!
        </div>
      )}

      <main className="app-main">
        <div className="container">
          <ContactForm onContactAdded={handleContactAdded} />
          
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading contacts...</p>
            </div>
          ) : (
            <ContactList 
              contacts={contacts}
              onContactDeleted={handleContactDeleted}
              onSort={handleSort}
            />
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>Built with MERN Stack | {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
