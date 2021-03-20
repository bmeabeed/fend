

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field is valied URL
    let url = document.getElementById('url').value
   if(!Client.validateUrl(url)){
       alert("Invaled Url");
       return;
   }
   document.getElementById('nlpRender').value="loading"
  
   // Fetch NLP json for the given url
   fetch('http://localhost:8080/nlp?url='+url)
    .then(res => res.json())
  .then(function(res) {
    
    
    //render the return NLP json object inside html  TEXTAREA tag nlpRender
    document.getElementById('nlpRender').value= JSON.stringify(res,undefined, 4);
    
   
    
 })

}
export{
    handleSubmit
}


