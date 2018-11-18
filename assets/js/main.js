'use strict';

// Check if element in viewport
function isElementInVewport(el) {
    let elPos = el.getBoundingClientRect();
    let viewPortHeight = window.innerHeight || document.documentElement.clientHeight;
    return (elPos.top <= 1 && elPos.top > (viewPortHeight * -1));
}


// Set sections states
let sections = document.querySelectorAll('.section');
sections.forEach(function (section, number) {
    number++;

    function setSectionsStates() {
        if (isElementInVewport(section)) {
            document.body.classList.add(`state-${number}`);
            section.classList.add('is-animated');
        } else {
            document.body.classList.remove(`state-${number}`);
        }
    }

    window.addEventListener('DOMContentLoaded', setSectionsStates);
    window.addEventListener('scroll', setSectionsStates);
    window.addEventListener('resize', setSectionsStates);

});


// Bg slideshow
let slideshowMain = document.querySelectorAll('.slideshow-main-item');

function startSlideshow(slideshow, shownClass, intervalDelay) {

    if (window.innerWidth < 700 || slideshow.length === 0) return;

    slideshow[0].classList.add(shownClass);

    setInterval(function () {
        slideshow.forEach(function (slide) {
            if (slide.classList.contains(shownClass)) {
                slide.classList.remove(shownClass);
                setTimeout(function () {
                    if (slide.nextElementSibling) {
                        slide.nextElementSibling.classList.add(shownClass);
                    } else {
                        slideshow[0].classList.add(shownClass);
                    }
                }, 0)
            }
        })
    }, intervalDelay)
}

startSlideshow(slideshowMain, 'is-shown', 8000);


// Menu dropdown
var programDropdownTrigger = document.querySelectorAll('.block-dropdown-trigger');
var programDropdown = document.querySelectorAll('.block-dropdown');
var programDropdownLinks = document.querySelectorAll('.block-dropdown-menu a.block-dropdown-item');
var programSwitchLinks = document.querySelectorAll('.block-nav-pills .nav-link');
var programTabs = document.querySelectorAll('.tab-pane');

function toggleDropdown() {
    for (var z = 0; z < programDropdown.length; z++) {
        programDropdown[z].classList.toggle('is-open');
    }
}

for (var j = 0; j < programDropdownTrigger.length; j++) {
    programDropdownTrigger[j].addEventListener('click', function () {
        toggleDropdown();
    });
}

for (var i = 0; i < programDropdownLinks.length; i++) {
    var link = programDropdownLinks[i];
    link.addEventListener('click', function () {
        toggleDropdown();
        var linkId = this.getAttribute('data-link');
        for (var x = 0; x < programSwitchLinks.length; x++) {
            var currentSwitchLink = programSwitchLinks[x].getAttribute('href').substring(1);
            programSwitchLinks[x].classList.remove('active');
            if (linkId === currentSwitchLink) {
                programSwitchLinks[x].classList.add('active');
                for (var y = 0; y < programTabs.length; y++) {
                    programTabs[y].classList.remove('active', 'show');
                    var tabId = programTabs[y].id;
                    if (linkId === tabId) {
                        programTabs[y].classList.add('active', 'show');
                    }
                }
            }
        }
    })
}

