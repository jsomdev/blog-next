export default function Home(props: any) {
  return (
    <div>
      {props.posts.map((post: any) => {
        return (
          <div>
            <h1>{post.Title}</h1>
            <h5>{post.Slug}</h5>
            <p>{post.Author.username}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/posts");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      posts: data,
    },
  };
}
