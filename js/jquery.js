// jQuery
$(document).ready(function () {
	$('.aboutAlbum').hide();
	$(".albums").hover(function () {
		$(this).children('.aboutAlbum').stop(true, true).slideToggle('slow');
	});
});

/*$(document).ready(function () {
	$('.albums').hover(function () {
		$(this).animate({
			height: "toggle"
		}, "slow");
	});
});*/


function fading(image, divs) {
	$(image).hide();
	$(divs).mouseenter(function () {
		$(image).show(2000);
	});
}

$(document).ready(fading("#aboutPhoto img", "#main"));
$(document).ready(fading(".profile-photo img", "#about_us"));

$(document).ready(function () {
	$(".moreAbout").hide();

	$('button').click(function () {
		$(this).parent().parent().find(".moreAbout").toggle(400);
	})
});
/*$(document).ready(function(){
	$('#moreAbout').hide();
	$('button').click(function(e){
		e.preventDefault();
		
		if (('#moreAbout p')is(":visibile")){
			
		$(this).find('p').show(200);
		$('#moreAbout').slideUp();
		$(this).val('More about me');
		} else {
				$('#moreAbout').slideDown();
				$(this).val('Close');
		}
	});
});*/


/*$(document).ready(function () {
	$(".profile-photo img").hide();
	$("#about_us").mouseenter(function () {
		$(".profile-photo img").show(2000);
	});
});*/
$("#navigation li a").hover(function(){
	$(this).addClass("menuHover")
},
	function(){
		$(this).removeClass("menuHover")
	}
);

$(window).scroll(function(){
	if($(this).scrollTop()>50){
		$("#scrollUp").fadeIn(100);
	}
	else
	{
		$("#scrollUp").fadeOut(100);
	}
});
$("#scrollUp").click(function(){
	$("body, html").animate({scrollTop:0},500
	);
});