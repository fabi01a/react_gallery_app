import { NavLink} from 'react-router-dom';

const Nav = () => (
    //this tells React Router where to navigaate when clicked
    <ul>
        <li><NavLink to='/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/cats'>Cats</NavLink></li>
        <li><NavLink to='/birds'>Birds</NavLink></li>
    </ul>
)

export default Nav;