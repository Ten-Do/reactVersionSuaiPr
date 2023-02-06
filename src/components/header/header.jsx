import { Link } from "react-router-dom"
import { PATHS } from '../../utils/urls'
import brandSvg from '../../assets/brand.svg'
import underlineSvg from '../../assets/underline.svg'
import './header.css'
import { useUser } from "../../store/store"

export const Header = () => {

    const userEmail = useUser(state => state.email)

    return (
        <header>
            <div className="menu">
                <div className="menu_image"><img src={brandSvg} alt="logoStolen(" /></div>
                <div className="menu_items">
                    <div className="menu_button">
                        <div id="main"><Link to={PATHS.home} className="menu_item">Главная</Link></div>
                        <div id="main_1"><img src={underlineSvg} alt="" /></div>
                    </div>
                    <div className="menu_button" >
                        <div id="profile"><Link to={PATHS.tasks} className="menu_item">Задания</Link></div>
                        <div id="profile_1"><img src={underlineSvg} alt="" /></div>
                    </div>
                    <div className="menu_button">
                        <div id="materials"><Link to={PATHS.materials} className="menu_item">Материалы</Link></div>
                        <div id="materials_1"><img src={underlineSvg} alt="" /></div>
                    </div>
                    <div className="menu_button">
                        <div id="exersise"><Link to={localStorage.getItem("token") ? PATHS.profile : PATHS.login} className="menu_item">Профиль</Link></div>
                        <div id="exersise_1"><img src={underlineSvg} alt="" /></div>
                    </div>
                </div>
            </div>
            <nav>
                <div className="navbar">
                    <div className="container nav-container">
                        <input className="checkbox" type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <div className="menu-items">
                            <div className="menu-items-item"><li><Link to={PATHS.home}>Главная</Link></li></div>
                            <div className="menu-items-item"><li><Link to={PATHS.tasks}>Задания</Link></li></div>
                            <div className="menu-items-item"><li><Link to={PATHS.materials}>Материалы</Link></li></div>
                            <div className="menu-items-item"><li><Link to={localStorage.getItem("token") ? PATHS.profile : PATHS.login}>Профиль</Link></li></div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}