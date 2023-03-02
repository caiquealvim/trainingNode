const process = require("process");

console.log("digite seu nome");
//  entendendo o Process/ o resultado cai dentro de keyboard
process.stdin.on("data", (keyboard) => {
  process.stdout.write(`texto do usuario ${keyboard}`);
  process.exit;
});
