
const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',  // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected")
    conn.write("Name: FW")
  //   conn.write("Move: up")
  //  setInterval(() => {
  //   conn.write("Move: up")
  //  }, 200) 
  //   conn.write("Move: up")
  //   setTimeout(() => {
  //     conn.write("Move: right")
  //   }, 500)
    
  })

  conn.on("data", (data) => {
    console.log(data)
  })
  
  return conn;
};

module.exports = { connect }