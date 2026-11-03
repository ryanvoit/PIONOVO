import { Icon } from "../Common/Icon/Icon"

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
                        <Icon role='phone' className="footer__icon"/>
                        <span>+7 (931) 281-09-22</span>
                    </a>
                    <a className="footer__link" href="#">
                        <Icon role='email' className="footer__icon"/>
                        <span>hello@pionovo.ru</span>
                    </a>
                    <ul className="header__social social social--footer">
                        <li className="social__item">
                            <a className="social__link" href="#">
                                <Icon role='instagram' className="social__icon"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a className="social__link" href="#">
                                <Icon role='telegram' className="social__icon"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a className="social__link" href="#">
                                <Icon role='whats-app' className="social__icon"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a className="social__link" href="#">
                                <Icon role='vk' className="social__icon"/>
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