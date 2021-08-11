$(document).ready(function(){

	$('.burger').click(function() {
        $(this).toggleClass('active');
		$('.header_wrapper .nav').toggleClass('active');
        
    });

    $('.questions_box_title').click(function() {
        $(this).toggleClass('open');
        $(this).next().toggleClass('open');
        $('.questions_box_title').not(this).removeClass('open')
		  .not(this).next().removeClass('open');
    });

	$('.gallery_tab_1').click(function() {
		$('.gallery_tab_2').removeClass('active');
		$('.gallery_container_2').removeClass('active');
		$(this).addClass('active');
		$('.gallery_container_1').addClass('active');
	});
	
	
	$('.gallery_tab_2').click(function() {
		$('.gallery_tab_1').removeClass('active');
		$('.gallery_container_1').removeClass('active');
		$(this).addClass('active');
		$('.gallery_container_2').addClass('active');
	});

	$('.room_block').click(function() {
		$(this).toggleClass('active');
	});

});





