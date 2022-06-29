let MynextBtn = document.querySelector("#Next")

axios.get("https://api.adviceslip.com/advice")
.then((response)=>{
    console.log(response.data)
    console.log(response.data.slip)
    console.log(response.data.slip.id)
    console.log(response.data.slip.advice)
    document.getElementById("no").innerHTML = `A D V I C E #${response.data.slip.id}`
    document.getElementById("advice").innerHTML = `"${response.data.slip.advice}"`
})

MynextBtn.addEventListener("click", ()=> {
    window.location.reload()
})

// function timi(){
//     document.getElementById("")
// }

