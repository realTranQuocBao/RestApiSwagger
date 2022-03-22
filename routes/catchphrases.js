const express = require("express");
const router = express.Router();
let {
  getAllCatchphrases,
  getCatchphraseById,
  addCatchphrase,
  updateCatchphrase,
  removeCatchphrase,
} = require("./../controllers/catchphraseController");

/**
 * @swagger
 * /catchphrases:
 *  get:
 *    description: All catchphrases
 *    parameters:
 *      - in: query
 *        name: s
 *        required: false
 *        type: string
 *        description: The catchphrase string.
 *      - in: query
 *        name: page
 *        required: false
 *        type: number
 *        description: The catchphrase page.
 *      - in: query
 *        name: limit
 *        required: false
 *        type: number
 *        description: The catchphrase every page.
 *    responses:
 *      200:
 *        description: return all the catchphrases
 */
router.get("/", async (req, res) => {
  // console.log("getAllCatchphrases", getAllCatchphrases("Doraemon",1,10));
  let response = await getAllCatchphrases(
    req.query.s,
    req.query.page,
    req.query.limit
  );
  response.success == true
    ? res.status(200).json(response)
    : res.status(404).json(response);
});

/**
 * @swagger
 * /catchphrases/{id}:
 *  get:
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The catchphrase id.
 *    description: Get a catchphrase by id
 *    responses:
 *      200:
 *        description: Returns the requestes catachphrases
 */
router.get("/:id", async (req, res) => {
  let response = await getCatchphraseById(req.params.id);
  res.json(response);
});

/**
 * @swagger
 * /catchphrases:
 *  post:
 *    requestBody:
 *      description: Payload of new catchphrase
 *      content:
 *        'application/json':
 *          schema:
 *            type: object
 *            properties:
 *              movieName:
 *                type: string
 *              catchphrase:
 *                type: string
 *              movieContext:
 *                type: string
 *    responses:
 *      201:
 *        description: Created
 *
 */
router.post("/", async (req, res) => {
  let body = {
    movieName: req.body.movieName,
    catchphrase: req.body.catchphrase,
    movieContext: req.body.movieContext,
  };
  let response = await addCatchphrase(body);
  response.success == true
    ? res.status(201).json(response)
    : res.status(400).json(response);
});

/**
 * @swagger
 * /catchphrases/{id}:
 *  patch:
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The catchphrase ID.
 *    requestBody:
 *      description: Payload of to edit cathchphrase
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              movieName:
 *                type: string
 *              catchphrase:
 *                type: string
 *              movieContext:
 *                type: string
 *    responses:
 *      201:
 *        description: Upadated
 */
router.patch("/:id", async (req, res) => {
  let movieName = req.body.movieName ?? null;
  let catchphrase = req.body.catchphrase ?? null;
  let movieContext = req.body.movieContext ?? null;
  console.log(req, movieName,
    catchphrase,
    movieContext);
  console.log(req.catchphrase);
  let response = await updateCatchphrase(
    req.params.id,
    movieName,
    catchphrase,
    movieContext
  );
  response.success == true
    ? res.status(201).json(response)
    : res.status(400).json(response);
});

/**
 * @swagger
 * /catchphrases/{id}:
 *  delete:
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: ID of cathchphrase need delete
 *    description: Delete a catchphrase by id
 *    responses:
 *      200:
 *        description: returns the requested catchphrase
 */
router.delete("/:id", async (req, res) => {
  let response = await removeCatchphrase(req.params.id);
  response.success == true
    ? res.status(200).json(response)
    : res.status(500).json(response);
});

module.exports = router;
