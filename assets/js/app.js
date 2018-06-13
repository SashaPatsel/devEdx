$(document).ready(function () {
//key = 4c766497d613573233d2c692a67393e
  var queryURL = "https://api.meetup.com/find/groups?access_token=4c766497d613573233d2c692a67393e&zip=94103"
  $.ajax({
    url: "https://api.meetup.com/2/cities",
    method: "GET"
  }).then(function (data) {
    console.log(data)
  })
});