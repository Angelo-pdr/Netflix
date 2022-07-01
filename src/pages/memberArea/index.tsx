import * as C from "./styles"
import tmdb from "../../tmdb"
import { useEffect, useState } from "react"
import {MovieList} from '../../components/movieList'

type Items = {
    slug: string
    title: string
    items: any
}

export const MemberArea = () => {

    const [list, setList] = useState<object[]>([])

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