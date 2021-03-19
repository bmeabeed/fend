

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
   if(!Client.validateUrl(formText)){
       alert("Invaled Url");
       return;
   }
  
  

   fetch('http://localhost:8080/nlp?url='+formText)
    .then(res => res.json())
  .then(function(res) {
    //const apiResponse = await apiCall.json();

    
    document.getElementById('myTextarea').value= JSON.stringify(res,undefined, 4);
   /*document.getElementById('results').innerHTML = `<table>
   <tr><td>Sentiment</td><td>Result</td></tr>
   <tr><td>Agreement:</td><td>${res.agreement.toLowerCase()}</td></tr>
   <tr><td>Subjectivity:</td><td>${res.subjectivity.toLowerCase()}</td></tr>
   <tr><td>Confidence:</td><td>${res.confidence}</td></tr>
   <tr><td>Irony:</td><td>${res.irony.toLowerCase()}</td></tr>
   </table>`;
   // JSON.stringify(res);*/
 })

}
export{
    handleSubmit
}


