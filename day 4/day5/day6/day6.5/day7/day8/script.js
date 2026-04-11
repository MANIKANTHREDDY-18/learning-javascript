changeImage= async()=>{
let imagelink =null;
let display = document.getElementById("display")
try{
    let res= await fetch("https://dog.ceo/api/breeds/image/random")
    let data =await res.json()
    imagelink=data.message;

}catch (err){
    console.log(err);
}
display.style.backgroundImage=`url(${imagelink})`
}
changeImage()
//free-apis.github.io
//poki api