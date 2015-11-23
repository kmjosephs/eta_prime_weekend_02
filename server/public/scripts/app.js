/** Many thanks to Adia Alderson for helping me with this assignment and
* explaining it to me
**/

$(function(){
    var source = $('#templateScript').html(); //where handlebars is
    var template = Handlebars.compile(source); //makes the template
    var count = 0;
    var setSwitch = true;
    var personArray=[];

/** makes a function that will call Ajax so it can be used later */
  function callAjax() {
          $.ajax({url:'/data/eta.json'}).done(function(data){

          var person = template(data.eta[count]); //eta is the array within the json object
          $('.currentPerson').html(person); //where you want it to go

        if(setSwitch === true)
          {for (var i = 0; i < data.eta.length; i++ ){
            personArray.push(data.eta[i]);
          }
          setSwitch = false; //once person.Array is the length of data.eta,
                             // the switch sets to false so the array doesn't

        }

    });

}

    callAjax(); //calls Ajax

    $('.previous').on('click', function(){
      count--;
      if (count < 0){
        count = personArray.length-1;

      }
      callAjax();
    });

  $('.next').on('click', function(){
    count++;
    if (count > personArray.length-1){
      count = 0;
    }
    callAjax();
  });

}); // end $(function){} Line 1




  //you can do all the functions here and then call it within the done function
  //or do all the functions here





//have a counter that increments the
/*
for (var i=1; i < previousButtonArray.length; i++){
  nextButtonArray.push(data.eta[i]);
  console.log("I am pushing " + data.eta[i]);
}

*/
