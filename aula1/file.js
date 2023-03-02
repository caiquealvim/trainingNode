// criando um novo arquivo no servidor
const fs = require("fs");
// o writeFile ele paga tudo e escreve de novo, ja o appendFile acrescenta
fs.writeFile("text.txt", "ola NodeJs", (err) => {
  console.log(err);
});

// renomeia o arquivo Rename
fs.rename("text.txt", "text2.txt", (err) => {
  console.log(err);
});
// apaga o arquivo Unlink
fs.unlink("text2.txt", (err) => {
  console.log(err);
  ("");
});
