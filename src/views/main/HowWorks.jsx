import socialMedia from "../../assets/socialMedia.svg"
import { useTranslation } from "react-i18next";

function HowWorks() {
    const [t, i18n] = useTranslation("landing");

    return (
        <section className="px-3 my-[100px] dark:text-white">
            <h2 className="text-5xl font-bold mb-10">{t("hw.title")}</h2>
            <h3 className="w-[90%] text-xl tracking-tight">{t("hw.subtitle1")}<img src={socialMedia} alt="социальные сети" className="inline" />. {t("hw.subtitle2")}</h3>
            <div className="mt-10 flex gap-5 sm:flex-wrap justify-evenly">
                <div className="w-1/4 sm:w-1/3 pt-2 px-5 pb-5 rounded-[20px] bg-white dark:bg-[#282828] flex flex-col gap-2">
                    <svg width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25.072" cy="51.679" r="6.32" fill="url(#prefix__paint0_linear_70_6791)"></circle><circle cx="42.575" cy="51.679" r="6.32" fill="url(#prefix__paint1_linear_70_6791)"></circle><path fillRule="evenodd" clipRule="evenodd" d="M49.332 15.858A3.16 3.16 0 0152.212 14h6.772a3.16 3.16 0 110 6.32H54.25l-3.449 7.623a3.16 3.16 0 01-5.759-2.605l4.29-9.48z" fill="url(#prefix__paint2_linear_70_6791)"></path><g filter="url(#prefix__filter0_bi_70_6791)"><path d="M11.32 28.013c-.667-2.537 1.246-5.018 3.869-5.018h37.755c2.623 0 4.536 2.481 3.868 5.018l-5.187 19.712a4 4 0 01-3.868 2.983h-27.38a4 4 0 01-3.869-2.983L11.32 28.013z" fill="#72BF44" fillOpacity="0.5"></path></g><defs><linearGradient id="prefix__paint0_linear_70_6791" x1="18.752" y1="45.359" x2="29.775" y2="44.078" gradientUnits="userSpaceOnUse"><stop stopColor="#4FB84E"></stop><stop offset="1" stopColor="#2A8640"></stop></linearGradient><linearGradient id="prefix__paint1_linear_70_6791" x1="36.255" y1="45.359" x2="47.278" y2="44.078" gradientUnits="userSpaceOnUse"><stop stopColor="#4FB84E"></stop><stop offset="1" stopColor="#2A8640"></stop></linearGradient><linearGradient id="prefix__paint2_linear_70_6791" x1="44.762" y1="14" x2="59.876" y2="12.068" gradientUnits="userSpaceOnUse"><stop stopColor="#4FB84E"></stop><stop offset="1" stopColor="#2A8640"></stop></linearGradient><filter id="prefix__filter0_bi_70_6791" x="7.187" y="18.995" width="53.76" height="35.713" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_70_6791"></feComposite><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_70_6791" result="shape"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="0.2" dy="0.1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"></feColorMatrix><feBlend in2="shape" result="effect2_innerShadow_70_6791"></feBlend></filter></defs></svg>
                    <h4>{t("hw.benefits.benefit1")}</h4>
                </div>
                <div className="w-1/4 sm:w-1/3 pt-2 px-5 pb-5 rounded-[20px] bg-white dark:bg-[#282828] flex flex-col gap-2">
                    <svg width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.278 49.008c3.998-1.598 17.258-8.544 17.86-30.568a2.738 2.738 0 00-1.295-2.384 33.495 33.495 0 00-35.391 0 2.738 2.738 0 00-1.296 2.384c.603 22.024 13.863 28.97 17.86 30.568a3.014 3.014 0 002.262 0z" fill="url(#prefix__paint0_linear_70_6803)"></path><g filter="url(#prefix__filter0_bi_70_6803)"><path d="M37.188 60.821c4.27-1.5 20.252-8.695 21.105-32.522.044-1.232-.625-2.383-1.695-2.995a41.219 41.219 0 00-40.9 0c-1.071.612-1.74 1.763-1.696 2.995.853 23.827 16.835 31.022 21.104 32.522.681.24 1.401.24 2.082 0z" fill="#72BF44" fillOpacity="0.5"></path></g><path d="M34.642 40.904a.2.2 0 00.28 0l7.404-7.403a1.67 1.67 0 012.362 2.363l-8.724 8.725a1.67 1.67 0 01-2.363 0l-4.986-4.986a1.67 1.67 0 112.363-2.363l3.663 3.664z" fill="#fff" fillOpacity="0.9" stroke="url(#prefix__paint1_linear_70_6803)" strokeWidth="0.398" strokeLinecap="round" strokeLinejoin="round"></path><defs><linearGradient id="prefix__paint0_linear_70_6803" x1="17.155" y1="11" x2="50.282" y2="7.174" gradientUnits="userSpaceOnUse"><stop stopColor="#4FB84E"></stop><stop offset="1" stopColor="#2A8640"></stop></linearGradient><linearGradient id="prefix__paint1_linear_70_6803" x1="28.423" y1="34.591" x2="39.577" y2="38.309" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient><filter id="prefix__filter0_bi_70_6803" x="10" y="15.873" width="52.295" height="49.127" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_70_6803"></feComposite><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_70_6803" result="shape"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="0.2" dy="0.1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"></feColorMatrix><feBlend in2="shape" result="effect2_innerShadow_70_6803"></feBlend></filter></defs></svg>
                    <h4>{t("hw.benefits.benefit2")}</h4>
                </div>
                <div className="w-1/4 sm:w-1/3 pt-2 px-5 pb-5 rounded-[20px] bg-white dark:bg-[#282828] flex flex-col gap-2">
                    <svg width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="11" width="29" height="49" rx="3" fill="url(#prefix__paint0_linear_1179_22543)"></rect><rect x="24.7" y="14" width="11.6" height="2" rx="1" fill="#fff" fillOpacity="0.9"></rect><g filter="url(#prefix__filter0_bi_1179_22543)"><rect x="25" y="29" width="32" height="24" rx="4" fill="#72BF44" fillOpacity="0.5"></rect></g><rect x="30" y="35" width="20" height="2" rx="1" fill="#fff" fillOpacity="0.9"></rect><rect x="30" y="40" width="20" height="2" rx="1" fill="#fff" fillOpacity="0.9"></rect><rect x="30" y="45" width="12" height="2" rx="1" fill="#fff" fillOpacity="0.9"></rect><defs><linearGradient id="prefix__paint0_linear_1179_22543" x1="16" y1="11" x2="41.508" y2="9.245" gradientUnits="userSpaceOnUse"><stop stopColor="#4FB84E"></stop><stop offset="1" stopColor="#2A8640"></stop></linearGradient><filter id="prefix__filter0_bi_1179_22543" x="21" y="25" width="40" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1179_22543"></feComposite><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_1179_22543" result="shape"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="0.2" dy="0.1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"></feColorMatrix><feBlend in2="shape" result="effect2_innerShadow_1179_22543"></feBlend></filter></defs></svg>
                    <h4>{t("hw.benefits.benefit3")}</h4>
                </div>
                <div className="w-1/4 sm:w-1/3 pt-2 px-5 pb-5 rounded-[20px] bg-white dark:bg-[#282828] flex flex-col gap-2">
                    <svg width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.816 13.339c2.502-2.554 6.893-1.46 7.904 1.97l9.093 30.867c1.01 3.43-2.118 6.622-5.63 5.746L22.57 44.04c-3.513-.876-4.776-5.163-2.273-7.716l22.52-22.985z" fill="url(#prefix__paint0_linear_778_13487)"></path><g filter="url(#prefix__filter0_bi_778_13487)"><path d="M28.927 25.313c1.81-3.084 6.336-3.084 8.146 0l16.29 27.75C55.173 56.145 52.91 60 49.29 60H16.71c-3.62 0-5.883-3.854-4.073-6.938l16.29-27.75z" fill="#72BF44" fillOpacity="0.5"></path></g><path d="M33.011 46.306A1.996 1.996 0 0035 44.323v-6.365C35 36.875 34.109 36 33.011 36 31.914 36 31 36.875 31 37.958v6.365c0 1.08.914 1.983 2.011 1.983zM31 52.02c0 1.078.914 1.98 2.011 1.98A2 2 0 0035 51.995c0-1.078-.891-1.957-1.989-1.957-1.097 0-2.011.9-2.011 1.982z" fill="#fff" fillOpacity="0.9"></path><defs><linearGradient id="prefix__paint0_linear_778_13487" x1="26.951" y1="7" x2="63.515" y2="11.155" gradientUnits="userSpaceOnUse"><stop stopColor="#4FB84E"></stop><stop offset="1" stopColor="#2A8640"></stop></linearGradient><filter id="prefix__filter0_bi_778_13487" x="8" y="19" width="50" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_778_13487"></feComposite><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_778_13487" result="shape"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="0.2" dy="0.1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"></feColorMatrix><feBlend in2="shape" result="effect2_innerShadow_778_13487"></feBlend></filter></defs></svg>
                    <h4>{t("hw.benefits.benefit4")}</h4>
                </div>
            </div>
        </section>
    );
}

export default HowWorks