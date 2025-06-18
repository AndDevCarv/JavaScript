document.getElementById("select-os").addEventListener("change", updateLink);


const links = {
    windows11: {
        br1202: "https://www.google.com/?hl=pt-BR",
        br5652: "https://www.google.com/?hl=pt-BR",
        br2540: "https://www.google.com/?hl=pt-BR",
        hp400: "https://www.google.com/?hl=pt-BR",
        hp1102: "https://www.google.com/?hl=pt-BR",
    },

    windows1032: {
        br1202: "https://www.youtube.com/",
        br5652: "https://www.youtube.com/",
        br2540: "https://www.youtube.com/",
        hp400: "https://www.youtube.com/",
        hp1102: "https://www.youtube.com/",
    }
}

function updateLink() {
    const selectedOS = document.getElementById("select-os").value;
    const typedPrinter = document.getElementById("input-printer").value.toLowerCase().trim();
    const allLinks = document.querySelectorAll(".link-item");

    if (selectedOS && typedPrinter) {
        allLinks.href = links[selectedOS][typedPrinter] || "#";
    }
}

function searchPrint() {
    document.getElementById("select-print").addEventListener("input", function() {
        const searchItem = this.value.trim().toLowerCase();
        const printList = document.querySelectorAll("#printer-list li");

        printList.forEach(item => {
            const text = item.textContent.toLowerCase();

            if (text.includes(searchItem)) {
                item.style.display = "list-item"
            }
            else {
                item.style.display = "none"
            }
        });
    })
}