let pricingButton = document.getElementById("pricing-button");
let pricing = document.getElementById("pricing");

pricingButton.addEventListener("click", ()=>{
    pricing.style.color = "#ffffff50"
    setTimeout(()=>{
        pricing.style.color = "#ffffffff";
    }, 300);
})

let contactButton = document.getElementById("contact-button");
let gitHub = document.getElementById("github");
let linkedIn = document.getElementById("linkedin");

contactButton.addEventListener("click", ()=>{
    gitHub.style.color = "#ffffffff";
    linkedIn.style.color = "#ffffffff";
    setTimeout(()=>{
        gitHub.style.color = "#ffffff50";
        linkedIn.style.color = "#ffffff50";
    }, 300);
})