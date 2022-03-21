const express = require("express");
const router = express.Router();
let {
  getAllCatchphrases,
  getCatchphraseById,
  addCatchphrase,
  updateCatchphrase,
  removeCatchphrase,
} = require("./../controllers/catchphraseController");

router.get("/", async (req, res) => {
  let response = await getAllCatchphrases(
    req.query.s,
    req.query.page,
    req.query.limit
  );
  response.success == true
    ? res.status(200).json(response)
    : res.status(404).json(response);
});

router.get("/:id", async (req, res) => {
  let response = await getCatchphraseById(req.params.id);
  res.json(response);
});

router.post("/", async (req, res) => {
  let body = {
    movieName: req.body.movieName,
    catchpharese: req.body.catchpharese,
    movieContext: req.body.movieContext,
  };
  let response = await addCatchphrase(body);
  response.success == true
    ? res.status(201).json(response)
    : res.status(400).json(response);
});

router.put("/:id", async (req, res) => {
  let movieName = req.body.movieName ?? null;
  let catchpharese = req.body.catchpharese ?? null;
  let movieContext = req.body.movieContext ?? null;

  let response = await updateCatchphrase(
    req.params.id,
    movieName,
    catchpharese,
    movieContext
  );
  response.success == true
    ? res.status(201).json(response)
    : res.status(400).json(response);
});

router.delete("/:id", async (req, res) => {
  let response = await removeCatchphrase(req.params.id);
  response.success == true
    ? res.status(200).json(response)
    : res.status(500).json(response);
});

module.exports = router;
