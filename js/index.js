
//$(".bg").css('transform',  'translate3d(0px,-' + 0.1 * scroll + 'px, 0px)');

$(document).on('ready', function(){


  $('#simulator .card').draggable({
    drag: function() {
      $('#simulator .card.layer1');
      }
   });

   reset = function(){
     $('.calculating').addClass('active');
     setTimeout(function(){$('.calculating').attr('class', 'calculating gone');}, 1000);
     setTimeout(function(){
      $('#simulator .card').removeClass('gone-right gone-left drag-right').attr('style', '').addClass('out').each(function(index, em){
        $(em).addClass('layer'+(index+1));
        messageSlider();
      });
    }, 1100);
     setTimeout(function(){
       $('.calculating').removeClass('gone active');
       $('#simulator .card').removeClass('out');
   }, 3000);

      //$('.message').switchClass( "active", "gone").removeClass('gone');
      //messageSlider();
 };


    var droppableEnabler = function(target, hoverClass, goneClass ){
      var targetId = target.attr('id');
          target.droppable({
            accept: ".card",
            hoverClass: hoverClass,
             over: function( event, ui ) {
             $(ui.draggable).removeClass('going-left going-right').addClass('going-'+targetId);
             },
        drop: function( event, ui ) {
          $(ui.draggable).addClass(goneClass);
          $('#simulator .card').removeClass('going-left going-right layer1 layer2 layer3 layer4 layer5 layer6 layer7 layer8 layer9 layer10 layer11 layer12 layer13 layer14 layer15 layer16 layer17 layer18 layer19 layer20 layer21 layer22 drag-right').css('transition-duration' , '0.6s');

          if( ui.draggable.nextAll().length > 0 ){
            ui.draggable.nextAll().each(function(index){
              $(this).addClass('layer'+(index+1));
            });
          } else {

            reset();
          }

          //messageSlider();

        }
      });
    };

  droppableEnabler( $("#right"), "like", "gone-right" );
  droppableEnabler( $("#left"), "dislike", "gone-left" );


  var messageSlider = function(){

    if ( $(".layer1").hasClass("job","job2","job3","job4","job5","job6","job7" ) ) {$(".message.intro").addClass('active').prev().switchClass( "active", "gone");}
    if ( $(".layer1").hasClass("match") ) {$(".message.match").addClass('active').prev().switchClass( "active", "gone"); $(".layer1.match").draggable({disabled: true}); $(".gotmatch").addClass('active'); $('#simulator .card.match img').addClass('blur');}
  };



 });

 $(document).on('touchend click', '.menu .match-button, .button.text', function(){
   $('.card').toggleClass('gone-match');
   $(".layer1.match").draggable({disabled: false});
   $('.gotmatch').switchClass('active','gone');
   $('.matches-screen').toggleClass('active');
   $('.menu').toggleClass('matches');
   $('#simulator .card.match img').removeClass('blur');
 });

 $(document).on('touchend click', '.menu .back-button', function(){
   $('.card').removeClass('gone-match');
   $(".layer1.match").draggable({disabled: false});
   $('.matches-screen').removeClass('active');
   $('.menu').removeClass('matches');
 });

 $(document).on('touchend click', '.button.later', function(){
   $('.gotmatch').removeClass('active');
   $(".layer1.match").draggable({disabled: true});
   $('#simulator .card.match img').removeClass('blur')
 });


 $( window ).load(function() {
   $('.loading').addClass('done');
   $('.wait').addClass('done');
   $('.blur').addClass('done');
   $('.iphone-cover').css('-webkit-animation-name', 'slide').css('-webkit-animation-duration', '1s').css('-webkit-animation-delay','0.6s').css('-webkit-animation-fill-mode', 'both');
   $('.info').css('-webkit-animation', 'content 1s 0.3s').css('-webkit-animation-fill-mode', 'both');
   $('.clouds').css('-webkit-animation', 'clouds 2s').css('-webkit-animation-fill-mode', 'both');
   $('.glider').css('-webkit-animation', 'logo 1s 1s').css('-webkit-animation-fill-mode', 'both');
   $('.glider img').css('-webkit-animation', 'name 1s 1.1s').css('-webkit-animation-fill-mode', 'both');
   setTimeout(function(){
    $('#simulator .card').removeClass('out');
 }, 300);
 });

 $( document ).on( "mousemove", function( event ) {
   $('.parallax-0').css('transform', 'translate3d(0px,0px,0px)');
   $('.parallax-1').css('transform', 'translate3d(-'+ event.pageX / 90 + "px, -" + event.pageY / 90 + "px, 0px");
   $('.parallax-2').css('transform', 'translate3d(-'+ event.pageX / 45 + "px, -" + event.pageY / 90 + "px, 0px");
   $('.parallax-3').css('transform', 'translate3d(-'+ event.pageX / 30 + "px, -" + event.pageY / 90 + "px, 0px");
   $('.parallax-4').css('transform', 'translate3d(-'+ event.pageX / 10 + "px, -" + event.pageY / 90 + "px, 0px");
   $('.parallax-5').css('transform', 'translate3d(-'+ event.pageX / 5 + "px, -" + event.pageY / 90 + "px, 0px");
   $('.parallax-6').css('transform', 'translate3d(-'+ event.pageX / 5 + "px, -" + event.pageY / 90 + "px, 0px");
   $('.parallax-7').css('transform', 'translate3d(-'+ event.pageX / 5 + "px, -" + event.pageY / 90 + "px, 0px");
   $('.parallax-8').css('transform', 'translate3d(-'+ event.pageX / 5 + "px, -" + event.pageY / 90 + "px, 0px");
   $('.parallax-9').css('transform', 'translate3d(-'+ event.pageX / 5 + "px, -" + event.pageY / 90 + "px, 0px");
   $('.parallax-10').css('transform', 'translate3d(-'+ event.pageX / 30 + "px, -" + event.pageY / 90 + "px, 0px");

});
