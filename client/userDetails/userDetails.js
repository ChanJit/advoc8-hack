import styles from './userDetails.css';

var userSections = [
    "._client_story__story__detailsSectionA",
    "._client_story__story__detailsSectionB",
    "._client_story__story__detailsSectionC"
];

var screenPos = 200;

//start user screening position
window.onload = function(){
    $(document).scrollTop(screenPos);
}

Template.userDetails.helpers({
    styles:styles
});

Template.userDetails.events({
    "click ._client_story__story__detailsSectionA button": function(e) {
        e.preventDefault();
        Session.set('gender', e.target.name);
        $(userSections[0]).removeClass('fadeInRight');
        $(userSections[0]).addClass('fadeOutLeft');
        window.setTimeout(function(){
            $(userSections[0]).css("display", "none");
            $(userSections[1]).css("display", "block");
        }, 1000);
        
    },
     "click ._client_story__story__detailsSectionB button": function(e) {
        e.preventDefault();
        Session.set('ageGroup', e.target.name);
        $(userSections[1]).removeClass('fadeInRight');
        $(userSections[1]).addClass('fadeOutLeft');
        window.setTimeout(function(){
            $(userSections[1]).css("display", "none");
            $(userSections[2]).css("display", "block");
        }, 1000);
    },
     "click ._client_story__story__detailsSectionC button": function(e) {
        e.preventDefault();
        Session.set('workingStatus', e.target.name);
        $(userSections[2]).removeClass('fadeInRight');
        $(userSections[2]).addClass('fadeOutLeft');
    }
});

