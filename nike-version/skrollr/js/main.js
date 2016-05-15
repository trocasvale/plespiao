window.jQuery = $;
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        height: '720',
        width: '960',
        videoId: 'DheulkmtR7Y',
        playerVars: {
            'vq': 'hd720',
            'rel': 0,
            'showinfo': 0,
            modestbranding: 1
        },
        events: {}
    });
}

function stopVideo() {
    player.stopVideo();
}

function playVideo() {
    player.playVideo();
}
$(document).ready(function() {
    $('body').css('visibility', 'visible');

    var firstSection = 0;
    var lastSection = 25;
    var currentSection = 0;
    var scrollingBeHappening = false;
    var windowHeight = $(window).height();

    $('.scroll-down-container').click(function() {
        animatedScrollTo("#content-container-1");
        currentSection = 1;
    });
    $('body').bind('keydown', function(e) {
        if ((e.keyCode == '38') || (e.keyCode == '40')) {
            e.preventDefault();
        }
    });
    $('body').bind('wheel DOMMouseScroll mousewheel keyup', function(e) {
        if (scrollingBeHappening === false) {
            if (e.type == 'mousewheel') {
                if (e.originalEvent.wheelDelta >= 0) {
                    currentSection = (currentSection - 1) >= firstSection ? currentSection - 1 : currentSection;
                    scrollDirection = 'down';
                } else {
                    currentSection = (currentSection + 1) <= lastSection ? currentSection + 1 : currentSection;
                    scrollDirection = 'up';
                }
                scrollingBeHappening = true;
            } else if (e.type == 'DOMMouseScroll') {
                if (e.originalEvent.detail >= 0) {
                    currentSection = (currentSection - 1) >= firstSection ? currentSection - 1 : currentSection;
                    scrollDirection = 'down';
                } else {
                    currentSection = (currentSection + 1) <= lastSection ? currentSection + 1 : currentSection;
                    scrollDirection = 'up';
                }
                scrollingBeHappening = true;
            } else if (e.type == 'wheel') {
                if (e.originalEvent.deltaY <= 0) {
                    currentSection = (currentSection - 1) >= firstSection ? currentSection - 1 : currentSection;
                    scrollDirection = 'up';
                } else {
                    currentSection = (currentSection + 1) <= lastSection ? currentSection + 1 : currentSection;
                    scrollDirection = 'down';
                }
                scrollingBeHappening = true;
            } else if (e.type == 'keyup') {
                if (e.keyCode == '38') {
                    currentSection = (currentSection - 1) >= firstSection ? currentSection - 1 : currentSection;
                    scrollDirection = 'up';
                } else if (e.keyCode == '40') {
                    currentSection = (currentSection + 1) <= lastSection ? currentSection + 1 : currentSection;
                    scrollDirection = 'down';
                }
            }
            $('html, body').animate({
                scrollTop: $("#content-container-" + currentSection).offset().top
            }, 1000, function() {
                setTimeout(function() {
                    scrollingBeHappening = false;
                }, 500)
            });
            return false;
        } else if (e.type == 'keyup' && e.keyCode == 27) {
            displayingVideo = false;
            $('.shyp-video').hide();
        } else {
            return false;
        };
    });

    function animatedScrollTo(id) {
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1000);
    };

    $('#tracker-node-0').click(function() {
        animatedScrollTo("#content-container-0");
        currentSection = 0;
    });
		$('#tracker-node-1').click(function() {
        animatedScrollTo("#content-container-1");
        currentSection = 1;
    });
    $('#tracker-node-2').click(function() {
        animatedScrollTo("#content-container-2");
        currentSection = 2;
    });
    $('#tracker-node-3').click(function() {
        animatedScrollTo("#content-container-3");
        currentSection = 3;
    });
		$('#tracker-node-4').click(function() {
        animatedScrollTo("#content-container-4");
        currentSection = 4;
    });
		$('#tracker-node-4').click(function() {
        animatedScrollTo("#content-container-5");
        currentSection = 5;
    });

		$('#tracker-node-6').click(function() {
				animatedScrollTo("#content-container-6");
				currentSection = 6;
		});
		$('#tracker-node-7').click(function() {
				animatedScrollTo("#content-container-7");
				currentSection = 7;
		});
		$('#tracker-node-8').click(function() {
				animatedScrollTo("#content-container-8");
				currentSection = 8;
		});
		$('#tracker-node-9').click(function() {
				animatedScrollTo("#content-container-9");
				currentSection = 9;
		});
		$('#tracker-node-10').click(function() {
				animatedScrollTo("#content-container-10");
				currentSection = 10;
		});


		$('#tracker-node-11').click(function() {
        animatedScrollTo("#content-container-11");
        currentSection = 11;
    });
    $('#tracker-node-12').click(function() {
        animatedScrollTo("#content-container-12");
        currentSection = 12;
    });
    $('#tracker-node-13').click(function() {
        animatedScrollTo("#content-container-13");
        currentSection = 13;
    });
		$('#tracker-node-14').click(function() {
        animatedScrollTo("#content-container-14");
        currentSection = 14;
    });
		$('#tracker-node-15').click(function() {
        animatedScrollTo("#content-container-15");
        currentSection = 15;
    });

		$('#tracker-node-16').click(function() {
				animatedScrollTo("#content-container-16");
				currentSection = 16;
		});
		$('#tracker-node-17').click(function() {
				animatedScrollTo("#content-container-17");
				currentSection = 17;
		});
		$('#tracker-node-18').click(function() {
				animatedScrollTo("#content-container-18");
				currentSection = 18;
		});
		$('#tracker-node-19').click(function() {
				animatedScrollTo("#content-container-19");
				currentSection = 19;
		});
		$('#tracker-node-20').click(function() {
				animatedScrollTo("#content-container-20");
				currentSection = 20;
		});

		$('#tracker-node-21').click(function() {
				animatedScrollTo("#content-container-21");
				currentSection = 21;
		});
		$('#tracker-node-22').click(function() {
				animatedScrollTo("#content-container-22");
				currentSection = 22;
		});
		$('#tracker-node-23').click(function() {
				animatedScrollTo("#content-container-23");
				currentSection = 23;
		});
		$('#tracker-node-24').click(function() {
				animatedScrollTo("#content-container-24");
				currentSection = 24;
		});
		$('#tracker-node-25').click(function() {
				animatedScrollTo("#content-container-25");
				currentSection = 25;
		});
    $(window).resize(function() {
        windowHeight = $(window).height();
        $('.content-container').height(windowHeight);
        $(window).scrollTop($("#content-container-" + currentSection).offset().top);
    });
});
skrollr.init({
    forceHeight: false
});

$(document).ready(function() {
  Tipped.create('.screen-tracker .node');
});
