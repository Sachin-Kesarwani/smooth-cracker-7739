let url$2="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products"

async function getdata(){


  try{
    let res=await fetch(url$2)
    let out=await res.json()
    console.log(out)
    displaytech(out.data)
  }catch(err){
    alert(err)
  }
     
}
getdata()
let dashtech=document.querySelector("#dashtech")

function displaytech(data){
       data.forEach((e,index)=>{
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=  e.img
        let name=document.createElement("h1")
        name.innerText=e.brand
        let desc=document.createElement("p")
        desc.innerText= e.details
        let price=document.createElement("p")
        price.innerText= "Price : "+e.price
        let rating=document.createElement("p")
        if(index%2==0){
            rating.innerText= "Rating : "+4+"*"
        }else{
            rating.innerText= "Rating : "+5+"*"
        }
      
        let category=document.createElement("h4")
        category.innerText=e.category
      let buy=document.createElement("button")
      buy.innerText="Buy Now"
      buy.setAttribute("class","buy")
      let cart=document.createElement("button")
     cart.innerText="Add to cart"
     cart.setAttribute("class","cart")
     cart.addEventListener("click",function(){
        sendTocart(data[i],i)
     })
        div.append(img,name,desc,price,rating,category,buy,cart)
        dashtech.append(div)
       
       })
   
}

// function sendTocart(obj,index){    
//     let newdata=JSON.parse(localStorage.getItem("cartWB"))||[]
//     newdata.push(obj)
//     localStorage.setItem("cartWB",JSON.stringify(newdata))

//   }