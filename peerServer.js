const { PeerServer } = require('peer');

// Create PeerServer on a specific port and domain.
const peerServer = PeerServer({
  port: "https://meet-testing.onrender.com", 
  path: '/myapp',
});

console.log('Peer server running on port 3001');
