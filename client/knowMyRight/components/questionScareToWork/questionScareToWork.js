Template.questionScareToWork.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionScareToWork",false);
    Session.set("questionForceToWork",true);
  }
})