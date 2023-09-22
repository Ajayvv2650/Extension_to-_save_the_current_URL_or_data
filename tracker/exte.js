let myleads=[]
const inputEL=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myleads"))
const deletebtn=document.getElementById("delete-btn")
const tabbtn=document.getElementById("tab-btn")

if(leadsFromLocalStorage){
  myleads=leadsFromLocalStorage
  render(myleads)

}

tabbtn.addEventListener("click",function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs)
  {
    console.log(tabs)
    myleads.push(tabs[0].url)
    console.log(myleads)
    localStorage.setItem("myleads", JSON.stringify(myleads))
    render(myleads)
  })


})


deletebtn.addEventListener("click", function(){
  localStorage.clear()
  console.log("dekeye")
  myleads=[]
  render(myleads)
})


function render(leads){
  let listItems=""
   for(let i=0;i<leads.length;i++){
    listItems+=`
    <li>
        <a target='_blank' href=${leads[i]}> 
        ${leads[i]}
    </a>
    </li>`
      
  }
  ulEl.innerHTML=listItems
  }
  

inputBtn.addEventListener("click", function()
{
    myleads.push(inputEL.value)
    inputEL.value=""
    localStorage.setItem("myleads", JSON.stringify(myleads))
    render(myleads)
    
})


