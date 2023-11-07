import Link from "next/link";
import { BiGhost } from "react-icons/bi";

type LinksProps = {
    link: string,
    name: string
}

export default function Navbar ({links} : {links: LinksProps[]}) {
    return (
        <nav className="px-4 flex justify-between items-center w-full border-b-2 border-b-blue-950 py-3">
            <Link className="cursor-pointer" href='/'>
        <BiGhost className="text-2xl text-white" />
            </Link>
        <ul className="flex gap-5 text-white text-sm">
            {
                links.map(link => (
                    <li key={link.name}>
                        <Link href={link.link.includes('home') ? '/' : `/${link.link}`}>{link.name}</Link>
                    </li>
                ))
            }
        </ul>
      </nav>
    )
}