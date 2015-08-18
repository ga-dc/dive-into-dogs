var dogName = document.querySelector(".js-name")
var imageUrl = document.getElementById("photoimg")
var nextUrl = document.getElementById("photonext")
var prevUrl = document.getElementById("photoprev")

function supports_history_api() {
  return !!(window.history && history.pushState);
}

function addClicker(link) {
  link.addEventListener("click", function(e) {
    $.getJSON(e.target.href, function(response){
      nextUrl.href = response.next
      prevUrl.href = response.prev
      dogName.innerHTML = response.current.name
      imageUrl.src = "/img/" + response.current.src
    })
    e.preventDefault()
  }, true);
}

function setupHistoryClicks() {
  addClicker(document.getElementById("photonext"));
  addClicker(document.getElementById("photoprev"));
}

window.onload = function() {
  if (!supports_history_api()) { return; }
  setupHistoryClicks();
  window.setTimeout(function() {
    window.addEventListener("popstate", function(e) {
      swapPhoto(location.pathname);
    }, false);
  }, 1);
}
