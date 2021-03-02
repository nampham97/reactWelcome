import { useContext, useEffect } from "react";
import { PhotoContextCreate } from "../Context/photoContext";
import Gallary from "./Gallary";
import Loading from "./Loading";




function Container({searchCondtion}){
    // <PhotoContext />
    const {image, isLoading, runQuery} = useContext(PhotoContextCreate);
    
    useEffect( () =>{
        runQuery(searchCondtion);
        // eslint-disable-next-line
    }, [searchCondtion]);

    return <div>
        {isLoading === true ? <Loading /> : <Gallary dataImg={image} />}
    </div>
}

export default Container;