
// Test:

renderer.renderPosts(tweeter.getPosts());


console.log('phase 0');
console.log(tweeter.getPosts());



console.log('phase 1');
tweeter.addPost("This is my own post!");
console.log(tweeter.getPosts());
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

console.log('phase 2');
tweeter.removePost("p1");
console.log(tweeter.getPosts());
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================
/*
console.log('phase 3');
tweeter.addComment("Damn straight it is!", "p3");
tweeter.addComment("Second the best!", "p2");
console.log(tweeter.getPosts());
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}
//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

/*
console.log('phase 4');
tweeter.removeComment("p2", "c6");
console.log(tweeter.getPosts());
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}

*/