const Tweeter = function () {
  const posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        { id: "c4", text: "Don't worry second poster, you'll be first one day." },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let postIdCounter = 2;
  let commentIdCounter = 6;

  const getPosts = function () {
    return posts;
  };

  const addPost = function (text) {
    postIdCounter++;
    const newPost = {
      text: text,
      id: "p" + postIdCounter,
      comments: [],
    };
    posts.push(newPost);
  };

  const removePost = function (postID) {
    const index = posts.findIndex((post) => post.id === postID);
    if (index !== -1) {
      posts.splice(index, 1);
    }
  };

  const addComment = function (postID, text) {
    commentIdCounter++;
    const newComment = {
      id: "c" + commentIdCounter,
      text: text,
    };
    const post = posts.find((post) => post.id === postID);
    if (post) {
      post.comments.push(newComment);
    }
  };

  const removeComment = function (postID, commentID) {
    const post = posts.find((post) => post.id === postID);
    if (post) {
      const index = post.comments.findIndex((comment) => comment.id === commentID);
      if (index !== -1) {
        post.comments.splice(index, 1);
      }
    }
  };

  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
};

const tweeter = Tweeter();

tweeter.addPost("This is my own post!");
console.log(tweeter.getPosts());

tweeter.removePost("p1");
console.log(tweeter.getPosts());

tweeter.addComment("Damn straight it is!", "p3");
tweeter.addComment("Second the best!", "p2");
console.log(tweeter.getPosts());

tweeter.removeComment("p2", "c6");
console.log(tweeter.getPosts());
