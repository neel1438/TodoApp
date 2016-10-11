# TodoApp
Todo App with React and Horizon.io

# Prerequisites

You need rethinkdb before you can run this app
[installation guide](https://www.rethinkdb.com/docs/install/)
```sh
  brew update && brew install rethinkdb
  npm install -g horizon
```

# Installation

```sh
    git clone <PROJECT_URL>
    cd <PROJECT_URL>
    npm install # to install all dependencies
```
## For https
For github authentication  work to work we need https server so we need to get key and certificate.

for that we use horizon itself, in project folder.

```sh
hz create-cert
```
this creates key and certificate.The path has to be configured in `.hz/config.toml`. probably already configured.
## DB setup
To import these rules to our new database, first you have to start it (in another terminal and, preferably, in another directory) with:
```sh
rethinkdb
```
And then, execute this command from the root directory of the application:
```sh
hz schema apply -n todoApp -c localhost:28015 schema.toml
```

# Finally run it.
```sh
npm start
```

the site is available in [localhost:3000](https://localhost:3000)
