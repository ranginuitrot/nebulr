Nebulr.Views.UserIndex = Backbone.View.extend({
  template: JST['user/index'],
  className: 'user-index',

  render: function () {
    this.$el.html(this.template());

    this.collection.each( function (user) {
      var $li = $("<li class='user-index-item'>");
      $li.html(JST['user/index_item']({ user: user }));
      this.$('ul').append($li);
    }.bind(this));

    var $users = $(
      '<p>' + this.collection.length + '</p>'
    );
    this.$el.prepend($users);

    return this;
  }
});
