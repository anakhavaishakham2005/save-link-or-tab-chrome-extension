const inputBtn=document.getElementById("input-btn")
let myLeads=[]
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const leads=document.getElementById("leads")
// localStorage.setItem("myLeads")
// myLeads=JSON.parse(myLeads)//turn myLeads string to array
// myLeads.push("www.instagram.com")//push new to array
// myLeads=JSON.stringify(myLeads)//turn myLeads array to string
leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value="" 
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
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