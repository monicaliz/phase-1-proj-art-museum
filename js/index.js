/* 
overall idea: add own post

when: sbmit (e)
Cause: mouseClick (e)
Effect: patch to main div  container?
*/

// JAVASCRIPT LOGIC FOR POSTS
let cardPosts = [
    {
        name: "artwork title",
        description: "artwork info"
    },

]

// SELECTORS
const mainDiv = () => document.getElementById("main")
const homePageLink = () => document.getElementById("home-page-link")
const myArtworksLink = () => document.getElementById("my-artworks-page-link")

// FUNCTIONS
const renderPost = cardPost => {
    //render post to page
    const col = document.createElement('div')
    col.className = "col s12"
    col.appendChild(createPost(cardPost))

    return col;
}

const renderPosts = () => {
    const row = document.createElement("row");
    row.className = "row";

    cardPosts.forEach(cardPost => {    
        const col = renderPost(cardPost)
        row.appendChild(col)
        })

        mainDiv().appendChild(row)
}

//EVENT HANDLERS
function renderHomePage() {
    //create html elememts on homepage + render
    resetMainDiv();
   
    // creates element
    const h2 = document.createElement("h2")
    const p = document.createElement("p")

    //sets inner text of element
    h2.innerText = "Welcome to the Virtual Art Museum"
    p.innerText = "phase 1 project by monica liz rodriguez"

    //add element into mainDiv
    mainDiv().appendChild(h2)
    mainDiv().appendChild(p)
}

const renderMyArtWorksPage = (e) => {
    // e.preventDefault();
    
    resetMainDiv();
    
    const h2 = document.createElement("h2")
    const p = document.createElement("p")

    //sets inner text of element
    h2.innerText = "my artworks"
    p.innerText = "these are cards that I submitted from the main gallery page"

    //add element into mainDiv
    mainDiv().appendChild(h2)
    mainDiv().appendChild(p)

    renderPosts();

}

// HELPERS

const createPost= (cardPost) => {
    const divCard = document.createElement('div')
    const divCardContent = document.createElement('div')
    const divCardAction = document.createElement('div')
    const divImg = document.createElement('IMG')
    const span = document.createElement('span')
    const pDecriptiction = document.createElement('p')
    const link1 = document.createElement('a')

    divCard.className = "card"
    divImg.className = "card-image"
    span.className = "card-title"
    divCardContent.className = "card-content"
    divCardAction.className = "card-action"

    divImg.setAttribute = ("src", "/artwork-images/sf-rlc-1975-1-879.jpeg")
    link1.a = "#"

    span.innerText = "new post"
    pDecriptiction.innerHTML = "description"
    link1.innerText = "artwork"

    // divImg.appendChild("IMG")
    divImg.appendChild(span)
    divCardContent.appendChild(pDecriptiction)
    divCardAction.appendChild(link1)

    divCard.appendChild(divImg)
    divCard.appendChild(divCardContent)
    divCard.appendChild(divCardAction)

    return divCard;
}

 const resetMainDiv = () => {
     mainDiv().innerHTML = ""
 }
//event listeners
function attachHomePageClickEvent() {
    homePageLink().addEventListener("click", renderHomePage)

}

function attachPostLinkEvent(){
 myArtworksLink().addEventListener("click", renderMyArtWorksPage)
}


//DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    renderHomePage();
    renderMyArtWorksPage();
    attachPostLinkEvent();
    attachHomePageClickEvent();
})