var randumNumber = Math.floor((Math.random() *6)+1)

var randumNumber1 = Math.floor((Math.random() *6)+1)

var randimDiceimage= "dice" + randumNumber +".png"



var imageSource = "images/" + randimDiceimage

var imageSource1 = "images/dice" + randumNumber1 +".png"

console.log(imageSource)
console.log(imageSource1)
var img1 = document.querySelectorAll("img")[0]

var img3 = document.querySelectorAll("img")[1]
console.log(img1)


console.log(img3)

img1.setAttribute("src", imageSource)

img3.setAttribute("src", imageSource1)

var change = document.querySelectorAll("img")[0]

var change1 = document.querySelectorAll("img")[1]


