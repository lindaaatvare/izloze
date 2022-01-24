const vardi=['Liene Ozoliņa','Signe Piepe','Jānis Bērziņš','Mārtiņš Beka','Endijs Smilga'];
const balva=['dators','telefons','mašīna','veļasmašīna','trauku mašīna'];
const naudaKopa=1000000;
let uzvaretajuSkaits=5;
for(let i=0;i<5;i++);{
let rand=Math.random()*vardi.length;
rand=Math.floor(rand);//noapalo skaitli uz leju
console.log(vardi[rand]);//izvada konsolē nejauši izvēlētus vārdus
}

