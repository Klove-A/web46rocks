require('dotenv').config();

// console.log("stuff");
// console.log(process.argv[2]);
// console.log(process.env.USER);

const express = require('express');

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.static(
  path.join(_dirname, "client/build")
));

server.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Greg" }])
});

server.get("*", (req, res) => {res.sendFile(
  path.join(_dirname, "client/build", "index.html")
)});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`listening on ${port}`)
});