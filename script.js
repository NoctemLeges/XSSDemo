document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsContainer = document.getElementById('commentsContainer');
    
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
    
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
        // Create a new comment element
        const commentElement = document.createElement('div');
        commentElement.innerHTML = '<p>' + commentText + '</p>';
        
        // Append the comment element to the comments container
        commentsContainer.appendChild(commentElement);
        
        // Clear the textarea after submitting the comment
        commentInput.value = '';
      } else {
        alert('Please enter a comment.');
      }
    });
  });
  