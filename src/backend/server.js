import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

const apiKey = process.env.TMDB_API_KEY;

const port = process.env.PORT || 3001;

app.use(cors());

app.get("/api", (req, res) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  fetch("https://api.themoviedb.org/3/trending/tv/week?language=pt-BR", options)
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((err) => console.error(err));
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
