import React from "react";
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

const Backaction = {

    getSearchList: async (searchKey) => {
        const url = `https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&key=${'AIzaSyBaC9_2uYBQzce2cpCR_w9E361y4lbd3d8'}&q=${searchKey}&type=video&videoType=movie`;
        const result = await axios.get(url);
        return result.data.items;
    },
    getRecommendedMovies: async () => {
        const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBaC9_2uYBQzce2cpCR_w9E361y4lbd3d8&type=video&part=snippet&videoEmbeddable=true&videoType=movie`;
        const result = await axios.get(url);
        return result.data.items;
    }

}

export default Backaction;