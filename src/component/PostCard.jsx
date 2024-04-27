import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  if (!post) return null;
  const { $id, title, featuredImage } = post;
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full h-full px-2 py-5 bg-blue-100 rounded-xl ">
        <div className="w-fit h-44 justify-center m-4">
          <img
            className="rounded-l w-fit h-full object-cover"
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
          />
        </div>
        <h2 className="text-xl font-bold my-1">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
