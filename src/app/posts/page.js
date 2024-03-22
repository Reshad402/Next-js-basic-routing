import Link from "next/link";

const PostPage = async () => {
    const res = await fetch('http://localhost:5000/posts', {
        cache: "no-cache",
    });
    const post = await res.json();
    console.log(post)
    return (
        <div>
            <h2>PostPage : {post.length}</h2>
            {
                post.map(allPosts =>
                    <div key={allPosts.id} className="card w-[70%] mx-auto bg-base-100 my-5 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{allPosts.title}</h2>
                            <p>{allPosts.description}</p>
                            <p>Total Like :{allPosts.likes}</p>
                            <div className="card-actions justify-end">

                                    {/* !posts ta holo folder er name */}
                                    {/* allPosts the map er result */}
                                <Link href={`/posts/${allPosts.id}`}>
                                    <button className="btn btn-primary">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    )
            }
        </div>

    )
}

export default PostPage;