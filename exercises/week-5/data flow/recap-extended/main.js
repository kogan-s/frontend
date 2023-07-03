let posts = [
  { name: "Uncle Jerome", text: "Happy birthday kido!" },
  { name: "BFF Charlene", text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD" },
  { name: "Old High School Teacher", text: "Hey ace, have a good one." }
];

const render = function () {
  const postContainer = $('#postContainer');
  postContainer.empty(); // Clear previous posts

  for (let [index, post] of posts.entries()) {
    let postDiv = $(`<div class="post" data-index="${index}"><p class="name">${post.name}</p><p class="text">${post.text}</p></div>`);
    postContainer.append(postDiv);
  }

  // Add click event handler to remove post
  $('.post').click(function () {
    const index = $(this).data('index');
    posts.splice(index, 1);
    render();
  });
};

render();

$('#submitButton').click(function () {
  const name = $('#nameInput').val();
  const text = $('#textInput').val();

  posts.push({ name: name, text: text });
  render();

  // Clear input fields
  $('#nameInput').val('');
  $('#textInput').val('');
});
