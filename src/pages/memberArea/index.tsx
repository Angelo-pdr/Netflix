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

        let originals = list.forEach(i => i.slug === 'originals')
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
        let chosen = originals[0].items.results.length[randomChosen]

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