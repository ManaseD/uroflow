var express = require("express");
var router = express.Router();

const { Recording } = require("../models/recording");
const uuidv1 = require("uuid/v1");

var multer = require("multer");
// var upload = multer({ dest: "uploads/recordings" }).single(
//     "INPUT-FIELD-NAME-HERE"
// );

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "uploads/recordings");
    },
    filename: function(req, file, callback) {
        // TODO: ADD MORE FILE TYPE HERE !!!!!
        if (file.mimetype === "audio/wave") {
            callback(null, uuidv1() + "." + "wav");
        } else {
            callback(null, uuidv1());
        }
    }
});
var upload = multer({ storage: storage }).single("INPUT-FIELD-NAME-HERE");

/* POST to upload audio. */
router.post("/", function(req, res, next) {
    upload(req, res, function(err) {
        console.log("File info: ");
        console.log(req.file);
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            res.status(500).send({ flag: false, error: err });
            return;
        } else if (err) {
            // An unknown error occurred when uploading.
            res.status(400).send({ flag: false, error: err });
            return;
        }
        // Everything went fine.

        // update recording table
        const userId = req.body.userId;
        console.log(`User is: ${userId}`);
        Recording.create({
            url: req.file.destination + "/" + req.file.filename,
            comment: req.body.comment,
            userId: userId
        }).then((result) => {
            res.send({ flag: true, recording: result });
        }).catch((err) => {
            res.send({ flag: false, error: err });
        });
    });
});

module.exports = router;
