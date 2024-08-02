import { useTranslation } from "react-i18next";
import dropdownIcon from "../../assets/dropdownIcon.svg";


function QuestionsProblem() {
    const [t] = useTranslation("landing");

    function toggleAnswer(event) {
        event.target.closest(".question").nextElementSibling.classList.toggle("answer");
        event.target.closest(".question").lastElementChild.classList.toggle("svgRotate");
    }

    return (
        <div className="w-3/5 sm:w-full hidden" id="problemBlock">
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.problem.q1")}</h3>
                    <img src={dropdownIcon} className="w-[24px] h-[24px]" alt="Стрелка Вниз" />
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.problem.a1")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.problem.q2")}</h3>
                    <img src={dropdownIcon} className="w-[24px] h-[24px]" alt="Стрелка Вниз" />
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.problem.a2")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.problem.q3")}</h3>
                    <img src={dropdownIcon} className="w-[24px] h-[24px]" alt="Стрелка Вниз" />
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.problem.a3")}</p>
            </div>
        </div>
    );
}

export default QuestionsProblem