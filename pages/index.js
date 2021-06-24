import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <div>
      {/* loop over posts and show them here */}
      {posts &&
        posts.map((post) => (
          <Link href={`/${post.Slug}`} key={post.id}>
            <a>
              <h1>{post.Title}</h1>
              <div>{post.User.username}</div>
            </a>
          </Link>
        ))}
    </div>
  );
}

export async function getStaticProps(){
  // get posts from our api

  const res = await fetch("http://localhost:1337/posts");

  const posts = await res.json()


  return{
    props: { posts }
  }
}
