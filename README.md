# roller-derby-caen
Try to do an app for the roller derby local team

## ports for docker compose

### frontoffice
Angular Frontoffice
`localhost:4200`

### backoffice
Ionic Backoffice (in case of creating an app for the skaters)
`localhost:8100`


### api
API with NestJs (fun time)
`localhost:3000`

## CHANGE FOR DOCKER

- add port and address in package.json `"start": "ng serve --host=0.0.0.0 --port numport",`
- add proxyconf, but not working yet