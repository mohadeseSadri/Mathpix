/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// Modal construction in the main part 
var modal = document.getElementById('id01');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var modal = document.getElementById('id02');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var modal = document.getElementById('id03');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Change the style of the button when it is clicked
var buttonUpdate = document.querySelector(".button-update")
function clickFunc(){
  buttonUpdate.style.color='#047DD6'
  buttonUpdate.style.backgroundColor = 'white'
}