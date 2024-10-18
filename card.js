let shopBox1 = document.querySelector(".shop-box1 ");
let heroSection = document.querySelector(".hero-section");
let shops = document.querySelector(".shop");
let body = document.querySelector("body");

shopBox1.addEventListener("click",function(){
    heroSection.style.display="none";
    shops.style.display="none";
    let mainDiv = document.createElement("div");
    body.appendChild(mainDiv);
    // mainDiv.style.backgroundColor="red";
    mainDiv.style.height="500px";
    mainDiv.style.width="100%"; 
    mainDiv.style.marginTop="100px"
    mainDiv.style.display="flex"; 


// Create DIV-1

    let divLeft = document.createElement("div");
    mainDiv.appendChild(divLeft);
    divLeft.style.height="500px";
    divLeft.style.width="50%";
    // divLeft.style.backgroundColor="blue";
    

// Create DIV-1 Image
    let divLeftImage = document.createElement("div");
    divLeft.appendChild(divLeftImage);
    divLeftImage.style.height="390px";
    divLeftImage.style.width="350px";
    divLeftImage.style.marginTop="50px";
    divLeftImage.style.backgroundColor="gray";
    divLeftImage.style.backgroundImage="url('/Card/images/shirt-1.png')";
    divLeftImage.style.backgroundSize="cover";
    divLeftImage.style.position="fixed";
    divLeftImage.style.marginLeft="200px";
    divLeftImage.style.borderRadius="20px";





 // Create DIV-2
    let divRight = document.createElement("div");
    mainDiv.appendChild(divRight);
    divRight.style.height="500px";
    divRight.style.width="50%";
    // divRight.style.backgroundColor="green";
    

    let divRightText = document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="390px";
    divRightText.style.width="400px";
    divRightText.style.marginTop="50px";
    divRightText.style.position="fixed";
    // divRightText.style.backgroundColor="gray";
    let h1 =document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText="Shoply Offer :Trending Shop Now";
    h1.style.fontSize="30px";
    h1.style.paddingTop="10px";
    let h3 =document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText="Special Price";
    h3.style.fontWeight="400";
    h3.style.paddingTop="10px";
    h3.style.fontSize="25px";
    let h2 =document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText="$11";
    h2.style.fontWeight="400";
    h2.style.paddingTop="10px";
    h2.style.fontSize="25px";

    let p =document.createElement("p");
    divRightText.appendChild(p);
    p.innerText=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsam sequi minus ducimus qui explicabo debitis, eaque, corrupti odio ut illum cupiditate iure consequatur tempore laborum accusantium necessitatibus hic error!";
    p.style.fontWeight="300";
    p.style.paddingTop="10px";

    let button = document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="50px";
    button.style.width="150px"
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.color="white";
    button.style.fontSize="20px";
    button.style.borderRadius="20px";
    button.style.marginTop="20px";
    button.style.cursor="pointer";

    let button2 = document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add to Card";
    button2.style.height="50px";
    button2.style.width="150px"
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.color="white";
    button2.style.fontSize="20px";
    button2.style.borderRadius="20px";
    button2.style.marginTop="20px";
    button2.style.marginLeft="20px";
    button2.style.cursor="pointer";

    
    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopBox1.style.display="block";
    })
});

/*   ===========  Second Card ===========     */ 

let shopBox2 = document.querySelector(".shop-box2 ");
let heroSection2 = document.querySelector(".hero-section");
let shops2 = document.querySelector(".shop");
let body2 = document.querySelector("body");

shopBox2.addEventListener("click",function(){
    heroSection2.style.display="none";
    shops2.style.display="none";
    let mainDiv = document.createElement("div");
    body2.appendChild(mainDiv);
    // mainDiv.style.backgroundColor="red";
    mainDiv.style.height="500px";
    mainDiv.style.width="100%"; 
    mainDiv.style.marginTop="100px"
    mainDiv.style.display="flex"; 


// Create DIV-1

    let divLeft = document.createElement("div");
    mainDiv.appendChild(divLeft);
    divLeft.style.height="500px";
    divLeft.style.width="50%";
    // divLeft.style.backgroundColor="blue";
    

// Create DIV-1 Image
    let divLeftImage = document.createElement("div");
    divLeft.appendChild(divLeftImage);
    divLeftImage.style.height="390px";
    divLeftImage.style.width="350px";
    divLeftImage.style.marginTop="50px";
    divLeftImage.style.backgroundColor="gray";
    divLeftImage.style.backgroundImage="url('/Card/images/shirt-1.png')";
    divLeftImage.style.backgroundSize="cover";
    divLeftImage.style.position="fixed";
    divLeftImage.style.marginLeft="200px";
    divLeftImage.style.borderRadius="20px";





 // Create DIV-2
    let divRight = document.createElement("div");
    mainDiv.appendChild(divRight);
    divRight.style.height="500px";
    divRight.style.width="50%";
    // divRight.style.backgroundColor="green";
    

    let divRightText = document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="390px";
    divRightText.style.width="400px";
    divRightText.style.marginTop="50px";
    divRightText.style.position="fixed";
    // divRightText.style.backgroundColor="gray";
    let h1 =document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText="Shoply Offer :Trending Shop Now";
    h1.style.fontSize="30px";
    h1.style.paddingTop="10px";
    let h3 =document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText="Special Price";
    h3.style.fontWeight="400";
    h3.style.paddingTop="10px";
    h3.style.fontSize="25px";
    let h2 =document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText="$11";
    h2.style.fontWeight="400";
    h2.style.paddingTop="10px";
    h2.style.fontSize="25px";

    let p =document.createElement("p");
    divRightText.appendChild(p);
    p.innerText=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsam sequi minus ducimus qui explicabo debitis, eaque, corrupti odio ut illum cupiditate iure consequatur tempore laborum accusantium necessitatibus hic error!";
    p.style.fontWeight="300";
    p.style.paddingTop="10px";

    let button = document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="50px";
    button.style.width="150px"
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.color="white";
    button.style.fontSize="20px";
    button.style.borderRadius="20px";
    button.style.marginTop="20px";
    button.style.cursor="pointer";

    let button2 = document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add to Card";
    button2.style.height="50px";
    button2.style.width="150px"
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.color="white";
    button2.style.fontSize="20px";
    button2.style.borderRadius="20px";
    button2.style.marginTop="20px";
    button2.style.marginLeft="20px";
    button2.style.cursor="pointer";

    
    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopBox1.style.display="block";
    })
});



/*   ===========  Third Card ===========     */ 

let shopBox3 = document.querySelector(".shop-box3 ");
let heroSection3 = document.querySelector(".hero-section");
let shops3 = document.querySelector(".shop");
let body3 = document.querySelector("body");

shopBox3.addEventListener("click",function(){
    heroSection3.style.display="none";
    shops3.style.display="none";
    let mainDiv = document.createElement("div");
    body3.appendChild(mainDiv);
    // mainDiv.style.backgroundColor="red";
    mainDiv.style.height="500px";
    mainDiv.style.width="100%"; 
    mainDiv.style.marginTop="100px"
    mainDiv.style.display="flex"; 


// Create DIV-1

    let divLeft = document.createElement("div");
    mainDiv.appendChild(divLeft);
    divLeft.style.height="500px";
    divLeft.style.width="50%";
    // divLeft.style.backgroundColor="blue";
    

// Create DIV-1 Image
    let divLeftImage = document.createElement("div");
    divLeft.appendChild(divLeftImage);
    divLeftImage.style.height="390px";
    divLeftImage.style.width="350px";
    divLeftImage.style.marginTop="50px";
    divLeftImage.style.backgroundColor="gray";
    divLeftImage.style.backgroundImage="url('/Card/images/shirt-1.png')";
    divLeftImage.style.backgroundSize="cover";
    divLeftImage.style.position="fixed";
    divLeftImage.style.marginLeft="200px";
    divLeftImage.style.borderRadius="20px";





 // Create DIV-2
    let divRight = document.createElement("div");
    mainDiv.appendChild(divRight);
    divRight.style.height="500px";
    divRight.style.width="50%";
    // divRight.style.backgroundColor="green";
    

    let divRightText = document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="390px";
    divRightText.style.width="400px";
    divRightText.style.marginTop="50px";
    divRightText.style.position="fixed";
    // divRightText.style.backgroundColor="gray";
    let h1 =document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText="Shoply Offer :Trending Shop Now";
    h1.style.fontSize="30px";
    h1.style.paddingTop="10px";
    let h3 =document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText="Special Price";
    h3.style.fontWeight="400";
    h3.style.paddingTop="10px";
    h3.style.fontSize="25px";
    let h2 =document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText="$11";
    h2.style.fontWeight="400";
    h2.style.paddingTop="10px";
    h2.style.fontSize="25px";

    let p =document.createElement("p");
    divRightText.appendChild(p);
    p.innerText=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsam sequi minus ducimus qui explicabo debitis, eaque, corrupti odio ut illum cupiditate iure consequatur tempore laborum accusantium necessitatibus hic error!";
    p.style.fontWeight="300";
    p.style.paddingTop="10px";

    let button = document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="50px";
    button.style.width="150px"
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.color="white";
    button.style.fontSize="20px";
    button.style.borderRadius="20px";
    button.style.marginTop="20px";
    button.style.cursor="pointer";

    let button2 = document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add to Card";
    button2.style.height="50px";
    button2.style.width="150px"
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.color="white";
    button2.style.fontSize="20px";
    button2.style.borderRadius="20px";
    button2.style.marginTop="20px";
    button2.style.marginLeft="20px";
    button2.style.cursor="pointer";

    
    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopBox1.style.display="block";
    })
});