const vardi=['Liene Ozoliņa','Signe Piepe','Jānis Bērziņš','Mārtiņš Beka','Endijs Smilga'];
const balva=['dators','telefons','mašīna','veļasmašīna','trauku mašīna'];
const naudaKopa=1000000;
let uzvaretajuSkaits=5;
let rindas=document.querySelector('.rindas');
rindas.innerHTML = '';
for(let i=0;i<5;i++){
let rand=Math.random()*vardi.length;
rand=Math.floor(rand);//noapalo skaitli uz leju


let uzvaretajs=vardi[rand];//izvada konsolē
let ieguvums=balva[rand];
rindas.innerHTML +=`
<tr> 
    <td>${i+1}</td>
    <td>${uzvaretajs}</td>
    <td>${ieguvums}</td>
</tr>`
}

