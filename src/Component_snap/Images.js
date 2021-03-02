import { Card } from "react-bootstrap";

function ImagesSnap({srcImg, titleImg}){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={srcImg}></Card.Img>
            <Card.Body>
                <Card.Title>{titleImg}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default ImagesSnap;