const router = require("express").Router();
import { create, insertMany, find } from "../models/transaction.js";

router.post("/api/transaction", ({body}, res) => {
    create(body)
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

router.post("/api/transaction/bulk", ({body}, res) => {
    insertMany(body)
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

router.get("/api/transaction", (req, res) => {
    find({}).sort({date: -1})
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

export default router;