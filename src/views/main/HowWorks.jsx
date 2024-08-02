import socialMedia from "../../assets/socialMedia.svg"
import { useTranslation } from "react-i18next";
import HowWorksBenefits from "../../components/ui/HowWorksBenefits";



function HowWorks() {
    const [t] = useTranslation("landing");

    return (
        <section className="px-3 my-[100px] dark:text-white">
            <h2 className="text-5xl font-bold mb-10">{t("hw.title")}</h2>
            <h3 className="w-[90%] text-xl tracking-tight">{t("hw.subtitle1")}<img src={socialMedia} alt="социальные сети" className="inline" />. {t("hw.subtitle2")}</h3>
            <HowWorksBenefits />
        </section>
    );
}

export default HowWorks