const inputBtn=document.getElementById("input-btn")
let myLeads=[]
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const leads=document.getElementById("leads")
const tabBtn=document.getElementById("tab-btn")
// localStorage.setItem("myLeads")
// myLeads=JSON.parse(myLeads)//turn myLeads string to array
// myLeads.push("www.instagram.com")//push new to array
// myLeads=JSON.stringify(myLeads)//turn myLeads array to string
const deleteBtn=document.getElementById("delete-btn")
const tabs=[]

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
    
})

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads(myLeads)
}

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()//clear local storage
    myLeads=[]//clear myLeads array
    renderLeads(myLeads)//render empty list
})
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value="" 
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads(myLeads)
})

function renderLeads(leads){  
let listItems=""
for(let i=0;i<leads.length;i++)
       {
        //ulEl.innerHTML+= "<li>"+myLeads[i]+"</li> "
        //or here we create a new li element,set text content and then append it.
        // const li=document.createElement("li")
        // li.textContent=myLeads[i]
        // ulEl.append(li)//or
        listItems+= `
        <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
        </li> 
        `
       }

ulEl.innerHTML=listItems
}