Template.questionWorkingDays.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionWorkingDays",false);
    Session.set("questionScareToWork",true);
  }
})