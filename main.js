const dis=document.getElementById('dis')


function appendToDis(input){
    dis.value +=input;
}
function cleardisplay(){
    dis.value ='';
}
function calculate(){
    try{
    dis.value = eval(dis.value)

}catch(error){
    dis.value = 'error';
}

}