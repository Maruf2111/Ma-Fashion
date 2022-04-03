
// // cart click system

// var removeBtn = document.getElementsByClassName("fa-trash-alt");

// for(var i = 0; i < removeBtn.length; i++){
//     removeBtn[i].addEventListener('click' , removeButton)
// }

// function removeButton(event){
//     var removeEl = event.target;
//     var removeParent = removeEl.parentElement.parentElement.remove();
// }

// var addtocartBtn = document.getElementsByClassName("featured-btn");

// for(var i = 0; i < addtocartBtn.length; i++){
//     addtocartBtn[i].addEventListener('click' , addtocartButton)
// }

// function addtocartButton(event){
//     addtocartEl = event.target;
//     addtocartParent = addtocartEl.parentElement.parentElement;
//     // console.log(addtocartParent);
//     var cartImage = addtocartParent.children[0].src;
//     var cartTitle = addtocartParent.children[2].innerText;
//     var cartPrice = addtocartParent.children[3].innerText;

//     addtocart(cartImage, cartTitle, cartPrice);
// }

// var tableBody = document.getElementsByTagName("tbody")[0];

// function addtocart(cartImage, cartTitle, cartPrice){
//    var creatElement = document.createElement('tr');

//    creatElement.innerHTML = `<td class="first-data"><i class="far fa-trash-alt"></i></td>
//    <td class="second-data"><img src="${cartImage}" alt=""></td>
//    <td class="third-data"><h5>${cartTitle}</h5></td>
//    <td class="four-data"><h5>${cartPrice}</h5></td>
//    <td class="five-data"><input type="number" value="1"></td>
//    <td class="six-data"><h5>$200</h5></td>`

//    tableBody.append(creatElement);
// }





// toggle navbar

const sideBar = document.querySelector(".header-menu")
const menubarIcon = document.querySelector(".menubar-icon .fa-bars")
const menucrossIcon = document.querySelector(".menubar-icon .fa-times")

function menuBar(){
    sideBar.style.right = "0";
    menubarIcon.style.display = "none";
    menucrossIcon.style.display = "block";
}
function crossBar(){
    sideBar.style.right = "-100%";
    menubarIcon.style.display = "block";
    menucrossIcon.style.display = "none";
}


// toggle searchbar

const searchBar = document.querySelector(".search-bar");
const searchbarsearchIcon = document.querySelector("#searchbarsearchIcon");
const searchbarcrossIcon = document.querySelector("#search-cross");

function searchIcon(){
    searchBar.style.display = "block";
    searchbarcrossIcon.style.display = "block";
    searchbarsearchIcon.style.display = "none";
}

function searchcrossBar(){
    searchBar.style.display = "none";
    searchbarcrossIcon.style.display = "none";
    searchbarsearchIcon.style.display = "block";
}

// single product section

// const bigImg = document.getElementById("big-image");
// const smallImg = document.getElementById("small-image");


// smallImg[0].onclick = function(){
//     bigImg.src = smallImg[0].src;
// }
// smallImg[1].onclick = function(){
//     bigImg.src = smallImg[1].src;
// }
// smallImg[2].onclick = function(){
//     bigImg.src = smallImg[2].src;
// }
// smallImg[3].onclick = function(){
//     bigImg.src = smallImg[3].src;
// }


// singup and login form

const singupForm = document.querySelector(".singup-form")
const loginForm = document.querySelector(".login-form")

function logIn(){
    singupForm.style.display = "none";
    loginForm.style.display = "block";
}

function singUp(){
    singupForm.style.display = "block";
    loginForm.style.display = "none";
}

/*-------scroll to top js-----------*/
$('body').materialScrollTop();


