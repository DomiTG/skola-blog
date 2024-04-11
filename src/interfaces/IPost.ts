export default interface IPost {
    id: number;
    title: string;
    description: string;
    content: string;
    created_at: string;
    updated_at: string;
    created_by: {
         name: string;
    }
}