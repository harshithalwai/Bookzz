import express, { urlencoded } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import BookRoute from "./routes/book.route.js";
import UserRoute from "./routes/user.route.js";
import ContactRoute from "./routes/contact.route.js";
import cors from "cors";
//functions /  middlewares
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//variable of env
const port = process.env.PORT || 4000;
const URL = process.env.MONGOOSE_URL;
//mongoose connection
try {
  mongoose.connect(URL);
  console.log("Connected to Data Base");
} catch (error) {
  console.log("Error : ", error);
}
//routes
app.use("/book", BookRoute);
app.use("/user", UserRoute);
app.use("/contact", ContactRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});
//Connection of backend of node js
app.listen(port, () =>
  console.log(` app listening on ${port} : http://localhost:${port}`)
);
