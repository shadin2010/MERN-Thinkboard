import React from "react";
import { Link } from "react-router-dom"; // Obossoi "react-router-dom" hote hobe
import { FileQuestionIcon, PlusIcon } from "lucide-react";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <div className="bg-base-300 p-6 rounded-full mb-4 text-primary">
        <FileQuestionIcon className="size-12" />
      </div>
      
      <h2 className="text-2xl font-bold text-base-content mb-2">
        No Notes Found
      </h2>
      
      <p className="text-base-content/70 max-w-md mb-6">
        You haven't created any notes yet. Get started by creating your first note to keep track of your thoughts!
      </p>

      {/* Ekhane Link component-ti ekhon sothik vabe kaj korbe */}
      <Link to="/create" className="btn btn-primary gap-2">
        <PlusIcon className="size-5" />
        <span>Create New Note</span>
      </Link>
    </div>
  );
};

export default NotesNotFound;