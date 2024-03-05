import Header from "../conpoment/header"

export default function Single (titre, content){
    return(
        <div>
            <Header/>
            <div>
                <h1>{titre} </h1>

            </div>
        </div>
    )
}

export async function getStaticProps({params}){
    const {slug} = params
    const res = await fetch(`http://localhost:3000/api/blog/post?slug=${slug} `)
    const post = await res.json()

    return{
        props:{
            titre : post[0].titre,
            content: post[0].content

        }
    }

}

export async function getStaticPaths(){
    const res = await fetch(`http://localhost:3000/api/blog/posts`)
    const posts = await res.json()
    const paths = posts.map(post =>({
        params: {slug: post.slug}
    }))

    return {paths, fallback: false}
}