import styles from './story.css';

var userSections = [
    "._client_story__story__detailsSectionA",
    "._client_story__story__detailsSectionB",
    "._client_story__story__detailsSectionC"
];

Template.userDetails.helpers({
    styles:styles
});

Template.userDetails.events({
    "click ._client_story__story__detailsSectionA button": function(e) {
        console.log("HI");
        e.preventDefault();
        Session.set('gender', e.target.name);
        $(userSections[0]).removeClass('fadeInDown');
        $(userSections[0]).addClass('fadeOutDown');
        window.setTimeout(function(){
            $(userSections[0]).css("display", "none");
            $(userSections[1]).css("display", "block");
        }, 1000);
        
    },
     "click ._client_story__story__detailsSectionB button": function(e) {
        e.preventDefault();
        Session.set('ageGroup', e.target.name);
        $(userSections[1]).removeClass('fadeInDown');
        $(userSections[1]).addClass('fadeOutDown');
        window.setTimeout(function(){
            $(userSections[1]).css("display", "none");
            $(userSections[2]).css("display", "block");
        }, 1000);
    },
     "click ._client_story__story__detailsSectionC button": function(e) {
        e.preventDefault();
        Session.set('workingStatus', e.target.name);
        //$(userSections[2]).css("display", "none");
    }
});
