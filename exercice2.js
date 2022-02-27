textecolore=document.querySelector(".couleur");
textecolore.addEventListener("input",function (){
    textecolore.style.backgroundColor=textecolore.value.toString();
});
nb=document.querySelector(".nombre");
nb.addEventListener("change",function (){nb.style.fontSize=`${1+(nb.value)/100}em`;});
selection=document.querySelector(".selection");
selection.addEventListener("change",function (){
selection.style.fontFamily=selection.value.toString();})
