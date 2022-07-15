/* 
overall idea: click title in nav bar to render homepage

when: DOMContentLaded (e)
Cause: mouseClick (e)
Effect: render search home  page
*/

//NODE
const mainDiv = () => document.getElementById("main")
const searchArtLink = () => document.getElementById("search-art-link")
const searchArtLink2 = () => document.getElementById("search-art-link-2")
const homePageLink = () => document.getElementById("home-page-link")


//event listeners
function attachSearchArtClickEvent() {
    //attach event listener
    searchArtLink().addEventListener("click",  fetchArtWork)
    searchArtLink2().addEventListener("mouseover", mouseOver)

}

function attachHomePageClickEvent() {
    //attach event listener
    homePageLink().addEventListener("click", renderHomePage)

}

//event handlers
function renderHomePage() {
    //create html elememts on homepage + render
    resetMainDiv();
   
    // creates element
    const h1 = document.createElement("h1")
    const p = document.createElement("p")

    //sets inner text of element
    h1.innerText = "Welcome to your Virtual Art Museum"
    p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Integer eget aliquet nibh praesent tristique magna sit amet purus. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Sem integer vitae justo eget. Libero nunc consequat interdum varius sit amet mattis vulputate. Commodo odio aenean sed adipiscing diam donec. Erat nam at lectus urna duis convallis convallis. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Fermentum iaculis eu non diam phasellus vestibulum lorem. Imperdiet proin fermentum leo vel orci porta non pulvinar. Dolor purus non enim praesent elementum. Proin nibh nisl condimentum id. Id faucibus nisl tincidunt eget nullam non nisi est sit."

    //add element into mainDiv
    mainDiv().appendChild(h1)
    mainDiv().appendChild(p)


}

function renderSearchArtPage(artWork) {
    //create html elememts on search artworks page + render
      resetMainDiv();
   
      // creates element
      const h3 = document.createElement("h3")
      const p = document.createElement("p")
      
  
      //sets inner text of element
      h3.innerText = "Link to artwork image:"
      p.innerText = artWork
      

      //add element into mainDiv
      mainDiv().appendChild(h3)
      mainDiv().appendChild(p)
      

}

const fetchArtWork = () => {
//fetch return promise and call it when we run respomse and then data
fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/437133" )
    .then(resp => resp.json())
    .then(data => {
        renderSearchArtPage(data.objectURL)
    })

}


//helpers
function resetMainDiv() {
    mainDiv().innerHTML = " " 
}

//DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    renderHomePage();
    attachSearchArtClickEvent();
    attachHomePageClickEvent();
})