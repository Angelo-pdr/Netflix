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
    const [limitRight, setLimitRight] = useState<string>("flex")
    const [limitLeft, setLimitLeft] = useState<string>("flex")

    const handleLeftArrow = () => {
        let x = scrollX + Math.round( window.innerWidth / 2);
        setScrollX(x)
        
        if(x > 0){
            x = 0
            setScrollX(x)
            if(limitLeft == "flex"){
                setLimitLeft("none")
            }else{
                setLimitLeft("flex")
            }
        }
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round( window.innerWidth / 2);
        let listW = items.results.length * 270
        setScrollX(x)
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 105
            setScrollX(x)
            if(limitRight == "flex"){
                setLimitRight("none")
            }else{
                setLimitRight("flex")
            }
        }

    }

    return(
        <C.Container>
            <h1>{title}</h1>
            <div className="leftArrow" style={{display:limitLeft}} onClick={handleLeftArrow} >
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="rightArrow" style={{display:limitRight}} onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <section style={{ marginLeft: scrollX, width: items.results.length * 200}}>
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