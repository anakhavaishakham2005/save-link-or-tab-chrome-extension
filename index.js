const inputBtn=document.getElementById("input-btn")
let myLeads=["AGA","BGA","CGA"]
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const leads=document.getElementById("leads")

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)

})

function renderLeads(){  
let listItems=""
for(let i=0;i<myLeads.length;i++)
       {//ulEl.innerHTML+= "<li>"+myLeads[i]+"</li> "
        //or here we create a new li element,set text content and then append it.
        // const li=document.createElement("li")
        // li.textContent=myLeads[i]
        // ulEl.append(li)//or
        listItems+= "<li>"+myLeads[i]+"</li> "
       }

ulEl.innerHTML=listItems
}