import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 w-12 rounded-full object-contain border p-1 mr-3"
          src={img}
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>

      {/* Image */}
      <img className="object-cover w-full" src={img} alt="" />

      {/* Button */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <div>
          <BookmarkIcon className="btn" />
        </div>
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input Box */}
      <form className="flex items-center p-4" action="">
        <EmojiHappyIcon className="h-7" />
        <input
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
          type="text"
        />
        <button className="font-sm-bold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
