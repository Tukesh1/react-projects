function Navbar() {
    return (
        <>
            <div className=" flex flex-col items-center top-0 z-10 h-16 mx-auto   ">
                <nav class="pointer-events-auto md:block">
                    <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        <li><a class="relative block px-4 py-4 transition hover:text-teal-500 dark:hover:text-teal-400" href="/about">About</a></li>
                        <li><a class="relative block px-4 py-4 transition hover:text-teal-500 dark:hover:text-teal-400" href="/articles">Articles</a></li>
                        <li><a class="relative block px-4 py-4 transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a></li>
                        <li><a class="relative block px-4 py-4 transition hover:text-teal-500 dark:hover:text-teal-400" href="/speaking">Speaking</a></li>
                        <li><a class="relative block px-4 py-4 transition hover:text-teal-500 dark:hover:text-teal-400" href="/uses">Uses</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Navbar;