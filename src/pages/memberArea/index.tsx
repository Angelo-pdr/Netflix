import * as C from "./styles"
import tmdb from "../../tmdb"
import { useEffect, useState } from "react"
import {MovieList} from '../../components/movieList'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

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
    const [blackHeader, setBlackHeader] = useState<boolean>(false)

    useEffect(() => {
        const loadAll = async () => {
            const list = await tmdb.getMemberlist()
            setList(list)
            let originals = list.filter(item => item.slug === 'originals')    
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
            let chosen = originals[0].items.results[randomChosen]

            setBanner(`https://image.tmdb.org/t/p/original${chosen.backdrop_path}`)
            setTitle(`${chosen.name}`)
            setAbout(`${chosen.overview}`)
        }
        
        const scrollListener = () => {
            if( window.scrollY > 10){
                setBlackHeader(true)
            }
            else{
                setBlackHeader(false)
            }
        }
        
        window.addEventListener('scroll', scrollListener)
        loadAll()
    }, [])

    return(
        <C.Container>
            <C.Header black={blackHeader}>
                <div>
                    <img src="../src/img/netflix.svg" alt="logo" className="logo" />
                        <p className="mobileMenu">Navega ▼</p>
                    <ul className="titles">
                        <li>Início</li>
                        <li>Séries</li>
                        <li>Filmes</li>
                        <li>Bombando</li>
                        <li>Minha lista</li>
                        <li>Navegar por idiomas</li>
                    </ul>
                </div>
                <div>
                    <ul className="icons">
                        <li className="liIcons"><SearchIcon/></li>
                        <li className="liIcons">infantil</li>
                        <li className="liIcons"><NotificationsIcon/></li>
                        <li className="users"><img src="../src/img/usuario.png" alt="perfil de usuario" className="usersImage" /></li>
                        <li className="arrow">▼</li>
                    </ul>
                </div>
            </C.Header>
            <C.Destaques banner={banner}>
                <div className="infoMovie">
                    <h1>{title}</h1>
                    <p>{about}</p>
                    <div>
                        <C.Button className="buttonAssitir">► Assistir</C.Button>
                        <C.Button>+ Mais informações</C.Button>
                    </div>
                </div>
                <C.Gradient></C.Gradient>
            </C.Destaques>
            <div>
                {list.map((item, key) => (
                    <MovieList key={key} title={item.title} items={item.items}/>
                ))}
            </div>
            {list.length <= 0 &&
            <img src="../src/img/Netflix_LoadTime.gif" alt="loandig da netflix"  className="loandig"/>
            }
        </C.Container>
    )
}