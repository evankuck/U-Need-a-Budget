import express from "express";
import logger from "morgan";
import { connect } from "mongoose";
import compression from "compression";

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(express.static("./public"));

connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});