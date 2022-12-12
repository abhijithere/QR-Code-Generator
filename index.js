const box = document.querySelector(".box");
generateBtn=box.querySelector(".btn");
const inptxt=box.querySelector(".input-text");
qrimg=box.querySelector(".img-sec");
generateBtn.addEventListener("click",()=>{
    let inpt=inptxt.value;
    if(!inpt) return;
    generateBtn.innerText = "Generating QR code..."
    qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpt}`;
    qrimg.addEventListener("load",()=>{
        box.classList.add('active');
        generateBtn.innerText = "Generate QR code"
    });
    
});
inptxt.addEventListener("keyup",()=>{
    if(!inptxt.value){
        box.classList.remove('active');
    }
});