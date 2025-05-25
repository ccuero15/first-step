import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink/ActiveLink";

interface NavItem {
    text: string;
    path: string;
}

const navItems: NavItem[] = [
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
    { text: "Pricing", path: "/pricing" },
];

export const Navbar = () => {
    return (

        <nav className="flex justify-between items-center p-4 m02 bg-blue-900 text-white ">
            <Link href={'/'} className="flex items-center">
                <HomeIcon size={26} className="text-white mr-2" />
                <span>Home</span>
            </Link>
            <div className="flex flex-1"></div>
            {navItems.map((item) => (
                <ActiveLink key={item.text} path={item.path} text={item.text}/>
            ))}
            
            {/* <Link className="mr-2" href={'/about'}>about</Link>
            <Link className="mr-2" href={'/pricing'}>pricing</Link>
            <Link className="mr-2" href={'/contact'}>contact</Link> */}
        </nav>





    );
}

{/* <nav className="flex justify-between items-center p-4 m02 bg-blue-800 text-white ">
      <div className="text-2xl font-bold">MyApp</div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </li>
        <li>
          <Link href="/pricing" className="hover:text-gray-400">Pricing</Link>
        </li>
      </ul>
    </nav> */}