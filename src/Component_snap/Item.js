import Container from "./container";


function ItemInfoSearch({searchCondtion}){
    return <div>
        <h2>{searchCondtion} Items</h2>
        <Container searchCondtion={searchCondtion} />
    </div>
}

export default ItemInfoSearch;