import IPost from "@/interfaces/IPost";

export default function ListedPostComponent({ post }: { post: IPost }) {
    return(
        <div className="w-full bg-neutral-800 text-neutral-100 p-4 rounded-md hover:bg-neutral-700 transition duration-200 ease-in-out shadow-md">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold">{post.title}</h2>
                </div>
                <div>
                    <p className="text-xs">Vytvořil: {post.created_by.name}</p>
                </div>
            </div>
            <hr className="my-2 border-neutral-700" />
            <div>
                <p>{post.content}</p>
            </div>
            <hr className="my-2 border-neutral-700" />
            <div className="flex flex-row items-center justify-between">
                <div>
                    <p className="text-xs">Vytvořeno: {new Date(post.created_at).toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-xs">Poslední úprava: {new Date(post.updated_at).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}