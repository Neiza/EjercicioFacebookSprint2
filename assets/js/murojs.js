
window.addEventListener("load", function(){
  var buttonValidation = addEventListener("click", function(event){
    event.preventDefault();

    function public(){
      var status = document.getElementById('actualStatus');
      var printStatus = document.getElementById('div-status');
      printStatus.innerHTML+=status.value;
    }


  })

})




/*}

function Status(){

  var allStatus += [status: status.value, privacy: document.getElementById('id')]
}*/
