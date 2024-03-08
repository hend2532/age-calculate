let img=document.querySelector("img")
let header=document.querySelectorAll("h1 span");
let input=document.querySelectorAll("input");
let label=document.querySelectorAll("label");
let validDay=document.querySelector(".valid1")
let validMonth=document.querySelector(".valid2")
let validYear=document.querySelector(".valid3")
img.addEventListener("click",function(){
   let futher=new Date();
   let birth=new Date();
   birth.setFullYear(parseInt(input[2].value))
   birth.setMonth(parseInt(input[1].value)-1);
   birth.setDate(parseInt(input[0].value));
   
   if((input[0].value=""||input[0].value>31||input[0].value<=0)&&birth){
      validDay.style.cssText="display:block";
      input[0].style.cssText="border-color:hsl(0, 100%, 67%);";
      label[0].style.cssText="color:hsl(0, 100%, 67%);";
      // input[0].value="";
   }
   if((input[1].value=""||input[1].value>12||input[1].value<=0)&&!birth){
      validMonth.style.cssText="display:block";
      input[1].style.cssText="border-color:hsl(0, 100%, 67%);";
      label[1].style.cssText="color:hsl(0, 100%, 67%);";
      // input[1].value="";
   }
   if((input[2].value=""||input[2].value>2023||input[2].value<=0)&&!birth){
      validYear.style.cssText="display:block";
      input[2].style.cssText="border-color:hsl(0, 100%, 67%);";
      label[2].style.cssText="color:hsl(0, 100%, 67%);";
      // input[2].value="";
   }
   else{
      let current=futher-birth;
      // let current=new Date(futher-birth);
      // console.log(current);
      let currentY=current/(1000*60*60*24*365);
      let currentM=currentY%1*1000/(12*7);
      let currentD=currentM%1*1000/(12*4);
      console.log(Math.floor(currentY));
      console.log(Math.floor(currentM));
      console.log(Math.floor(currentD));
      // let currentfinal=new Date();
      // currentfinal.setFullYear      
      // let currentDay=futher.getDate()-birth.getDate();
      // let currentMonth=futher.getMonth()-birth.getMonth();
      // let currentYear=futher.getFullYear()-birth.getFullYear();
      // console.log(currentYear)
      // console.log(currentMonth)
      // console.log(currentDay)
   header[0].textContent=Math.floor(currentY);
   header[1].textContent=Math.floor(currentM);
   header[2].textContent=Math.floor(currentD);
   
}})
