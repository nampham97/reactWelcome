import axios from "axios";
import { createContext, useState } from "react";
import {apiKey} from '../api/config';

export const PhotoContextCreate = createContext();     //Create context API

function PhotoContextProvider(props){

    const [image, setImage] = useState([]); //list image
    const [isLoading, setIsLoading] = useState(true); //search image co loading khong?

    //CALL API SEARCH IMAGES
    const runQuery = query =>{
        const URL_API = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
        axios.get(URL_API)
        .then(response =>{
            let data = response.data.photos.photo;     //data trả về từ API - query by keyword
            setImage(data);
            setIsLoading(false);
        })
        .catch(e => console.error('Loi ne: ', e));
    }


    return( 
        <PhotoContextCreate.Provider value={ {image, isLoading, runQuery} }>
            {/**
             * Đặt ở parent all
             * hiển thị nội dung App.js */}
            {props.children}    
        </PhotoContextCreate.Provider>
    )


}

export default PhotoContextProvider;