var addBtn = document.getElementById("addBtn");
var inputValue = document.getElementById("input-value");
var scoreValue = 0;
var list = document.getElementById("ulist");
var addOtel = document.getElementById('addOtel')
var myArr = [];

if (localStorage.getItem('list')) {
    list.innerHTML = localStorage.getItem('list');
    myArr = Array.prototype.slice.call(document.getElementsByTagName('li'));
    myArr.sort(function (a, b) {
        var indexA = myArr.indexOf(a);
        var indexB = myArr.indexOf(b);
        var firstDate = new Date(JSON.parse(myArr[indexA].children[5].textContent));
        var secDate = new Date(JSON.parse(myArr[indexB].children[5].textContent));
        return secDate - firstDate;
    })
}

var modal = document.getElementById('myModal');
var deleteModal = document.getElementById('delete-modal');
var closeSpan = document.querySelector('.close');
var pagNumbers = document.querySelector('.pagination-number');
var currentPage = 1;
const rows = 5;
var itemDelete;




var deleteBtns = document.querySelectorAll('.deleteBtn').forEach(item => {
    item.addEventListener('click', function () {
        var otel = document.getElementById('delete-otel-name');
        var otelName = document.getElementById('otel-name');
        otel.textContent = otelName.textContent.slice(0, otelName.textContent.length - (scoreValue.toString.length));
        itemDelete = item;
        showModal(item);
    })

})

var increaseBtns = document.querySelectorAll('.increase').forEach(item => {
    item.addEventListener('click', function () {

        var location = item.parentElement.innerHTML;
        var element = item.parentElement.children[2].firstElementChild;
        var score = Number(element.textContent);
        element.textContent = score + 1
        var itemdate = item.parentElement.children[6];
        itemdate.textContent = createDate();
        var update = item.parentElement.innerHTML;
        var local = localStorage.getItem('list').replace(location, update);
        localStorage.setItem('list', local);
        handleSort();
    });

})

var decreaseBtns = document.querySelectorAll('.decrease').forEach(
    item => {
        item.addEventListener('click', function () {
            var location = item.parentElement.innerHTML;
            var element = item.parentElement.children[2].firstElementChild;
            var score = Number(element.textContent);
            element.textContent = score - 1
            var itemdate = item.parentElement.children[6];
            itemdate.textContent = createDate();
            var update = item.parentElement.innerHTML;
            var local = localStorage.getItem('list').replace(location, update);
            localStorage.setItem('list', local);
            handleSort();
        })

    }
)

// Modal operations
function showModal(event) {
    if (event.textContent == 'x') {
        deleteModal.style.display = 'block';
    } else {
        addOtel.style.backgroundColor = 'blue'
        addOtel.textContent = 'EKLE'
        modal.style.display = 'block';
    }

}

function hideModal() {
    modal.style.display = 'none';
    deleteModal.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    } else if (event.target === deleteModal) {
        deleteModal.style.display = 'none';
    }
}

function deleteItem() {
    list.removeChild(itemDelete.parentElement);
    var index = myArr.indexOf(itemDelete.parentElement);
    myArr.splice(index, 1);
    if (list.innerHTML == '' && !currentPage == 1) {
        currentPage--;
    }
    displayHotels(myArr, list, rows, currentPage);
    SetupPagination(myArr, pagNumbers, rows);
    localStorage.setItem('list', list.innerHTML);
    hideModal();
}
function addItem() {
    var li = document.createElement('li');
    var score = scoreValue;
    var image = document.createElement('img');
    image.setAttribute('id', 'hotel-img')
    image.setAttribute('src', 'https://i.im.ge/2022/09/17/12LKq8.img.png');

    var deleteBtn = document.createElement('span');
    deleteBtn.setAttribute('class', 'deleteBtn');
    deleteBtn.addEventListener('click', function () {
        var otel = document.getElementById('delete-otel-name');
        var otelName = document.getElementById('otel-name');
        otel.textContent = otelName.textContent.slice(0, otelName.textContent.length - (scoreValue.toString.length));
        itemDelete = deleteBtn;
        deleteModal.style.display = 'block';
    });

    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);

    li.setAttribute('class', 'list-item');
    li.appendChild(image);
    var text = document.createElement('p');
    text.setAttribute('id', 'otel-name')
    text.appendChild(document.createTextNode(inputValue.value));


    var scorebox = document.createElement('span');
    scorebox.setAttribute('class', 'score');
    scorebox.appendChild(document.createTextNode(score));
    text.appendChild(scorebox);



    li.appendChild(text);

    var increaseBtn = document.createElement('span');
    increaseBtn.setAttribute('class', 'increase');
    increaseBtn.appendChild(document.createTextNode('PUAN ARTIR'));
    increaseBtn.addEventListener('click', function () {

        var location = increaseBtn.parentElement.innerHTML;
        var element = increaseBtn.parentElement.children[2].firstElementChild;
        var score = Number(element.textContent);
        element.textContent = score + 1
        var itemdate = increaseBtn.parentElement.children[6];
        itemdate.textContent = createDate();
        var update = increaseBtn.parentElement.innerHTML;
        var local = localStorage.getItem('list').replace(location, update);
        localStorage.setItem('list', local);
        handleSort();

    })

    li.appendChild(increaseBtn);

    var decreaseBtn = document.createElement('span');
    decreaseBtn.setAttribute('class', 'decrease');
    decreaseBtn.appendChild(document.createTextNode('PUAN AZALT'));
    decreaseBtn.addEventListener('click', function () {
        var location = decreaseBtn.parentElement.innerHTML;
        var element = decreaseBtn.parentElement.children[2].firstElementChild;
        var score = Number(element.textContent);
        element.textContent = score - 1
        var itemdate = decreaseBtn.parentElement.children[6];
        itemdate.textContent = createDate();
        var update = decreaseBtn.parentElement.innerHTML;
        var local = localStorage.getItem('list').replace(location, update);
        localStorage.setItem('list', local);
        handleSort();
    });
    li.appendChild(decreaseBtn);

    const date = createDate();

    var dateobj = document.createElement('p');
    dateobj.setAttribute('class', 'date');
    dateobj.appendChild(document.createTextNode(date));

    li.appendChild(dateobj);

    var updatedate = document.createElement('p');
    updatedate.setAttribute('class', 'date');
    updatedate.appendChild(document.createTextNode(date));
    li.appendChild(updatedate);

    list.innerHTML = localStorage.getItem('list');
    list.appendChild(li);
    localStorage.setItem('list', list.innerHTML);

    myArr.push(li);

    displayHotels(myArr, list, rows, currentPage);
    SetupPagination(myArr, pagNumbers, rows);
    addOtel.style.backgroundColor = 'green';
    addOtel.textContent = '✔️ EKLENDİ'
}
function createDate() {
    const year = new Date().getFullYear();
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    const fulldate = new Date(year, month, day, hour, min, sec);

    return JSON.stringify(fulldate);

}
function handleSort() {
    var selected = document.getElementById('selection').value;
    if (selected == 'ascending') {
        sortAscending();
    } else if (selected == 'descending') {
        sortDescending();
    }
}


function sortAscending() {
    myArr.sort(function (a, b) {
        var indexA = myArr.indexOf(a);
        var indexB = myArr.indexOf(b);
        var first = Number(myArr[indexA].children[2].firstElementChild.textContent);
        var second = Number(myArr[indexB].children[2].firstElementChild.textContent);

        if (first - second == 0) {
            var firstDate = new Date(JSON.parse(myArr[indexA].children[6].textContent));
            var secDate = new Date(JSON.parse(myArr[indexB].children[6].textContent));
            return firstDate - secDate;
        }
        return first - second;
    });
    currentPage = 1;
    displayHotels(myArr, list, rows, currentPage);
    SetupPagination(myArr, pagNumbers, rows);
}

function sortDescending() {
    myArr.sort(function (a, b) {
        var indexA = myArr.indexOf(a);
        var indexB = myArr.indexOf(b);
        var first = Number(myArr[indexA].children[2].firstElementChild.textContent);
        var second = Number(myArr[indexB].children[2].firstElementChild.textContent);
        if (first - second == 0) {
            var firstDate = new Date(JSON.parse(myArr[indexA].children[6].textContent));
            var secDate = new Date(JSON.parse(myArr[indexB].children[6].textContent));
            return secDate - firstDate;
        }
        return second - first;
    });

    currentPage = 1;
    displayHotels(myArr, list, rows, currentPage);
    SetupPagination(myArr, pagNumbers, rows);
}

function displayHotels(items, listelement, itemperpage, page) {
    listelement.innerHTML = '';
    page--;
    const start = itemperpage * page;
    const end = itemperpage + start;

    let paginatedItems = items.slice(start, end);


    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];
        listelement.appendChild(item);
    }

}
function SetupPagination(items, wrapper, itemperpage) {
    wrapper.innerHTML = '';
    let pagecount = Math.ceil(items.length / itemperpage);
    if (pagecount > 1) {
        let leftArrow = document.createElement('button');
        leftArrow.textContent = '<';
        leftArrow.setAttribute('id', 'leftArrow');
        leftArrow.addEventListener('click', function () {
            if (currentPage != 1) {
                currentPage--;
                displayHotels(myArr, list, rows, currentPage);
                SetupPagination(myArr, pagNumbers, rows);
            }
        });
        wrapper.appendChild(leftArrow);
    }
    for (let i = 1; i < pagecount + 1; i++) {
        let btn = PaginationButton(i);
        wrapper.appendChild(btn);
    }
    if (pagecount > 1) {
        let rightArrow = document.createElement('button');
        rightArrow.textContent = '>';
        rightArrow.setAttribute('id', 'rightArrow');
        rightArrow.addEventListener('click', function () {

            if (currentPage < pagecount) {
                currentPage++;
                displayHotels(myArr, list, rows, currentPage);
                SetupPagination(myArr, pagNumbers, rows);
            }
        });
        wrapper.appendChild(rightArrow);
    }


}
function PaginationButton(page) {
    let pagBtn = document.createElement('button');
    pagBtn.innerText = page;
    pagBtn.setAttribute('id', 'pagBtn');
    if (currentPage == page) pagBtn.classList.add('active');
    pagBtn.addEventListener('click', function () {
        currentPage = page;
        displayHotels(myArr, list, rows, currentPage);
        let currBtn = document.querySelector('.active');
        currBtn.classList.remove('active');

        pagBtn.classList.add('active');
    })
    return pagBtn;
}

displayHotels(myArr, list, rows, currentPage);
SetupPagination(myArr, pagNumbers, rows);