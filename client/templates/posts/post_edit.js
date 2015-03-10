Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    }

    Meteor.call('postEdit', currentPostId, postProperties, function (error, result) {
      if (error)
        return alert(error.reason);

      if (result.postExists)
        return alert('This link has already been posted');

      Router.go('postsList');
    });
  },

'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});