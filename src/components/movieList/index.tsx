import { useEffect, useState } from "react"
import * as C from "./styles"

type Props ={
    title: string,
    items: any
    key: number
}

export const MovieList = ({title, items, key}:Props) => {

    return(
        <C.Container key={key}>
            <h1>{title}</h1>
            <section>
                {items.results.length > 0 && items.results.map((item: any, key: any) => (
                    <div key={key}>
                        <img src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} 
                         alt={item.name} className="movies"  />
                    </div>
                ))}
            </section>
        </C.Container>  
    )
}