var path = require('path')
const express = require('express')
//Meaning Cloud Api key 
const MAPI_KEY='61578c586e3237a75686637a9b14e196'

//genert get url for meaning cloud API
const API_URL = 'https://api.meaningcloud.com/sentiment-2.1?lang=en&key='+MAPI_KEY

//package used to call api
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

//Handel get request to evaluate NLP for gaven url
app.get('/nlp', async (req, res) => {
   
    //Generate the meaning cloud calling api url
    let api_url=API_URL+"&url="+req.query.url
     

    try{
        //Call meaning cloud service
        const apiResponse = await axios.get(api_url)
        //send the response to the  clint
       res.send(apiResponse.data)
    }
    catch(e){
        console.log(e)
    }
      
      

   

   
      

   


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


