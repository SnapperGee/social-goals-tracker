# Social Goal Tracker

## User Story

```md
AS A person browsing a goal-posting website
I WANT to be able to create an account and log in
SO THAT I can create new posts based on the goals I am trying to achieve
```

## Acceptance Criteria

```md
GIVEN a RESTful API website
WHEN I load the website
THEN I am provided with a polished and responsive UI
WHEN I create an account or log in
THEN authentication will take place (using express-session and cookies)
WHEN I am currently logged in
THEN both GET and POST routes for retrieving and adding new data take place (for creating new posts)
WHEN I wish to delete or edit posts
THEN the page is updated and refreshed with new or removed content
WHEN I click to logout
THEN the current session is terminated, and I am taken back to the login screen
```

## Project Requirements

```md
• Use Node.js and Express.js to create a RESTful API.
• Use Handlebars.js as the templating engine.
• Use MySQL and the Sequelize ORM for the database.
• Have both GET and POST routes for retrieving and adding new data.
• Be deployed using Heroku (with data).
• Use at least one new library, package, or technology that we haven’t discussed.
• Have a polished UI.
• Be responsive.
• Be interactive (i.e., accept and respond to user input).
• Have a folder structure that meets the MVC paradigm.
• Include authentication (express-session and cookies).
• Protect API keys and sensitive information with environment variables.
• Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
• Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
```

![img](./src/main/assets/social-goals-tracker-screenshot-2.png)

## Deployed Heroku Link

[Social Goal Tracker](https://socialgoalstracker-58de32315ddf.herokuapp.com/)

## Technologies Used

1. Prisma
2. Express.js
3. Express-Session
4. Bcrypt
5. Bootstrap
6. Node.js
7. Express-Handlebars
8. TypeScript
9. Eslint
10. Sass

## How to Run

1. Run 'git clone (repo link)' on Git Bash'
2. CD into project directory
3. Run project via code editor (e.g. Visual Studio Code)
4. Run 'npm install' to download all necessary dependencies
5. Run 'npx prisma generate'
6. Run 'npm run build'
7. Run 'npm start'
8. Open localhost:3001 to view running website
