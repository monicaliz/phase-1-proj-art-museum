/* 
overall idea: load homepage

when: DOMContentLaded (e)
Cause:DOMContentLaded (e)
Effect: display homepage
*/

//NDOE
const mainDiv = () => document.getElementById("main")

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

function resetMainDiv() {
    mainDiv().innerHTML = " " 
}

document.addEventListener("DOMContentLoaded", () => {
    renderHomePage();
})