# Atlavik Task

## Table of Contents

1. [Purpose](#purpose)
2. [Requirements](#requirements)
3. [Getting Started](#getting-started)
4. [Application Structure](#application-structure)
5. [Client Application Structure](#client-application-structure)
6. [Server Application Structure](#server-application-structure)
7. [SERVICE GET ALL ENTRY LIST APIS](#service-get-entry-apis)
8. [SERVICE GET ENTRY LIST APIS WITH SEARCH PARAMS](#service-get-list-entry-apis-with-params)


## Purpose

It is a task to develop a full stack web application for record searching and sorting.

## Requirements

- node
- npm

## Getting Started

To get Started please follow the below Requirements
[requirements](#requirements), you can follow these steps to get the project up and running:

```window
$ git clone ""
$ npm run install:all                   # Install project for both client and server project dependencies
$ npm run start                         # Compile and launch
$ npm run client:test                   # Run client test cases
$ npm run server:test                   # Run server test cases
```

## Application Structure

```

├── client                  # Main module which contains all front end code
├── server                  # Main module which contains all back end code
```
## Client Application Structure
```
├── public                  # Main module which contains all html,css and javascript files
├── src                     # Main module which contains all the React/Redux implimentation with routing

```
## Server Application Structure
```
├── components               # Main module containing the main logics
├── routes                   # Application Routing
├── test                     # Main module which contains all test cases
├── utils                    # Application level utility methods/logics
├── validation               # Validation of the request
```


## SERVICE GET ALL ENTRY LIST APIS

- Method: `GET`

- **::** <http://localhost:3000/publicApi/entries/getData>

- URL: `/publicApi/entries/getData`



Response Json body for get all Entry APIS (Example):

```json
{
	"status": "SUCCESS",
	"errorMsg": null,
	"statusCode": 200,
	"data": {
		"count": 603,
		"entries": [{
			"API": "Cat Facts",
			"Description": "Daily cat facts",
			"Auth": "",
			"HTTPS": true,
			"Cors": "no",
			"Link": "https://alexwohlbruck.github.io/cat-facts/",
			"Category": "Animals"
		}]
	}
}

```
Response Json body for error scenario (Example):

```json
{
    "statusCode": 500,
    "responseCode": "FAILED",
    "errorMsg": {
        "message": "INTERNAL SERVER ERROR",
    },
    "data": ""
}
```


## SERVICE GET ENTRY LIST APIS WITH SEARCH PARAMS

- Method: `GET`

- URL: `/publicApi/entries/getData?category=animals`

| Parameter  | Description             | Param Type| Required  |
|------------|-------------------------|-----------|-----------|
| category   | category                | Query      |  No      |

- Response Json (Example):

  ```json
  {
	"status": "SUCCESS",
	"errorMsg": null,
	"statusCode": 200,
    "data":  {
		"count": 603,
		"entries": [{
			"API": "Cat Facts",
			"Description": "Daily cat facts",
			"Auth": "",
			"HTTPS": true,
			"Cors": "no",
			"Link": "https://alexwohlbruck.github.io/cat-facts/",
			"Category": "Animals"
		}]
	}
  }
  ```

## Get requests API Exceptions

Error code |                         Error Message
---------- | :-----------------------------------------------------------:
400        |                    Invalid Input
401        |                    Unauthorized
403        |                    User is not authorized to access this resource with an explicit deny
500        |                    FAILED



# Tables
No tables are required
