export default function NavComponent() {
    return (
        <nav className="w-full bg-neutral-800 text-neutral-100 p-4 rounded-md uppercase mb-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-lg font-bold">Blog</h1>
                </div>
                <div>
                    <ul className="flex flex-row">
                        <li className="mr-4">
                            <a href="/" className="hover:text-neutral-200">Home</a>
                        </li>
                        <li className="mr-4">
                            <a href="/create" className="hover:text-neutral-200">Create</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}