import IPost from "@/interfaces/IPost";
import ListedPostComponent from "./ListedPostComponent";

export default function ListedPostsComponent({ posts, loading }: { posts: IPost[], loading: boolean }) {

    return(
        <div className="flex flex-col space-y-4">
            {
                posts.length === 0 && !loading && (
                    <div className="bg-neutral-800 text-neutral-100 p-4 rounded-md">
                        <p>Žádné příspěvky nebyly nalezeny.</p>
                    </div>
                )
            }
            {
                loading && (
                    <div className="bg-neutral-800 text-neutral-100 p-4 rounded-md">
                        <p>Načítám příspěvky...</p>
                    </div>
                )
            }
            {
                posts.map((post: IPost) => (
                    <ListedPostComponent key={post.id} post={post} />
                ))
            }
        </div>
    );
}