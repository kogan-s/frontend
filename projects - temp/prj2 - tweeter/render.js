//render

// render.js

const Renderer = () => {
  const renderPosts = (posts) => {
    const $postsContainer = $("#posts");
    $postsContainer.empty();

    posts.forEach((post) => {
      const postHTML = `
        <div class="post" data-id="${post.id}">
          <p class="post-text">${post.text}</p>
          <div class="comments">
            ${renderComments(post.comments)}
          </div>
        </div>
      `;
      $postsContainer.append(postHTML);
    });
  };

  const renderComments = (comments) => {
    return comments
      .map((comment) => `<p class="comment" data-id="${comment.id}">${comment.text}</p>`)
      .join("");
  };

  return {
    renderPosts,
  };
};

const renderer = Renderer();