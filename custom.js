AOS.init();
//script for Google Sheet
var scriptURL = "https://docs.google.com/spreadsheets/d/1wVGNF4sVZKaBfSMN9cEckGtMmcW0uv_hrOPNo7n9jFg/edit#gid=0";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});
//scroll to top
$("#top-button").click(
    function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    }
);