const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const getData = require("./grab.js");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("getlink", async (link) => {
    const data = await getData(link);
    if (data == null) {
      console.log("scrapping gagal, silahkan scrap dari link produk lain!!!");
    } else {
      io.emit("data scrapp", data);
    }
  });
});

server.listen(3000, () => {
  console.log("server running diport 3000...");
});
