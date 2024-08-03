import Link from "next/link";




export default function Navbar(){
return(<>

<header className="flex justify-between bg-black">
    <h1 className="text-white py-5 px-10">portfolio</h1>
    <nav>
        <ul className="text-white flex py-5">
           <Link href="/"><li className="px-7">Home</li></Link>
           <Link href="/contact"><li className="px-7">contact</li></Link>
           <Link href="/about"><li className="px-7">about me</li></Link>
           <Link href="/mywork"><li className="px-10">my work</li></Link>
        </ul>
    </nav>
</header>

</>)

}