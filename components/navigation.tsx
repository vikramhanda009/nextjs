import Link from "next/link";
const Navigation =()=>{
    return (
        <header className="grid grid-cols-1">
            <nav>
                <ul className="flex gap-2">
                    <li>
                        <Link href="/" className="font-roboto underline">Home</Link>
                    </li>
                     <li>
                        <Link href="/about">About</Link>
                    </li>
                     <li>
                        <Link href="/contact">Contact US </Link>
                    </li>
                     <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/clientcomp">Client Component</Link>
                    </li>
                     <li>
                        <Link href="/servercomp">Server Component</Link>
                    </li>
                     <li>
                        <Link href="/rendering/dynamic">Rendering dynamic</Link>
                    </li>
                    <li>
                        <Link href="/rendering/static">Rendering Static</Link>
                    </li>
                    <li>
                        <Link href="/">Jokes</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                     <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/clientcomp">Clientcomp</Link>
                    </li>
                     <li>
                        <Link href="/datafetch/clientcomp">Clientcomp</Link>
                    </li>
                     <li>
                        <Link href="/datafetch/servercomp">Server Comp</Link>
                    </li>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                     <li>
                        <Link href="/doctors">doctors</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navigation;