
function doStuff() {
    const searchText = document.getElementById("search-input").value;
    console.log("hello world");
    console.log(searchText);
}

document
    .getElementById("google-search-button")
    .onclick = doStuff;