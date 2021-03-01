import { NavLink } from "react-router-dom";

function Navigation(){
    return <nav className="navNavi">
        <ul className="ulNav">
            <li><NavLink className="badge badge-secondary" exact to="/travel">Travel</NavLink></li>
            <li><NavLink className="badge badge-secondary" exact to="/car">Car</NavLink></li>
            <li><NavLink className='badge badge-secondary' exact to="/Fashion">Fashion</NavLink></li>
            <li><NavLink className="badge badge-secondary" exact to="/Animals">Animals</NavLink></li>
        </ul>
    </nav>
}
export default Navigation;