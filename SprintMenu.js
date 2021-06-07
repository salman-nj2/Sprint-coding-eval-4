let food = [{

    image : 'https://b.zmtcdn.com/data/pictures/chains/2/18975712/a9b60c7cf2a59d29f0ae334e18ad9b5f_o2_featured_v2.jpg?output-format=webp',
    name : 'Veg Mexican Pizza',
    price : 100,
    description : 'Loaded with Cheese and spicy dip with the freshness of capsicum, red paprika',
    time : '1hr'

},{

    image : 'https://b.zmtcdn.com/data/pictures/4/18974314/cb6e2e8747fe6fa947ce739338a7b519_o2_featured_v2.jpg',
    name : 'Masala Dosa',
    price : 50,
    description : 'Masala dosa is crispy rice & lentil crepes that are stuffed with a spiced potato filling',
    time : '35mins'

},{image : 'https://b.zmtcdn.com/data/pictures/0/18973930/8f7c806069c36222f3df3a45b0e8ae52_o2_featured_v2.jpg?output-format=webp',
name : 'Paneer Butter Masala',
price : 250,
description : 'Paneer Tikka is packed with flavor. Pan-fried golden brown pieces of paneer are bathed in a rich tomato sauce.',
time : '1hr'},
{image : 'https://b.zmtcdn.com/data/pictures/8/19060548/9babb009aa28a1cc6106834eab5273b2_o2_featured_v2.jpeg?output-format=webp',
name : 'Hyderabadi Chicken Biryani',
price : 80,
description : 'Authentic aromatic biryani with succulent chicken cooked with mint and whole garam masala in layers with dum cooked fluffy basmati rice',
time : '1.5hr'},
{image : 'https://b.zmtcdn.com/data/pictures/5/19418665/dc8d503b88e5f8e49d3ef5c1ed416f57_o2_featured_v2.jpg?output-format=webp',
name : 'Dal Tadka + 4 Tandoori Roti + Jeera Rice [Half] + Roasted Papad',
price : 240,
description : 'Dal Tadka+4 Tandoori Roti+Jeera Rice [Half]+Roasted Papad',
time : '95mins'},
{image : 'https://b.zmtcdn.com/data/pictures/2/18979992/840360540efe44e705e230f584d0e301_o2_featured_v2.jpg?output-format=webp',
name : 'Paneer Tikka',
price : 190,
description : 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor.',
time : '30mins'},
{image : 'https://b.zmtcdn.com/data/pictures/8/19147078/dc73146b971eb58a6c24f349e88954a5_o2_featured_v2.jpg?output-format=webp',
name : 'Peri Peri Cheese Grilled Sandwich',
price : 89,
description : 'A toasted sandwich made with peri peri sauce. And served with chutneys',
time : '50mins'},
{image : 'https://b.zmtcdn.com/data/pictures/9/18974519/173233ec867f5ef1a580f1430e8ce4eb_o2_featured_v2.jpg?output-format=webp',
name : 'Choco Truffle Cake',
price : 700,
description : 'Chocolate sponge layered with a delightful combination of chocolate truffle and chocolate cream. Eggless cake',
time : '1.3hr'},
{image : 'https://b.zmtcdn.com/data/pictures/9/19231469/d7af4e48a7114873e6a598c41de94d48_o2_featured_v2.jpg',
name : 'Kaju Katli',
price : 290,
description : 'Kaju katli, also known as kaju barfi, is an Indian dessert similar to a barfi. Kaju means cashew; Barfi is often, but not always, made by thickening milk with sugar and other ingredients. Kesar kaju katli is a kaju katli recipe that includes saffron',
time : '1.2hr'}]

console.log(food)

if(localStorage.getItem("food") == null){
    localStorage.setItem("food",JSON.stringify(food))
}

function foodItem(){

var parent = document.getElementById('menu')
parent.innerText = ""

var data = JSON.parse(localStorage.getItem('food'))

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

    var btn = document.createElement('button')
    btn.innerText = "Add to Cart"
    btn.style.display = "block"
        btn.onclick = function(){
            addCart(element)
        }

    div.append(img,f_name,f_price,f_des,f_time,btn)
    parent.append(div)

});

}
foodItem()


function addCart(element){



let favarr;
let arr;    
favarr = localStorage.getItem('cart')

if(favarr == null){
    arr =[]
} else{
    arr = JSON.parse(favarr)
}   

arr.push(element)
console.log(arr)
localStorage.setItem('cart',JSON.stringify(arr))

}

function showCart(){

    window.location.href = "./Sprintcart.html"
}




