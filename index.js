const wrapper= document.querySelector(".sliderWrapper");
const menuItems= document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Plain T-Shirt",
        price: 7.99,
        colors:[
            {
                code:"black",
                img:"./images/black tshirt.jpeg",
            },
            {
                code:"blue",
                img:"./images/blue tshirt.jpeg",  
            },
        ],
            
    },
    {
        id: 2,
        title: "Mug",
        price: 4.50,
        colors:[
            {
                code:"black",
                img:"./images/black mug.jpeg",
            },
            {
                code:"white",
                img:"./images/white mug.jpeg",  
            },
        ],
    },
    {
        id: 3,
        title: "Lunchbox",
        price: 3.99,
        colors:[
            {
                code:"green",
                img:"./images/green lunchbox.jpeg",
            },
            {
                code:"black",
                img:"./images/black lunchbox.jpeg",  
            },
        ],
    },
    {
        id: 4,
        title: "Hoodie",
        price: 15.25,
        colors:[
            {
                code:"black",
                img:"./images/plain hoodie.jpeg",
            },
            {
                code:"gray",
                img:"./images/gray hoodie.jpeg",  
            },
        ],
    },
    {
        id: 4,
        title: "Water Bottle",
        price: 4.99,
        colors:[
            {
                code:"green",
                img:"./images/water bottle.jpeg",
            },
            {
                code:"blue",
                img:"./images/blue water bottle.jpeg",  
            },
        ],
    },
];

let chosenProduct = products[0];

const currentProductImg= document.querySelector(".productImg");
const currentProductTitle= document.querySelector(".productTitle");
const currentProductPrice= document.querySelector(".productPrice");
const currentProductColors= document.querySelectorAll(".color");
const currentProductSizes= document.querySelectorAll(".size");

menuItems.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide 
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

        //change the chosen product
        chosenProduct= products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        //assign new colors
        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index)=> {
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white";
    });
});


const productButton= document.querySelector(".productButton");
const payment= document.querySelector(".payment");
const close= document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display="flex";
});

close.addEventListener("click", ()=>{
    payment.style.display="none";
});