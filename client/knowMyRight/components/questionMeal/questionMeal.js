Template.questionMeal.events({
  "click #btnNext": function (e) {
    e.preventDefault();
    Session.set("questionMeal",false);
    Session.set("questionPayment",true);
  }
})