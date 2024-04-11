//posts api next.js
import IPost from "@/interfaces/IPost";
import { NextApiRequest, NextApiResponse } from "next";

const posts: Array<IPost> = [];
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET"
    ) {
        return res.status(200).json({ success: true, posts });
    } else if(req.method === "POST") {
        const { title, description, content, created_by } = req.body;
        posts.push({ id: Number(posts.length + 1), title, description, content, created_at: new Date().toISOString(), updated_at: new Date().toISOString(), created_by: { name: created_by } }); 
        return res.status(201).json({ success: true, posts });
    } else if(req.method === "PUT") {
        const { id, title, description, content, created_by } = req.body;
        const post = posts.find((post) => post.id === id);
        if(post) {
            post.title = title;
            post.description = description;
            post.content = content;
            post.updated_at = new Date().toISOString();
            post.created_by.name = created_by;
            return res.status(200).json({ success: true, posts });
        } else {
            return res.status(404).json({ success: false, error: "Post not found" });
        }
    }
}
