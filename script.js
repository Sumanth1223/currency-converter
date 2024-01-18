base_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"

let drop_sel=document.querySelectorAll(".country-selection select")

let btn=document.querySelector("button")
let fromcntry=document.querySelector(".from-country select")

let tocntry=document.querySelector(".to-country select")
console.log(tocntry.value.toLowerCase());
console.log(fromcntry.value.toLowerCase());
let msg= document.querySelector(".message p")


for(let sel of drop_sel){ 
    for(let curr_code in countryList )
    {
        let new_opt= document.createElement("option");
        new_opt.innerText=curr_code;
        new_opt.value=curr_code;
        if(sel.name=="from-country" && curr_code=="IN")
        {
            new_opt.selected="selected"
        }
        if(sel.name=="to-country" && curr_code=="USD")
        {
            new_opt.selected="selected"
        }
        sel.append(new_opt) 
base_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/us/in.json"

        
         
    }
    sel.addEventListener("change",(evt)=>{
        msg.innerText="Loading..."
        updateFlag(evt.target);
    });
    
}

const updateFlag=(element)=>{
    
    let currCode=element.value;
    console.log(currCode)
    let countryCode=countryList[currCode]
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
    let image=element.parentElement.querySelector("img")
    image.src=newSrc;
}
btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amt=document.querySelector(".header input")
   
    if (amt.value<1 || amt.value=="")
    {
        amt.value=1
    }
    
    url=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromcntry.value.toLowerCase()}/${tocntry.value.toLowerCase()}.json`
     let response = await fetch(url);
     let data = await response.json();
    let rate= data[tocntry.value.toLowerCase()]
     console.log(rate);
     let final_amount=rate*amt.value;
     final_res=final_amount.toFixed(2);
     msg.innerText=`${final_amount} ${tocntry.value}`
  
})