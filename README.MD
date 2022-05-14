# EASYKASH API

## Description:

EASYKASH API is an endpoints powered by mysql, Typescript express/nodejs and tested with [jasmine](https://www.npmjs.com/package/jasmine)/[supertest](https://www.npmjs.com/package/supertest), protected with [jwt](https://www.npmjs.com/package/jsonwebtoken), [bcrypt](https://www.npmjs.com/package/bcrypt) and suported by eslint/prittier, it manage/stores orders and products.

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
     CREATE USER 'easycash_user'@'localhost' IDENTIFIED BY 'password';
    ```
    6- Grant  database privileges to easycash_user in both databases.

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
//(should be 5432).
DB_PORT =Number


// this variable indicate wich database the app will work with.
// it should be (test) or (dev).
NODE_ENV =String

SERVER_PORT=number
```

### Ports:

    1- DataBase = 3306
    2- App(server) = 3000

## Run:

### For Test run :

    // for macOs or linux.
    ```
    npm run test:linux
    ```
    // for windows.
    ```
    npm run test:windows
    ```

### For Runing server:

        1- Run:
            // this command will compile typesript to javascript.
            npm run build

        2- Run:
            // this command will start the app from dist directory.
            build:start

       3- Run:
            // will start server with nodemon.
            dev:start

## APIs:

### To send Token:

```
This app use Bearer Token:

1-Add word 'Token' to rquest headers authorization.
2-Add your token ("ABC") following 'Bearer' by one space.

```

### 1- User EndPoints:

```

    # Example
    "GET: http://localhost:3000/transactions?page=1&per_page=10&seller_id=9&date_range=2015to2023 : quiryParasm =  {
                                    page: number,
                                    per_page: number,
                                    seller_id: number,
                                    date_range:DatetoDate
                                    } =>
                                                  {
                                                    data: {
                                                        transactions: [
                                                            {
                                                            id,
                                                            title,
                                                            image,
                                                            price,
                                                            last_updated,
                                                            }
                                                        ],
                                                        paging: {
                                                        total: 20,
                                                        current_page: 1,
                                                        per_page: 10
                                                        }
                                                    };
  }",

```
