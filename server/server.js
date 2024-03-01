const bodyParser = require("body-parser");
const express = require("express");
const { createServer } = require("http");
const app = express();
const mysql = require("mysql2");
const multer = require("multer");
const PORT = 3001;
const upload = multer({ dest: "uploads/" });
const cors = require("cors");
const xlsx = require("xlsx");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload", upload.single("file"), (req, res) => {
  console.log("req.file :>> ", req.file);
  const workbook = xlsx.readFile(req.file.path);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
  console.log("data :>> ", data);

  return res.status(200).send("uploaded sucessfully !");
});

app.listen(PORT, (err) => {
  console.log(`server runing  ${PORT}`);
});
