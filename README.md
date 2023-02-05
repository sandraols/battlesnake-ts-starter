# Preparations before K-weekend

## Repl

Replit is a free browser based hosting and IDE. You will edit your files directly in the browser with their built in IDE.

1. Go to https://replit.com/ and create an account.
2. Click "+ Create" to create a new Repl.
3. Choose "Import from github".
4. Paste "github.com/ola-gawell-dct/battlesnake-ts-starter" as GitHub URL.
5. Choose Typescript from Language.
6. Click "Import from GitHub".
7. Click "Run" to build your project and launch the server. This will takes some time the first time since it needs to install all the npm dependencies. The next time will be much faster. 
8. When you see `Running Battlesnake at http://0.0.0.0:8000...` in the log the server is up and running. A small browser window will show up.
9. Copy the URL from the small browser window and use it in the next section. NOTE: It can somtimes take a while for the first request to the server to repond. The server might go into sleep mode after som inactivity so its good to call your url before the big finals.

## Heroku

By following these instructions your server will be depolyed to Heroku. It is possible to host the server in any way you want as long as it is publicly accessible. The following instructions assumes that you want to use Heroku hosting.

If you don't want to install or use the Heroku CLI it is also possible to integrate Heroku with a Github repo, but that is not covered by this guide (https://devcenter.heroku.com/articles/github-integration).

1. Clone this repo.
2. Install Heroku CLI (might requiere a XCode and MacOS update on Mac) and create a Heroku account.
    https://devcenter.heroku.com/articles/heroku-cli
3. Run `heroku login`.
4. Remove the git directory in this repo `rm -rf .git`.
5. Initialize a fresh git repo `git init`.
6. Commit all files 
    ```
    git add .
    git commit -m "Initial commit"
    ```
7. Create a heroku app `heroku create your-app-name`.
8. Deploy your code `git push heroku main`. 

    **NOTE** if you encounter an error messsge saying something the one below, you're trying to push a branch that doesn't exist.

    ````
    error: src refspec master does not match any  
    error: failed to push some refs to 'https://git.heroku.com/most-super-snake.git'
    ````
    
    Change to the branch your're current using, for instance `master`.
    
9. Verify by browsing to the URL printed by the last command. 
    
    ````
    remote: -----> Launching...
    remote:        Released v3
    remote:        https://most-super-snake.herokuapp.com/ deployed to Heroku <---- THIS ONE 
    ````

# Add your snake to Battlesnake

1. Create a Battlesnake account at https://play.battlesnake.com/.
2. Press "Build a Battlesnake" on the Battlesnake site.
3. Choose "Build from scratch".
4. Choose a name and set the url to your url from last section.
5. Check the "Allow anyone to add this Battlesnake to their game"-box
6. Create a game and add your snake.
7. Run it to verify that it respond to the call from Battlesnake.

## Run tests

Run jest test cases with:
```
npm run test
```

## Play a Game Locally (optional)

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
