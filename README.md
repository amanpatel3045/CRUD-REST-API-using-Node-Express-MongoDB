# CRUD-REST-API-using-Node-Express-MongoDB
CRUD APP where you can create using post http method, update using patch method, delete using delete method (remove())

```
http://localhost:9000/aliens
```

# Step-1

## type npm init in terminal for package.json

```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.
```
# Step -2

## Press Enter

## package name: (crud-rest-api-using-node)
```
version: (1.0.0)
description:
entry point: (index.js) app.js
test command:
git repository:
keywords:
author: aman
license: (ISC)
About to write to C:\Users\Admin\Desktop\CRUD REST API using Node\package.json:

{
  "name": "crud-rest-api-using-node",
  "version": "1.0.0",
  "description": "```\r This utility will walk you through creating a package.json file.\r It only covers the most common items, and tries to guess sensible defaults.",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "aman",
  "license": "ISC"
}


Is this OK? (yes)

C:\Users\Admin\Desktop\CRUD REST API using Node>
```

# Step - 3

## do npm i express

## or npm install express

## we got a dependencies express

# Step - 4

## npm install mongodb

# Step - 5

## npm install mongoose

# Step - 6



## install nodemon
## for restarting the server automatically whenever we do changes in code and save it
## so that we don't need to start the server again and again

## type npm install nodemon

## but it will install in dependencies
## but we don't want to install in dependencies because jb hm project ko deploy krenge toh saari dependencies production server me jate hai
## server me all dependencies download ho jayengi
## but hm nodemon ko nhi bhejna chahte production server pe because iski need only development ke time hai

## TO OVERCOME THIS PROBLEM
## nodemon ko different dependencies me install krenge
## so type 
# npm install nodemon --save-dev
## dev means development environment

## NOW NODEMON INSTALLED IN SEPARATE DEPENDENCIES
## THAT IS => 

```
 "devDependencies": {
    "nodemon": "^2.0.20"
  }
  ```
# Step - 7

## package.json me scripts me "start": "nodemon app.js" likho

## Earlier
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```

  ## After editing scripts

   ```
   "scripts": {
    "start": "nodemon app.js"
  },
  ```
  # Last Step 

  ## create app.js and do coding in it


  

  # Operations 

  ```
  GET : http://localhost:9000/aliens
  GET : http://localhost:9000/aliens/<id>
  POST : http://localhost:9000/aliens
  PATCH : http://localhost:9000/aliens/<id>

  ```









