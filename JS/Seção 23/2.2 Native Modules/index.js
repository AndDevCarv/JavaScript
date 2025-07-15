const fs = require("fs");

fs.writeFile("test.txt", "Hello from nodeJS", (err) => {
    if (err) throw err;
    console.log("The file as been saved!");
})

fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("ocorreu um erro ao ler o arquivo:", err);
    }
    console.log("conteudo:", data);
})