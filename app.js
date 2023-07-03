const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000

const swaggerjsdoc = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter)


//SWAGGER
const swagerConfig = swaggerjsdoc({
  definition: {
    openapi : '3.0.0',
    info: {
      title: 'Player API Documentation',
      description:'Dokumentasi ini berhubungan dengan API untuk Data Player',
      version:'0.5.0',
      contact: {
        email: 's.a.cakrayudha@gmail.com',
        name: 'Soman'
      }
    },
    servers : [
      {
        url : 'http://localhost:4000',
        description: 'Local Server'
      }
    ]
  },
  apis: ['./server/routes/*.js']
})

app.use('/docs', swaggerui.serve, swaggerui.setup(swagerConfig))

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})