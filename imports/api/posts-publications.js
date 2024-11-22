import { Meteor } from "meteor/meteor";
import { itemRef, topStoriesRef } from "./firebase";

Meteor.publish("posts", function (options) {
  var self = this;
  var firstRun = true;
  topStoriesRef.on(
    "value",
    Meteor.bindEnvironment(function (topSnapshot) {
      var dataArray = topSnapshot.val();
      // console.log(firstRun);
      if (firstRun) {
        for (
          var index = 0, length = dataArray.length;
          index < length;
          index++
        ) {
          (function (index) {
            itemRef.child(dataArray[index]).once(
              "value",
              Meteor.bindEnvironment(function (itemSnapshot) {
                self.added("posts", itemSnapshot.val().id, itemSnapshot.val());
              })
            );
          })(index);
        }
        firstRun = false;
      } else {
        for (
          var index = 0, length = dataArray.length;
          index < length;
          index++
        ) {
          (function (index) {
            itemRef.child(dataArray[index]).once(
              "value",
              Meteor.bindEnvironment(function (itemSnapshot) {
                self.changed(
                  "posts",
                  itemSnapshot.val().id,
                  itemSnapshot.val()
                );
              })
            );
          })(index);
        }
      }
      self.ready();
    })
  );
});
