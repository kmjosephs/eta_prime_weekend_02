$(function(){
  var source = $('#templateScript').html(); //where handlebars is
  var template = Handlebars.compile(source); //makes the template

  var previousButtonArray=[];
  var nextButtonArray=[];

  $.ajax({url:'/data/eta.json'}).done(function(data){
    //some code

    var person = template(data.eta[0]); //eta is the array within the json object

    $('.currentPerson').html(person); //where you want it to go


  });





  //you can do all the functions here and then call it within the done function
  //or do all the functions here



});

//have a counter that increments the
/*
for (var i=1; i < previousButtonArray.length; i++){
  nextButtonArray.push(data.eta[i]);
  console.log("I am pushing " + data.eta[i]);
}

*/
