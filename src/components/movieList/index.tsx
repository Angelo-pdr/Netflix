import * as C from "./styles"

type Props ={
    item: any
}

export const MovieList = ({item}:Props) => {
    return(
        <C.Container>
            <h1>{item.title}</h1>
            
        </C.Container>
    )
}