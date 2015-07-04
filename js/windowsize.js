function jqUpdateSize(){
    // Get the dimensions of the viewport
    var width = $(window).width();
    var height = $(window).height();

    $('#jqWidth').html(width);      // Display the width
    $('#jqHeight').html(height);    // Display the height
    
    if(width<1150){
        $("#canvas1").hide();
        $("#smallscreentitle").show();
    }else{
        $("#smallscreentitle").hide();
        $("#canvas1").show();
    }
    
  
};


$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size