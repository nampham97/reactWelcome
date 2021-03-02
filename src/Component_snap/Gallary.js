import ImageSnap from './Images';
import NoImage from './NoImage';

function Gallary({dataImg}){

    let imageRender;
    let noImageRender;

    if(dataImg !== undefined && dataImg.length > 0){
        imageRender = dataImg.map( (img, idx) =>{

            const title = img.title;
            const farm = img.farm;
            const server = img.server;
            const id = img.id;
            const secret = img.secret;
        
            const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

            imageRender = <li key={idx}><ImageSnap srcImg={url} titleImg={title} /></li>;
            return imageRender;
        });
    }else{
        noImageRender = <NoImage />
    }


    return(
        <div className="imgGallary">
            <ul className="ulImg">
                {imageRender}
            </ul>
            {noImageRender}
        </div>
    )
}

export default Gallary;