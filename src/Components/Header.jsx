import '../Styles/Header.css'
import menu from '../assets/icons8-menu-64.png';

function Header({onClickFunction}){
    
    return(
        <header>
            <nav className="header-nav">
                <img onClick={onClickFunction} src={menu} alt="" />
                <h1>QuizBot</h1>
            </nav>
            <hr/>
        </header>
    );
};

export default Header;