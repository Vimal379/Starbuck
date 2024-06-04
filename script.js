var str1 = document.querySelector('#star-1');
var str2 = document.querySelector('#star-2');
var str3 = document.querySelector('#star-3');
var str4 = document.querySelector('#star-4');
var str5 = document.querySelector('#star-5');

var str1Cont = document.querySelector('#star-1-content');
var str2Cont = document.querySelector('#star-2-content');
var str3Cont = document.querySelector('#star-3-content');
var str4Cont = document.querySelector('#star-4-content');
var str5Cont = document.querySelector('#star-5-content');


str1Cont.style.display = "flex";
str1Cont.style.width = "100%"; 

str1.addEventListener("click",function(){
    saretexthatao();
    // if(abouttext.style.display == "block" ||  contacttext.style.display == "block"){
    //     abouttext.style.display = "none";
    //     contacttext.style.display = "none";
    // }
    str1Cont.style.display = "flex";
    str1Cont.style.width = "100%"; 
})

str2.addEventListener("click",function(){
    saretexthatao();
    // if(hometext.style.display == "block" ||  contacttext.style.display == "block"){
    //     hometext.style.display = "none";
    //     contacttext.style.display = "none";
    // }
    str2Cont.style.display = "flex";
    str2Cont.style.width = "100%";
})

str3.addEventListener("click",function(){
    saretexthatao();
    // if(hometext.style.display == "block" ||  abouttext.style.display == "block"){
    //     abouttext.style.display = "none";
    //     contacttext.style.display = "none";
    // }
    str3Cont.style.display = "flex";
    str3Cont.style.width = "100%"; 
})
str4.addEventListener("click",function(){
    saretexthatao();
    // if(hometext.style.display == "block" ||  abouttext.style.display == "block"){
    //     abouttext.style.display = "none";
    //     contacttext.style.display = "none";
    // }
    str4Cont.style.display = "flex";
    str4Cont.style.width = "100%"; 
})
str5.addEventListener("click",function(){
    saretexthatao();
    // if(hometext.style.display == "block" ||  abouttext.style.display == "block"){
    //     abouttext.style.display = "none";
    //     contacttext.style.display = "none";
    // }
    str5Cont.style.display = "flex";
    str5Cont.style.width = "100%"; 
})

function saretexthatao(){
    document.querySelectorAll(".rate-content").forEach(function(rate){
        rate.style.display = "none";
    })
}