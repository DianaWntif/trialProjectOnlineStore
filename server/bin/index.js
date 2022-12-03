//server
const exp = require('express')
const app = exp()

const path = require('path')

const port = 3555
const main_catalog_pref = '../../'

app.listen(port, ()=>{
   console.log(`Server listening on ${port} port`)
})

app.get('/', (req, res) => {
    //res.send('Hello World')

    res.sendFile(path.join(__dirname, main_catalog_pref+'public/index.html'))
    //res
})