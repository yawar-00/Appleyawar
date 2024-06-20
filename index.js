const store=()=>{
   let output = `<div id="showstore">
        <ul class="listtype1">
            <li><h5 class="subhed">Shop</h5></li>
            <li>Shop the latest</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Apple Watch</li>
            <li>Accessories</li>  
        </ul>
        <ul class="listtype2">
            <li><h5 class="subhed">Quick Links</h5></li>
            <li>Find a Store</li>
            <li>Order Status</li>
            <li>Apple Trade in</li>
            <li>Financing</li> 
        </ul>
        <ul class="listtype2">
            <li><h5 class="subhed">Shop Special Stores</h5></li>
            <li>Certified Refurbished</li>
            <li>Education</li>
            <li>Business</li>
            <li>Veterans and Military</li> 
            <li>Government</li> 
        </ul>
    </div>`
    document.getElementById("navbar").style.backgroundColor="#161617";
    document.getElementById('shownavbar').innerHTML=output;
    document.getElementById("shownavbar").style.zIndex="100"
    let h = document.getElementById('shownavbar').clientHeight;
    document.getElementById("maincont").style.marginTop="-h";
    document.getElementById("maincont").style.filter="blur(8px)";
}
const mac=()=>{
    let output = `<div id="showmac">
         <ul class="listtype1">
             <li><h5 class="subhed">Explore Mac</h5></li>
             <li>Explore All Mac</li>
             <li>Macbook Air</li>
             <li>Macbook Pro</li>
             <li>iMac</li>
             <li>Mac mini</li>
             <li>Mac Studio</li>
             <li>Mac Pro</li>
             <li>Displays</li>  
         </ul>
         <ul class="listtype2">
             <li><h5 class="subhed">Shop Mac</h5></li>
             <li>Shop Mac</li>
             <li>Mac Accessories</li>
             <li>Apple Trade in</li>
             <li>Financing</li> 
         </ul>
         <ul class="listtype2">
             <li><h5 class="subhed">More from Mac</h5></li>
             <li>Mac Support</li>
             <li>Apple care+ for Mac</li>
             <li>macOS Sonoma</li> 
             <li>Apps by Apple</li>
             <li>iCloud+</li>
             <li>Mac for Business</li> 
             <li>Education</li> 
         </ul>
     </div>`
     document.getElementById("navbar").style.backgroundColor="#161617";
    document.getElementById('shownavbar').innerHTML=output;
    document.getElementById("shownavbar").style.zIndex="100"
    let h = document.getElementById('shownavbar').clientHeight;
    document.getElementById("maincont").style.marginTop="-h";
    document.getElementById("maincont").style.filter="blur(8px)";
     }
 const iPad=()=>{
    let output = `<div id="showiPad"> 
    <ul class="listtype1">
        <li><h5 class="subhed">Explore iPad</h5></li>
         <li>Explore All iPad</li>
         <li>ipad Pro</li>
         <li>iPad Air</li>
         <li>iPad</li>
         <li>iPad mini</li>
         <li>Apple Pencil</li>
         <li>Keyboards</li>  
    </ul>
    <ul class="listtype2">
        <li><h5 class="subhed">Shop iPad</h5></li>
        <li>Shop iPad</li>
        <li>iPad Accessories</li>
        <li>Apple Trade in</li>
        <li>Financing</li> 
    </ul>
    <ul class="listtype2">
        <li><h5 class="subhed">More from iPad</h5></li>
        <li>iPad Support</li>
        <li>Apple care+ for iPad</li>
        <li>iPadOS17</li> 
        <li>Apps by Apple</li>
        <li>iCloud+</li> 
        <li>Education</li> 
    </ul>
    </div>`
    document.getElementById("navbar").style.backgroundColor="#161617";
    document.getElementById('shownavbar').innerHTML=output;
    document.getElementById("shownavbar").style.zIndex="100"
    let h = document.getElementById('shownavbar').clientHeight;
    document.getElementById("maincont").style.marginTop="-h";
    document.getElementById("maincont").style.filter="blur(8px)";
}
const iPhone=()=>{
    let output = `<div id="showiPhone">
    <ul class="listtype1">
        <li><h5 class="subhed">Explore iPhone</h5></li>
        <li>Explore All iPhone</li>
        <li>iPhone 15 Pro</li>
        <li>iPhone 15</li>
        <li>iPhone 14</li>
        <li>iPhone 13</li>
        <li>iPhone SE</li>
    </ul>
    <ul class="listtype2">
        <li><h5 class="subhed">Shop iPhone</h5></li>
        <li>Shop iPhone</li>
        <li>iPhone Accessories</li>
        <li>Apple Trade in</li>
        <li>Carrier Deals at Aplle</li> 
        <li>Financing</li> 
    </ul>
    <ul class="listtype2">
        <li><h5 class="subhed">More from iPhone</h5></li>
        <li>iPhone Support</li>
        <li>Apple care+ for iPad</li>
        <li>iOS 17</li> 
        <li>Apps by Apple</li>
        <li>iPhone Privacy</li>
        <li>iCloud+</li> 
        <li>Education</li> 
        <li>Wallet, Pay, Card</li> 
        <li>Siri</li> 
    </ul>
    </div>`
    document.getElementById("navbar").style.backgroundColor="#161617";
    document.getElementById('shownavbar').innerHTML=output;
    document.getElementById("shownavbar").style.zIndex="100"
    let h = document.getElementById('shownavbar').clientHeight;
    document.getElementById("maincont").style.marginTop="-h";
    document.getElementById("maincont").style.filter="blur(8px)";
}
 const Watch=()=>{
    let output = `<div id="showwatch">
    <ul class="listtype1">
        <li><h5 class="subhed">Explore Watch</h5></li>
        <li>Explore All Apple Watch</li>
        <li>Apple Watch Series 9</li>
        <li>Apple Watch Ultra 2</li>
        <li>Apple Watch Nike</li>
        <li>Apple watch Hermès</li>
        
    </ul>
    <ul class="listtype2">
        <li><h5 class="subhed">Shop iPhone</h5></li>
        <li>Shop iPhone</li>
        <li>iPhone Accessories</li>
        <li>Apple Trade in</li>
        <li>Carrier Deals at Aplle</li> 
        <li>Financing</li> 
    </ul>
    <ul class="listtype2">
        <li><h5 class="subhed">More from iPhone</h5></li>
        <li>iPhone Support</li>
        <li>Apple care+ for iPad</li>
        <li>iOS 17</li> 
        <li>Apps by Apple</li>
        <li>iPhone Privacy</li>
        <li>iCloud+</li> 
        <li>Education</li> 
        <li>Wallet, Pay, Card</li> 
        <li>Siri</li> 
    </ul>
</div>`
document.getElementById("navbar").style.backgroundColor="#161617";
document.getElementById('shownavbar').innerHTML=output;
document.getElementById("shownavbar").style.zIndex="100"
let h = document.getElementById('shownavbar').clientHeight;
document.getElementById("maincont").style.marginTop="-h";
document.getElementById("maincont").style.filter="blur(8px)";
}
 const Vision=()=>{
    let output = `<div id="showvision">
    <ul class="listtype1">
    <li><h5 class="subhed">Shop</h5></li>
    <li>Shop the latest</li>
    <li>Mac</li>
    <li>iPad</li>
    <li>iPhone</li>
    <li>Apple Watch</li>
    <li>Accessories</li>  
</ul>
<ul class="listtype2">
    <li><h5 class="subhed">Quick Links</h5></li>
    <li>Find a Store</li>
    <li>Order Status</li>
    <li>Apple Trade in</li>
    <li>Financing</li> 
</ul>
<ul class="listtype2">
    <li><h5 class="subhed">Shop Special Stores</h5></li>
    <li>Certified Refurbished</li>
    <li>Education</li>
    <li>Business</li>
    <li>Veterans and Military</li> 
    <li>Government</li> 
</ul>
</div>`
    document.getElementById("navbar").style.backgroundColor="#161617";
    document.getElementById('shownavbar').innerHTML=output;
    document.getElementById("shownavbar").style.zIndex="100"
    let h = document.getElementById('shownavbar').clientHeight;
    document.getElementById("maincont").style.marginTop="-h";
    document.getElementById("maincont").style.filter="blur(8px)";
}
 const airpods=()=>{
    let output = `<div id="showairpods">
    <ul class="listtype1">
    <li><h5 class="subhed">Explore AirPods</h5></li>
    <li>Explore All AirPods</li>
    <li>AirPods Pro 2nd generation</li>
    <li>AirPods 2nd generation</li>
    <li>AirPods 3rd generation</li>
    <li>AirPods Max</li>
    
</ul>
<ul class="listtype2">
    <li><h5 class="subhed">Shop AirPods</h5></li>
    <li>Shop AirPods</li>
    <li>AirPods Accessories</li>
</ul>
<ul class="listtype2">
    <li><h5 class="subhed">More from AirPods</h5></li>
    <li>AirPods Support</li>
    <li>Apple care+ for Headphones</li>
    <li>Apple Music</li> 
</ul>
</div>`
document.getElementById("navbar").style.backgroundColor="#161617";
    document.getElementById('shownavbar').innerHTML=output;
    document.getElementById("shownavbar").style.zIndex="100";
    let h = document.getElementById('shownavbar').clientHeight;
    document.getElementById("maincont").style.marginTop="-h";
    document.getElementById("maincont").style.filter="blur(8px)";
}
 const tv=()=>{
    let output = `<div id="showtv">
    <ul class="listtype1">
    <li><h5 class="subhed">Explore TV & Home</h5></li>
    <li>Explore TV 4K</li>
    <li>HomePod</li>
    <li>HomePod mini</li>
</ul>
<ul class="listtype2">
    <li><h5 class="subhed">Shop TV & Home</h5></li>
    <li>Shop Apple TV 4K/li>
    <li>Shop HomePod</li>
    <li>Shop HomePod mini</li>
    <li>Shop Siri Remote</li> 
    <li>TV & Home Accessories</li> 
</ul>
<ul class="listtype2">
    <li><h5 class="subhed">More from TV & Home</h5></li>
    <li>Apple TV Support</li>
    <li>HomePod Support</li>
    <li>Apple care+</li>
    <li>Apple TV app</li> 
    <li>Apple TV+</li>
    <li>Home app</li>
    <li>Apple Music</li> 
    <li>Siri</li> 
    <li>AirPlay</li> 
</ul>
</div>`
    document.getElementById("navbar").style.backgroundColor="#161617";
    document.getElementById('shownavbar').innerHTML=output;
    document.getElementById("shownavbar").style.zIndex="100"
    let h = document.getElementById('shownavbar').clientHeight;
    document.getElementById("maincont").style.marginTop="-h";
    document.getElementById("maincont").style.filter="blur(8px)";
}
 const entertainment=()=>{
    let output = `<div id="showentertainment">
    <ul class="listtype1">
        <li><h5 class="subhed">Explore Entertainment</h5></li>
        <li>Explore Entertainment</li>
        <li>Apple One</li>
        <li>Apple TV+</li>
        <li>Apple Music</li>
        <li>Apple Arcade</li>
        <li>Apple Fitness+</li>
        <li>Apple TV+</li>
        <li>Apple News+</li>
        <li>Apple Podcasts</li>
        <li>Apple Books</li>
        <li>Apple Store</li>
    </ul>
    <ul class="listtype2">
        <li><h5 class="subhed">Support</h5></li>
        <li>Apple TV+ Support</li>
        <li>Apple Music Support</li>
    </ul>
</div>`
    document.getElementById("navbar").style.backgroundColor="#161617";
    document.getElementById('shownavbar').innerHTML=output;
    document.getElementById("shownavbar").style.zIndex="100"
    let h = document.getElementById('shownavbar').clientHeight;
    document.getElementById("maincont").style.marginTop="-h";
    document.getElementById("maincont").style.filter="blur(8px)";
}
 const accessories=()=>{
    let output = `<div id="showaccessories">
    <ul class="listtype1">
    <li><h5 class="subhed">Shop Accessories</h5></li>
    <li>Shop All Accessories</li>
    <li>Mac</li>
    <li>iPad</li>
    <li>iPhone</li>
    <li>Apple Watch</li>
    <li>Accessories</li>
    <li>AirPods</li>
    <li>TV & Home</li>   
</ul>
<ul class="listtype2">
    <li><h5 class="subhed">Explore Accessories</h5></li>
    <li>Made by Apple</li>
    <li>Beats by Dr.Dre</li>
    <li>AirTag</li>
</ul>
</div>`
    document.getElementById("navbar").style.backgroundColor="#161617";
    document.getElementById('shownavbar').innerHTML=output;
    document.getElementById("shownavbar").style.zIndex="100"
    let h = document.getElementById('shownavbar').clientHeight;
    document.getElementById("maincont").style.marginTop="-h";
    document.getElementById("maincont").style.filter="blur(8px)";
}
 const support=()=>{
    let output = `<div id="showsupport">
    <ul class="listtype1">
    <li><h5 class="subhed">Explore Support</h5></li>
    <li>iPhone</li>
    <li>Mac</li>
    <li>iPad</li>
    <li>Watch</li>
    <li>AirPods</li>  
    <li>Music</li>
    <li>TV</li>
</ul>
<ul class="listtype2">
    <li><h5 class="subhed">Get Help</h5></li>
    <li>Community</li>
    <li>Check Coverage</li>
    <li>Repair</li>
    <li>Contact Us</li> 
</ul>
<ul class="listtype2">
    <li><h5 class="subhed">Helpful Topics</h5></li>
    <li>Get AppleCare+</li>
    <li>Apple ID & Password</li>
    <li>Billing & Subscriptions</li>
    <li>Find My</li> 
    <li>Accessibility</li> 
</ul>
</div>`
    document.getElementById("navbar").style.backgroundColor="#161617";
    document.getElementById('shownavbar').innerHTML=output;
    document.getElementById("shownavbar").style.zIndex="100"
    let h = document.getElementById('shownavbar').clientHeight;
    document.getElementById("maincont").style.marginTop="-h";
    document.getElementById("maincont").style.filter="blur(8px)";
}
 const search=()=>{
    let output = `<div id="showsearch">
    <ul class="listtype1">
        <li class="searchli"><i class="fa-solid fa-magnifying-glass"></i><input type ="text" class = "search" placeholder="Search apple.com"></li>
        <li><h5 class="subhed">Quick Links</h5></li>
        <li><h5 class="sublist"><i class="fa-solid fa-arrow-right-long"></i>  Find a Store</h5></li>
        <li><h5 class="sublist"><i class="fa-solid fa-arrow-right-long"></i>  Apple Vision Pro</h5></li>
        <li><h5 class="sublist"><i class="fa-solid fa-arrow-right-long"></i>  Airpods</h5></li>
        <li><h5 class="sublist"><i class="fa-solid fa-arrow-right-long"></i>  AirTag</h5></li>
        <li><h5 class="sublist"><i class="fa-solid fa-arrow-right-long"></i>  Apple Trade In</h5></li>
    </ul>
</div>`
    document.getElementById("navbar").style.backgroundColor="#161617";
    document.getElementById('shownavbar').innerHTML=output;
    document.getElementById("shownavbar").style.zIndex="100";
    let h = document.getElementById('shownavbar').clientHeight;
    document.getElementById("maincont").style.marginTop="-h";
    document.getElementById("maincont").style.filter="blur(8px)";
}
 const bag=()=>{
    let output = `<div id="showbag">
    <ul class="listtype1">
        
        <li><h5 class="subhed">My Profile</h5></li>
        <li><h5 class="sublist"><i class="fa-solid fa-box"></i>  orders</h5></li>
        <li><h5 class="sublist"><i class="fa-regular fa-bookmark"></i>  Your Saves</h5></li>
        <li><h5 class="sublist"><i class="fa-regular fa-circle-play"></i>  Account</h5></li>
        <li><h5 class="sublist"><i class="fa-regular fa-circle-user"></i>  Sign In</h5></li>    
    </ul>
</div>`
    document.getElementById("navbar").style.backgroundColor="#161617";
    document.getElementById('shownavbar').innerHTML=output;
    document.getElementById("shownavbar").style.zIndex="100"
    let h = document.getElementById('shownavbar').clientHeight;
    document.getElementById("maincont").style.marginTop="-h";
    document.getElementById("maincont").style.filter="blur(8px)";
}
const hidenavbar=()=>{
    document.getElementById("shownavbar").innerHTML="";
    document.getElementById("maincont").style.filter="";
    document.getElementById("maincont").style.zIndex="100"
    document.getElementById("navbar").style.backgroundColor="rgba(22, 22, 23, .8)";
}
const hidenavtop=()=>{
    let h = window.event.clientY;
    if(h<15){
        document.getElementById("maincont").style.filter="";
        document.getElementById("shownavbar").innerHTML="";
        document.getElementById("maincont").style.zIndex="100"
        document.getElementById("navbar").style.backgroundColor="rgba(22, 22, 23, .8)";
    }
}
// const khulja=()=>{

// setInterval(bhagha,12);

// let value_store=0;
// function bhagha(){
//     if(140>value_store){
//         let store = document.querySelector('#running-value');
//         value_store++
//         store.innerHTML = value_store;
//     }
//     else{
//         clearInterval();
//     }
// }
// }