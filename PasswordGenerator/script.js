let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

//slider değerini gösterme
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener("input",()=> {
    sliderValue.innerHTML=inputSlider.value;
});

genBtn.addEventListener("click", ()=>{
    passBox.value=generatePassword();
});

function generatePassword(){
    let genPassword = "";
    let allChars = "";

   if(lowercase.checked){
    for(let i=0;i<=25;i++){
        allChars+=String.fromCharCode(97+i);
    }
   }
   if(uppercase.checked){
    for(let i=0;i<=25;i++){
        allChars+=String.fromCharCode(65+i);
    }
   }
   if(numbers.checked){
    for(let i=0;i<=9;i++){
        allChars+=String.fromCharCode(48+i);
    }
   }
   if(symbols.checked){
    for(let i=0;i<=14;i++){
        allChars+=String.fromCharCode(33+i);
    }
    for(let i=0;i<=6;i++){
        allChars+=String.fromCharCode(58+i);
    }
   }
   if(allChars=="" || allChars.length==0){
    return genPassword;
   }

    let i=1;
    while(i<=inputSlider.value){
        genPassword += allChars[Math.floor(Math.random()*allChars.length)];
        i++;
    }

    return genPassword;
}

copyIcon.addEventListener("click",()=>{
    if(passBox.value!="" || passBox.value.length >= 1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerHTML="check";
        copyIcon.title="Şifre Kopyalandı";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title="";
        },2000);
    }
});