"use client"
import React, { useState } from 'react';

const CommentSection = () => {
  // State to hold the list of comments with username
  const [comments, setComments] = useState<{ username: string, text: string }[]>([]);
  
  // State to hold the current comment input
  const [newComment, setNewComment] = useState<string>('');
  const [username, setUsername] = useState<string>('');  // State to hold the username

  // Function to handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== '' && username.trim() !== '') {
      setComments([...comments, { username, text: newComment }]);
      setNewComment('');  // Clear the comment input after adding
      setUsername('');  // Clear the username input after adding
    }
  };

  // Function to handle deleting a comment
  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="comment-section container mx-auto flex flex-col p-4">
      <h3 className="text-3xl font-semibold mb-4 text-center mx-auto">Comments</h3>

      {/* Input to enter username */}
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-3 rounded-md shadow-md w-1/2 mx-auto"
          placeholder="Enter your username..."
        />
      </div>

      {/* Input to add a new comment */}
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="border p-3 rounded-md shadow-md w-1/2 mx-auto"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleAddComment}
          className="bg-orange-400 text-white px-6 py-2 mt-4 rounded-md shadow-md mx-auto"
        >
          Add Comment
        </button>
      </div>

      {/* Display the list of comments */}
      <div className="mt-6">
        {comments.length === 0 ? (
          <p className="text-center text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="border-b py-4 flex justify-between items-center">
              <p className="flex-grow text-gray-700"><strong>{comment.username}</strong>: {comment.text}</p>
              <button
                onClick={() => handleDeleteComment(index)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
