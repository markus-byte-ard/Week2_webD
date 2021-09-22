import "./styles.css";

if (document.readyState !== "loading") {
  initialize();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready");
    initialize();
  });
}

function initialize() {
  const addCommentButton = document.getElementById("add-comment");
  const removeCommentsButton = document.getElementById("remove-comments");
  const commentList = document.getElementById("comment-list");

  addCommentButton.addEventListener("click", function () {
    const commentText = document.getElementById("comment-text");
    const commentRating = document.getElementById("stars");

    let newListItem = document.createElement("div");
    newListItem.classList.add("comment");
    if (commentText.value !== "") {
      let newRating = document.createElement("p");
      newRating.classList.add("comment-rating");
      let newComment = document.createElement("p");
      newComment.classList.add("comment-text");

      newListItem.appendChild(newRating);
      newListItem.appendChild(newComment);

      newRating.appendChild(document.createTextNode(commentRating.value));
      newComment.appendChild(document.createTextNode(" " + commentText.value));
      /*newListItem.innerHTML = commentText.value;*/
      commentList.appendChild(newListItem);
    } else {
      newListItem.innerHTML = "Amazing food very good";
      commentList.appendChild(newListItem);
    }
  });

  removeCommentsButton.addEventListener("click", function () {
    let confirmation = confirm("Are you sure ?");
    if (confirmation === true) {
      while (commentList.hasChildNodes())
        commentList.removeChild(commentList.lastChild);
    }
  });
}

/*document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
*/
