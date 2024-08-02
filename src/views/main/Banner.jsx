import banner from "../../assets/banner.webp";
import BannerBenefit from "../../components/ui/BannerBenefit.jsx";
import { useTranslation } from "react-i18next";
import PayOptions from "../../components/ui/PayOptions.jsx";



function Banner() {
    const [t] = useTranslation("landing");

    return (
        <section className="w-full">
            <div className="flex sm:flex-col justify-between mr-16 rounded-br-[70px] bg-[#d9dcf8] dark:bg-[#2b2f4c] dark:text-white">
                <div className="flex flex-col gap-7 px-5 py-16 w-1/2 sm:w-full">
                    <div>
                        <h1 className="text-6xl font-bold">{t("banner.title")}</h1>
                        <div className="flex flex-col gap-5 py-5">
                            <BannerBenefit benefit={t("banner.subtitle.benefit1")} />
                            <BannerBenefit benefit={t("banner.subtitle.benefit2")} />
                            <BannerBenefit benefit={t("banner.subtitle.benefit3")} />
                        </div>
                    </div>
                    <PayOptions />
                    <button className="sm:mx-auto py-4 px-6 w-52 rounded-2xl bg-[#2a8640] text-white">{t("banner.button")}</button>
                </div>
                <div className="flex flex-col justify-end w-1/3 sm:w-full">
                    <img src={banner} alt="Карточки" className="w-full h-auto" />
                </div>
            </div>
        </section>
    );
}

export default Banner