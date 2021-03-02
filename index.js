// alert("Working");
$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};




// USAGE
// $(document).ready(function(){
//     $(window).scroll(function(){
//         if ($('#inViewport').isOnScreen()) {
//             // The element is visible, do something
//             alert("in viewport!");
//         } else {
//             // The element is NOT visible, do something else
//         }
//     });
// });

// $( "#imgOne" ).click(function(){
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($('#blue-bg').isOnScreen()) {
                // The element is visible, do something
                // console.log("in viewport!");
                $("#screens").animate({
                    opacity: 1
                }, 2000, function(){

                });
                
            } else {
                // The element is NOT visible, do something else
            }
        });
    });

    


    $( "#imgOne" ).animate({
        top: "120px",
        opacity: 1
    }, 800, function(){
        $( "#imgTwo" ).animate({
            top: "170px",
            opacity: 1
            
        }, 600, function(){
            $( "#imgThree" ).animate({
                top: "0",
                opacity: 1
            }, 600, function(){
        
            });
        });

    });
// });
