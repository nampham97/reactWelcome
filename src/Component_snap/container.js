import { useContext, useEffect } from "react";
import { PhotoContextCreate } from "../Context/photoContext";




function Container({searchCondtion}){
    // <PhotoContext />
    const {image, isLoading, runQuery} = useContext(PhotoContextCreate);

    useEffect( searchCondtion =>{
        // runQuery(searchCondtion);
        console.log('asssss');
    }, ['searchCondtion']);

    return <div>
        <h2>{searchCondtion}</h2>
    </div>
}

export default Container;