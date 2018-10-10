Meteor.publish('players', function() {
  var cursor = Players.find({}, {fields: {name: 1, score: 1, scores: 1}});
  // simulate latency to show optimistic UI
  return cursor;
});
