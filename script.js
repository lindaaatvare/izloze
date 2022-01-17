const vardi=['Liene Ozoliņa','Signe Piepe','Jānis Bērziņš','Mārtiņš Beka','Endijs Smilga'];
const balva=['dators','telefons','mašīna','veļasmašīna','trauku mašīna'];
const naudaKopa=1000000;
let uzvaretajuSkaits=5;
let rand=Math.random()*10;
rand=Math.floor(rand);//noapalo skaitli uz leju
console.log(vardi[rand]);//izvada konsolē nejauši izvēlētus vārdus
