const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const clickColor = function(){
  box.style.backgroundColor = "#8e44ad"
}

const list = document.getElementById("myList")
const addItem = function () {
    const newItem = document.createElement("li")
    newItem.innerHTML = "A new item!"
    list.appendChild(newItem)
}

const box2 = document.getElementById("box2")
box2.onclick = function () {
   box2.innerHTML = "clicked"
}



//var iDiv = document.createElement('div');
//iDiv.id = 'block';
//iDiv.className = 'block';
//document.getElementsByTagName('body')[0].appendChild(iDiv);


const box3 = document.createElement("div") // dynamically creating an element
console.log(box3);
box3.setAttribute("class", "box3")
box3.onclick = function(){       // adding an event to the new element
    box3.innerHTML = "I'm alive!"
}

document.getElementById('body')[0].appendChild(box3) // now the box will be on the page, and will react to a click!
