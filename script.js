// JavaScript to handle post creation and display
document.getElementById("postButton").addEventListener("click", function () {
    const postInput = document.getElementById("postInput");
    const postContent = postInput.value.trim();

    if (postContent) {
        // Create a new post element
        const post = document.createElement("div");
        post.className = "post";

        // Add content to the post
        post.innerHTML = `
            <h3>Anonymous User</h3>
            <p>${postContent}</p>
        `;

        // Append the post to the timeline
        const timeline = document.getElementById("timeline");
        timeline.appendChild(post);

        // Clear the input field
        postInput.value = "";
    } else {
        alert("Please write something before posting!");
    }
});
