const express = require('express');
const app = express();
const port = 3000;

// Serve static files from /public
app.use(express.static('public'));

// Simple API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app; // Export for testing
