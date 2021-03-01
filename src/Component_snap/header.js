import FormSearh from "./formSearch";
import Navigation from "./navigation";

function Header({handleSubmit, history}){
    return <div>
        <h1>Snapshot</h1>
        <FormSearh
            handleSubmit = {handleSubmit}
            history = {history}
        >   
        </FormSearh>
        <Navigation/>
    </div>
}

export default Header;