if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Super Simple Blogging.',
    author: 'Admin',
    url: 'http://vimwaer.co/',
    excerpt: 'Blogging Platform 0.1',
    entry: 'You read it right, I am building my own little blogging platform.  Why?  All in the name of research & development.'
  });
}
