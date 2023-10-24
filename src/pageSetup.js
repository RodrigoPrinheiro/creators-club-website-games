let page = 0;
let pageCounter;

const pages = ["title.html", "engine.html", "climbo.html"]

document.addEventListener("keydown", keypressed, false)

window.addEventListener("load", (event) => {
    if (sessionStorage.getItem('page') == null){
        sessionStorage.setItem('page', page);
    }
    
    page = Number(sessionStorage.getItem('page'));
    
    console.log(page);
    document.getElementById("backBtn").onclick = back;
    document.getElementById("forwardBtn").onclick = forward;
    pageCounter = document.getElementById("pageCounter");
    console.log("loaded");
    
    updatePageCounter();
  });

function forward(){
    page++;

    clampPage();
    console.log("forward");

    updatePageCounter();
    setPage();
}

function back(){
    page--;

    clampPage();
    console.log("back");

    updatePageCounter();
    setPage();
}

function updatePageCounter(){
    if (pageCounter != null){
        pageCounter.innerHTML = (page + 1).toString() + "/3"
    }
}

function setPage(){
    sessionStorage.setItem('page', page);
    document.location.href = pages[page];
}

function clampPage(){
    page = Math.max(0, Math.min(pages.length - 1, page))
}

function keypressed(event)
{
    switch(event.code){
        case "Space":
            forward();
            break;
    }
}