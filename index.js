const { PORT = 3000 } = process.env;
const express = require("express");
const server = express();
const morgan = require("morgan");
server.use(morgan("dev"));
const dino = `               __
              / _)
     _.----._/ /
    /         /
 __/ (  | (  |
/__.-'|_|--|_|
`;

server.use((request, response, next) => {
  console.log("<____Body Logger START____>");
  console.log(request.body);
  console.log("<_____Body Logger END_____>");

  next();
});

const apiRouter = require("./api");
server.use("/api", apiRouter);

const { client } = require("./db");
client.connect();

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
  //   console.log(dino);
});
