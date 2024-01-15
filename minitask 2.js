// menentukan hari dari tanggal yang ada saat ini di pc anda
let tanggal = new Date();
let hari = tanggal.getDay();
let hariIndonesia = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

// Output hari
alert("Hari ini adalah: " + hariIndonesia[hari]);

/*
Hari	Integer
Minggu	0
Senin	1
Selasa	2
Rabu	3
Kamis	4
Jumat	5
Sabtu	6
*/