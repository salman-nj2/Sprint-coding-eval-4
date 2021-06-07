function login(){



var data = JSON.parse(localStorage.getItem('user'))


let email = form.email.value

let password = form.password.value
var k = true
for(var i =0;i<data.length;i++){
    if(data[i].email == email && data[i].password == password){
        k = false
        window.location.href = "./SprintMenu.html"
        break
    }

}

if(k){
    alert('Invalid Credential')
}

}