/* Global variables */
var s;
var viewportH;
var viewportW;
var constants; //for skrollr


/*This function is called on page load, works on iOs*/
window.addEventListener('DOMContentLoaded', function() {
	preLoad();	
	initTemplate();  
});



/* On document load!*/
function initTemplate()
{
	viewportH = $(window).height();
	viewportW = $(window).width();
  	document.createElement('video');document.createElement('audio'); // Needed by video.js 
  	initVideoArray();
	initSkrollr();
	loadSlider();
	changeDiv(1);  //Multiple div selector
	loadMap();
	updateMenuHrefHeights($(window).height());
	updateAllVideosSize();
	videojs.options.flash.swf = "data/video-js.swf";
	loadOverlays();

	//TODO review for fuck sake
	//setTimeout(function(){initPaths();},10000);
	initPaths();
	

	//debugSkrollrConstants(); 
	//comment please, it prints on the console many variables TODO

	//$('#scroll-pos').hide(); //un-comment if you want to hide pixels
}

function preLoad()
{
	//Loading bar with script
	/*
	 $("body").queryLoader2(
		{
		        	percentage: true,
                   	        	barHeight: 80,
	                	completeAnimation: "grow"
		});
	*/

	 //Loading image CSS by dan
	$(window).load(function(){
		$('#pnf_preloader_status').fadeOut();
		$('#pnf_preloader').delay(350).fadeOut('slow');
	});
}


function loadOverlays()
{
	//Multiple div
	$(".fancybox").fancybox({
	    openEffect  : 'fade',
	    closeEffect : 'fade',
	    afterLoad   : function() {
	        this.content = this.content.html();
  		  }
	  });

	//Map, send us a story
	$('a.mapfancybox').fancybox({
	    openEffect  : 'fade',
	    closeEffect : 'fade',
	    'width': 800
	  });
}

/**/
function loadSlider()
{
	$('.flexslider').flexslider({
		prevText: " ",
		nextText: " "  	
	});

	$('.flexslider2').flexslider({
	        prevText: " ",
	        nextText: " ",
	        animation: "slide",
	        direction: "horizontal",
		slideshow: "false"	 	    
	 });
}

/* Init skrollr  plugin */

function initSkrollr()
{
	computeConstants(); //put the constants in the GLOBAL variable constants
	s = skrollr.init({
		constants: constants
	});
}

function computeConstants()
{
	constants = {
		offset0 : 0,
		offset1 : getStartingPercentageOfSection(1),
		offset2 : getStartingPercentageOfSection(2),
		offset3 : getStartingPercentageOfSection(3),
		offset4 : getStartingPercentageOfSection(4),
		offset5 : getStartingPercentageOfSection(5),
		offset6 : getStartingPercentageOfSection(6),
		offset7 : getStartingPercentageOfSection(7),
		offset8 : getStartingPercentageOfSection(8),
		offset9 : getStartingPercentageOfSection(9),
		offset10 : getStartingPercentageOfSection(10),
		offset11 : getStartingPercentageOfSection(11),
		offset12 : getStartingPercentageOfSection(12),
		offset13 : getStartingPercentageOfSection(13),
		offset14 : getStartingPercentageOfSection(14),
		offset15 : getStartingPercentageOfSection(15),
		offset16 : getStartingPercentageOfSection(16),
		offset17 : getStartingPercentageOfSection(17),
		offset18 : getStartingPercentageOfSection(18),
		offset19 : getStartingPercentageOfSection(19),
		offset20 : getStartingPercentageOfSection(20),
		offset21 : getStartingPercentageOfSection(21),
		offset22 : getStartingPercentageOfSection(22),
		offset23 : getStartingPercentageOfSection(23),
		offset24 : getStartingPercentageOfSection(24),
		offset25 : getStartingPercentageOfSection(25),
		offset26 : getStartingPercentageOfSection(26),
		offset27 : getStartingPercentageOfSection(27),
		offset28 : getStartingPercentageOfSection(28),
		offset29 : getStartingPercentageOfSection(29),
		offset30 : getStartingPercentageOfSection(30),
		offset31 : getStartingPercentageOfSection(31),
		offset32 : getStartingPercentageOfSection(32),
		offset33 : getStartingPercentageOfSection(33),
		offset34 : getStartingPercentageOfSection(34),
		offset35 : getStartingPercentageOfSection(35),
		offset36 : getStartingPercentageOfSection(36),
		pausing0 : 0,
		pausing1 : getPausing(1,true),
		pausing2 : getPausing(2,true),
		pausing3 : getPausing(3,true),
		pausing4 : getPausing(4,true),
		pausing5 : getPausing(5,true),
		pausing6 : getPausing(6,true),
		pausing7 : getPausing(7,true),
		pausing8 : getPausing(8,true),
		pausing9 : getPausing(9,true),
		pausing10 : getPausing(10,true),
		pausing11 : getPausing(11,true),
		pausing12 : getPausing(12,true),
		pausing13 : getPausing(13,true),
		pausing14 : getPausing(14,true),
		pausing15 : getPausing(15,true),
		pausing16 : getPausing(16,true),
		pausing17 : getPausing(17,true),
		pausing18 : getPausing(18,true),
		pausing19 : getPausing(19,true),
		pausing20 : getPausing(20,true),
		pausing21 : getPausing(21,true),
		pausing22 : getPausing(22,true),
		pausing23 : getPausing(23,true),
		pausing24 : getPausing(24,true),
		pausing25 : getPausing(25,true),
		pausing26 : getPausing(26,true),
		pausing27 : getPausing(27,true),
		pausing28 : getPausing(28,true),
		pausing29 : getPausing(29,true),
		pausing30 : getPausing(30,true),
		pausing31 : getPausing(31,true),
		pausing32 : getPausing(32,true),
		pausing33 : getPausing(33,true),
		pausing34 : getPausing(34,true),
		pausing35 : getPausing(35,true),
		pausing36 : getPausing(36,true),
		pausingSum0 : 0,
		sumoffset1 : getPausingSum(1),
		sumoffset2 : getPausingSum(2),
		sumoffset3 : getPausingSum(3),
		sumoffset4 : getPausingSum(4),
		sumoffset5 : getPausingSum(5),
		sumoffset6 : getPausingSum(6),
		sumoffset7 : getPausingSum(7),
		sumoffset8 : getPausingSum(8),
		sumoffset9 : getPausingSum(9),
		sumoffset10 : getPausingSum(10),
		sumoffset11 : getPausingSum(11),
		sumoffset12 : getPausingSum(12),
		sumoffset13 : getPausingSum(13),
		sumoffset14 : getPausingSum(14),
		sumoffset15 : getPausingSum(15),
		sumoffset16 : getPausingSum(16),
		sumoffset17 : getPausingSum(17),
		sumoffset18 : getPausingSum(18),
		sumoffset19 : getPausingSum(19),
		sumoffset20 : getPausingSum(20),
		sumoffset21 : getPausingSum(21),
		sumoffset22 : getPausingSum(22),
		sumoffset23 : getPausingSum(23),
		sumoffset24 : getPausingSum(24),
		sumoffset25 : getPausingSum(25),
		sumoffset26 : getPausingSum(26),
		sumoffset27 : getPausingSum(27),
		sumoffset28 : getPausingSum(28),
		sumoffset29 : getPausingSum(29),
		sumoffset30 : getPausingSum(30),
		sumoffset31 : getPausingSum(31),
		sumoffset32 : getPausingSum(32),
		sumoffset33 : getPausingSum(33),
		sumoffset34 : getPausingSum(34),
		sumoffset35 : getPausingSum(35),
		sumoffset36 : getPausingSum(36)
	};
}

/* This function is called when the window is resized*/
$(window).resize(function(e){
	viewportH = $(window).height();
	viewportW = $(window).width();
	updateMenuHrefHeights();
	updateAllVideosSize();
});


function initPaths()
{
	Path.map("#intro").to(function(){ goToSection(1);});
	Path.map("#mozambique").to(function(){ goToSection(5);});
	Path.map("#investors").to(function(){goToSection(9);});
	Path.map("#wanbao").to(function(){ goToSection(10);});
	Path.map("#bananalandia").to(function(){  goToSection(16);});
	Path.map("#igosammartini").to(function(){ goToSection(22);});
	Path.map("#prosavana").to(function(){ goToSection(26);	});

	//Not sure this is needed
	Path.root("#intro")

	$(document).ready(function(){
	            Path.listen();
       	 });

}



/*__________________ Multiple div functions [start]__________________*/
function changeDiv(elem)
{
	var header, subheader, textBody;
	var selectedImage;
	if (elem==1)
	{
		header=$('#md_header1').html();
		subheader=$('#md_subheader1').html();
		textBody=$('#md_text1').html();

		$("#idmdimg1").addClass('mdSelected');
		$("#idmdimg2").removeClass('mdSelected');
		$("#idmdimg3").removeClass('mdSelected');
	}
	else if (elem==2)
	{
		header=$('#md_header2').html();
		subheader=$('#md_subheader2').html();
		textBody=$('#md_text2').html();
		$("#idmdimg2").addClass('mdSelected');
		$("#idmdimg1").removeClass('mdSelected');
		$("#idmdimg3").removeClass('mdSelected');
	}

	else {
		header=$('#md_header3').html();
		subheader=$('#md_subheader3').html();
		textBody=$('#md_text3').html();
		$("#idmdimg3").addClass('mdSelected');
		$("#idmdimg2").removeClass('mdSelected');
		$("#idmdimg1").removeClass('mdSelected');
	}

	$('#mdTextHeader').html(header);
	$('#mdTextSubHeader').html(subheader);
	$('#mdText').html(textBody);

}

function copyToClipboard (text) {
	window.prompt ("Press Ctrl+C (or Cmd+C) to copy the code, Enter", text);
}


function debugSkrollrConstants()
{
	console.log("viewportH="+viewportH);
	for (i=1;i<35;i++)
	{
		console.log("pausing"+i+"="+getPausing(i,true)+"px"); 
		console.log("offset"+i+"="+getStartingPercentageOfSection(i)+"p"); 
		console.log("sumoffset"+i+"="+getPausingSum(i)+"p"); 
	}
}

/*__________________ Multiple div functions [end]__________________*/