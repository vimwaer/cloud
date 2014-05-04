Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      excerpt: $(e.target).find('[name=excerpt]').val(),
      entry: $(e.target).find('[name=entry]').val()
    }

	Meteor.call('post', post, function(error, id) {
		if (error)
			return alert(error.reason);

		Router.go('postPage', {_id: id})
	});

  }
});
