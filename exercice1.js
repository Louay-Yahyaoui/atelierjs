level=prompt("specifier le niveau \n0 pour facile\n1pour moyen\n2 pour difficile");
if((level>=0)&&(level<3))
{
    tries=5-level*2;
    for(let i=tries;i>0;i--)
    {
        chiffre=Math.floor(Math.random()*11);
        essai=prompt("donner un entier entre 0 et 10");
        if((essai>10)||(essai<0))
            alert(`essai invalide.Vous avez ${i-1} essais restants.`);
        else
        {
            if(essai==chiffre)
            {
                alert("Bravo");
                break;
            }
            else
                alert(`Le nombre est ${chiffre}.Vous avez ${i-1} essais restants.`);
        }
    }
}
else
    alert("difficulte incorrecte");
