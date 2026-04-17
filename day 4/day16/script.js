// const add = () => {
//     event.preventDefault()
//     let val1 = Number(document.getElementById("value1").value)
//     let val2 = Number( document.getElementById("value2").value)
    
//     let display = document.getElementById("display")
//     //display.innerHTML = val1 + val2
//      display.innerHTML = `the sum  of ${val1}  and ${val2} is ${(val1 + val2)}`
// }   
// const subtract = () => {
//     event.preventDefault()

//     let val1 = Number(document.getElementById("value1").value)
//     let val2 = Number(document.getElementById("value2").value)

//     let display = document.getElementById("display")
//     display.innerHTML = `The subtraction of ${val1} and ${val2} is ${val1 - val2}`
// }
// const multiply = () => {
//     event.preventDefault()

//     let val1 = Number(document.getElementById("value1").value)
//     let val2 = Number(document.getElementById("value2").value)

//     let display = document.getElementById("display")
//     display.innerHTML = `The multiplication of ${val1} and ${val2} is ${val1 * val2}`
// }
const changeColor = () =>{
        let display = document.getElementById("display")
            let colorcode =[1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
            let color = "#"
            for(let i=0;i<6;i++)
            {
            let rand=Math.floor(Math.random()*16)
            color+=colorcode[rand];
            }
                display.style.backgroundColor =color
}
changeColor()