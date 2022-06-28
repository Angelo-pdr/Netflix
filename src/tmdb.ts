import React from "react"

const API_KEY: string = "de21eecc0dd7ff29a70e9f3f1b5086b6"
const API_BASE: string = "https://api.themoviedb.org/3"

const basicFetch = async (endpoint: string) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()

    return json
}


export default {
    getMemberlist:async () => {
        return[
            {
                slug: "originals",
                title: "Originais do Netflix",
                item: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomedados para vocé",
                item: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em Alta",
                item: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "actions",
                title: "Ação",
                item: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                item: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terro",
                item: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                item: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documetários",
                item: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }
}