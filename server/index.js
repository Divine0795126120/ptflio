require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Enhanced CORS configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.options('*', cors());

const PORT = process.env.PORT || 5002;

// In-memory messages store (for demo)
const messages = [];

// File path for saving messages locally
const messagesFilePath = path.join(__dirname, 'messages.json');

// Load saved messages from file
function loadMessagesFromFile() {
  try {
    if (fs.existsSync(messagesFilePath)) {
      const data = fs.readFileSync(messagesFilePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (e) {
    console.warn('⚠ Could not load messages from file:', e.message);
  }
  return [];
}

// Save messages to file
function saveMessagesToFile(msgs) {
  try {
    fs.writeFileSync(messagesFilePath, JSON.stringify(msgs, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.warn('⚠ Could not save messages to file:', e.message);
    return false;
  }
}

// REST API
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message } = req.body || {};
    
    console.log('Received contact:', { name, email, messageLength: message?.length });

    if (!name || !email || !message) {
      console.log('Missing fields - name:', !!name, 'email:', !!email, 'message:', !!message);
      return res.status(400).json({ error: 'All fields (name, email, message) are required' });
    }

    const contactMsg = {
      id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      time: new Date().toISOString()
    };

    // Save locally
    const savedMessages = loadMessagesFromFile();
    savedMessages.unshift(contactMsg); // Add to beginning
    
    if (saveMessagesToFile(savedMessages)) {
      console.log('✓ Contact saved:', { id: contactMsg.id, name: contactMsg.name });
      res.json({ 
        success: true, 
        message: 'Thank you! Your message has been saved.',
        id: contactMsg.id
      });
    } else {
      throw new Error('Could not save message to file');
    }
  } catch (e) {
    console.error('✗ Contact error:', e.message);
    res.status(500).json({ 
      error: 'Failed to process contact form: ' + e.message 
    });
  }
});

// Socket.io
io.on('connection', (socket) => {
  console.log('ℹ Client connected:', socket.id);
  
  // Send previous messages to the new client
  socket.emit('previousMessages', messages);

  socket.on('sendMessage', (payload) => {
    const msg = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      user: payload?.user || 'Anonymous',
      text: payload?.text || '',
      time: new Date().toISOString()
    };
    messages.push(msg);
    io.emit('newMessage', msg);
  });

  socket.on('typing', (user) => {
    socket.broadcast.emit('userTyping', user || 'Someone');
  });

  socket.on('disconnect', () => {
    console.log('ℹ Client disconnected:', socket.id);
  });
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error('✗ Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
server.listen(PORT, () => {
  console.log(`\n✓ Portfolio Server Started`);
  console.log(`  → API: http://localhost:${PORT}/api/contact`);
  console.log(`  → Health: http://localhost:${PORT}/api/health`);
  console.log(`  → Socket.io: ws://localhost:${PORT}\n`);
});
