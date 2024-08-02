import { useTranslation } from "react-i18next";
import logoFooter from "../assets/logoFooter.svg"
import whatsappIcon from "../assets/whatsappIcon.svg";
import telIcon from "../assets/telIcon.svg";
import instaIcon from "../assets/instaIcon.svg";
import facebookIcon from "../assets/facebookIcon.svg";
import tiktokIcon from "../assets/tiktokIcon.svg";


function Footer() {
    const [t] = useTranslation("landing");

    return (
        <footer className="bg-[#f5f6f7] pt-10 pb-10 border-t dark:bg-[#282828] dark:text-white">
            <section className="flex sm:flex-wrap justify-between items-center pb-20">
                <a href="#" className="pl-2">
                    <img src={logoFooter} alt="Логотип" />
                </a>
                <nav className="flex justify-between items-center gap-10">
                    <div className="flex items-center">
                        <a href="https://wa.me/77760595595" className="p-3">
                            <img src={whatsappIcon} alt="WhatsApp" />
                        </a>
                        <div>
                            <p className="w-max">+7 776 1 595 595</p>
                            <p className="text-xs text-[#939393]">WHATSAPP</p>
                        </div>
                    </div>
                    <div className="flex  items-center">
                        <a href="tel:595" className="p-3">
                            <img src={telIcon} alt="Телефон" />
                        </a>
                        <div>
                            <p>595</p>
                            <p className="text-xs text-[#939393]">{t("footer.call")}</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-5 sm:hidden">
                        <a href="https://www.instagram.com/bankffin.kz/" className="p-2">
                            <img src={instaIcon} alt="Инстаграм" />
                        </a>
                        <a href="https://www.facebook.com/bankffin.kz" className="p-2">
                            <img src={facebookIcon} alt="Фейсбук" />
                        </a>
                        <a className="p-2" href="https://www.tiktok.com/@bankffin.kz?_d=secCgYIASAHKAESPgo8yEEHeluxBl8xQIn2jkt73RwH4aEmS1sBylYYKHHXdO%2FpJD5Unk1Y6ySplmX8fgIau3EbRWKAvSuk4Jy7GgA%3D&amp;_r=1&amp;language=ru&amp;sec_uid=MS4wLjABAAAAqiW2M57HqTThoYDf_ElCCQE2ec1xnISFiwgt30HlHyLKFzMyC8ZjjWxrP8kGzmEa&amp;sec_user_id=MS4wLjABAAAAqiW2M57HqTThoYDf_ElCCQE2ec1xnISFiwgt30HlHyLKFzMyC8ZjjWxrP8kGzmEa&amp;share_app_id=1233&amp;share_author_id=7008486303806505985&amp;share_link_id=32981fb4-55b4-4ba3-ae85-a1e8d14081da&amp;source=h5_m&amp;timestamp=1654773109&amp;u_code=dkidhhb95f1c26&amp;ugbiz_name=Account&amp;user_id=7008486303806505985&amp;utm_campaign=client_share&amp;utm_medium=android&amp;utm_source=copy">
                            <img src={tiktokIcon} alt="тикток" />
                        </a>
                    </div>
                </nav>
            </section>
            <section className="flex justify-end text-xs text-[#939393] border-t">
                <p className="mt-5 pr-2">{t("footer.copyright")}</p>
            </section>
        </footer>
    );
}

export default Footer