import FormSearh from "./formSearch";
import Navigation from "./navigation";

function Header({handleSubmit, history}){
    return <div>
        <h1>Around The World</h1>
        <FormSearh
            handleSubmit = {handleSubmit}
            history = {history}
        >   
        </FormSearh>
        <Navigation/>
    </div>
}

export default Header;