
window.addEventListener("load", function(){
  var postButton = document.getElementById("post")
  postButton.disabled=true;

  var status = document.getElementById('actualStatus');
  status.addEventListener("click",function(){
  postButton.disabled=false;
  })


  postButton.addEventListener("click", function(event){
    event.preventDefault();
    //  var status = document.getElementById('actualStatus');
    /*  printStatus.innerHTML+=status.value+"<br>";
      status.value="";*/
  function createPost(){
    var post = document.createElement("div");
    var texto= document.createElement("p");
    var buttonsContainer = document.createElement("div");
    var deleteButton = document.createElement("button");
    var editButton = document.createElement("button");

    texto.innerHTML=document.getElementById('actualStatus').value
    document.getElementById('actualStatus').value="";

    post.appendChild(texto);
    buttonsContainer.appendChild(deleteButton);
    buttonsContainer.appendChild(editButton);
    divStatus.appendChild(post);
    divStatus.appendChild(buttonsContainer);
    deleteButton.innerHTML="Delete";
    editButton.innerHTML="Edit";

  }
    createPost();

    var deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", function(event){
      event.preventDefault();
    function delete(){
      alert("seeeee")
    }
  })
  })

})
//  status.value !=="" ? postButton.disabled=false :"";
 //status.value="";

//postButton.disabled=false &&  printStatus.innerHTML+=(status.value+"<br>")

/*}

function Status(){

  var allStatus += [status: status.value, privacy: document.getElementById('id')]
}*/
