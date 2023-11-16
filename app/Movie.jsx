import Link from "next/link"
import Image from "next/image"
export default function Movie({title, id, poster_path, release_date}){
    const imagePath = "https://image/tmdb.org/t/p/original"
    return ( 
        <div className="">
            <h1>{title}</h1>
            <h2>{release_date}</h2>
                <Link href={'/asd'}>
                </Link>
        </div>
    )
}