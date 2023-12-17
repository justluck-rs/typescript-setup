import * as express from "express";
import { Request, Response } from "express";
import Person from "@/person";

const PORT = 3000;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send(new Person().sayHello());
});

app.listen(3000, () => console.log(`listening on port ${PORT} `));
