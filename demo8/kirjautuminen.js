document.addEventListener("DOMContentLoaded", onkokirjautunut);

function onkokirjautunut() {
    
 if (logalStorage.getItem("kirjautunut") === "kylla") {
     document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
     document.getElementById("kirjautumis_lomake").style.display = "none";
    
 }
}

function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    logalStorage.setItem("kirjautunut", "kylla");
}

function 