// Your JS goes here

const body = document.body 

for (let i =0; i < 45; i++) {
    const div = document.createElement('div')
    div.style.width = '11.1%'
    div.style.float = 'left'
    div.style.paddingBottom = '11.1%'
//  changeColor(div)
//  setInterval(changeColor, 500, div)

    if (i%2 === 0) {
        //For the black squares
        div.classList.add('type1')
        div.style.backgroundColor = 'black'
//      div.style.backgroundColor = "rgba(0, 0, 0, " + (.02 * i) + ")"
    } else {
        //For the red squares
        div.classList.add('type2')
        div.style.backgroundColor = 'red'
//      div.style.backgroundColor = "rgba(255, 0, 255, " + (.02 * i) + ")"
    }
    body.append(div)
  }

 

function changeColor(div) {
    div.style.backgroundColor = randomColorGenerator()
}


function randomColorGenerator() {
    let x = Math.floor(Math.random()*255)
    let y = Math.floor(Math.random()*255)
    let z = Math.floor(Math.random()*255)
    let color = `rgb(${x}, ${y}, ${z})`
    return color
}