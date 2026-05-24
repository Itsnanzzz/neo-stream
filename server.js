require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3000;

app.use(cors());
app.use("/lib", express.static(path.join(__dirname, "lib")));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/movies", async (req, res) => {
  try {
    const response = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/Data_Film?select=*`,
      {
        headers: {
          'apikey': process.env.SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`
        }
      }
    );

    if (!response.ok) throw new Error('Supabase error');

    const data = await response.json();
    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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

app.post("/api/movies", express.json(), async (req, res) => {
  try {
      const response = await fetch(
          `${process.env.SUPABASE_URL}/rest/v1/Data_Film`,
          {
              method: 'POST',
              headers: {
                  'apikey': process.env.SUPABASE_ANON_KEY,
                  'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
                  'Content-Type': 'application/json',
                  'Prefer': 'return=minimal'
              },
              body: JSON.stringify(req.body)
          }
      );

      if (!response.ok) throw new Error('Gagal menyimpan ke database');

      res.json({ success: true });

  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

module.exports = app;