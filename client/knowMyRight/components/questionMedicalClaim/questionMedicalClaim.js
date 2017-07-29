Template.questionMedicalClaim.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionMedicalClaim",false);
    Session.set("questionMeal",true);
  }
})