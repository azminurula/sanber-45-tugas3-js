const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Input Bilangan : ", (angka) => {

  if (angka < 0) {
    console.log("Tidak bisa input bilangan negatif");
  } else if (angka % 2 != 0) {
    console.log("Tidak bisa input bilangan ganjil");
  } else {
    console.log("hasil : " + Math.sqrt(angka));
  }
 rl.close();
});