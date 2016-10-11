const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const horizon = require('@horizon/server');

const app = express();

// Serve our static stuff like css
app.use(express.static(path.join(__dirname, 'dist')));
// Send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const options = {
  key: fs.readFileSync(path.resolve(__dirname, './horizon-key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, './horizon-cert.pem')),
};

const PORT = process.env.PORT || 3000;
const server = https.createServer(options, app);
server.listen(PORT, () => {
  /* eslint-disable no-alert, no-console */
  console.log(`Express server running at localhost:${PORT}`);
});

const horizonServer = horizon(server, {
  project_name: 'todoApp',
  permissions: true,
  auth: {
    token_secret: 'QZs6JMT4pwlge6V5li4JRkFFd7yBphvXMbT2ocP+NETwgAtZxGPsJJQKhbvZG8QyxccdFDNAB+xHNiXrB1ylKg==',
  },
});
// Add Github authentication
horizonServer.add_auth_provider(horizon.auth.github, {
  path: 'github',
  id: '26bc0678163a4192b3b2',
  secret: '50b6e7b46f7ccd29792ea42e12c07220eb47bd73',
});
