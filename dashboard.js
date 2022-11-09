  
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

      //  x= setInterval(slideImg,2000)

      }
      setInterval(slideImg,2000)