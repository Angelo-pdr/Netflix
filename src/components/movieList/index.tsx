
import * as C from "./styles"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type Props ={
    title: string,
    items: any
    key: number
}

export const MovieList = ({title, items, key}:Props) => {

    return(
        <C.Container key={key}>
            <h1>{title}</h1>
            <div className="seta"><NavigateBeforeIcon style={{fontSize: 50}}/></div>
            <div className="seta"><NavigateNextIcon style={{fontSize: 50}}/></div>
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