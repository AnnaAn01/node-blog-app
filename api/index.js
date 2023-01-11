import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

// app.get("/test", (req, res) => {
//   res.json("It works");
// });

app.use(express.json());
app.use(cookieParser());

// for oploading files in your own server using multer
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), function (req, res) {
  res.status(200).json("Image has been uploaded");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});
