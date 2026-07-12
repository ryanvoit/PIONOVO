import { Icon } from "../Common/Icon/Icon"

export default function HeaderInfo() {
    return (
        <div className="header__info">
            <ul className="header__advantage-list">
                <li className="header__advantage-item">Свежие пионы</li>
                <li className="header__advantage-item">Подарки к букетам</li>
            </ul>
            <div className="header__info-wrapper">
                <a className="header__link" href="#">
                    <Icon className="header__icon" role='location' />
                    <span>Санкт-Петербург, Проспект Обуховской обороны, 73; Метро &laquo;Елизаровская&raquo;</span>
                </a>
                <ul className="header__social social">
                    <li className="social__item">
                        <a className="social__link" href="#">
                            <Icon className="social__icon" role='instagram' />
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="social__link" href="#">
                            <Icon className="social__icon" role='telegram' />
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="social__link" href="#">
                            <Icon className="social__icon" role='whats-app' />
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="social__link" href="#">
                            <Icon className="social__icon" role='vk' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
)}