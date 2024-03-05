import Header from "../conpoment/header"
import { useState, useEffect } from "react"
import Link from "next/link"
export default function Blog (){
    const [articles, setArticle] = useState([])
    const [load, setLoad] = useState(false)


    
    useEffect(()=>{
        const getArticle = async ()=>{
            const res = await fetch("/api/blog/posts")
            const posts =await res.json()
            setArticle(posts)
            setLoad(true)
        }
        getArticle()
    },[])
    return(
        <div>
            <Header/>
            <div>
                <h1>Blog</h1>
                <ul className="list">
                    {articles.map((post, index) =>{
                        return <li key={index}><Link href={`/blog/${post}`}>article N°{index} </Link></li>
                    })}
                </ul>
            </div>
        </div>
    )
}