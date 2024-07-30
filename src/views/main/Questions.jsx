import { useTranslation } from "react-i18next";
import QuestionsOpen from "../../components/ui/QuestionsOpen.jsx";
import QuestionsUse from "../../components/ui/QuestionsUse.jsx";
import QuestionsLegal from "../../components/ui/QuestionsLegal.jsx";
import QuestionsProblem from "../../components/ui/QuestionsProblem.jsx";


function Questions() {
    const [t, i18n] = useTranslation("landing");
    function changeQuestionsTabs(title) {
        const open = document.querySelector("#open");
        const use = document.querySelector("#use");
        const legal = document.querySelector("#legal");
        const problem = document.querySelector("#problem");

        const openBlock = document.querySelector("#openBlock");
        const useBlock = document.querySelector("#useBlock");
        const legalBlock = document.querySelector("#legalBlock");
        const problemBlock = document.querySelector("#problemBlock");


        if (title === "open") {
            open.classList.add("activeTab");
            openBlock.style.display = "block";

            use.classList.remove("activeTab");
            legal.classList.remove("activeTab");
            problem.classList.remove("activeTab");

            useBlock.style.display = "none";
            legalBlock.style.display = "none";
            problemBlock.style.display = "none";
        }
        else if (title === "use") {
            use.classList.add("activeTab");
            useBlock.style.display = "block";

            open.classList.remove("activeTab");
            legal.classList.remove("activeTab");
            problem.classList.remove("activeTab");

            openBlock.style.display = "none";
            legalBlock.style.display = "none";
            problemBlock.style.display = "none";
        }
        else if (title === "legal") {
            legal.classList.add("activeTab");
            legalBlock.style.display = "block";

            use.classList.remove("activeTab");
            open.classList.remove("activeTab");
            problem.classList.remove("activeTab");

            useBlock.style.display = "none";
            openBlock.style.display = "none";
            problemBlock.style.display = "none";
        }
        else if (title === "problem") {
            problem.classList.add("activeTab");
            problemBlock.style.display = "block";

            use.classList.remove("activeTab");
            open.classList.remove("activeTab");
            legal.classList.remove("activeTab");

            useBlock.style.display = "none";
            openBlock.style.display = "none";
            legalBlock.style.display = "none";
        }
    }

    return (
        <section className="px-5 py-[100px] dark:text-white">
            <h2 className="text-5xl font-bold mb-10">{t("questions.title")}</h2>
            <div className="flex sm:flex-col gap-8">
                <div className="w-2/5 flex flex-col gap-1 sm:w-full text-3xl">
                    <p onClick={() => changeQuestionsTabs("open")} id="open" className="activeTab text-lg cursor-pointer py-5 px-6 bg-white dark:bg-[#282828] rounded-t-2xl">{t("questions.tabs.open.title")}</p>
                    <p onClick={() => changeQuestionsTabs("use")} id="use" className="text-lg cursor-pointer py-5 px-6 bg-white dark:bg-[#282828]">{t("questions.tabs.use.title")}</p>
                    <p onClick={() => changeQuestionsTabs("legal")} id="legal" className="text-lg cursor-pointer py-5 px-6 bg-white dark:bg-[#282828]">{t("questions.tabs.legal.title")}</p>
                    <p onClick={() => changeQuestionsTabs("problem")} id="problem" className="text-lg cursor-pointer py-5 px-6 bg-white dark:bg-[#282828] rounded-b-2xl">{t("questions.tabs.problem.title")}</p>
                </div>
                <QuestionsOpen />
                <QuestionsUse />
                <QuestionsLegal />
                <QuestionsProblem />
            </div>
        </section>
    );
}

export default Questions