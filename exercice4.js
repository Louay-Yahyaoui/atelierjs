const ol=document.querySelectorAll("li");
function randomcolor()
{
    let x=Math.floor(Math.random()*Math.pow(16,8));
    couleur='#'+x.toString(16);
    return couleur;

}
ol.forEach(element=>{
    element.addEventListener("click",function (){
        couleur=randomcolor();
        element.style.color=couleur;
    })
})