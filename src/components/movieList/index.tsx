import { useEffect, useState } from "react"
import * as C from "./styles"

type Props ={
    title: string,
    items: any
    key?: number
}

export const MovieList = ({title, items}:Props) => {
    

    return(
        <C.Container>
            
            <h1>{title}</h1>
            <section>
                {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} 
                            alt={item.original_name} className="movies"  />
                        </div>
                    ))}
            </section>
        </C.Container>  
    )
}