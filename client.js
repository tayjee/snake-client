const net = require("net");
const {ip, port} = require('./constants')

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: ip,// IP address here,
    port: port,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connected to the game server.");
    conn.write("Name: Jimmy");
  });
  return conn;
};


module.exports = {connect};


