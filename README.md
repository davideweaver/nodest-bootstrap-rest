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

| HTTP METHOD | Path | Expectation |
| --- | --- | --- |
| GET | /contacts | Returns all Contacts |
| GET | /contacts/{id} | Returns single Contact with Id = {id} |
| POST | /contacts | Adds Contact using JSON body |
| PUT | /contacts/{id} | Updates Contact using JSON body for Contact with Id = {id} |
| DELETE | /contacts/{id} | Deletes Contact with Id = {id} |

