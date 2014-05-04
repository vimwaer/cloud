Posts = new Meteor.Collection('posts');

// Method
Meteor.methods({

	post: function(postAttributes) {

		var user = Meteor.user(),
		postWithSameLink = Posts.findOne({url: postAttributes.url});

		// Ensure is logged in
		if(!user)
			throw new Meteor.Error(401, "You need to login to post");

		// ensure post has title
		if (!postAttributes.title)
			throw new Meteor.Error(422, 'Hey, Bub, where is your title?');

		// Check prev posts
		
		// Pick out whitelisted keys
		var post = _.extend(_.pick(postAttributes, 'url', 'title', 'entry', 'excerpt'), {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()		
		});

		var postId = Posts.insert(post);

		return postId;
	}
});
