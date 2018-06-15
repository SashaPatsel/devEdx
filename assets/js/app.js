$(document).ready(function () {

  var queryURL = "https://api.meetup.com/find/groups?zip=94103&page50=&sig_id=239945662&offset=1&sig=36248f17bb4230492d4164e179c8f79e3e2d1973"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(res){
    console.log(res)
  })

$(".meetup-modal").on("click", function() {

  $(".meetup1").modal("show")  
})

$(".meetup-modal2").on("click", function(){
  $(".meetup1").modal("hide")  
  $(".meetup2").modal("show")  
})

$(".iframe-wrap").on("click", function(){
  
})

});