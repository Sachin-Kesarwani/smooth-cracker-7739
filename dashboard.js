  
  let div=document.createElement("div")  
  let body=document.querySelector("body")
  function gif(){
    let div=document.createElement("div")  
    div.setAttribute("id","gif")
       let image=document.createElement("img")
       image.src="file:///C:/Users/sachi/Downloads/Untitled%20design.gif"
       body.addEventListener("click",function(){
        div.remove()
       })
       image.addEventListener("click",function(){
        div.remove()
       })
       div.append(image)
       body.append(div)
      
  }
  gif()
 

  let slideArr=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXCpiYKfm11YUjU715AE4xto0XO6fzBiL8Q&usqp=CAU",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJCoP24Rx_qV4cMEGVbMXBYk4o3E9btmUbg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEn4ey6b7A6GSVBTddkATLh891SB2YB-e0mg&usqp=CAU",
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAY0KszZ1jDKSVvCH2r2K6LW3mWBxaRtQqPMxYv3KiYsVtpXvkHOm1TPM",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SwX529LOk8gikjlCqVSFJ5taynRirQh0qA&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVDIzGKU90PmkqBf5mDksiW5QXcGrkC4LGe85BnstVN8uFwNXsBOL7TSKs",
        "https://loremflickr.com/cache/resized/31337_52460626031_c2c372c811_b_640_480_nofilter.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhX0DDD2WbcHEukn1rKaS03IO71a7-Gp08Q&usqp=CAU",
    "https://loremflickr.com/cache/resized/65535_52145054950_27a526486c_z_640_480_nofilter.jpg",
  "https://loremflickr.com/cache/resized/65535_51872917324_64364c0267_c_640_480_nofilter.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmnxW3Uoj7BTbwrAicJ_tSjXQ_iObhPWTtIZOmTOfLTUDoASSP3sP19BnlqgwIRosfMs&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDixFzEsZ-rGvYMvCjZ4LZZ9bQGR9mv-nWQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZxEVa_MGQ2opcPPLDArtquNyUAy-JgParA&usqp=CAU"]

      let i=0
      let x;
      function slideImg(){
        let img=document.querySelector("#slideimage>img")
        if(i==slideArr.length-1){
          i=0
        }
        img.src=slideArr[i]
        i++

      }
      setInterval(slideImg,3000)



      let dashProduct=document.querySelector("dashPro")

      let arrBooks=["https://images-eu.ssl-images-amazon.com/images/I/51IirLv9gXL.jpg",
    "https://images-eu.ssl-images-amazon.com/images/I/51L7oNmTPYL.jpg",
  "https://images-eu.ssl-images-amazon.com/images/I/51bC1IZlNzL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/41bWphTpjuL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/41InK%2BFI38L.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/41GWEKyZczL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/41bWphTpjuL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/51b370sKEgL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/51%2BbBct5AAL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/51avYlOt-dL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/51YGcY6vQpL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/41AglDJKEHL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/51Dk6C-W64L.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/51dEe6E1zOL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/41JdFKjhfhL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/51nIwuaSEML.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/51n5P0MMGTL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/41XJ-KArMhL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/41aoFRTyslL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/51MoH8yDRwL.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/51KbR5zSD-L.jpg",
"https://images-eu.ssl-images-amazon.com/images/I/51P-mdF0HIL.jpg",
]

let arrstat=["https://rukminim1.flixcart.com/image/612/612/kl6wx3k0/art-set/a/o/p/colourup-hobby-bag-of-assorted-stationery-crayons-sketch-pens-original-imagydh54ze7zjzy.jpeg?q=70",
"https://rukminim1.flixcart.com/image/612/612/kfzq8i80/art-set/f/r/r/colourup-celebration-kit-mega-gift-pack-cello-original-imafwbs65mztvskh.jpeg?q=70",
"https://rukminim1.flixcart.com/image/612/612/khkvukw0-0/pen/6/s/c/8901765126245-hauser-original-imafxkck3g75whwf.jpeg?q=70",
"https://rukminim1.flixcart.com/image/612/612/kv9urgw0/black-white-board/k/w/p/non-magnetic-double-sided-white-board-and-chalk-board-one-side-original-imag86wzphb22g8a.jpeg?q=70",
"https://rukminim1.flixcart.com/image/612/612/xif0q/pen/e/f/g/-original-imagj2tym7zphzxw.jpeg?q=70",
"https://rukminim1.flixcart.com/image/612/612/kv9urgw0/black-white-board/k/w/p/non-magnetic-double-sided-white-board-and-chalk-board-one-side-original-imag86wzphb22g8a.jpeg?q=70",
"https://rukminim1.flixcart.com/image/612/612/kdhphu80/biometric-device/z/g/3/mfs-100-with-rd-mantra-original-imafueyyzdpz5pae.jpeg?q=70",
"https://rukminim1.flixcart.com/image/612/612/l19m93k0/paint/y/x/r/10-150-fevicryl-acrylic-colours-set-sunflower-kit-10-colours-x-original-imagcv78ahxwqmgt.jpeg?q=70",
"https://rukminim1.flixcart.com/image/612/612/l3ys70w0/art-set/x/d/0/9000032121-luxor-original-imageyqwpzzdwgkb.jpeg?q=70",
"https://rukminim1.flixcart.com/image/612/612/ks99aq80/file-folder/h/0/m/pu-leather-professional-files-and-folders-file-folder-totam-original-imag5ux9bfedqpgf.jpeg?q=70",
"https://rukminim1.flixcart.com/image/612/612/globe/h/y/h/blue-8-ab1-000-political-globeskart-desk-table-top-educational-original-imaegxsrxyq63t4t.jpeg?q=70",
"https://rukminim1.flixcart.com/image/612/612/l1l1rww0/scissor/m/b/6/barber-hair-cutting-scissors-high-graded-quality-brand-hair-original-imagd4yuz35kkq2c.jpeg?q=70"
]
let mainArr=[...arrBooks,...arrstat]

localStorage.setItem("arrimage",JSON.stringify(mainArr))
// let url_1="https://636a8521c07d8f936da08c35.mockapi.io/book"
let data=[]
async function getdata(){
  let url="https://636a8521c07d8f936da08c35.mockapi.io/book"
  try{
    let res=await fetch(url)
    let out=await res.json()
    data=[...out]
    console.log(out)
    console.log(data)

    displayBook(out)
  }catch(err){
    alert(err)
  }
     
}
getdata()
let dashbook=document.querySelector("#dashbook")
let book=0
let dashstationary=document.querySelector("#dashstationary")
let stationary=0
function displayBook(data){

  for(let i=0;i<20;i++){
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=  arrBooks[book]
    let name=document.createElement("h1")
    name.innerText=data[i].name
    let desc=document.createElement("p")
    desc.innerText= data[i].description1
    let price=document.createElement("p")
    price.innerText= "Price : "+data[i].price
    let rating=document.createElement("p")
    rating.innerText= "Rating : "+data[i].rating/10+"*"
    let category=document.createElement("h5")
    category.innerText=data[i].category
  let buy=document.createElement("button")
  buy.innerText="Buy Now"
  buy.setAttribute("class","buy")
  buy.addEventListener("click",function(){
    buyProduct(data[i],i)
})
  let cart=document.createElement("button")
 cart.innerText="Add to cart"
 cart.addEventListener("click",function(){
    sendTocart(data[i],i)
 })
 cart.setAttribute("class","cart")
    div.append(img,name,desc,price,rating,category,buy,cart)
    dashbook.append(div)
    book++
  }
   

for(let i=21;i<data.length;i++){
  let div=document.createElement("div")
          let img=document.createElement("img")
          img.src=  arrstat[ stationary]
          let name=document.createElement("h1")
          name.innerText=data[i].name
          let desc=document.createElement("p")
          desc.innerText= data[i].description1
          let price=document.createElement("p")
          price.innerText= "Price : "+data[i].price
          let category=document.createElement("h5")
          category.innerText=data[i].category
          let rating=document.createElement("p")
        
          rating.innerText= "Rating : "+data[i].rating/10+"*"
        let buy=document.createElement("button")
        buy.innerText="Buy Now"
        buy.addEventListener("click",function(){
             buyProduct(data[i],i)
        })
        buy.setAttribute("class","buy")
        let cart=document.createElement("button")
        cart.innerText="Add to cart"
        cart.setAttribute("class","cart")
        cart.addEventListener("click",function(){
        sendTocart(data[i],i)
     })
          div.append(img,name,desc,price,rating,category,buy,cart)
          dashstationary.append(div)
          stationary++
}

   
      }

     
 
      function sendTocart(val,ind){
        let flag=true
        let cartData=JSON.parse(localStorage.getItem("cartWB"))||[]
        if(data.length>=1){
          cartData.forEach((c)=>{
            if(c.id1==val.id1){
              flag=false
              alert("Product Already in Cart")
            }
          })
        }else{
          val.index=ind
          cartData.push(val)
       localStorage.setItem("cartWB",JSON.stringify(cartData))
       alert("Product Added To Cart ")
           flag=false
        }
         if(flag==true ){
          val.index=ind
          cartData.push(val)
       localStorage.setItem("cartWB",JSON.stringify(cartData))
       alert("Product Added To Cart ")
         }
       
      
  
      }
  

      function buyProduct(data,i){
        console.log("kkk")
        window.location.href="buy.html"
      }

