const express = require("express");
const router = express.Router();

const Employee = require("../models/employee.model");
const { generateCrudMethods } = require("../services");
const employeeCrud = generateCrudMethods(Employee);
const { validateDbId } = require("../middlewares");

router.get("/", (req, res) => {
  employeeCrud
    .getAll()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

router.get("/:id", validateDbId, (req, res) => {
  employeeCrud
    .getById(req.params.id)
    .then((data) =>
      data
        ? res.send(data)
        : res
            .status(404)
            .json({ error: "No record with given _id" + req.params.id })
    )
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  employeeCrud
    .create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => console.log(err));
});

router.put("/:id", validateDbId, (req, res) => {});

router.delete("/:id", validateDbId, (req, res) => {});

module.exports = router;
