// JavaScript Document

$(document).ready(function() {
    
    
    var imageName = ['cod.jpg' , 'jmain2014.jpg' , 'main01.jpg'];
    var indexnum = 0;
    var imagePath = 'images/';
    var Fname = 'Jason';
    var Lname = 'Jacobson';
    
    $( '.portMenu' ).click(function() {
        $( '.portMenu p' ).slideToggle(500);
    });
    
    $( '.menuopt' ).click(function() {
        $( '.menuopt' ).toggleClass( 'menuoptA' );
        $( '.menu ul' ).slideToggle(500);
        
    });
    
    $( '#amwBOF' ).click(function() {
        $( '#workImg' ).load( 'ajaxWork.html #amwBOFImg' );
        $( '#workDesc' ).load( 'ajaxWork.html #amwBOFDesc' );
        $( '.headimg' ).load( 'ajaxWork.html #amwHead' );
    });
    
    
    
    var t = $("#anchor-point").offset().top;

    $(document).scroll(function(){
        if($(this).scrollTop() > t)
        {   
            $( '.titleSec' ).css( 'position', 'fixed' ).css( 'top', '10px');
        } else {
            $( '.titleSec' ).css( 'position', '');
        }
    });
    
    
    
    
}); // end doc ready function