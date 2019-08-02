const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 5001

const app = next({ dev, dir: './client/' })
const handle = app.getRequestHandler()

//Start the app
app.prepare()

//Start Express server and serve the 
.then(() => {
  const server = express()
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`Listening on port http://localhost:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
