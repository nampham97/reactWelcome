import Container from "./container"

function SearchInfo({searchCondtion}){
    return <div>
        <h2>{searchCondtion} Images</h2>
        <Container searchCondtion={searchCondtion} />
    </div>
}

export default SearchInfo