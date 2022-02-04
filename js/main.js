//navigation menubar

var navBar = document.querySelector("#navigation ul");

var navNames = ["Home", "Discography", "About", "Author"];
var navLinks = ["index.html", "#discography", "#about_us", "#author" ];

for(var index in navNames){
	navBar.innerHTML += `<li><a href="${navLinks[index]}">  ${navNames[index]} </a></li>`;
}


//photo
var photo = document.createElement("img");
photo.setAttribute("src", "img/hammerfall.jpg");
photo.setAttribute("alt", "frontman of band");
console.log(photo);
var aboutImage = document.getElementById("aboutPhoto");
aboutImage.appendChild(photo);

var text1 = document.getElementById("aboutPhotoText");
var infos = document.createElement("span");

///
function slide(e) {
	//console.info(window.scrollY);
	const slideIn = (window.scrollY + window.innerHeight) - photo.height;

}
window.addEventListener('scroll', slide);
//////
let nekiText = document.getElementsByClassName("title");
let nekiBlok = document.getElementById("main");
window.addEventListener(scroll, function () {
	let moving = window.scrollY;
	nekiText.style.top = 50 + moving * -0.5 + '%';
	nekiBlok.style.top = moving * -0.12 + 'px';
})

//gallery
var gallery = document.querySelector("#discography");
var albumImages = ["Glory", "LegacyOfKings", "Renegade", "CrimsonThunder", "ChapterV", "Threshold", "NoVictory", "infected", "rEvolution", "BuildToLast", "Dominion"];
var albumNames = ["Glory to the Brave", "Legacy of Kings", "Renegade", "Crimson Thunder", "Chapter V -Unbeat, Unbound, Unbroken", "Threshhold", "No sacrifice, No victory","Infected", "(r)Evolution", "Build To Last", "Dominion"];

for (let i = 0; i < albumNames.length; i++) {
	gallery.innerHTML+=`<div class="albums"><img src="img/New folder/${albumImages[i]}.jpg" alt="${albumNames[i]}"/><div class="aboutAlbum"><h3>${albumNames[i]}</h3><a href="discography.html">Read more</a></div></div>`
}


//SLIDER
setInterval(slider, 4000);

var counter = 1;
function slider() {
	document.querySelector("#slider img").src = "img/slide" + counter + ".jpg";
	counter++;
	if (counter == 5) {
		counter = 1;
    }

}

//FORMS
function writeForm() {
	var tabs = ["Name", "Last_Name", "Email"];
	var forms = document.getElementById("forms");
	var writing = "<h4>Send a comment</h4>";
	for (var index of tabs) {
		writing += `<div class="text-tabs">
							<input type="text" class="validation" title="Write a message down bellow" id="${index}" placeholder="${index}">
					</div>`;
		console.log(index);
	}
	writing += `<div class="text-tabs">
					<textarea class="form-control" name="comment" rows="4" id="comment" placeholder="Write a comment" maxlength="200">
					</textarea>
					<div id="counting">0/200</div>
				</div>
				<input type="submit" id="send" value="send" />`
	forms.innerHTML = writing;
	console.log(writing);
};
writeForm()

document.getElementById("comment").addEventListener("keyup", function () {
	document.querySelector("#counting").textContent = `${document.getElementById("comment").value.length}/150`;
});
//REGULAR EXPRESSION

/*function forms(e) {
	e.PreventDefault()

	var wrong = [];
	let name, lastname, email, comments;
	name = document.querySelector("#Name").value;
	lastname = document.querySelector("#Last_Name").value;
	name = document.querySelector("#Email").value;
	name = document.querySelector("#Text").value;
	console.log(name, lastname);




};*/
function validation() {
	let successed = true;
	let email = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
	let name = new RegExp(/^[A-ZŠ???Ž][a-zš???ž]{2, 13}+$/);
	let lastName = new RegExp(/^[A-ZŠ???Ž][a-zš???ž]{2, 17})+$/);

	function findError(item, message) {
		item.classList.add('error');
		item.nextElementSibling.innerText = message;
		item.nextElementSibling.style.display = "block";
    }
}
//FOOTER
var links = document.querySelector("#links ul");

const linked = ["https://twitter.com/hammerfall", "https://www.instagram.com/hammerfall_official/", "https://www.youtube.com/channel/UC3Yk2TmVkqi_Kmgct5yZaHA", "https://www.facebook.com/hammerfall", "documentation.pdf"];
const icons = ["fa fa-twitter", "fa fa-instagram", "fa fa-youtube", "fa fa-facebook", "fa fa-file"];

for (var index in linked) {
	links.innerHTML += `<li><a href="${linked[index]}"> <i class="${icons[index]}"></i></a>|</li>`;
}