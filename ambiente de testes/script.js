document.getElementById("searchPrinter").addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();
    const printers = document.querySelectorAll("#printerList li");

    printers.forEach(printer => {
        if (printer.textContent.toLowerCase().includes(searchValue)) {
            printer.style.display = "block"; // Exibe se corresponde à pesquisa
        } else {
            printer.style.display = "none"; // Esconde se não corresponde
        }
    });
});