var nodeList = document.getElementsByTagName("LI");
for (let index = 0; index < nodeList.length; index++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    nodeList[index].appendChild(span);

}

var close = document.getElementsByClassName("close");
for (let index = 0; index < close.length; index++) {
    close[i].onClick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.getElementById('unordered');
list.addEventListener('click', function (item) {
    console.log(item.target.tagName);
    if (item.target.tagName === 'LI') {
        item.target.classList.toggle('checked');
    }
}, false);

function addElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById('input').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert('You must write something!');
    } else {
        document.getElementById('unordered').appendChild(li);
    }
    document.getElementById('input').value = '';

    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);


    for (let index = 0; index < close.length; index++) {
        close[i].onClick = function () {
            var div = this.parentElement;
            div.style.display = 'none';
        }

    }
}
