# Contact Management System - MERN Stack

A full-stack web application for managing contacts built with MongoDB, Express.js, React.js, and Node.js.

## Features

✅ **Contact Form**
- Add new contacts with Name, Email, Phone, and Message
- Real-time client-side validation
- Form disabled when invalid
- Success notifications

✅ **Contact List**
- Display all contacts in responsive card layout
- Sort by Name or Date
- Delete contacts with confirmation
- Auto-refresh without page reload

✅ **Responsive Design**
- Mobile-friendly interface
- Clean and modern UI
- Beautiful gradient design

✅ **Full CRUD Operations**
- Create: Add new contacts
- Read: View all contacts
- Delete: Remove contacts

## Tech Stack

**Frontend:**
- React.js 18
- CSS3 (Custom styling)
- Axios for API calls
- useState for state management

**Backend:**
- Node.js
- Express.js
- Mongoose (MongoDB ODM)
- CORS enabled

**Database:**
- MongoDB

## Project Structure

```
contact-management-app/
├── backend/
│   ├── models/
│   │   └── Contact.js          # MongoDB schema
│   ├── routes/
│   │   └── contacts.js         # API routes
│   ├── .env                    # Environment variables
│   ├── .gitignore
│   ├── package.json
│   └── server.js               # Express server
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── ContactForm.js
    │   │   ├── ContactForm.css
    │   │   ├── ContactList.js
    │   │   └── ContactList.css
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    ├── .gitignore
    └── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account OR local MongoDB installation
- npm or yarn package manager

### Step 1: Get MongoDB Connection String

**Option A: MongoDB Atlas (Cloud - Recommended)**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new cluster (Free tier available)
4. Click "Connect" on your cluster
5. Choose "Connect your application"
6. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
7. Replace `<password>` with your actual password
8. Add your database name (e.g., `contactsdb`)

**Option B: Local MongoDB**

If you have MongoDB installed locally:
```
mongodb://localhost:27017/contactsdb
```

### Step 2: Backend Setup

1. Open a terminal and navigate to the backend folder:
```powershell
cd "c:\Users\saadk\OneDrive\Desktop\New folder\contact-management-app\backend"
```

2. Install dependencies:
```powershell
npm install
```

3. **IMPORTANT**: Open the `.env` file and add your MongoDB connection string:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string_here
```

Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string from Step 1.

4. Start the backend server:
```powershell
npm start
```

You should see:
```
Server is running on port 5000
MongoDB connected successfully
```

### Step 3: Frontend Setup

1. Open a **new terminal** and navigate to the frontend folder:
```powershell
cd "c:\Users\saadk\OneDrive\Desktop\New folder\contact-management-app\frontend"
```

2. Install dependencies:
```powershell
npm install
```

3. Start the React development server:
```powershell
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

## API Endpoints

### POST `/api/contacts`
Create a new contact
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Optional message"
}
```

### GET `/api/contacts`
Get all contacts

### DELETE `/api/contacts/:id`
Delete a specific contact

## Usage

1. **Add Contact**: Fill out the form with required fields (Name, Email, Phone)
2. **View Contacts**: All contacts appear below the form in card layout
3. **Sort Contacts**: Click "Sort by Name" or "Sort by Date" buttons
4. **Delete Contact**: Click the delete (🗑️) button and confirm

## Validation Rules

- **Name**: Required, 2-100 characters
- **Email**: Required, must be valid email format
- **Phone**: Required, 10-20 characters, numbers and basic symbols
- **Message**: Optional, max 500 characters

## Screenshots & Features

### Features Implemented:
✅ Contact form with validation
✅ Client-side error messages
✅ Submit button disabled when form invalid
✅ POST API to store contacts
✅ GET API to fetch contacts
✅ MongoDB schema with validation
✅ Display contacts without page reload
✅ Responsive design
✅ Delete functionality (Bonus)
✅ Success messages (Bonus)
✅ Reusable components (Bonus)
✅ Basic sorting (Bonus)

## Troubleshooting

**Backend won't start:**
- Check if MongoDB connection string is correct in `.env`
- Ensure MongoDB Atlas cluster is running
- Check if port 5000 is available

**Frontend can't connect to backend:**
- Make sure backend is running on port 5000
- Check the proxy setting in `frontend/package.json`

**Module not found errors:**
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

## Development

**Backend (with auto-restart):**
```powershell
cd backend
npm install -g nodemon
npm run dev
```

**Frontend (with hot reload):**
```powershell
cd frontend
npm start
```

## License

This project is open source and available for educational purposes.

## Author

Built as a MERN stack demonstration project.

---

**Happy Coding! 🚀**
