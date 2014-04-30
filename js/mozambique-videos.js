var  videoList = new Array();

function initVideoArray()
{
   //Create an array of object for videos with all the video IDs and the corresponding containers and the autotoggle
	videoList.push({videoid:"xaxairice_video", 
		containerid:"slide13",
		 sectionid:13, 
		 autotoggle:false,
		 ratio:3/4,
		 sidetext:false});

	videoList.push({videoid:"xai_xai_controversities_video", 
		containerid:"slide15",
		 sectionid:15, 
		 autotoggle:false,
		 ratio:3/4,
		 sidetext:false});

	videoList.push({videoid:"xaixaiproject_video", 
		containerid:"slide19",
		 sectionid:19, 
		 autotoggle:false,
		 ratio:3/4,
		 sidetext:false});

	videoList.push({videoid:"xai_xai_controversities_video2", 
		containerid:"slide21",
		 sectionid:21, 
		 autotoggle:false,
		 ratio:3/4,
		 sidetext:false});

	videoList.push({videoid:"sammartincorriere_video", 
		containerid:"slide25",
		 sectionid:25, 
		 autotoggle:false,
		 ratio:3/4,
		 sidetext:false});

	videoList.push({videoid:"hanlon_video", 
		containerid:"slide27",
		 sectionid:27, 
		 autotoggle:false,
		 ratio:3/4,
		 sidetext:true});
	//TODO
	

	videoList.push({videoid:"video32", 
		containerid:"slide32",
		 sectionid:32, 
		 autotoggle:false,
		 ratio:3/4,
		 sidetext:true});
	
	
}


/*Called everytime the user scrolls to a new section with id (sectionScrolledTo)*/
function playVideos(sectionScrolledTo)
{
	for (i=0; i<videoList.length;i++)
	{
		tempVideoObj = videoList[i];
		if(tempVideoObj.sectionid==sectionScrolledTo && tempVideoObj.autotoggle )
			playSingleVideo(tempVideoObj);
  	}
}


function updateAllVideosSize()
{
	for (i=0; i<videoList.length;i++)
	{
		tempVideoObj = videoList[i];
		 _V_(tempVideoObj.videoid).ready(function(){
			var myPlayer = this;	// Store the video object
			var aspectRatio = tempVideoObj.ratio;  // Make up an aspect ratio
			var parente=  document.getElementById(tempVideoObj.videoid).parentElement;
			var widthVideo = parente.offsetWidth;
			// Set widthVideo to fill parent element, Set height
			//myPlayer.width(widthVideo).height( (widthVideo * aspectRatio)-60 );
			var leftSpace = 0;
			if(tempVideoObj.sidetext)
				leftSpace = widthVideo/100*5;
			myPlayer.width(widthVideo-leftSpace).height(viewportH-30);
  		});
  	}
}


/*
function resizeVideo(videoid,ratio)
{
  	 _V_(videoid).ready(function(){
		var myPlayer = this;	// Store the video object
		var aspectRatio = ratio;  // Make up an aspect ratio

		function resizeVideoJS(){
			// Get the parent element's actual width
			var width = document.getElementById(myPlayer.id).parentElement.offsetWidth;
			// Set width to fill parent element, Set height
			myPlayer.width(width).height( width * aspectRatio );
	    	}
  	});
}

*/

function stopVideos(oldSectionID)
{
	for (i=0; i<videoList.length;i++)
	{
		tempVideoObj = videoList[i];
		if(tempVideoObj.sectionid==oldSectionID)
			stopSingleVideo(tempVideoObj);
  	}
}

function playSingleVideo(videoElem)
{
	videojs(videoElem.videoid).ready(function()
		{ //wait until the video is ready
			var vid = this;
			if (vid.paused()) 
				vid.play(); //play the video if the autotoggle is set to true
	               });
}

function stopSingleVideo(videoElem)
{
	videojs(videoElem.videoid).ready(function()
			{ //wait until the video is ready
				var vid = this;
				if (!vid.paused())
				{ 
					vid.pause(); //pause the video and set position to 0
					restartVideo(videoElem.videoid);
			                 }
		        	});	
}

/* Stops the video */
function restartVideo(elemID) {
	var video = videojs(elemID);
	video.currentTime(0);
}	