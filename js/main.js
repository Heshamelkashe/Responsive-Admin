
// const tools_List = document.querySelector('#Tools-List');
// const span = document.querySelectorAll('.span');
// // the function of image user
// document.getElementById("user").onclick =function(){
//     document.getElementById("img-user").style.display ="block";
// };
// document.getElementById("close").onclick = function(){
//   document.getElementById("img-user").style.display ="none";
// };

// chang background from the page
const root = document.querySelector(':root')
document.querySelector('.changed_background').onclick = function () {
    if (document.body.style.background == "black") {
        document.body.style.background = "white";
        root.style.setProperty('--first-Color', 'white');
        root.style.setProperty('--last-Color', 'black');
        document.querySelector('.changed_background').innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        document.body.style.background = "black";
        root.style.setProperty('--first-Color', 'black');
        root.style.setProperty('--last-Color', 'white');
        document.querySelector('.changed_background').innerHTML = '<i class="fa-solid fa-sun"></i>';


    }
}


const open_tools = document.querySelector('#Tools-List')
document.querySelector('#openMenuList').addEventListener("click",function() {
    open_tools.classList.toggle('active_tools')
    console.log("welcome")
})
const list_link = document.querySelectorAll('.Tools-List .listButton button ');
list_link.forEach(li => {
    li.addEventListener("click", function () {
        list_link.forEach(lin=>lin.classList.remove('active-link'))
        li.classList.add('active-link')
    })
})


document.querySelector('.open_FormSearch').addEventListener('click', function () {
    
    if (document.querySelector('.search').style.display=="block") {
        document.querySelector('.search').style.display="none"
    } else {
        document.querySelector('.search').style.display="block"
    }
})




let main_ImageUser = document.querySelector('header .image_user img');
let zoomImageUser = document.querySelector('.showImageUser img');

// show the container image from user
main_ImageUser.onclick = function () {
    document.querySelector('.showImageUser').style.display = "flex";
    zoomImageUser.src = main_ImageUser.src
}
// close the container image from user
function closeImage() {

    document.querySelector('.showImageUser').style.display = "none";
}