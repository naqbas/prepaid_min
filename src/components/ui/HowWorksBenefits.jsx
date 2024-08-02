import { useTranslation } from "react-i18next";
import shopIcon from "../../assets/shopIcon.svg";
import cvcIcon from "../../assets/cvcIcon.svg";
import documentIcon from "../../assets/documentIcon.svg";
import stopIcon from "../../assets/stopIcon.svg";


function HowWorksBenefits() {
    const [t] = useTranslation("landing");
    const benefits = [
        {
            img: shopIcon,
            alt: "Мир"
        },
        {
            img: cvcIcon,
            alt: "CVC"
        },
        {
            img: documentIcon,
            alt: "Документ"
        },
        {
            img: stopIcon,
            alt: "Запрет"
        }
    ];

    
    return (
        <div className="mt-10 flex gap-5 sm:flex-wrap justify-evenly">
            {
                benefits.map((obj, index) => (
                    <div key={index} className="w-1/4 sm:w-1/3 pt-2 px-5 pb-5 rounded-[20px] bg-white dark:bg-[#282828] flex flex-col gap-2">
                        <img src={obj.img} alt={obj.alt} />
                        <h4>{t("hw.benefits.benefit" + (index+1))}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default HowWorksBenefits
