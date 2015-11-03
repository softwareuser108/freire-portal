Meteor.publish('programs', function() {
  return Programs.find();
});