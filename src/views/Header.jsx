import i18next from "i18next";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import freedomLogo from "../assets/freedomLogo.svg";
import whatsappIcon from "../assets/whatsappIcon.svg";
import telIcon from "../assets/telIcon.svg";
import userIcon from "../assets/userIcon.svg";
import lightIcon from "../assets/lightIcon.svg"; 
import darkIcon from "../assets/darkIcon.svg";


function Header() {

    const [t, i18n] = useTranslation("landing");
    const [language, setLanguage] = useState("ru");

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }

    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        document.querySelector("#lightButton").classList.toggle("lightButton");
    }

    function handleChangeLanguage(lang) {
        if (lang === "ru") {
            setLanguage("kz");
            i18n.changeLanguage("kz");
        }
        else {
            setLanguage("ru");
            i18n.changeLanguage("ru");
        }
        document.title = t("header.title");
    }



    return (
        <header className="flex justify-between items-center text-lg p-2 dark:bg-[#1a1a1a] dark:text-white">
            <div>
                <a href="#">
                    <img src={freedomLogo} alt="Логотип" />
                </a>
            </div>

            <nav className="flex justify-between items-center gap-4 mr-3">
                <div className="flex justify-between items-center">
                    <a href="https://wa.me/77760595595" className="bg-[#e5e7eb] dark:bg-[#282828] flex justify-center items-center p-1 mr-2 rounded-full">
                        <img src={whatsappIcon} alt="WhatsApp" />
                    </a>
                    <p className="w-max sm:hidden">+7 776 0 595 595</p>
                </div>
                <div className="flex justify-between items-center">
                    <a href="tel:595" className="bg-[#e5e7eb] dark:bg-[#282828] flex justify-center items-center p-2  mr-2 rounded-full">
                        <img src={telIcon} alt="Телефон" />
                    </a>
                    <p className="sm:hidden">595</p>
                </div>
                <div className="flex justify-between items-center">
                    <button className="bg-[#e5e7eb] dark:bg-[#282828] flex justify-center items-center p-2 mr-2 rounded-full">
                        <img src={userIcon} alt="Пользователь" />
                    </button>
                    <p className="sm:hidden">{t("header.enter")}</p>
                </div>
                <button className="bg-[#e5e7eb] dark:bg-[#282828] p-2 rounded-full text-xs mr-2" onClick={() => handleChangeLanguage(language)}>{language === "ru" ? "Рус" : "Қаз"}</button>
                <div onClick={handleThemeSwitch} className="bg-[#e5e7eb] dark:bg-[#282828] rounded-full p-[0.125rem] flex justify-between items-center gap-1">
                    <button className="p-1 rounded-full lightButton" id="lightButton">
                        <img src={lightIcon} alt="День" />
                    </button>
                    <button className="p-1 rounded-full dark:bg-[#2a8640]">
                        <img src={darkIcon} alt="Ночь" />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header