Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

PostsListController = RouteController.extend({
  template: 'postsList',
  increment: 5,
  postsLimit: function() {
    // return parseInt(this.params.postsLimit) || this.increment;
    return 30;
  },
  findOptions: function() {
    return {sort: this.sort, limit: this.postsLimit()};
  },
  subscriptions: function() {
    this.postsSub = Meteor.subscribe('stories', this.findOptions());
  },
  posts: function() {
    return Stories.find({}, this.findOptions());
  },
  data: function() {
    var hasMore = this.posts().count() === this.postsLimit();
    return {
      posts: this.posts(),
      ready: this.postsSub.ready,
      nextPath: hasMore ? this.nextPath() : null
    };
  }
});

BestPostsController = PostsListController.extend({
  sort: {rank: -1},
  nextPath: function() {
    return Router.routes.home.path({
      postsLimit: this.postsLimit() + this.increment
    });
  }
});

Router.route('/', {
  name: 'home',
  controller: BestPostsController
});