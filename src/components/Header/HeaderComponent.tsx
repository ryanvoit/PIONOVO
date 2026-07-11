export default function HeaderComponent() {
    return (
        <div className="container">
            <div className="header__wrapper">
                <div className="header__info">
                    <ul className="header__advantage-list">
                        <li className="header__advantage-item">Свежие пионы</li>
                        <li className="header__advantage-item">Подарки к букетам</li>
                    </ul>
                    <div className="header__info-wrapper">
                        <a className="header__link" href="#">
                            <svg className="header__icon" width="24" height="24" aria-hidden="true">
                                <use href="images/sprite.svg#location-icon"></use>
                            </svg>
                            <span>Санкт-Петербург, Проспект Обуховской обороны, 73; Метро "Елизаровская"</span>
                        </a>
                        <ul className="header__social social">
                            <li className="social__item">
                                <a className="social__link" href="#">
                                    <svg className="social__icon" width="20" height="20" aria-hidden="true">
                                        <use href="images/sprite.svg#inst-icon"></use>
                                    </svg>
                                </a>
                            </li>
                            <li className="social__item">
                                <a className="social__link" href="#">
                                    <svg className="social__icon" width="20" height="20" aria-hidden="true">
                                        <use href="images/sprite.svg#telegram-icon"></use>
                                    </svg>
                                </a>
                            </li>
                            <li className="social__item">
                                <a className="social__link" href="#">
                                    <svg className="social__icon" width="20" height="20" aria-hidden="true">
                                        <use href="images/sprite.svg#whats-up-icon"></use>
                                    </svg>
                                </a>
                            </li>
                            <li className="social__item">
                                <a className="social__link" href="#">
                                    <svg className="social__icon" width="20" height="20" aria-hidden="true">
                                        <use href="images/sprite.svg#vk-icon"></use>
                                    </svg>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="header__main">
                    <div className="header__main-wrapper">
                        <a className="header__main-link" href="#">
                            <span>P.I.O.N.O.V.O.</span>
                        </a>
                        <div className="header__catalogue-wrapper">
                            <button className="header__btn-catalogue btn btn--secondary">
                                <span>Каталог</span>
                                <svg className="btn__icon" width="24" height="24" aria-hidden="true">
                                    <use href="images/sprite.svg#burger-menu-icon"></use>
                                </svg>
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
                                <svg className="btn__icon" width="24" height="24" aria-hidden="true">
                                    <use href="images/sprite.svg#cart-icon"></use>
                                </svg>
                            </div>
                        </button>
                        <button className="header__btn btn">
                            <span>Войти</span>
                            <div className="btn__icon-wrapper">
                                <svg className="btn__icon" width="24" height="24" aria-hidden="true">
                                    <use href="images/sprite.svg#user-icon"></use>
                                </svg>
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
                            <svg className="header__icon" width="20" height="20" aria-hidden="true">
                                <use href="images/sprite.svg#phone-icon"></use>
                            </svg>
                            <span>+7 (931) 281-09-22</span>
                        </a>
                        <a className="header__link header__link--contrast" href="mailto:hello@pionovo.ru">
                            <svg className="header__icon" width="20" height="20" aria-hidden="true">
                                <use href="images/sprite.svg#email-icon"></use>
                            </svg>
                            <span>hello@pionovo.ru</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}