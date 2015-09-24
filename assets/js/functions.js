// Browser detection for when you get desparate. A measure of last resort.

// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }

// Uncomment the below to use:
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


function initPage(){

	// your functions go here

	function windowPopup(url, width, height) {
  // Calculate the position of the popup so
  // it’s centered on the screen.
  var left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);

  window.open(
    url,
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
  );
}

//jQuery
$(".js-social-share").on("click", function(e) {
  e.preventDefault();

  windowPopup($(this).attr("href"), 500, 300);
});

// // Vanilla JavaScript
// var jsSocialShares = document.querySelectorAll(".js-social-share");
// if (jsSocialShares) {
//   [].forEach.call(jsSocialShares, function(anchor) {
//     anchor.addEventListener("click", function(e) {
//       e.preventDefault();

//       windowPopup(this.href, 500, 300);
//     });
//   });
// }

};
