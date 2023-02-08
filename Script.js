const container = document.querySelector(".container")
const imgurl = "https://source.unsplash.com/random/"
for(i = 0; i<100; i++){
const img = document.createElement("img");
img.src = `${imgurl}${randomgenerator()}`
container.appendChild(img)
}

function randomgenerator(){
    return Math.floor(Math.random()*1000)
}
