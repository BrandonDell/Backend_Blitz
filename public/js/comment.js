const commentFormHandler = async function (event) {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="recipe-id"]').value;
    const postBody = document.querySelector(
      'textarea[name="comment-body"]'
    ).value;
  
    if (postBody) {
      postBody;
      await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          recipeId,
          recipeBody,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      document.location.reload();
    }
  };
  
  document
    .querySelector("#new-comment-form")
    .addEventListener("submit", commentFormHandler);
  