var mainNavbarExpanded = false;
var navbarButton = document.getElementById("navbarbutton")
navbarButton.addEventListener("click", navbarToggle);
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function(error) {
      console.log('Service worker registration failed, error:', error);
    });
  }
  function navbarToggle()
  {
    var navbar = document.getElementById("mainNavbar")
    var navbarList = document.getElementById("mainNavbarList")
    if (!mainNavbarExpanded)
    {
      mainNavbarExpanded = true;
      navbar.style.animation = "navbarExpand 1s forwards";
      navbarList.style.animation = "navbarListExpand 1s forwards";
    }
    else {
      mainNavbarExpanded = false;
      navbarList.style.animation = "navbarListContract 1s forwards";
      navbar.style.animation = "navbarContract 1s forwards";
    }
  }