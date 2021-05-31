export default function Post({ post }) {
  return <div>{post.Title}</div>;
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.Slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:1337/posts?Slug=${slug}`);
  const data = await res.json();

  return {
    props: {
      post: data[0],
    },
  };
}
