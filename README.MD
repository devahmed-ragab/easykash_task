# EASYKASH API

## Description:

EASYKASH API is an endpoints powered by mysql, Typescript express/nodejs and tested with [jasmine](https://www.npmjs.com/package/jasmine)/[supertest](https://www.npmjs.com/package/supertest),and suported by eslint/prittier.

## Installation

### Database:

    1- Install mysql.
    2- Open Terminal and login as mysql superuser
    ```
    mysql -u root -p
    ```
    3- Create databse for Development.
    ```
    CREATE DATABASE easy_cash_db;
    ```
    4- Create database for testing.
     ```
    CREATE DATABASE easy_cash_db_test;
    ```
    5- Create user.
    ```
    #You can use root user and skip 5 and 6

     CREATE USER 'easycash_user'@'localhost' IDENTIFIED BY 'password';
    ```
    6- Grant database privileges to easycash_user for both databases.

### App:

1- Clone Repository.

```
git clone https://github.com/Ahmed121221/easykash.git
```

2- Use [npm](https://www.npmjs.com) to install dependencies.

```
npm i
```

3- Create [.env](https://github.com/motdotla/dotenv) file to store environment variables
as the following names and data types(after equal operator):

```
// database name for developing.
// (ex:store).
EASY_CASH_DB_NAME =String

// database name for testing.
// (ex:store_test).
EASY_CASH_DB_NAME_TEST =string

// mysql user: username and password
// (USERNAME.ex: easycash_user'@'localhost)
// (PASSWORD.ex: password)
EASY_CASH_DB_USER =String
EASY_CASH_DB_PASSWORD =String

// your host domain
// (ex: localhost).
HOST =String

// database port
DB_PORT =Number


// this variable indicate which database the app will work with.
// it should be test or dev.
NODE_ENV =String

SERVER_PORT=number
```

### Ports:

    1- DataBase = 3306
    2- App(server) = 3000

## Run:

### 1- Test:

Test commands change NODE_ENV to 'test' which's change Database.

#### for macOs or linux.

    npm run test:linux

#### for windows.

    npm run test:windows

### 2- Server:

#### Build:

this command will format, lint and compile typesript to javascript into /dist directory.

    npm run build

#### Start:

this command will start the app from dist directory.

    npm run build:start

       3- Run:
            // will start server with nodemon.
            dev:start

## APIs:

### To send Token:

This app use Bearer Token:

```
1-Add word 'Token' to rquest headers authorization.

2-Add your token("ABC") following 'Token' by one space.

Example:
    Token ABC

```

### 1- Transactions:

Return transaction listing for the logged in seller.

```
GET:
localhost:3000/transactions?page=1&per_page=10&seller_id=9&date_range=2015to2023
: quiryParasm: {
page: number,
per_page: number,
seller_id: number,
date_range:DatetoDate
} => {
    data: {
        transactions: [{
            id:Number,
            title:String,
            image:String,
            price:Numper,
            last_updated:Date
            }],
        paging: {
            total: 20,
            current_page: 1,
            per_page: 10
              }
        };
}
```

### 2- Seller:

Enable a system admin to view the sales summary for sellers' incomes

```
GET:
localhost:3000/sellers/transactions-summary?seller_id=1&date_range=2012-10-5to2022-5-4
: quiryParasm: {
    seller_id: number,
    date_range: type Duration {`${Number | String}to${Number | String}`}
}=> {
     data: {
          days: [
              {
              date: Date,
              total_income: Number,
              seller_name: String,
              seller_id: Number
              }
          ]
      }
}

```
