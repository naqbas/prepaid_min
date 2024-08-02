import socialMedia from "../../assets/socialMedia.svg"
import { useTranslation } from "react-i18next";
import shopIcon from "../../assets/shopIcon.svg";
import cvcIcon from "../../assets/cvcIcon.svg";
import documentIcon from "../../assets/documentIcon.svg";
import stopIcon from "../../assets/stopIcon.svg";


function HowWorks() {
    const [t] = useTranslation("landing");

    return (
        <section className="px-3 my-[100px] dark:text-white">
            <h2 className="text-5xl font-bold mb-10">{t("hw.title")}</h2>
            <h3 className="w-[90%] text-xl tracking-tight">{t("hw.subtitle1")}<img src={socialMedia} alt="социальные сети" className="inline" />. {t("hw.subtitle2")}</h3>
            <div className="mt-10 flex gap-5 sm:flex-wrap justify-evenly">
                <div className="w-1/4 sm:w-1/3 pt-2 px-5 pb-5 rounded-[20px] bg-white dark:bg-[#282828] flex flex-col gap-2">
                    <img src={shopIcon} alt="Мир" />
                    <h4>{t("hw.benefits.benefit1")}</h4>
                </div>
                <div className="w-1/4 sm:w-1/3 pt-2 px-5 pb-5 rounded-[20px] bg-white dark:bg-[#282828] flex flex-col gap-2">
                    <img src={cvcIcon} alt="CVC" />
                    <h4>{t("hw.benefits.benefit2")}</h4>
                </div>
                <div className="w-1/4 sm:w-1/3 pt-2 px-5 pb-5 rounded-[20px] bg-white dark:bg-[#282828] flex flex-col gap-2">
                    <img src={documentIcon} alt="Документ" />
                    <h4>{t("hw.benefits.benefit3")}</h4>
                </div>
                <div className="w-1/4 sm:w-1/3 pt-2 px-5 pb-5 rounded-[20px] bg-white dark:bg-[#282828] flex flex-col gap-2">
                    <img src={stopIcon} alt="Запрет" />
                    <h4>{t("hw.benefits.benefit4")}</h4>
                </div>
            </div>
        </section>
    );
}

export default HowWorks