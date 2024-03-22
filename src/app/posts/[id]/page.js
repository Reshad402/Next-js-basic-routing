import Link from "next/link";

export async function generateStaticParams(){
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  console.log(posts)
  const id = 
    posts.map(post => {
      return {
        id: post.id + "",
      };
    })
    console.log(id)
  

  return [id]
}

const PageDetails = async({params}) => {
    // console.log(params.id);
    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
    // const res = await fetch("http://localhost:5000/posts/1");
    const post = await res.json();
  return (
    <div className="card w-[70%] mx-auto bg-base-100 my-5 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.description}</p>
                            <p>Total Like :{post.likes}</p>
                            <div className="card-actions justify-end">

                                    {/* !posts ta holo folder er name */}
                                    {/* allPosts the map er result */}
                                <Link href={'/posts'}>
                                    <button className="btn btn-primary">Back</button>
                                </Link>
                            </div>
                        </div>
                    </div>
  )
}

export default PageDetails;