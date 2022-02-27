inputs=document.querySelectorAll("input");
forme=document.querySelector("#louay");
bouton=inputs[inputs.length-1];
bouton.addEventListener("click",function(e){
    e.preventDefault();
    bouton.style["backgroundColor"]="lightskyblue";
    console.log(inputs[0].value+":"+inputs[1].value);
    forme.innerHTML+=`<input type="text" value="${inputs[0].value}:${inputs[1].value}"></br>`;
    setTimeout(function () {
        bouton.style.backgroundColor="dodgerblue";
    },100)
})