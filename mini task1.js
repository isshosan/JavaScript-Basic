// Mini Task

/*
1. prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
2. menentukan hari dari tanggal yang ada saat ini di pc anda
**/


let saldoAwal = 0;
let saldoSetoran = 0;
let saldoPenarikan = 0;
let saldoAkhir = 0;

// Input saldo awal
saldoAwal = Number(prompt("Masukkan saldo awal: "));

// Input saldo setoran
saldoSetoran = Number(prompt("Masukkan saldo setoran: "));

// Input saldo penarikan
saldoPenarikan = Number(prompt("Masukkan saldo penarikan: "));

// Hitung saldo akhir
saldoAkhir = (saldoAwal + saldoSetoran) - saldoPenarikan;

// Output saldo akhir
alert("Saldo akhir Anda adalah: " + saldoAkhir);
