import * as C from "./styles"

type Props ={
    title: string,
    items: any
}

export const MovieList = ({title, items}:Props) => {
    
    return(
        <C.Container>
            <h1>{title}</h1>
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key}>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                    </div>
                ))}
        </C.Container>  
    )
}