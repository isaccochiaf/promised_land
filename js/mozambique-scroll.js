var currentSectionID = '#lid1';
/* USAGE: 
1) markup this div 
        <div id="scroll-pos">0px</div>

2)add the following css properties :

#scroll-pos{
    background-color: black;
    color:white;
    font-size: 26px;
    position: fixed;
    top : 0;
    left:50%;
    opacity: 0.6;
    z-index: 9999;
}

3) include   
     <script src="js/jquery.js"></script>
     <script src="js/mozambique-scroll.js"></script>
/* -  When the user scrolls -  */ 


/* called on scroll*/
$(window).scroll(function() { 
        currentScroll = getScrollTop(); //get the current position
        currentScrollP = Math.round(getPixelsInPercentage(currentScroll));
        $('#scroll-pos').html(currentScroll+"px ; "+currentScrollP+"p"); //update the view with the current height

        var newSectionID= getCurrentElementID(currentScroll);
        if(newSectionID!=currentSectionID)
        {
            //console.log("Scrolled to a new section . Menu Section id = " +newSectionID);
            newSectionNumber = newSectionID.substring(4);
            oldSectionNumber = currentSectionID.substring(4);
            $('#sectionTracker').html("section "+newSectionNumber);
            $('#sectionTrackerInMenu').html("section "+newSectionNumber);

            //Questo va fatto solo per le sezioni speciali del menu 1,5,9,10,16,22,26
            selectOnly();

            var menuElementToSelect ;
            if(newSectionNumber < 5)
            {
                menuElementToSelect = '#lid1';
                window.history.pushState("", "", "#intro");
                 $('#titleToolbar').html("INTRODUCTION");
            }

            else if (newSectionNumber >= 5 && newSectionNumber <9 )
            {
                menuElementToSelect = '#lid2';
                window.history.pushState("", "", "#mozambique");
                $('#titleToolbar').html("MOZAMBIQUE");
            }

            else if (newSectionNumber == 9)
            {
                menuElementToSelect = '#lid3';
                window.history.pushState("", "", "#investors");
                $('#titleToolbar').html("INVESTORS AND COMMUNITIES");

            }

            else if (newSectionNumber >=10 && newSectionNumber <16 )
            {
                menuElementToSelect = '#lid4';  
                window.history.pushState("", "", "#wanbao"); 
                $('#titleToolbar').html("WANBAO");

            }

            else if (newSectionNumber >= 16 && newSectionNumber <22 )
            {     
                menuElementToSelect = '#lid5';
                window.history.pushState("", "", "#bananalandia");
                $('#titleToolbar').html("BANANALANDIA");

            }

             else if (newSectionNumber >= 22 && newSectionNumber <26 )
            {
                menuElementToSelect = '#lid6';
                window.history.pushState("", "", "#igosammartini");
                $('#titleToolbar').html("IGO SAMMARTINI");

            }

         else if (newSectionNumber >=26 )
            {
                menuElementToSelect = '#lid7';
                window.history.pushState("", "", "#prosavana");
                $('#titleToolbar').html("PROSAVANA");

            }

            selectOnly(menuElementToSelect);

            //
            currentSectionID= newSectionID;
            stopVideos(oldSectionNumber);
            playVideos(newSectionNumber);
    } 
});

function goToSection(n)
{   
        var durationMin = 1000;
        var duration = durationMin + n*50;
        $(window).scrollTo(getStartingPixelOfSection(n)+1, duration,{easing:'easeOutCubic'} ); 
}

//Selects the 'toSelect' menu item and deselect the others
function selectOnly(toSelect)
{
              for (i=1; i<=7;i++)
              {
                     var tempLid = '#lid'+i;
                     $(tempLid).removeClass('currentMenuItem');            
              }

              $(toSelect).addClass('currentMenuItem');  
}





/* Returns the ID of the current element based on scrollPosition*/
function getCurrentElementID(currentScroll){
    for(i=1;i<=totalNumberOfSections;i++)
    {
        initialPixel = startingPixel[i];
        finalPixel= startingPixel[i+1];
        if(currentScroll >= initialPixel && currentScroll <=finalPixel)
        {
            //The user is inside the i-th section!
            return "#lid"+i;
        }
    }
     return "#lid1";
}




/* -  Get the position from top, cross browser -  */ 
function getScrollTop(){
    if(typeof pageYOffset!= 'undefined'){
        //most browsers except IE before #9
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
}


/* The following part is used to detect the auto toggle of the video based on scroll*/

/*http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling*/
/* Detect if an element is visible in the viewport after scrolling
Note that this only works if the document is the element being scrolled, i.e. you aren't checking visibility of some element inside a scrolling inner pane
*/


function isScrolledIntoView(elem)
{
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


/* Detect if an element is  COMPLETELY visible in the viewport after scrolling*/

function isCompletelyScrolledIntoView(elem)
{
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((docViewTop < elemTop) && (docViewBottom > elemBottom));
}

