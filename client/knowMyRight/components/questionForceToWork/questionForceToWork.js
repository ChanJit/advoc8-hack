Template.questionForceToWork.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionForceToWork",false);
    Session.set("questionMedicalClaim",true);
  }
})