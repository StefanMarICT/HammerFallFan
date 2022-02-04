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
	//console.info(window.scrollY); //****just to checking does it work
	const slideIn = (window.scrollY + window.innerHeight) - photo.height;

}
window.addEventListener('scroll', slide);
//////
let someText = document.getElementsByClassName("title");
let nekiBlok = document.getElementById("main");
window.addEventListener(scroll, function () {
	let moving = window.scrollY;
	someText.style.top = 50 + moving * -0.5 + '%';
	nekiBlok.style.top = moving * -0.12 + 'px';
})

//DISCOGRAPHY 
var gallery = document.querySelector("#discography");

var albums = [
	{
		"id": 1,
		"songs": [
			{
				"name": 1,
				"duration": 11
			},
			{
				"name": 4,
				"duration": 41
			},
			{
				"name": 3,
				"duration": 12
			}
		]


	}
];

			function avac () {
				for (let index of albums) {
					for (let indexx of index.songs)
					{
						console.log(indexx.duration);
                    }
					
			}
};
avac()
var discography = [
	{
		"id": 1,
		"name": "Glory to the Brave",
		"image": {
			"src": "Glory",
			"alt":"Glory to the Brave - album cover"
		},
		"songs": ["HammerFall", "Steel Meets Steel", "Stone Cold", "Glory to the Brave", "Ravenlord" ]
	},
	{
		"id": 2,
		"name": "Legacy of Kings",
		"image": {
			"src": "LegacyOfKings",
			"alt": "Legacy of Kings- album cover"
		},
		"songs": ["Heeding the Call", "Legacy of Kings", "Let the Hammer Fall", "Dreamland", "Remember Yesterday"]
	},
	{
		"id": 3,
		"name": "Renegade",
		"image": {
			"src": "Renegade",
			"alt": "Renegade - album cover"
		},
		"songs": ["Templars of Steel", "Renegade", "Living in Victory", "Always Will Be", "The Way of the Warrior", "A Legend Reborn"]
	},
	{
		"id": 4,
		"name": "Crimson Thunder",
		"image": {
			"src": "CrimsonThunder",
			"alt": "Crimson Thunder - album cover"
		},
		"songs": ["Riders of the Storm", "Hearts on Fire", "On the Edge of Honour", "Crimson Thunder", "Dreams Come True", "Angel of Mercy", "Hero's Return"]
	},
	{
		"id": 5,
		"name": "Chapter V -Unbeat, Unbound, Unbroken",
		"image": {
			"src": "ChapterV",
			"alt": "Chapter V - album cover"
		},
		"songs": ["Secrets", "Blood Bound", "Never, Ever", "Born to Rule", "The Templar Flame", "Imperial"]
	},
	{
		"id": 6,
		"name": "Threshold",
		"image": {
			"src": "Threshold",
			"alt": "Threshold - album cover"
		},
		"songs": ["Threshold", "The Fire Burns Forever", "Reign of the Hammer", "Titan"]
	},
	{
		"id": 7,
		"name": "No sacrifice, No victory",
		"image": {
			"src": "NoVictory",
			"alt": "NoVictory - album cover"
		},
		"songs": ["Any Means Necessary", "Life Is Now", "Legion", "No Sacrifice, No Victory"]
	},
	{
		"id": 8,
		"name": "Infected",
		"image": {
			"src": "infected",
			"alt": "Infected - album cover"
		},
		"songs": ["Patient Zero", "I Refuse", "Redemption"]
	},
	{
		"id": 9,
		"name": "(r)Evolution",
		"image": {
			"src": "rEvolution",
			"alt": "rEvolution - album cover"
		},
		"songs": ["Hector's Hymn", "Bushido","Origins","Wildfire"]
	},
	{
		"id": 10,
		"name": "Build To Last",
		"image": {
			"src": "BuildToLast",
			"alt": "BuildToLast - album cover"
		},
		"songs": ["Bring It!", "Dethrone and Defy", "Twilight Princess"]
	},
	{
		"id": 11,
		"name": "Dominion",
		"image": {
			"src": "Dominion",
			"alt": "Dominion - album cover"
		},
		"songs": ["Dominion", "One Against the World", "Scars of a Generation"]
	}

]

function writeAlbums() {
	for (let index of discography) {
		gallery.innerHTML += `<div class ="albums">
	<img src="img/New folder/${index.image.src}.jpg" alt="${index.image.alt}">
	<div class="aboutAlbum">
		<h3>${index.name}</h3>
		<button>Read more</button>
		<div class="moreAbout"><h3>Best songs:</h3><p>${writeSong(index.songs)}</p></div>
	</div></div>`;
	}
}

writeAlbums()

function writeSong(item) {
	let html = '';
	for (let i = 0; i < item.length; i++) {
		html += `<p>${item[i]}<p>`
	}
	return html;
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
	for (let index of tabs) {
		writing += `<div class="text-tabs">
							<input type="text" class="validation" title="Write a message down bellow" id="${index}" placeholder="${index}">
							<h3 class="value">Value ${index} is not correct</h3>
					</div>`;
	}
	writing += `<div class="text-tabs">
					<textarea class="form-control" name="comment" rows="5" cols="40" id="comment" placeholder="Write a comment" maxlength="200">
					</textarea>
					<div id="counting">0/200</div>
				</div>
				<input type="submit" id="send" value="send" />`
	forms.innerHTML = writing;
};
writeForm()

document.getElementById("comment").addEventListener("keyup", function () {
	document.querySelector("#counting").textContent = `${document.getElementById("comment").value.length}/200`;
});

//REGULAR EXPRESSION

document.querySelector("#send").addEventListener("click", function (e)
{
	e.preventDefault()
	findErrors()
})

function findErrors() {

	var wrong = [];
	let fistName, lastName, email, comments;
	firstName = document.querySelector("#Name");
	lastName = document.querySelector("#Last_Name");
	email = document.querySelector("#Email");
	coment = document.querySelector("#comment");
	console.log(firstName, lastName);

	let firstNameRegex = /^[A-ZĆČŽŠĐ][a-zčćžšđ]{2,14}$/;
	let lastNameRegex = /^[A-ZĆČŽŠĐ][a-zčćžšđ]{2,18}$/;  
	let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	let commentRegex = /.{2,200}/;
	let firstNameDone = false;
	let lastNameDone = false;
	let emailDone = false;
	let commentDone = false;


	function checkAll(itemValue, itemRegex, itemDone) {
		if (itemRegex.test(itemValue.value)) {
			itemDone = true;
			if (itemValue.classList.contains("danger"))
				itemValue.classList.remove("danger")
		}
		else
		{
			itemDone = false;
			if (!itemValue.classList.contains("danger"))
				itemValue.classList.add("danger")
        }
    }
	
	checkAll(firstName, firstNameRegex, firstNameDone)
	checkAll(lastName, lastNameRegex, lastNameDone)
	checkAll(email, emailRegex, emailDone)
	checkAll(coment, commentRegex, commentDone)
};


//PERCETAGE growing
function increase() {
    let percentageGrow = 50;
    let maxPercent = parseInt(document.getElementById("value1").innerHTML, 10);

    for(let i = 0; i <= maxPercent; i++) {
        setTimeout(function () {
            document.getElementById("value1").innerHTML = i + "%";
        }, percentageGrow * i);
    }
}
increase();

//FOOTER
var links = document.querySelector("#links ul");

const linked = [{
	"id": 1,
	"link": "https://twitter.com/hammerfall",
	"icons": "fa fa-twitter"
},
{
	"id": 2,
	"link": "https://www.instagram.com/hammerfall_official/",
	"icons": "fa fa-instagram"
},
{
	"id": 3,
	"link": "https://www.youtube.com/channel/UC3Yk2TmVkqi_Kmgct5yZaHA",
	"icons": "fa fa-youtube"
},
{
	"id": 4,
	"link": "https://www.facebook.com/hammerfall",
	"icons": "fa fa-facebook"
},
{
	"id": 5,
	"link": "documentation.pdf",
	"icons": "fa fa-file"
}
];

for (let index of linked) {
	links.innerHTML += `<li><a href="${index.link}"> <i class="${index.icons}"></i></a>|</li>`;
}

