// model

const Tweeter = () => {
  // Private variables
  let posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" }
      ]
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        { id: "c4", text: "Don't worry second poster, you'll be first one day." },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." }
      ]
    }
  ];

  let postIdCounter = 2;
  let commentIdCounter = 6;

  // Private functions
  const generatePostId = () => {
    postIdCounter++;
    return "p" + postIdCounter;
  };

  const generateCommentId = () => {
    commentIdCounter++;
    return "c" + commentIdCounter;
  };

  // Public methods
  const getPosts = () => posts;

  const addPost = (text) => {
    const newPost = {
      text,
      id: generatePostId(),
      comments: []
    };
    posts.push(newPost);
  };

  const removePost = (postId) => {
    posts = posts.filter((post) => post.id !== postId);
 /*   postIdCounter--; */
 };

  const addComment = (text, postId) => {
    const post = posts.find((post) => post.id === postId);
    if (post) {
      const newComment = {
        id: generateCommentId(),
	text
      };
      post.comments.push(newComment);
    }
  };

  const removeComment = (postId, commentId) => {
    const post = posts.find((post) => post.id === postId);
    if (post) {
      post.comments = post.comments.filter((comment) => comment.id !== commentId);
       /* commentIdCounter--;   */
    }
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};


const tweeter = Tweeter();