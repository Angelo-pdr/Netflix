import * as C from "./styles"
import tmdb from "../../tmdb"
import { useEffect, useState } from "react"

import {MovieList} from '../../components/movieList'

export const MemberArea = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        const loadAll = async () => {
            const list = await tmdb.getMemberlist()
            setList(list)
            console.log(list)
        }

        loadAll()
    }, [])

    return(
        <C.Container>
            {list.map((item, key) => (
                <MovieList key={key} title={item.title} items={item.items}/>
            ))}
        </C.Container>
    )
}