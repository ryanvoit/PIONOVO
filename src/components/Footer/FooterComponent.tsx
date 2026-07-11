export default function FooterComponent() {
    return (
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__description">
                    <p className="footer__text">Мы - P.I.O.N.O.V.O.</p>
                </div>
                <div className="footer__contacts">
                    <h2 className="footer__heading">Контакты</h2>
                    <a className="footer__link" href="#">
                        <svg className="footer__icon" width="20" height="20" aria-hidden="true">
                            <use href="images/sprite.svg#phone-icon"></use>
                        </svg>
                        <span>+7 (931) 281-09-22</span>
                    </a>
                    <a className="footer__link" href="#">
                        <svg className="footer__icon" width="20" height="20" aria-hidden="true">
                            <use href="images/sprite.svg#email-icon"></use>
                        </svg>
                        <span>hello@pionovo.ru</span>
                    </a>
                    <ul className="header__social social social--footer">
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
                <ul className="footer__advantages-list">
                    <li className="footer__advantages-item">
                        <p className="footer__advantages-text">Доставка по всему городу</p>
                    </li>
                    <li className="footer__advantages-item">
                        <p className="footer__advantages-text">Свежие пионы</p>
                    </li>
                    <li className="footer__advantages-item">
                        <p className="footer__advantages-text">Работаем 24/7</p>
                    </li>
                    <li className="footer__advantages-item">
                         <p className="footer__advantages-text">Что-то ещё</p>
                    </li>
                </ul>

            </div>
        </div>
    )
}