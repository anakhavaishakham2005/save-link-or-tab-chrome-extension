const inputBtn=document.getElementById("input-btn")
let myLeads=[]
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const leads=document.getElementById("leads")

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value="" 
    renderLeads()
})

function renderLeads(){  
let listItems=""
for(let i=0;i<myLeads.length;i++)
       {//ulEl.innerHTML+= "<li>"+myLeads[i]+"</li> "
        //or here we create a new li element,set text content and then append it.
        // const li=document.createElement("li")
        // li.textContent=myLeads[i]
        // ulEl.append(li)//or
        listItems+= `
        <li>
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
        </a>
        </li> 
        `
       }

ulEl.innerHTML=listItems
}