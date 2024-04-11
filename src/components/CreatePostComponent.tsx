import { useRouter } from "next/router";
import { useState } from "react"

export default function CreatePostComponent() {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(loading) return;
        setLoading(true);
        try {
            const title = (e.currentTarget.elements.namedItem("title") as HTMLInputElement).value;
            const description = (e.currentTarget.elements.namedItem("description") as HTMLInputElement).value;
            const content = (e.currentTarget.elements.namedItem("content") as HTMLInputElement).value;
            const created_by = (e.currentTarget.elements.namedItem("created_by") as HTMLInputElement).value;
            const response = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, description, content, created_by })
            });
            const data = await response.json();
            if(data.success) {
                router.push("/");
            } else {
                console.log(data.error);
            }
            setLoading(false);
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <div className="bg-neutral-800 p-4 rounded-md mt-4">
            <h1 className="text-xl font-bold text-zinc-100 uppercase">Create Post</h1>
            <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-neutral-200">Title</label>
                    <input type="text" id="title" name="title" className="w-full p-2 border border-neutral-700 rounded-md bg-neutral-900 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-neutral-200">Description</label>
                    <textarea id="description" name="description" className="w-full p-2 border border-neutral-700 rounded-md bg-neutral-900 text-white"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-neutral-200">Content</label>
                    <textarea id="content" name="content" className="w-full p-2 border border-neutral-700 rounded-md bg-neutral-900 text-white"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="created_by" className="block text-neutral-200">Created by</label>
                    <input type="text" id="created_by" name="created_by" className="w-full p-2 border border-neutral-700 rounded-md bg-neutral-900 text-white" />
                </div>
                <button type="submit" className="bg-primary-500 text-neutral-100 p-2 rounded-md">Create Post</button>
            </form>
        </div>
    )
}