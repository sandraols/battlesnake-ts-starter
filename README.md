# Instructions

1. Clone this repo.
2. Install Heroku CLI and create a Heroku account.
3. Run `heroku login`.
4. Remove the git directory in this repo `rm -rf .git`.
5. Initialize a fresh git repo `git init`.
6. Commit all files 
```
git add .
git commit -m "Initial commit"
```
7. Create a heroku app `heroku create your-app-name`.
8. Deploy your code `git push heroku master`. # can also be main instead of master
9. Verify by browsing to the url printed by the last command.
10. Create a Battlesnake account.
11. Add a Battlesnake and point it to your url in step 9.
12. Create a game and add your snake.
13. Run it to verify that it respond to the call from Battlesnake.



## Play a Game Locally

Install dependencies using npm

```sh
npm install
```

Start your Battlesnake

```sh
npm run start
```

You should see the following output once it is running

```sh
Running Battlesnake at http://0.0.0.0:8000
```

Open [localhost:8000](http://localhost:8000) in your browser and you should see

```json
{"apiversion":"1","author":"","color":"#888888","head":"default","tail":"default"}
```

Install the [Battlesnake CLI](https://github.com/BattlesnakeOfficial/rules/tree/main/cli)
* You can [download compiled binaries here](https://github.com/BattlesnakeOfficial/rules/releases)
* or [install as a go package](https://github.com/BattlesnakeOfficial/rules/tree/main/cli#installation) (requires Go 1.18 or higher)

Command to run a local game

```sh
battlesnake play -W 11 -H 11 --name 'TypeScript Starter Project' --url http://localhost:8000 -g solo --browser
```

## Links
[Battlesnake Quickstart Guide](https://docs.battlesnake.com/quickstart)
[Battlesnake API Docs](https://docs.battlesnake.com/api)
