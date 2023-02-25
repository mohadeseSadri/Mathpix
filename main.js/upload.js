function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
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

function myFunctionSm() {
  document.getElementById("myDropdown-sm").classList.toggle("show-sm");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn-sm')) {
    var dropdownsSm = document.getElementsByClassName("dropdown-content-sm");
    var i;
    for (i = 0; i < dropdownsSm.length; i++) {
      var openDropdownSm = dropdownsSm[i];
      if (openDropdownSm.classList.contains('show-sm')) {
        openDropdownSm.classList.remove('show-sm');
      }
    }
  }
}

function accountFunction() {
  document.getElementById("myDropdown-account").classList.toggle("show-account");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn-account')) {
    var dropdownsaccount = document.getElementsByClassName("dropdown-content-account");
    var i;
    for (i = 0; i < dropdownsaccount.length; i++) {
      var openDropdownAccount = dropdownsaccount[i];
      if (openDropdownAccount.classList.contains('show-account')) {
        openDropdownAccount.classList.remove('show-account');
      }
    }
  }
}

var modal = document.getElementById('id01');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var iconFileText = document.querySelector('.icon-file-text')
var iconFilePdf = document.querySelector('.icon-file-pdf')
var iconFileSnip = document.querySelector('.icon-file-snip')
var iconFileArticle = document.querySelector('.icon-file-article')

var fileText = document.querySelector('.file-text')
var filePdf = document.querySelector('.file-pdf')
var fileSnip = document.querySelector('.file-snip')
var fileArticle = document.querySelector('.file-article')

var allFiles = document.querySelector('.all-files')
var uploadFile = document.querySelector('.upload-file')
var allSnip = document.querySelector('.all-snip')
var allArticle = document.querySelector('.all-articles')

fileText.addEventListener('click', function () {
  allFiles.style.display = 'inline'
  fileText.style.color = '#0b93ff'
  iconFileText.style.borderRight = '3px solid #0b93ff'
  filePdf.style.color = 'gray'
  fileSnip.style.color = 'gray'
  fileArticle.style.color = 'gray'
  uploadFile.style.display = 'none'
  allSnip.style.display = 'none'
  allArticle.style.display = 'none'
  iconFilePdf.style.borderRight = 'none'
  iconFileSnip.style.borderRight = 'none'
  iconFileArticle.style.borderRight = 'none'
})

filePdf.addEventListener('click', function () {
  uploadFile.style.display = 'block'
  filePdf.style.color = '#0b93ff'
  iconFilePdf.style.borderRight = '3px solid #0b93ff'
  fileText.style.color = 'gray'
  fileSnip.style.color = 'gray'
  fileArticle.style.color = 'gray'
  iconFileText.style.borderRight = 'none'
  iconFileSnip.style.borderRight = ' none'
  allArticle.style.display = 'none'
  allFiles.style.display = 'none'
  allSnip.style.display = 'none'
  iconFileArticle.style.borderRight = 'none'
})

fileSnip.addEventListener('click', function () {
  allSnip.style.display = 'block'
  fileSnip.style.color = '#0b93ff'
  iconFileSnip.style.borderRight = '3px solid #0b93ff'
  filePdf.style.color = 'gray'
  fileText.style.color = 'gray'
  fileArticle.style.color = 'gray'
  uploadFile.style.display = 'none'
  allFiles.style.display = 'none'
  allArticle.style.display = 'none'
  iconFileText.style.borderRight = 'none'
  iconFilePdf.style.borderRight = 'none'
  iconFileArticle.style.borderRight = 'none'
})

fileArticle.addEventListener('click', function () {
  allArticle.style.display = 'inline'
  fileArticle.style.color = '#0b93ff'
  iconFileArticle.style.borderRight = '3px solid #0b93ff'
  fileArticle.style.color = '#0b93ff'
  filePdf.style.color = 'gray'
  fileText.style.color = 'gray'
  fileSnip.style.color = 'gray'
  uploadFile.style.display = 'none'
  allFiles.style.display = 'none'
  allSnip.style.display = 'none'
  iconFileText.style.borderRight = 'none'
  iconFilePdf.style.borderRight = 'none'
  iconFileSnip.style.borderRight = 'none'
})


var menuNotesSm = document.querySelector('.menu-notes-sm')
var menuIconsm = document.querySelector('.menu-icon-sm')
var welcom = document.querySelector('.welcom')
menuNotesSm.addEventListener('click', function () {
  menuIconsm.style.display = 'flex'
  welcom.style.display = 'none'
  menuNotesSm.style.display = 'none'
})

var iconFileTextSm = document.querySelector('.icon-file-text-sm')
var iconFilePdfSm = document.querySelector('.icon-file-pdf-sm')
var iconFileArticleSm = document.querySelector('.icon-file-article-sm')
var iconFileContactSm = document.querySelector('.icon-contact-sm')

var fileTextSm = document.querySelector('.file-text-sm')
var filePdfSm = document.querySelector('.file-pdf-sm')
var fileArticleSm = document.querySelector('.file-article-sm')
var fileContactSm = document.querySelector('.contact-sm')

var allFilesSm = document.querySelector('.all-files-sm')
var uploadFileSm = document.querySelector('.upload-file-sm')
var allArticleSm = document.querySelector('.all-articles-sm')

fileTextSm.addEventListener('click',function(){
  allFilesSm.style.display = 'inline'
  fileTextSm.style.color = '#0b93ff'
  iconFileTextSm.style.borderBottom = '3px solid #0b93ff'
  filePdfSm.style.color = 'gray'
  fileArticleSm.style.color = 'gray'
  uploadFileSm.style.display = 'none'
  allArticleSm.style.display = 'none'
  iconFilePdfSm.style.borderBottom = 'none'
  iconFileArticleSm.style.borderBottom = 'none'
})

filePdfSm.addEventListener('click', function () {
  uploadFileSm.style.display = 'block'
  filePdfSm.style.color = '#0b93ff'
  iconFilePdfSm.style.borderBottom = '3px solid #0b93ff'
  fileTextSm.style.color = 'gray'
  fileContactSm.style.color = 'gray'
  fileArticleSm.style.color = 'gray'
  iconFileTextSm.style.borderBottom = 'none'
  iconFileContactSm.style.borderBottom = ' none'
  allArticleSm.style.display = 'none'
  allFilesSm.style.display = 'none'
  iconFileArticleSm.style.borderBottom = 'none'
})

fileArticleSm.addEventListener('click', function () {
  allArticleSm.style.display = 'inline'
  fileArticleSm.style.color = '#0b93ff'
  iconFileArticleSm.style.borderBottom = '3px solid #0b93ff'
  fileArticleSm.style.color = '#0b93ff'
  filePdfSm.style.color = 'gray'
  fileTextSm.style.color = 'gray'
  fileContactSm.style.color = 'gray'
  uploadFileSm.style.display = 'none'
  allFilesSm.style.display = 'none'
  iconFileTextSm.style.borderBottom = 'none'
  iconFilePdfSm.style.borderBottom = 'none'
  iconFileContactSm.style.borderBottom = 'none'
})