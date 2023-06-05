import { createReadStream } from "node:fs";
import { createServer } from "node:http";

const server = createServer((req, res) => {
  // console.log(req.url);
  // console.log(req.headers.accept);

  const url = new URL(req.url, `http://${req.headers.host}`);
  // console.log(url);

  let body = "";

  // ---------------------------Read Request by object---------------------------

  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("close", () => {
    console.log(body);
    res.end();
  });

  // ---------------------------USE PARAMS---------------------------

  // res.write(`Bonjour ${url.searchParams.get("name")}`);
  // res.end();

  // ---------------------------Use a stream for read a file and headers---------------------------

  // const file = createReadStream("index.html");

  // res.writeHead(200, {
  //   "content-Type": "text/html",
  // });

  // file.pipe(res, { end: false });
  // file.on("end", () => {
  //   res.end();
  // });

  // // res.write("hello");
  // // res.end();
});
server.listen("8888");
//server.listen("80", "0.0.0.0");  pour du online
