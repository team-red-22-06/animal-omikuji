const pageArr = ["daikichi.html", "chukichi.html", "kichi.html", "shoukichi.html", "suekichi.html", "kyou.html"];
let i = Math.floor(Math.random() * pageArr.length);
const page = document.getElementById("randomPage");
const buttonClick = () => {
	page.setAttribute("href", pageArr[i]);
}
