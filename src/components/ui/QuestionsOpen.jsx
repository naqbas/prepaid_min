import { useTranslation } from "react-i18next";
import dropdownIcon from "../../assets/dropdownIcon.svg";


function QuestionsOpen() {
    const [t] = useTranslation("landing");

    function toggleAnswer(event) {
        event.target.closest(".question").nextElementSibling.classList.toggle("answer");
        event.target.closest(".question").lastElementChild.classList.toggle("svgRotate");
    }


    return (
        <div className="w-3/5 sm:w-full" id="openBlock">
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.open.q1")}</h3>
                    <img src={dropdownIcon} className="w-[24px] h-[24px]" alt="Стрелка Вниз" />
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.open.a1")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.open.q2")}</h3>
                    <img src={dropdownIcon} className="w-[24px] h-[24px]" alt="Стрелка Вниз" />
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.open.a2")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.open.q3")}</h3>
                    <img src={dropdownIcon} className="w-[24px] h-[24px]" alt="Стрелка Вниз" />
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.open.a3")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.open.q4")}</h3>
                    <img src={dropdownIcon} className="w-[24px] h-[24px]" alt="Стрелка Вниз" />
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.open.a4")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.open.q5")}</h3>
                    <img src={dropdownIcon} className="w-[24px] h-[24px]" alt="Стрелка Вниз" />
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.open.a5")}</p>
            </div>
        </div >
    );
}

export default QuestionsOpen