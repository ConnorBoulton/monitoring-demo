const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar({
    accessToken: '4ab194e1f341492ab8bd1eabdef1f90f',
    captureUncaught: true,
    captureUnhandledRejections: true
})



const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file great success')
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Running on ${port}`))