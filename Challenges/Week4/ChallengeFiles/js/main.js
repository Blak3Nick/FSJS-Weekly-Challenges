function openBlock (id) {
    var block = document.getElementById(id);
    var blocks = document.getElementById("main_content").getElementsByTagName("div");

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";
    
    // TODO: remove the "active" class from all of the li elements inside the menu
    // TODO: add the "active" class to the li element that contains the link that was clicked

}
var about = $('#menu_item_about');
var home = $('#menu_item_home');
var death =  $('#menu_item_plans');
var cat = $('#menu_item_cat');
var blog = $('#menu_item_blog');
var contact =  $('#menu_item_contact');

var allClass = function() {
    $('#plans').addClass('twocolumn').removeClass('show-block');
    $('#cat').addClass('twocolumn').removeClass('show-block');
    $('#about').addClass('twocolumn').removeClass('show-block');
    $('#blog').addClass('twocolumn').removeClass('show-block');
    $('#contact').addClass('twocolumn').removeClass('show-block');
    $('#home').hide();
    
};
about.click(function(){
    allClass();
    $('#about').addClass('show-block').removeClass('twocolumn'); 
});
home.click(function(){
    allClass();
    $('#home').show();  
    
});
death.click(function(){
    allClass();
    $('#plans').addClass('show-block').removeClass('twocolumn');

        
});
cat.click(function(){
    allClass();
    $('#cat').addClass('show-block').removeClass('twocolumn');

        
});
blog.click(function(){
    allClass();
    $('#blog').addClass('show-block').removeClass('twocolumn');
      
});
contact.click(function(){
    allClass();
    $('#contact').addClass('show-block').removeClass('twocolumn');
      
});
// TODO: add the "hover" class to the menu items when you hover over them


// TODO: set up the tooltip plugin on all of the links in the menu
$('#menu_item_about').tooltip();