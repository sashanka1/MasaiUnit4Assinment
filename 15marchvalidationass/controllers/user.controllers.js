const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.models");

const router = express.Router();

router.post(
    "/",

    body("firstName")
        .trim()
        .not()
        .isEmpty()

        .withMessage("First Name cannot be empty")
        .isLength({ min: 8 })
        .withMessage("First Name must be at least 8 characters"),
    body("lastName").trim().not().isEmpty()
        .withMessage("last name cannot be empty"),


    body("lastName").trim().custom((value) => {
        if (value && value.length < 4) {
            throw new Error("Last Name must provides and also atlast lengt of four");
        }
        return true;
    }),

    body("email")
        .isEmail()
        .custom(async (value) => {
            const user = await User.findOne({ email: value });

            if (user) {
                throw new Error("Email is already exist");
            }
            return true;
        }),
    body("pincode").not().isEmpty().withMessage("please add pincode")
        .isLength({ min: 6, max: 6 }).withMessage("length must be six"),

    body("age")
        .not()
        .isEmpty()
        .withMessage("Age cannot be empty")
        .isNumeric()

        .custom((val) => {
            if (val < 1 || val > 100) {
                throw new Error("Incorrect age provided.Age must be a number between 1 and 100");

            }
            return true;
        }),
    body("gender").not().isEmpty().withMessage("please define your gender")
        .custom((gen) => {
            if (gen == "male" || gen == "female" || gen == "other") {
                return true;
            }
            throw new Error("incorrect gender.gender must be male/female/other")
        }),

    async (req, res) => {
        try {

            const errors = validationResult(req);
            console.log({ errors });
            if (!errors.isEmpty()) {
                return res.status(400).send({ errors: errors.array() });
            }

            const user = await User.create(req.body);

            return res.status(201).send(user);
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }
);

module.exports = router;
