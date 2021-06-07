function showCart() {


    var data = JSON.parse(localStorage.getItem('cart'))
    var parent = document.getElementById('cart')
    
    data.forEach(element => {
        
        var div = document.createElement("div")
        var img = document.createElement('img')
        img.src = element.image
    
        var f_name = document.createElement('p')
        f_name.innerText = element.name
    
        var f_price = document.createElement('p')
        f_price.innerText = element.price
    
        var f_des = document.createElement('p')
        f_des.innerText = element.description
    
        var f_time = document.createElement('p')
        f_time.innerText = element.time
    
    
        div.append(img,f_name,f_price,f_des,f_time)
        parent.append(div)
    
    });
    
    
    }
    showCart()




    
    function submit(){

        const arr = ["Your order is accepted","Your order is being cooked","Your order is ready","Order out for delivery","Order delivered"]
    
        let i = 0
        setInterval(function(){
            if(i == arr.length){
                i = 0
            }
            alert(arr[i])
            i++
        },4000)
    }
