import { useEffect, useState } from "react";

export const useMovie = ({ movieId, initialMovie, initialReview, initialQuote }) => {
    const baseURL = `http://localhost:3000/api/movie`;
    const [infos, setInfos] = useState(initialMovie);
    const [reviews, setReviews] = useState(initialReview);
    const [quotes, setQuotes] = useState(initialQuote)

    const getInfo = async (movieId) => {
        let response = await fetch(
            `${baseURL}/infos`
        );
        response = await response.json()
        console.log(response)
        setInfos(response)
    }

    const getReviews = async (movieId) => {
        let response = await fetch(
            `${baseURL}/reviews`
        );
        response = await response.json()
        console.log(response)
        setReviews(response)
    }

    const getQuotes = async (movieId) => {
        let response = await fetch(
            `${baseURL}/quotes`
        );
        response = await response.json()
        console.log(response)
        setQuotes(response)
    }

    useEffect(() => {
        getInfo(movieId)
        getReviews(movieId)
        getQuotes(movieId)
    }, [movieId])

    return {
        infos,
        reviews,
        quotes,
    };
};