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
    var input = document.createElement("input");
    if (('placeholder' in input) == false) {
        $('[placeholder]').focus(function() {
            var i = $(this);
            if (i.val() == i.attr('placeholder')) {
                i.val('').removeClass('placeholder');
                if (i.hasClass('password')) {
                    i.removeClass('password');
                    this.type = 'password';
                }
            }
        }).blur(function() {
            var i = $(this);
            if (i.val() == '' || i.val() == i.attr('placeholder')) {
                if (this.type == 'password') {
                    i.addClass('password');
                    this.type = 'text';
                }
                i.addClass('placeholder').val(i.attr('placeholder'));
            }
        }).blur().parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var i = $(this);
                if (i.val() == i.attr('placeholder'))
                    i.val('');
            })
        });
    }
    var firstSection = 0;
    var lastSection = 4;
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
    $('.language-dropdown').hide();
    $('.language-container').mouseover(function(){
        $('.language-dropdown').show();
    });
    $('.language-container').mouseout(function(){
        $('.language-dropdown').hide();
    });
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
    $(window).resize(function() {
        windowHeight = $(window).height();
        $('.content-container').height(windowHeight);
        $(window).scrollTop($("#content-container-" + currentSection).offset().top);
    });
});
skrollr.init({
    forceHeight: false
});