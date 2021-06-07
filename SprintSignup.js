function signup(){

let form = document.getElementById('form')



let name = form.name.value
let email = form.email.value
let number = form.number.value
let password = form.password.value



if(name == "" || number == "" || email == "" || password == ""){
    alert("invald info")
} else{


let user = {
    name,
    email,
    number,
    password
}




let arr;

arr = localStorage.getItem('user')

if(arr == null){
    arr =[]
} else {
    arr = JSON.parse(arr)
}

arr.push(user)
localStorage.setItem('user',JSON.stringify(arr))

}

}

