import { Link } from "react-router-dom";

import "./registration.css";

let expanded = false;
function showCheckboxes() {
    const checkboxes = document.getElementById("checkboxes");
    if (expanded) {
        checkboxes.style.display = "none";
        expanded = false;
    } else {
        checkboxes.style.display = "block";
        expanded = true;
    }
};



export const Registration = ({ setType }) => (
    <>
        <header>
            <div id="guap-panel">
                <img id="guap-logo" src="../../../assets/guap.svg" />
            </div>
        </header>
        <div id="fixed-container">
            <div id="form">
                <iframe name="votar" style={{ display: "none" }}></iframe>
                <h1>Регистрация</h1>
                <form action="" method="post" id="forma" name="forma" target="votar">
                    <label className="form-label">Email</label>
                    <input id="email" className="normal-input" type="email" name="email" data-reg="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$" required size="40" placeholder="Введите Email..." />
                    <label className="form-label">ФИО</label>
                    <input id="name" className="normal-input" type="text" required size="40" data-reg="^([а-яёА-ЯЁ]{2,}\s[а-яёА-ЯЁ]{1,}'?-?[а-яёА-ЯЁ]{2,}\s?([а-яёА-ЯЁ]{1,})?)" name="name" placeholder="Введите ФИО..." />
                    <label className="form-label">Пароль</label>
                    <input id="pass" className="normal-input" type="password" name="pass" data-reg="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required size="40" placeholder="Введите пароль..." />
                    <label className="form-label">Пароль</label>
                    <input id="second-pass" className="normal-input" data-reg="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" type="password" required size="40" placeholder="Подтвердите пароль..." />
                    <label className="form-label">Категории CTF</label>
                    <div className="multiselect">
                        <div className="selectBox" onClick={showCheckboxes}>
                            <select>
                                <option>Выберите категории CTF...</option>
                            </select>
                            <div className="overSelect"></div>
                        </div>
                        <div id="checkboxes">
                            <label htmlFor="admin">
                                <input type="checkbox" id="admin" />
                                <span className="fake"></span>
                                Admin</label>
                            <label htmlFor="reverse">
                                <input type="checkbox" id="reverse" />
                                <span className="fake"></span>
                                Reverse/PWN, Binary, Vuln</label>
                            <label htmlFor="stegano">
                                <input type="checkbox" id="stegano" />
                                <span className="fake"></span>
                                Stegano</label>
                            <label htmlFor="ppc">
                                <input type="checkbox" id="ppc" />
                                <span className="fake"></span>
                                Ppc</label>
                            <label htmlFor="forensic">
                                <input type="checkbox" id="forensic" />
                                <span className="fake"></span>
                                Forensic</label>
                            <label htmlFor="crypto">
                                <input type="checkbox" id="crypto" />
                                <span className="fake"></span>
                                Crypto</label>
                            <label htmlFor="web">
                                <input type="checkbox" id="web" />
                                <span className="fake"></span>
                                Web</label>
                            <label htmlFor="network">
                                <input type="checkbox" id="network" />
                                <span className="fake"></span>
                                Network</label>
                            <label htmlFor="osint">
                                <input type="checkbox" id="osint" />
                                <span className="fake"></span>
                                Osint</label>
                        </div>
                    </div>
                    <div id="file-input-container">
                        <input id="file-input" type="file" name="file" accept="image/*" />
                        <label className="form-label-file" htmlFor="file-input" id="reg-file-input">
                            <span>Студенческий билет</span>
                            <div id="stud-logo-container">
                                <img id="stud-bilet-logo" src="../../../assets/stud-bilet.svg" />
                            </div>
                        </label>
                    </div>
                    <button id="button" type="submit" >Зарегистрироваться</button>
                </form>
                <Link to='/login' onClick={setType}>Уже зарегестрирован? Авторизуйся!</Link>
            </div>
        </div>
    </>
)