import HeaderInfo from "./HeaderInfo"
import { Icon } from "../Common/Icon/Icon"

export default function HeaderComponent() {
    return (
        <div className="container">
            <div className="header__wrapper">
                <HeaderInfo />
                <div className="header__main">
                    <div className="header__main-wrapper">
                        <a className="header__main-link" href="#">
                            <span>P.I.O.N.O.V.O.</span>
                        </a>
                        <div className="header__catalogue-wrapper">
                            <button className="header__btn-catalogue btn btn--secondary">
                                <span>Каталог</span>
                                <Icon role='burger' className="btn__icon"/>           
                            </button>
                            <ul className="header__catalogue-list">
                                <li className="header__catalogue-item">
                                    <a href="#" className="header__catalogue-link">8 Марта</a>
                                </li>
                                <li className="header__catalogue-item">
                                    <a href="#" className="header__catalogue-link">14 Февраля</a>
                                </li>
                                <li className="header__catalogue-item">
                                    <a href="#" className="header__catalogue-link">Букет пионов</a>
                                </li>
                                <li className="header__catalogue-item">
                                    <a href="#" className="header__catalogue-link">Пионы поштучно</a>
                                </li>
                                <li className="header__catalogue-item">
                                    <a href="#" className="header__catalogue-link">Пионы в коробке</a>
                                </li>
                                <li className="header__catalogue-item">
                                    <a href="#" className="header__catalogue-link">Пионы в сумке</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__buttons">
                        <button className="header__btn btn">
                            <span>Корзина</span>
                            <div className="btn__icon-wrapper">
                                <Icon role='cart' className="btn__icon"/> 
                            </div>
                        </button>
                        <button className="header__btn btn">
                            <span>Войти</span>
                            <div className="btn__icon-wrapper">
                                <Icon role='user' className="btn__icon"/> 
                            </div>
                        </button>
                    </div>
                </div>
                <div className="header__bottom">
                    <nav className="header__nav-menu main-nav">
                        <ul className="main-nav__list">
                            <li className="main-nav__item">
                                <a className="main-nav__link" href="#">Доставка</a>
                            </li>
                            <li className="main-nav__item">
                                <a className="main-nav__link" href="#">Оплата</a>
                            </li>
                            <li className="main-nav__item">
                                <a className="main-nav__link" href="#">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__contacts">
                        <a className="header__link header__link--contrast" href="tel:+79312810922">
                            <Icon role='phone' className="header__icon"/> 
                            <span>+7 (931) 281-09-22</span>
                        </a>
                        <a className="header__link header__link--contrast" href="mailto:hello@pionovo.ru">
                            <Icon role='email' className="header__icon"/> 
                            <span>hello@pionovo.ru</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}