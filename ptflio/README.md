# RUBAYIZA DIVINE - Portfolio Website

A modern, full-stack portfolio website with real-time chat functionality built with React and Node.js.

## 🌟 Features

- **Modern UI/UX**: Beautiful gradient design with smooth animations
- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Real-time Chat**: Live chat functionality using Socket.io
- **Portfolio Sections**:
  - Hero section with introduction
  - About section with highlights
  - Skills section with progress bars
  - Projects showcase with 6 featured projects
  - Contact form with backend integration
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Full Stack**: Frontend (React) + Backend (Express + Socket.io)

## 🚀 Technologies Used

### Frontend
- React 18
- Socket.io Client (real-time communication)
- Lucide React (modern icons)
- Framer Motion (animations)
- CSS3 with custom styling

### Backend
- Node.js
- Express.js
- Socket.io (WebSocket server)
- CORS enabled

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Clone or navigate to the project
```bash
cd e:\MILLA\ptflio
```

### Step 2: Install all dependencies
```bash
npm run install-all
```

This will install dependencies for:
- Root project
- Client (React app)
- Server (Express backend)

## 🎯 Running the Application

### Option 1: Run Both (Recommended)
Run both frontend and backend simultaneously:
```bash
npm run dev
```

### Option 2: Run Separately

**Terminal 1 - Backend Server:**
```bash
npm run server
```
Server will run on `http://localhost:5000`

**Terminal 2 - Frontend Client:**
```bash
npm run client
```
Client will run on `http://localhost:3000`

## 📁 Project Structure

```
ptflio/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Skills.js
│   │   │   ├── Projects.js
│   │   │   ├── Contact.js
│   │   │   ├── Chat.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                 # Express backend
│   ├── index.js           # Main server file
│   ├── .env               # Environment variables
│   └── package.json
├── package.json           # Root package.json
├── .gitignore
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Name and Title** - Edit `client/src/components/Hero.js`
2. **About Section** - Edit `client/src/components/About.js`
3. **Skills** - Update skills array in `client/src/components/Skills.js`
4. **Projects** - Modify projects array in `client/src/components/Projects.js`
5. **Contact Info** - Update in `client/src/components/Contact.js` and `Footer.js`

### Change Colors

The main gradient colors can be changed in `client/src/index.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🔧 Features Breakdown

### 1. Hero Section
- Animated introduction
- Social media links
- Call-to-action buttons
- Floating avatar animation

### 2. About Section
- Personal description
- 4 highlight cards with icons
- Hover effects

### 3. Skills Section
- Categorized skills (Frontend, Backend, Tools)
- Animated progress bars
- Percentage indicators

### 4. Projects Section
- 6 featured projects
- Project cards with hover effects
- Technology tags
- GitHub and Live Demo links

### 5. Contact Section
- Contact form with validation
- Contact information display
- Backend integration for form submission

### 6. Real-time Chat
- Live messaging with Socket.io
- Username setup
- Typing indicators
- Message history
- Responsive chat window

## 🌐 API Endpoints

### Backend Routes

- `GET /api/health` - Server health check
- `GET /api/messages` - Get chat message history
- `POST /api/contact` - Submit contact form

### Socket.io Events

**Client → Server:**
- `sendMessage` - Send a new chat message
- `typing` - Notify others when typing

**Server → Client:**
- `previousMessages` - Send message history to new clients
- `newMessage` - Broadcast new message to all clients
- `userTyping` - Notify clients when someone is typing

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 480px
- Tablet: < 768px
- Desktop: > 968px

## 🔒 Environment Variables

Create a `.env` file in the `server` directory:
```
PORT=5000
NODE_ENV=development
```

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the client: `cd client && npm run build`
2. Deploy the `client/build` folder

### Backend (Heroku/Railway)
1. Deploy the `server` folder
2. Set environment variables
3. Update Socket.io connection URL in `client/src/components/Chat.js`

## 📝 To-Do / Future Enhancements

- [ ] Add dark/light theme toggle
- [ ] Integrate blog section
- [ ] Add project filtering
- [ ] Implement database for chat messages
- [ ] Add user authentication
- [ ] Create admin dashboard
- [ ] Add email notifications
- [ ] Implement file sharing in chat

## 👨‍💻 Author

**RUBAYIZA DIVINE**
- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]
- Email: divine@example.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Gradient inspiration from [UI Gradients](https://uigradients.com/)
- Socket.io for real-time functionality

---

**Happy Coding! 🚀**
