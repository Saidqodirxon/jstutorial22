// let str = "2004.12.02.06.12.20";

// console.log(str);
// console.log(str.split(".").slice(4, 7));
let ism = prompt("Ismingizni kiriting : ");
let kun = +prompt("Tugilgan kuningizni kiriting : ");
let oy = +prompt("Tugilgan oyingizni kiriting : ");
let yil = +prompt("Tugilgan yilingizni kiriting : ");
document.querySelector(
  "#kunoyyil"
).textContent = `Kiritilgan ma'lumotlar :\n${ism} ${kun}-kun ${oy}-oy ${yil}-yilda tug'ilgan .`;

let hozirgiYil = new Date().getFullYear();
let hozirgiOy = new Date().getMonth();
let hozirgiKun = new Date().getDate();
let hozirgiSoat = new Date().getHours();
let soat = 0;

document.querySelector("#hisobla").textContent = `${ism} Siz ${
  hozirgiYil - yil
}-yil ${hozirgiOy - oy + 1}-oy ${
  hozirgiKun - kun
}-kun ${hozirgiSoat}-soat yashab qo'yibsiz .`;
