import Post from "./Post";

function Posts() {
  const DummyData = [
    {
      id: "123",
      username: "Admin",
      userImg: "https://i.pravatar.cc/300",
      img: "https://i.pravatar.cc/300",
      caption: "Posts are working!",
    },
    {
      id: "123",
      username: "Admin",
      userImg: "https://i.pravatar.cc/300",
      img: "https://i.pravatar.cc/300",
      caption: "Posts are working!",
    },
  ];

  return (
    <div>
      {DummyData.map((item) => (
        <Post
          key={item.id}
          id={item.id}
          username={item.username}
          userImg={item.userImg}
          img={item.img}
          caption={item.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
