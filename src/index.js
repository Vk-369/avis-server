const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

//Simple health check api for testing
app.get('/health/check', (req, res) => {
  res.status(201).json({ message: 'Yeah,bro iam fine ' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});