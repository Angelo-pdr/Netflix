import * as C from "./styles"
import tmdb from "../../tmdb"
import { useEffect, useState } from "react"
import {MovieList} from '../../components/movieList'

type Items = {
    slug: string
    title: string
    items: object
}

export const MemberArea = () => {

    const [list, setList] = useState<Items[]>([])
    const [banner, setBanner] = useState<string>(``)
    const [title, setTitle] = useState<string>(``)
    const [about, setAbout] = useState<String>(``)
    useEffect(() => {
        const loadAll = async () => {
            const list = await tmdb.getMemberlist()
            setList(list)
            let originals = list.filter(item => item.slug === 'originals')    
            console.log(originals[0].items)
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
            let chosen = originals[0].items.results[randomChosen]

            setBanner(`https://image.tmdb.org/t/p/original${chosen.backdrop_path}`)
            setTitle(`${chosen.name}`)
            setAbout(`${chosen.overview}`)
            console.log(chosen)
        }

        loadAll()
    }, [])

    return(
        <C.Container>
            <C.Destaques banner={banner}>
                <div className="infoMovie">
                    <h1>{title}</h1>
                    <p>{about}</p>
                    <div>
                        <button>Assistir</button>
                        <button>Mais informações</button>
                    </div>
                </div>
                <C.Gradient></C.Gradient>
            </C.Destaques>
            {list.map((item, key) => (
                <MovieList key={key} title={item.title} items={item.items}/>
            ))}
        </C.Container>
    )
}