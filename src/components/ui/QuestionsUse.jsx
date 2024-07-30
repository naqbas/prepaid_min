import { useTranslation } from "react-i18next";


function QuestionsUse() {
    const [t, i18n] = useTranslation("landing");

    function toggleAnswer(event) {
        event.target.closest(".question").nextElementSibling.classList.toggle("answer");
        event.target.closest(".question").lastElementChild.classList.toggle("svgRotate");
    }


    return (
        <div className="w-3/5 sm:w-full hidden" id="useBlock">

            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.use.q1")}</h3>
                    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.58 8.95" stroke="#2a8640" fill="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.use.a1")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.use.q2")}</h3>
                    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.58 8.95" stroke="#2a8640" fill="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.use.a2")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.use.q3")}</h3>
                    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.58 8.95" stroke="#2a8640" fill="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.use.a3")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.use.q4")}</h3>
                    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.58 8.95" stroke="#2a8640" fill="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.use.a4")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.use.q5")}</h3>
                    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.58 8.95" stroke="#2a8640" fill="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.use.a5")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.use.q6")}</h3>
                    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.58 8.95" stroke="#2a8640" fill="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.use.a6")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.use.q7")}</h3>
                    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.58 8.95" stroke="#2a8640" fill="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.use.a7")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.use.q8")}</h3>
                    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.58 8.95" stroke="#2a8640" fill="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.use.a8")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.use.q9")}</h3>
                    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.58 8.95" stroke="#2a8640" fill="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.use.a9")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.use.q10")}</h3>
                    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.58 8.95" stroke="#2a8640" fill="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.use.a10")}</p>
            </div>
            <div>
                <div onClick={toggleAnswer} className="question flex mt-3 justify-between cursor-pointer">
                    <h3 className="text-2xl font-bold mb-5 w-[90%]">{t("questions.tabs.use.q11")}</h3>
                    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.58 8.95" stroke="#2a8640" fill="none" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <p className="hidden mt-1 mb-3 text-[#5c5c5c]">{t("questions.tabs.use.a11")}</p>
            </div>
        </div>
    );
}

export default QuestionsUse