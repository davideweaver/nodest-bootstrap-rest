# nodest-bootstrap-rest
Bootstrap project for a Nodest REST API app

## Use it
Clone project locally, then

```
npm install
npm start
```

Point your REST test client at http://localhost:3002/contacts

Handles common HTTP methods:

| HTTP METHOD | With Id | Expectation |
| --- | --- | --- |
| GET | No | Returns all Contacts |
| GET | Yes | Returns single Contact with Id |
| POST | No | Adds Contact using JSON body |
| PUT | Yes | Updates Contact using JSON body for Contact with Id |
| DELETE | Yes | Deletes Contact with Id |

