App.Router.map(function() {
  this.resource('debates', { path: '/' }, function() {});
  this.resource('debate', { path: '/debate/:debate_id' });
});

App.DebatesIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('debate');
  }
});

App.DebateRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('debate', params.debate_id);
  }
});
