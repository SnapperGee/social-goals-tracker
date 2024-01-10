import { helpers as hbsHelpers } from "./helper/index.mjs";
import { router } from "./route/index.mjs";
import express from "express";
import exphbs from "express-handlebars";
import session from "express-session";
import { resolve as resolvePath } from "node:path";
import "dotenv/config.js";


const SRC_ROOT = resolvePath(".", "src", "main");

const PORT = process.env.PORT;

const app = express();

const sessionConfig = {
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    },
    age: 1000 * 60 * 60 * 24
};

const hbs = exphbs.create({
    extname: "hbs",
    layoutsDir: resolvePath(SRC_ROOT, "hbs", "layout"),
    helpers: hbsHelpers,
    partialsDir: resolvePath(SRC_ROOT, "hbs", "partial")
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", resolvePath(SRC_ROOT, "hbs"));

app.use(session(sessionConfig));
app.use(function (req, res, next)
{
    res.locals.session = req.session;
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(resolvePath(SRC_ROOT, "css", "public")));
app.use(express.static(resolvePath(SRC_ROOT, "js", "public")));

app.use(router);

app.get("/check-session", (req, res) =>
{
    console.log(req.session);
    res.send("Session data logged in the server console.");
});

app.listen(PORT, () =>
{
    console.log(`Server listening on port http://localhost:${PORT}`);
});
