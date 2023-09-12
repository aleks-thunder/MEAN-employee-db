const express = require("express");
const router = express.Router();

const Employee = require("../models/employee.model");
const { generateCrudMethods } = require("../services");
const employeeCrud = generateCrudMethods(Employee);
const {
  validateDbId,
  raiseRecord404Error,
  errorHandler,
} = require("../middlewares");

router.get("/", (req, res, next) => {
  employeeCrud
    .getAll()
    .then((data) => res.send(data))
    .catch((err) => next(err));
});

router.get("/:id", validateDbId, (req, res, next) => {
  employeeCrud
    .getById(req.params.id)
    .then((data) => (data ? res.send(data) : raiseRecord404Error(req, res)))
    .catch((err) => next(err));
});

router.post("/", (req, res, next) => {
  employeeCrud
    .create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
});

router.put("/:id", validateDbId, (req, res) => {});

router.delete("/:id", validateDbId, (req, res) => {});

module.exports = router;
