import Link from "next/Link";
import Style  from "../../styles/header.module.css";

export default function Header (){
    return(
        <div>
            <ul className={Style.menu}>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
            </ul>
        </div>
    )
}