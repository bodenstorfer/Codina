function machwas () {
    let element = document.getElementsByTagName("p")[0];
    element.innerHTML += " dazu";
}

function tunochwas () {
    let element = document.getElementsByTagName("p")[0];
    element.innerHTML = element.innerHTML.replaceAll("zu", "hin");
}