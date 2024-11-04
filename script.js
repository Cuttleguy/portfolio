// window.matchMedia('(prefers-color-scheme: dark)')
//       .addEventListener('change',({ matches }) => {
//   if (matches) {
//     console.log("change to dark mode!")
//   } else {
//     console.log("change to light mode!")
//   }
// })
function changeVisibility(element,vis)
{
  if(vis)
  {
    element.style.visibility="visible"
  }
  else
  {
    element.style.visibility="collapse"
  }
}
function useSearch(element,val)
{
 
  changeVisibility(element,element.textContent.toLowerCase().includes(val))

}
solver=document.getElementById("solver");
bot=document.getElementById("bot");
paint=document.getElementById("paint");
eg=document.getElementById("eg");
smellEL=document.getElementById("smell");
factor=document.getElementById("factor");

const elements=document.getElementsByClassName("searchable")
searchForm=document.getElementById("search-form")
searchBar=document.getElementById("search-bar");
searchForm.addEventListener("submit",(e)=>{
 
  e.preventDefault();
  searchValue=searchBar.value.toLowerCase();
  for(let element of elements)
  {
    useSearch(element,searchValue)
  }
  
})