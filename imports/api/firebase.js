import Firebase from "firebase";

/*  Hacker News API with Firebase
  Github: https://github.com/HackerNews/API

  100 Stories
  TopStories = [ 8414149, 8414078, 8413972, 8411638, 8414102, 8413204, 8413100, 8413971, 8412744, 8414003, 8412841, 8412802, 8412605, 8413548, 8413123, 8414437, 8412897, 8413028, 8413341, 8412425, 8411762, 8413623, 8412346, 8411356, 8413056, 8413365, 8412372, 8414055, 8412877, 8412167, 8413264, 8414137, 8410519, 8412933, 8411846, 8412929, 8411254, 8411512, 8412777, 8412626, 8413274, 8414389, 8414117, 8412114, 8412212, 8412759, 8412696, 8412768, 8411643, 8411866, 8413966, 8410976, 8410545, 8410358, 8413979, 8414129, 8411791, 8409075, 8410314, 8411532, 8411553, 8412099, 8412085, 8410356, 8409084, 8412862, 8409823, 8412705, 8410220, 8409323, 8414090, 8410326, 8414206, 8411026, 8408298, 8407364, 8413066, 8412104, 8412235, 8412786, 8395689, 8414318, 8406384, 8414314, 8406507, 8408501, 8413630, 8414180, 8400778, 8413804, 8407298, 8413233, 8412601, 8411277, 8409940, 8414287, 8397750, 8412679, 8412727, 8413104 ]

  Ranking Algorithms: (score - 1) / (now - time + 2)^1.5
  
  story = {
    "by" : "dhouston",
    "id" : 8863,
    "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
    "score" : 111,
    "time" : 1175714200,
    "title" : "My YC app: Dropbox - Throw away your USB drive",
    "type" : "story",
    "url" : "http://www.getdropbox.com/u/2/screencast.html"
  };

  comment = {
    "by" : "norvig",
    "id" : 2921983,
    "kids" : [ 2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141 ],
    "parent" : 2921506,
    "text" : "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
    "time" : 1314211127,
    "type" : "comment"
  };

  update = {
    "items" : [ 8423305, 8420805, 8423379, 8422504, 8423178, 8423336, 8422717, 8417484, 8423378, 8423238, 8423353, 8422395, 8423072, 8423044, 8423344, 8423374, 8423015, 8422428, 8423377, 8420444, 8423300, 8422633, 8422599, 8422408, 8422928, 8394339, 8421900, 8420902, 8422087 ],
    "profiles" : [ "thefox", "mdda", "plinkplonk", "GBond", "rqebmm", "neom", "arram", "mcmancini", "metachris", "DubiousPusher", "dochtman", "kstrauser", "biren34", "foobarqux", "mkehrt", "nathanm412", "wmblaettler", "JoeAnzalone", "rcconf", "johndbritton", "msie", "cktsai", "27182818284", "kevinskii", "wildwood", "mcherm", "naiyt", "matthewmcg", "joelhaus", "tshtf", "MrZongle2", "Bogdanp" ]
  };
*/

const firebaseRef = new Firebase("https://hacker-news.firebaseio.com/v0");

export const topStoriesRef = firebaseRef.child("topstories");
export const itemRef = firebaseRef.child("item");
export const updatesRef = firebaseRef.child("updates");

// var topStoriesId;

// topStoriesRef.on('value', Meteor.bindEnvironment(function (snapshot) {
//   // console.log(snapshot.val());
//   if (TopStories.find().count() === 0) {
//     /* Initial Data from Firebase */
//     topStoriesId = TopStories.insert({
//       data: snapshot.val()
//     });
//     refreshPosts(snapshot.val());
//   } else {
//     /* Keep refreshing data from Firebase server */
//     topStoriesId = TopStories.findOne()._id;
//     console.log(topStoriesId);
//     TopStories.update(topStoriesId, {$set: {data: snapshot.val()}}, function (error) {
//       if (error)
//         console.log(error);
//       refreshPosts(snapshot.val());
//     });
//   }
// }));

// function refreshPosts(dataArray) {
//   // Posts.remove({});
//   for (var index = 0, length = dataArray.length; index < length; index++) {
//     itemRef.child(dataArray[index]).once('value', Meteor.bindEnvironment(function (snapshot) {
//       // Posts.insert(snapshot.val());
//       var now = new Date().getTime() / 1000;
//       var createdTime = snapshot.val().time;
//       var ageInHours = (now - createdTime) / 3600;
//       var algorithm = (snapshot.val().score - 1) / Math.pow(ageInHours + 2, 1.5);
//       var story = _.extend(snapshot.val(), {
//         rank: algorithm
//       });
//       Stories.upsert({id: snapshot.val().id}, story);
//     }));
//   }
// }
