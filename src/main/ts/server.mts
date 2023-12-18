import { helpers as hbsHelpers } from "./helper/index.mjs";
import { router } from "./route/index.mjs";
import express from "express";
import exphbs from "express-handlebars";
import session from "express-session";
import { resolve as resolvePath } from "node:path";
import "dotenv/config.js";
import mysql, { OkPacket, RowDataPacket } from 'mysql2/promise';
import { v4 as uuidv4 } from 'uuid';

declare module 'express-session' {
    export interface SessionData {
      name: { [key: string]: any };
    }
  }

const SRC_ROOT = resolvePath(".", "src", "main");

const PORT = process.env.EXPRESS_SERVER_PORT;

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

const app = express();

const sessionConfig = {
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    age: 1000 * 60 * 60 * 24
};

const hbs = exphbs.create({
    extname: "hbs",
    layoutsDir: resolvePath(SRC_ROOT, "hbs", "layout"),
    helpers: hbsHelpers,
    partialsDir: resolvePath(SRC_ROOT, "hbs", "partial")
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", resolvePath(SRC_ROOT, "hbs"));

app.use(session(sessionConfig));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(resolvePath(SRC_ROOT, "css", "public")));
app.use(express.static(resolvePath(SRC_ROOT, "js", "public")));

app.use(router);

app.post('/signup', async (req, res) => {
    const { name, password } = req.body;
    const id = uuidv4(); // Generate a UUID
  
    try {
      // Check if the user already exists
      const [existingUsers] = await db.execute<RowDataPacket[]>('SELECT * FROM user WHERE name = ?', [name]);
  
      if (existingUsers.length > 0) {
        return res.send('User already exists');
      }
  
      // Create a new user
      await db.execute('INSERT INTO user (id, name, password) VALUES (?, ?, ?)', [id, name, password]);
  
      // Create a user session
      req.session.name = name;
  
      // Redirect to the homepage (adjust the route accordingly)
      res.redirect('/homepage');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.post('/login', async (req, res) => {
    const { name, password } = req.body;
  
    try {
      // Check if the user exists
      const [existingUsers] = await db.execute<RowDataPacket[]>('SELECT * FROM user WHERE name = ?', [name]);
  
      if (existingUsers.length === 0) {
        // Pass the error message to the template
        return res.render('login', { errorMessage: 'User does not exist. Please sign up.' });
      }
  
      // Validate the password (you might want to use a more secure method, e.g., bcrypt)
      const user = existingUsers[0];
      if (user.password !== password) {
        // Pass the error message to the template
        return res.render('login', { errorMessage: 'Incorrect password. Please try again.' });
      }
  
      // Create a user session
      req.session.name = name;
  
      // Redirect to the homepage (adjust the route accordingly)
      res.redirect('/homepage');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.get('/homepage', (req, res) => {
    // Check if the user is logged in
    if (!req.session.name) {
      // Redirect to the login page or handle as needed
      return res.redirect('/');
    }
  
    // Render the homepage template (adjust the path and data accordingly)
    res.render('homepage', { name: req.session.name });
  });
  
  app.listen(PORT, () =>
{
    console.log(`Server listening on port http://localhost:${PORT}`);
});