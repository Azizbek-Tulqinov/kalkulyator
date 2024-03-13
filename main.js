let num1 = prompt("birinchi raqamni kiriting");
let hint = prompt("ishorani kiriting");
let num2 = prompt("ikkinchi raqamni kiriting");

if (hint == "+") {
  alert(+num1 + +num2);
} else if (hint == "-") {
  alert(num1 - num2);
} else if (hint == "*") {
  alert(num1 * num2);
} else if (hint == "/") {
  alert(num1 / num2);
} else {
  alert("qayirdadir hato bor tekshirib qayta urinig");
}
