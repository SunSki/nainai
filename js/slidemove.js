
$(function(){
	$('#screen_change:not(#screen_change)').css({display:'block',marginLeft:$(window).width(),opacity:'0'});
	$('#screen_change:not(#screen_change)').animate({marginLeft:'0px',opacity:'1'},500);

	$('#screen_change').css({display:'block',opacity:'0'});
	$('#screen_change').animate({opacity:'1'},500);
    
    //aを押したとき
	$('a').click(function(){
		var pass = $(this).attr("href");
        //id="screen_change"の要素に対して
		$('#screen_change').animate({marginLeft:'-=' + $(window).width() + 'px',opacity:'0'},500,function(){
			location.href = pass;//リンク先へ遷移
			setTimeout(function(){//もとに戻す位置を指定
				$('#screen_change').css({marginLeft:'0',opacity:'1'})
			},500);
		});
	    return false;
	});
});
