import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from "./routes/student.js";

dotenv.config();
// -------------------connect database----------------------
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("The DataBase is connected :)");
  })
  .catch((err) => {
    console.log(err.message);
  });
//------app
const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

//-------routes----

app.use("/students", studentRoutes);

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
