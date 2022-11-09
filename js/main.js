const btnGenera = document.getElementById("btn-genera");
const gridContainer = document.querySelector(".grid-container");

btnGenera.addEventListener("click", function () {
    griglia();
});

function griglia() {

    for (let i = 1; i <= 100; i++) {
        console.log(i);
        const cella = document.createElement("div");
        cella.classList.add("cella");
        cella.classList.add("text-center");
        cella.style.width = "calc(100%/10)";
        cella.innerHTML = i;
        gridContainer.append(cella); //aggiungo l'elemento all'html
        cella.addEventListener("click", function () {

            this.classList.add("bg-tiffany");
        });

    }

}
