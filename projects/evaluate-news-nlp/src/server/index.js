var path = require('path')
const express = require('express')
const API_URL = 'https://api.meaningcloud.com/sentiment-2.1?lang=en&key=61578c586e3237a75686637a9b14e196'
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios');


const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    
})

app.use(express.urlencoded({
    extended: true
  }))
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/nlp', async (req, res) => {
   
    let api_url=API_URL+"&url="+req.query.url
    console.log(api_url)

   

    try{
        const apiResponse = await axios.get(api_url)
       res.send(apiResponse.data)
    }
    catch(e){
        console.log(e)
    }
      
      

    //res.send(body)

   
      

   


}


)
/*pp.get('/nlp', function (req, res) {
    console.log(req.params.get("url"))
    fetch(API_URL+"&url="+req.params.get("url"))
    .then(res => res.json())
    .then(function(res) {
        res.send("xxx");
    })
    
})*/


