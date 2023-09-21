# Express-Sequelize backend server template

### To get started:

- Clone this repo: `git clone https://gitlab.com/20kaushik02/express-sequelize-backend-template`
- Reset the git remote repo URL: `git remote rm origin`
- Set new git remote URL: `git remote add origin https://gitlab.com/20kaushik02/new-repo-name`
- Remove the template environment files from git alone: `git rm -r --cached *.env*`

### Project setup:

- Edit `package.json` to reflect the new name and URLs
- Edit `README.md` to reflect project details
- Run `npm i` to install all dependencies
- Before running `sequelize-cli` commands while developing, make sure to set `$env:NODE_ENV='development'` on Windows, or `NODE_ENV=development` on Linux/MacOS
- Env config:
  - **.env** - All things common to all environments (port, etc.)
  - **.env.development** - Development environment (dev captcha secret, mailer creds, JWT secret, dev DB details, dev admin data access creds)
  - **.env.staging** - Staging environment (dev captcha secret, mailer creds, JWT secret, staging DB conn. string, staging admin data access creds) - **for sysadmins**
  - **.env.production** - Production environment (production captcha secret, mailer creds, JWT secret, prod DB conn. string, production admin data access creds) - **for sysadmins**
- Staging: `npm run staging_prep` and `npm run staging` to deploy on Render after configuring a new web service on Render dashboard
