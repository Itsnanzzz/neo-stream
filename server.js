require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3000;

app.use(cors());

app.use("/lib", express.static(path.join(__dirname, "lib")));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/config", (req, res) => {
  res.json({
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "index.html"));
});

app.get("/stream", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "stream.html"));
});

app.get("/input", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "input.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
