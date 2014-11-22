Template.postItem.helpers({
  commentsCount: function () {
    if (this.kids)
      return this.kids.length;
    else
      return 0;
  }
});