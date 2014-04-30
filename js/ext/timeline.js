/***********************************************************************************************************************
DOCUMENT: includes/javascript.js
DEVELOPED BY: Ryan Stemkoski
COMPANY: Zipline Interactive
EMAIL: ryan@gozipline.com
PHONE: 509-321-2849
DATE: 2/26/2009
DESCRIPTION: This is the JavaScript required to create the accordion style menu.  Requires jQuery library
************************************************************************************************************************/

$(document).ready(function() {
	//'html':'${Anno} ${TITOLO}'}
		var transform = {"tag":"div","id":"wrapper","children":[
		    {"tag":"div","class":"accordionButton","html": "${Anno}","children":[
		        {"tag":"p","html":"${TITOLO}"}
		      ]},
		    {"tag":"div","class":"accordionContent", "html":"${TESTO}" , "children":[
		        {"tag":"img","src":"${IMG}","html":""}
		      ]}
		  ]}
				
				
								
		
    
	var data = 
	//Insert data here
	[{"Anno":1000,"TITOLO":"TITOLO1","TESTO":"text","IMG":"http://upload.wikimedia.org/wikipedia/it/7/72/Valle_Adige.jpg"},
	{"Anno":2000,"TITOLO":"titolo2","TESTO":"text2","IMG":""},
	{"Anno":3000,"TITOLO":"titolo3","TESTO":"text3","IMG":""},
	{"Anno":1000,"TITOLO":"TITOLO1","TESTO":"text","IMG":"http://upload.wikimedia.org/wikipedia/it/7/72/Valle_Adige.jpg"},
	{"Anno":2000,"TITOLO":"titolo2","TESTO":"text2","IMG":""},
	{"Anno":3000,"TITOLO":"titolo3","TESTO":"text3","IMG":""},
	{"Anno":1000,"TITOLO":"TITOLO1","TESTO":"text","IMG":"http://upload.wikimedia.org/wikipedia/it/7/72/Valle_Adige.jpg"},
	{"Anno":2000,"TITOLO":"titolo2","TESTO":"text2","IMG":""},
	{"Anno":3000,"TITOLO":"titolo3","TESTO":"text3","IMG":""},
	{"Anno":1000,"TITOLO":"TITOLO1","TESTO":"text","IMG":"http://upload.wikimedia.org/wikipedia/it/7/72/Valle_Adige.jpg"},
	{"Anno":2000,"TITOLO":"titolo2","TESTO":"text2","IMG":""},
	{"Anno":3000,"TITOLO":"titolo3","TESTO":"text3","IMG":""},
	{"Anno":1000,"TITOLO":"TITOLO1","TESTO":"text","IMG":"http://upload.wikimedia.org/wikipedia/it/7/72/Valle_Adige.jpg"},
	{"Anno":2000,"TITOLO":"titolo2","TESTO":"text2","IMG":""},
	{"Anno":3000,"TITOLO":"titolo3","TESTO":"text3","IMG":""},
	{"Anno":1000,"TITOLO":"TITOLO1","TESTO":"text","IMG":"http://upload.wikimedia.org/wikipedia/it/7/72/Valle_Adige.jpg"},
	{"Anno":2000,"TITOLO":"titolo2","TESTO":"text2","IMG":""},
	{"Anno":3000,"TITOLO":"titolo3","TESTO":"text3","IMG":""},
	{"Anno":1000,"TITOLO":"TITOLO1","TESTO":"text","IMG":"http://upload.wikimedia.org/wikipedia/it/7/72/Valle_Adige.jpg"},
	{"Anno":2000,"TITOLO":"titolo2","TESTO":"text2","IMG":""},
	{"Anno":3000,"TITOLO":"titolo3","TESTO":"text3","IMG":""},
	{"Anno":1000,"TITOLO":"TITOLO1","TESTO":"text","IMG":"http://upload.wikimedia.org/wikipedia/it/7/72/Valle_Adige.jpg"},
	{"Anno":2000,"TITOLO":"titolo2","TESTO":"text2","IMG":""},
	{"Anno":3000,"TITOLO":"titolo3","TESTO":"text3","IMG":""},
	{"Anno":1000,"TITOLO":"TITOLO1","TESTO":"text","IMG":"http://upload.wikimedia.org/wikipedia/it/7/72/Valle_Adige.jpg"},
	{"Anno":2000,"TITOLO":"titolo2","TESTO":"text2","IMG":""},
	{"Anno":3000,"TITOLO":"titolo3","TESTO":"text3","IMG":""}]

	;
	    
document.getElementById('timeline-wrapper').innerHTML = json2html.transform(data,transform);
	/********************************************************************************************************************
	SIMPLE ACCORDIAN STYLE MENU FUNCTION
	********************************************************************************************************************/	
	$('div.accordionButton').click(function() {
		$('div.accordionContent').slideUp('normal');	
		$(this).next().slideDown('normal');
	});
	
	/********************************************************************************************************************
	CLOSES ALL DIVS ON PAGE LOAD
	********************************************************************************************************************/	
	$("div.accordionContent").hide();

});
