document.getElementById("select-os").addEventListener("change", updateLink);
document.getElementById("select-print").addEventListener("input", updateLink);


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
    const typedPrinter = document.getElementById("select-print").value.toLowerCase().trim();
    const allLinks = document.querySelectorAll(".link-item");
    

    allLinks.forEach(link => {
        const model = link.dataset.model
        if (model.includes(typedPrinter) && links[selectedOS] && links[selectedOS][typedPrinter]) {
            link.href = links[selectedOS][typedPrinter];
        }else {
            link.href = "#"
        }
    });

}

