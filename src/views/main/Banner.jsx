import banner from "../../assets/banner.webp";
import BannerBenefit from "../../components/ui/BannerBenefit.jsx";
import { useTranslation } from "react-i18next";
import applepayIcon from "../../assets/applepayIcon.svg";
import googlepayIcon from "../../assets/googlepayIcon.svg";
import samsungpayIcon from "../../assets/samsungpayIcon.svg";


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
                    <div className="flex gap-1 sm:justify-center">
                        <a href="https://bankffin.kz/ru/page/kak-podkliucit-kartu-k-apple-pay-na-smartfone" target="_blank" rel="noreferrer">
                            <div className="px-3 py-2 bg-white rounded-lg">
                                <img src={applepayIcon} alt="Apple Pay" />
                            </div>
                        </a>
                        <a href="https://bankffin.kz/ru/page/kak-podkliucit-kartu-k-google-pay-na-smartfone" target="_blank" rel="noreferrer">
                            <div className="px-3 py-2 bg-white rounded-lg">
                                <img src={googlepayIcon} alt="Google Pay" />
                            </div>
                        </a>
                        <a href="https://bankffin.kz/ru/page/kak-podkliucit-kartu-k-samsung-pay-na-smartfone" target="_blank" rel="noreferrer">
                            <div className="px-3 py-2 bg-white rounded-lg">
                                <img src={samsungpayIcon} alt="Samsung Pay" />
                            </div>
                        </a>
                    </div>
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