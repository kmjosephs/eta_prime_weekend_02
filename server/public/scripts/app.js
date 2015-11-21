$(function(){
  var source = $('#templateScript').html(); //where handlebars is
  var template = Handlebars.compile(source); //makes the template

  $.ajax({url:'/data/eta.json'}).done(function(data){
    //some code
    var someArray = [];
    function clicked(){
      console.log(someArray);
    }

    var person = template(data.eta[0]); //eta is the array within the json object

    for (var key in data){
      console.log(key);
    }
    
    $('.currentPerson').html(person); //where you want it to go
    $('.previous').on('click', clicked);
  });


  //you can do all the functions here and then call it within the done function
  //or do all the functions here



});

//have a counter that increments the
