// variable yang bisa menampung multiple values
// bagaimana cara mengelola variabel yang memiliki banyak data
// indeks dimulai dari 0, indeks adalah urutan variabel
const arraySaya = ['👌','💕','😁'] //indeks 0, 1, 2
console.log(arraySaya)
const panjangArray = arraySaya.length
console.log('Panjang array adalah', panjangArray)

const arrayKosong = []
arrayKosong[0] = 'tiga'
arrayKosong[1] = 'love'
arrayKosong[2] = 'smile'
console.log(arrayKosong)
//cara diatas adalah salah satu cara untuk menambahkan array pada variabel yang kosong

//new = untuk menambahkan array pada variabel
const arrayBaru = new Array('marah','sedih','galau')
arrayBaru[3] = 'tiga' //menambahkan array pada urutan ke 4
arrayBaru[2] = 'stabil' //mengganti array pada urutan indeks ke 2 yaitu galau ke stabil
console.log(arrayBaru)

const cekArray = arrayBaru.includes ('marah') //includes digunakan apakah variabel tersebut mengandung array marah
const cekArray2 = arrayBaru.includes ('tertawa')
const posisiArray = arrayBaru.indexOf('sedih')
const indexBefore = posisiArray - 1
const indexAfter = posisiArray + 1

console.log(cekArray) //true jika mengandung marah
console.log(cekArray2) //false jika tidak mengandung
console.log(posisiArray) //index of digunakan untuk mencari tahu posisi dari array
console.log('index ke',indexBefore,'adalah',arrayBaru[indexBefore])
console.log('index ke',indexAfter, 'adalah',arrayBaru[indexAfter])

if (cekArray) {
    console.log("Array berada pada posisi",posisiArray) }
    else {
    console.log("I dont have any idea about its position")
}

if (cekArray2) {
    console.log("Array berada pada posisi",posisiArray) }
    else {
    console.log("I dont have idea clue about its position")
}

