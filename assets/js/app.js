$(document).ready(function () {
//key = 4c766497d613573233d2c692a67393e
  // var queryURL = "https://api.meetup.com/find/groups?zip=94103&sig=4c766497d613573233d2c692a67393e"
  // $.ajax({
  //   url: "https://api.meetup.com/find/groups?&photo-host=public&page=50&text=ionic&sig_id=2109318&radius=global&order=newest&sig=ad335a79ccce2b1bb65b27fe10ea6836305e5533",
  //   method: "GET"
  // }).then(function (data) {
  //   console.log(data)
  // })

$(".meetup-modal").on("click", function() {

  $(".meetup1").modal("show")  
})

$(".meetup-modal2").on("click", function(){
  $(".meetup1").modal("hide")  
  $(".meetup2").modal("show")  
})


});