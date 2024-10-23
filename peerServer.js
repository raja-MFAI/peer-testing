const { PeerServer } = require('peer');

// Create PeerServer on a specific port and domain.
const peerServer = PeerServer({
  port: 443, 
  path: '/peerjs',
  allow_discovery: true,
});

console.log('Peer server running on port 3001');
