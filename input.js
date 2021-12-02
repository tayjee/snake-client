let connection;
const {inputs} = require('./constants');

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (data) {
  // your code here
  if (data === 'w') {
    connection.write(inputs[data]);
  }
  if (data === 'a') {
    connection.write(inputs[data]);
  }
  if (data === 's') {
    connection.write(inputs[data]);
  }
  if (data === 'd') {
    connection.write(inputs[data]);
  }
  
  if (data === 'q') {
    connection.write(inputs[data]);
  }

  if (data === 'e') {
    connection.write(inputs[data]);
  }

  if (data === '\u0003') {
    console.log("Disconnecting");
    process.exit();
  }

};

module.exports = {setupInput}