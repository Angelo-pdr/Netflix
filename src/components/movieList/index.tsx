import {useState} from "react"
import * as C from "./styles"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type Props ={
    title: string,
    items: any
}

export const MovieList = ({title, items}:Props) => {

    const [scrollX, setScrollX] = useState<number>(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        setScrollX(x)
        
        if(x > 0){
            x = 0
            return setScrollX(x)
        }
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round( window.innerWidth / 2);
        let listW = items.results.length * 150
        setScrollX(x)

        if((window.innerWidth - listW) > x  ){
            x = (window.innerWidth - listW) -110
            setScrollX(x)
        }
    }


    return(
        <C.Container>
            <h1>{title}</h1>
            <div className="leftArrow" onClick={handleLeftArrow} >
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="rightArrow" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <section style={{ marginLeft: scrollX, width: items.results.length *150}}>
                {items.results.length > 0 && items.results.map((item: any, key: any) => (
                    <div key={key}>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                         alt={item.name} className="movies"  />
                    </div>
                ))}
            </section>
        </C.Container>  
    )
}