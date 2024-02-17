let nama = 'ridho' //string
let usia = 30 // integer number/bilangan asli
let tinggiBadan = 170.5 // float/decimal, jika nama lebih dari satu kata maka kata berikutnya menggunakan capital atau bisa disebut Camel Case
let pacar = 3 // variabel tidak memiliki nilai/kosong
let beratBadan = 69 // akan muncul undefined karena tidak memiliki nilai

// if (pacar == null) // == jika variabel adalah, != jika variable bukan
//   {pacar = "belum punya";}
//   else 
//   {pacar = "udah punya";}

// switch(pacar) { //pacar adalah statement
//   case 1 :
//     pacar = "punya 1 aja"
//   break
//   case 2 :
//     pacar = "punya pacar 2, aku cukup playboy"
//   default :
//     pacar = "belum punya pacar"
//     break
// }

// alert(`nama saya ${nama}, usia saya itu ${usia}, tinggi badan saya adalah ${tinggiBadan}, dan pacar saya ${pacar} dengan berat badan saya ${beratBadan}`);

let warnaMainan = "merah";

switch (warnaMainan) {
  case "merah":
    console.log("Aku ambil robot!");
    break;
  case "biru":
    console.log("Aku ambil kapal pesiar!");
    break;
  default:
    console.log("Aku belum memilih mainan.");
}

alert("Aku sudah selesai memilih mainan!");



