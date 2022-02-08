const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("Starter-price");
const proPrice = document.getElementById("Pro-price");
var addMoney = 0;
var typeWebSite = 0;
var finalPrice = 2500;
var updateMoney = 2500;

function updateValue()
{
    var inputPayment = document.getElementById("a");
    inputPayment.value = "12345";
}

function nextPage()
{
    console.log(finalPrice);
    //window.location.href = "payment.html";
    window.onload = updateValue;
}

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        starterPrice.innerHTML = 'R13500 <span> / year </span>';
        proPrice.innerHTML = 'R' + ((updateMoney + addMoney)*9 + typeWebSite)+'<span> / year </span>';
        finalPrice = ((updateMoney + addMoney)*9 + typeWebSite);
    }
    else{
        starterPrice.innerHTML = 'R1500 <span> / month </span>';
        proPrice.innerHTML = 'R'+(updateMoney + addMoney + typeWebSite)+' <span> / monthly </span>';
        finalPrice = ((updateMoney + addMoney)*9 + typeWebSite);
    }
})

document.getElementById("pages").addEventListener("change",function() {
    const period = this.value;
    if (period=="") return; // please select - possibly you want something else here
        if(period == 6)
        {
            updateMoney = 2500 + addMoney;
        }else if (period == 7)
        {
            updateMoney = 2650 + addMoney;
        }else if (period == 12)
        {
            updateMoney = 2800 + addMoney;
        }else if (period == 15)
        {
            updateMoney = 2950 + addMoney;
        }
        console.log("sbcjscj");
        if  (toggler.checked)
        proPrice.innerHTML = 'R'+(updateMoney*9 + typeWebSite)+ '<span> / year2 </span>';
        else
        proPrice.innerHTML = 'R'+(updateMoney + typeWebSite)+ '<span> / monthly2 </span>';
        finalPrice=parseInt(proPrice.innerHTML.value);
    
  });

  document.getElementById("Website-type").addEventListener("change",function() {
    const period = this.value;
    if (period=="") return; // please select - possibly you want something else here
       if (period == "Yes")
       {
        addMoney = 200; 
        if  (toggler.checked)
        proPrice.innerHTML = 'R'+((updateMoney + addMoney)*9 + typeWebSite)+ '<span> / year1 </span>';
        else
        proPrice.innerHTML = 'R'+(updateMoney + addMoney + typeWebSite)+ '<span> / monthly1 </span>';
       }
       else
       {
        addMoney = 0;
        //updateMoney -= 200;
        if  (toggler.checked)
        proPrice.innerHTML = 'R'+((updateMoney + addMoney)*9 + typeWebSite)+ '<span> / year </span>';
        else
        proPrice.innerHTML = 'R'+(updateMoney + addMoney + typeWebSite)+ '<span> / monthly </span>';
       }
       finalPrice=parseInt(proPrice.innerHTML.value);
       
    
  });

  document.getElementById("Websitetype").addEventListener("change",function() {
    const period = this.value;
    if (period=="") return; // please select - possibly you want something else here
    
       if (period == "Basic")
       {
           //same
           typeWebSite = 0;
       }else if (period == "Shop")
       {
           //1500
           typeWebSite = 1500;
       }else if (period == "woo")
       {
           //1000
           typeWebSite = 1000;
       }
       if  (toggler.checked)
        proPrice.innerHTML = 'R'+((updateMoney + addMoney)*9 + typeWebSite)+ '<span> / year </span>';
        else
        proPrice.innerHTML = 'R'+(updateMoney + addMoney + typeWebSite)+ '<span> / monthly </span>';
        finalPrice=parseInt(proPrice.innerHTML.value);
       
  });








































//   document.getElementById("Website-type").addEventListener("change",function() {
//     const period = this.value;
//     var AddMoney = 200;
//     if (period=="") return; // please select - possibly you want something else here
//     if (period == "Yes")
//     {
//         updateMoney += AddMoney;
//     }else{
//         updateMoney = AddMoney;
//     }
    
//     if (toggler.checked && period == "Yes")
//     {
//         updateMoney *= 9;
//     }
//     proPrice.innerHTML = 'R'+updateMoney+ '<span> / month </span>';
//   });