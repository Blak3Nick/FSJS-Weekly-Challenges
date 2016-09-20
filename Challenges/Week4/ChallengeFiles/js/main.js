function openBlock (id) {
    var block = document.getElementById(id);
    var blocks = document.getElementById("main_content").getElementsByTagName("div");

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";
<<<<<<< HEAD

=======
    
>>>>>>> upstream/master
    // TODO: remove the "active" class from all of the li elements inside the menu
    // TODO: add the "active" class to the li element that contains the link that was clicked

}
<<<<<<< HEAD
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
    about.parent().removeClass('active');
    home.parent().removeClass('active');
    death.parent().removeClass('active');
    cat.parent().removeClass('active');
    blog.parent().removeClass('active');
    contact.parent().removeClass('active');
};
about.click(function(){
    allClass();
    $('#about').addClass('show-block').removeClass('twocolumn');
    about.parent().addClass('active');
});
about.hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);
home.click(function(){
    allClass();
    $('#home').show();
    home.parent().addClass('active');
});
home.hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);
death.click(function(){
    allClass();
    $('#plans').addClass('show-block').removeClass('twocolumn');
    death.parent().addClass('active');
});
death.hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);
cat.click(function(){
    allClass();
    $('#cat').addClass('show-block').removeClass('twocolumn');
    cat.parent().addClass('active');
});
cat.hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);
blog.click(function(){
    allClass();
    $('#blog').addClass('show-block').removeClass('twocolumn');
    blog.parent().addClass('active');
});
blog.hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);
contact.click(function(){
    allClass();
    $('#contact').addClass('show-block').removeClass('twocolumn');
    contact.parent().addClass('active');
});
contact.hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);
=======

>>>>>>> upstream/master
// TODO: add the "hover" class to the menu items when you hover over them


// TODO: set up the tooltip plugin on all of the links in the menu
<<<<<<< HEAD
about.tooltip({
    delay: 1000
});
home.tooltip({
    delay: 1000
});
death.tooltip({
    delay: 1000
});
cat.tooltip({
    delay: 1000
});
blog.tooltip({
    delay: 1000
});
contact.tooltip({
    delay: 1000
});
=======

>>>>>>> upstream/master
