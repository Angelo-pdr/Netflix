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
            <C.Header>
                <div>
                    <img src="../src/img/netflix.svg" alt="logo" className="logo" />
                    <ul>
                        <li>Início</li>
                        <li>Séries</li>
                        <li>Filmes</li>
                        <li>Bombando</li>
                        <li>Minha lista</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                        <img src="../src/img/usuario.png" alt="perfil de usuario" className="users" />
                        </li>
                    </ul>
                </div>
            </C.Header>
            <C.Destaques banner={banner}>
                <div className="infoMovie">
                    <h1>{title}</h1>
                    <p>{about}</p>
                    <div>
                        <C.Button className="buttonAssitir">Assistir</C.Button>
                        <C.Button>Mais informações</C.Button>
                    </div>
                </div>
                <C.Gradient></C.Gradient>
            </C.Destaques>
            <div>
                {list.map((item, key) => (
                    <MovieList key={key} title={item.title} items={item.items}/>
                ))}
            </div>
        </C.Container>
    )
}