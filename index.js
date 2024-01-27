//entrypoint

//import json server

const jsonServer = require('json-server')


// create the server

const mediaPlayerServer = jsonServer.create()

//create pathh
const router = jsonServer.router('db.json')

//convert js to json comunication
middleWare = jsonServer.defaults();

//connect

mediaPlayerServer.use(middleWare)
mediaPlayerServer.use(router)

//setup port for server

const port = 4000 || process.env.port

mediaPlayerServer.listen(port, () => {
    console.log(`mediapalyer is listening ${port} & waiting for the request`);
})