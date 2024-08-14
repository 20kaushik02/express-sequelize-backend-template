# Express-Sequelize backend server template

## To get started

- Clone this repo: `git clone https://github.com/20kaushik02/express-sequelize-backend-template`
- Reset the git remote repo URL: `git remote rm origin`
- Set new git remote URL: `git remote add origin https://github.com/20kaushik02/<<new-repo-name>>`
- Remove the template environment files from git alone: `git rm -r --cached *.env*`

## Project setup

- Edit `package.json` to reflect the new name and URLs
- Edit `README.md` to reflect project details
- Run `npm i` to install all dependencies
- Before running `sequelize-cli` commands while developing, make sure to set `$env:NODE_ENV='development'` on Windows, or `NODE_ENV=development` on Linux/MacOS
- [See here](https://github.com/kerimdzhanov/dotenv-flow?tab=readme-ov-file#files-under-version-control) for best practices for .env files configuration
- Staging: `npm run staging_prep` and `npm run staging` to deploy on Render after configuring a new web service on Render dashboard
