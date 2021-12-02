let connection;

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
    console.log("up")
    connection.write('Move: up');
  }

  if (data === 'a') {
    console.log("left")
    connection.write('Move: left');
  }

  if (data === 's') {
    console.log("down")
    connection.write('Move: down');
  }

    if (data === 'd') {
      console.log("right")
    connection.write('Move: right');
  }

  if (data === '\u0003') {
    console.log("Disconnecting");
    process.exit();
  }

};

module.exports = {setupInput, handleUserInput}