/* Elements to be targeted by JavaScript */ 

const markAll = document.querySelector(".mark-all");
const comment = document.querySelectorAll(".comment"); 
const unreadCounter = document.querySelector('.unread-counter'); 
const red = document.querySelectorAll(".red"); 
const message = document.querySelector(".message"); 

/* Function that controls the unread card counter */ 

function unread() {
    let counter = 0; 
    //Go through each card, and if it contains the class of "unread", count it
    comment.forEach(commentCard => {
        if (commentCard.classList.contains("unread")) {
            counter++; 
        }
    })
    unreadCounter.textContent = counter; 
}

/* If mark all as read is clicked, remove the classes that indicate that a message is unread and change the counter accordingly */ 

markAll.addEventListener("click", () => {
    comment.forEach((comments, index) => {
        comments.classList.remove("unread"); 
        red[index].classList.remove("visible"); 
        unread(); 
    })
})

/* Go through all comments and if it contains the class unread, make the red circle visibile. Once it is clicked toggle the unread class make the red circle visible or hidden based on that classs */ 

comment.forEach((comments, index) => {
    if (comments.classList.contains("unread")) {
        red[index].classList.add("visible"); 
    }
    comments.addEventListener("click", () => {
        comment[index].classList.toggle("unread"); 
        red[index].classList.toggle("visible"); 
        unread(); 
    })
}); 

unread(); 