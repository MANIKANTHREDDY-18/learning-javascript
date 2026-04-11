const userdata=[];
const addtask =(event) =>{
    event.preventDefault()
    let userinput =event.target.userinput
    let display=document.getElementById("display")
    userdata.push(userinput.value)
    display.innerHTML=""
    for(let i=0;i<userdata.length;i++)
    {
        
    display.innerHTML+="<li> "+userdata[i]+"</li>";
    display.style.color="red";
}
userinput.value=""
}