'use client';
import React, { useState } from "react";
import { Card, CardContent } from "../Components/ui/Card";
import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/Button";


interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;

}
export default function CommentSection({}: CommentSectionProps) {
   const [Comment, setComment] = useState<Comment[]>([]); 
   const [newComment, setNewComment] = useState("");
   const [authorName, setAuthorName] = useState("");
   const [editingCommentId, setEditingCommentId] =useState<string | null>(null);

   const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj : Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      
      };
      setComment([...Comment, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
   };

  const handleEditComment = (commentID: string) => {
    const commentToEdit = Comment.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
};

const handleSaveEditedComment = () => {
  if (newComment.trim() && authorName.trim() && editingCommentId) {
    const updatedComments = Comment.map((Comment) =>
    Comment.id === editingCommentId
    ? {...Comment, text:newComment, author:authorName}
  : Comment
);
setComment(updatedComments);
setNewComment( " " );
setAuthorName( " " );
setEditingCommentId(null);
  }
};

return (
  <div className="mt-8">
    <h2 className="text-2xl font-semibold"> Comments</h2>
    <div className="mt-4 space-y-4">
      {Comment.length > 0 ? (
        Comment.map((comment) => (
          <Card key={comment.id}>
            <CardContent className=" p-4">
              <div className="font-semibold">{comment.author}</div>
              <p>{comment.text}</p>
              <Button
                onClick={() => handleEditComment(comment.id)}
                className="mt-2 text-blue-400">
                  Edit
              </Button>

            </CardContent>
          </Card>
        ))
      ) : (
        <p className="text-blue-700"> No comment yet</p>
      )
      }
    </div>

    <div className="mt-6">
      <Input
      type="text"
      value={authorName}
      onChange={(e) => setAuthorName(e.target.value)}
      placeholder="Your name"
      className="w-full mb-2"
      />
      <Input
      type="text"
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      placeholder="Add a comment"
      className="w-full mb-2"
      />
      <Button
      onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
      className=" bg-blue-500 mt-4">
        {editingCommentId ? 'Save' : 'Submit'}

      </Button>
    </div>

  </div>
);

}