// const myFun = () => {
//     console.log("hello sir");
// }
// const changetext =() =>{
//     let display = document.getElementById("hiii")
//     display.innerHTML="<h1>Hello sir </p>"
//     display.style.color ="blue"
    
// }
// const validateForm =(event)=>{
//     event.preventDefault()
// }
//userinput
//array.push()
//array-print like list
const userdata=[];
const addtask =(event) =.{
    event.preventDefault()
    let userinput =event.target.userinput
    let display=document.getElementById("display")
    userdata.push(userinput.value)
    display.innerHTML=userdata
}