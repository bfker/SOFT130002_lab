const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
var header = document.getElementsByClassName("header");
console.log(0);
for(var i = 0; i < works.length; i++) {
	console.log(i);
	var itm = document.createElement("div");
	itm.setAttribute('class','item');
	var tips = document.createElement("h4");
	tips.innerHTML = "Genre : " + works[i].tips;
	var innerBox1 = document.createElement("div");
	innerBox1.setAttribute('class','inner-box');
	var author = document.createElement("h3");
	author.innerHTML = works[i].author;
	author.style.display = 'inline-block';
	innerBox1.appendChild(author);
	var lifeTime = document.createElement("span");
	lifeTime.innerHTML = "lifetime:" + works[i].lifetime;
	lifeTime.style.marginLeft = '7px';
	innerBox1.appendChild(lifeTime);
	var innerBox2 = document.createElement("div");
	innerBox2.setAttribute('class','inner-box');
	var secondTitle = document.createElement("h3");
	secondTitle.innerHTML = "Popular Photos";
	innerBox2.appendChild(secondTitle);
	for(var j = 0; j < works[i].photos.length; j++) {
		var photo = document.createElement("div");
		photo.setAttribute('class', 'photo');
		photo.style.display = 'inline-block';
		photo.style.backgroundImage = "url(" + works[i].photos[j] + ")";
		photo.style.backgroundSize = '100% 100%';
		innerBox2.appendChild(photo);
	}
	var button = document.createElement("button");
	button.innerHTML = "Visit";
	itm.appendChild(tips);
	itm.appendChild(innerBox1);
	itm.appendChild(innerBox2);
	itm.appendChild(button);
	header[0].appendChild(itm);
}