const animalPageArr = ["neko.html", "panda.html", "saru.html", "zou.html"];
let i = Math.floor(Math.random() * animalPageArr.length);
const animalPage = document.getElementById("randomPage");
const buttonClick = () => {
	animalPage.setAttribute("href", animalPageArr[i]);
}
