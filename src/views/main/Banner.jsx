import banner from "../../assets/banner.webp";
import BannerBenefit from "../../components/ui/BannerBenefit.jsx";
import { useTranslation } from "react-i18next";

function Banner() {
    const [t, i18n] = useTranslation("landing");

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
                                <svg width="49" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.875 2.579c-.57.675-1.48 1.208-2.391 1.132-.114-.914.332-1.884.854-2.484C7.908.533 8.903.038 9.71 0c.095.951-.275 1.884-.835 2.579zM9.7 3.891c-1.318-.077-2.447.751-3.074.751-.635 0-1.594-.713-2.637-.694-1.357.019-2.619.79-3.311 2.017-1.424 2.455-.37 6.09 1.005 8.087.674.99 1.48 2.075 2.543 2.036 1.006-.038 1.404-.656 2.619-.656 1.223 0 1.575.656 2.637.637 1.1-.019 1.793-.99 2.467-1.979.768-1.122 1.082-2.217 1.1-2.274-.018-.019-2.125-.828-2.144-3.263-.019-2.036 1.66-3.007 1.737-3.064-.95-1.408-2.43-1.56-2.942-1.598zm7.619-2.76v14.834h2.296v-5.072h3.178c2.904 0 4.944-1.998 4.944-4.89 0-2.893-2.002-4.872-4.868-4.872h-5.55zm2.296 1.941h2.647c1.992 0 3.131 1.066 3.131 2.94 0 1.875-1.139 2.95-3.14 2.95h-2.638v-5.89zM31.93 16.08c1.442 0 2.78-.733 3.387-1.893h.048v1.779h2.125V8.582c0-2.14-1.708-3.52-4.336-3.52-2.438 0-4.241 1.399-4.308 3.32h2.069c.17-.913 1.015-1.512 2.172-1.512 1.405 0 2.192.656 2.192 1.865v.818l-2.865.171c-2.666.162-4.108 1.256-4.108 3.159 0 1.922 1.49 3.197 3.624 3.197zm.617-1.76c-1.224 0-2.002-.59-2.002-1.494 0-.933.75-1.475 2.182-1.56l2.552-.162v.837c0 1.39-1.176 2.379-2.732 2.379zm7.78 5.68c2.239 0 3.292-.856 4.212-3.454l4.032-11.341h-2.334l-2.704 8.763h-.047l-2.704-8.763h-2.4l3.89 10.799-.21.656c-.35 1.114-.92 1.542-1.935 1.542a7.18 7.18 0 01-.673-.038v1.779c.133.038.702.057.873.057z" fill="#000"></path></svg>
                            </div>
                        </a>
                        <a href="https://bankffin.kz/ru/page/kak-podkliucit-kartu-k-google-pay-na-smartfone" target="_blank" rel="noreferrer">
                            <div className="px-3 py-2 bg-white rounded-lg">
                                <svg width="52" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#prefix__clip0_30_5926)"><path d="M24.324 9.77v5.863h-1.9V1.155h5.038a4.64 4.64 0 011.759.308c.56.215 1.07.536 1.503.946.436.384.784.856 1.019 1.383.235.527.352 1.097.343 1.672a3.94 3.94 0 01-.338 1.683 4.015 4.015 0 01-1.024 1.39c-.881.823-1.968 1.233-3.262 1.233h-3.138zm0-6.832v5.054h3.185c.35.01.697-.051 1.02-.18.324-.13.616-.323.86-.569.24-.23.433-.505.564-.809a2.423 2.423 0 00-.565-2.73 2.48 2.48 0 00-.855-.581 2.523 2.523 0 00-1.024-.186h-3.185zM36.462 5.404c1.404 0 2.512.367 3.324 1.102.813.735 1.219 1.742 1.218 3.022v6.105h-1.817v-1.375h-.082c-.787 1.133-1.833 1.699-3.138 1.699-1.115 0-2.047-.324-2.797-.97a3.107 3.107 0 01-.843-1.09 3.045 3.045 0 01-.282-1.337c0-1.025.395-1.84 1.186-2.445.791-.606 1.847-.909 3.169-.91 1.127 0 2.056.202 2.786.606v-.425a2.081 2.081 0 00-.203-.91 2.124 2.124 0 00-.581-.736 2.722 2.722 0 00-1.834-.678c-1.06 0-1.9.438-2.518 1.314l-1.673-1.031c.92-1.294 2.282-1.941 4.085-1.941zM34.005 12.6c-.001.236.055.47.165.681.11.211.269.393.465.532.42.323.941.495 1.476.485a3.061 3.061 0 002.136-.869c.63-.58.944-1.26.944-2.041-.593-.462-1.418-.693-2.477-.693-.772 0-1.415.182-1.93.546-.52.37-.779.82-.779 1.359zM51.432 5.728L45.091 20h-1.96l2.352-4.994-4.17-9.278h2.065l3.014 7.116h.041l2.931-7.116h2.068z" fill="#000"></path><path d="M16.65 8.507c0-.567-.05-1.132-.147-1.691h-8.01v3.203h4.588c-.094.512-.293 1-.584 1.434-.292.434-.67.806-1.113 1.094v2.08h2.738c1.604-1.448 2.527-3.589 2.527-6.12z" fill="#4285F4"></path><path d="M8.493 16.635c2.292 0 4.222-.737 5.63-2.008l-2.739-2.08c-.762.507-1.743.795-2.891.795-2.215 0-4.096-1.462-4.768-3.433H.905v2.143a8.385 8.385 0 003.13 3.345 8.628 8.628 0 004.458 1.238z" fill="#34A853"></path><path d="M3.725 9.91a4.886 4.886 0 010-3.185V4.583H.905A8.177 8.177 0 000 8.317c0 1.297.31 2.576.904 3.735l2.82-2.143z" fill="#FBBC04"></path><path d="M8.493 3.292A4.665 4.665 0 0111.75 4.54l2.424-2.374A8.257 8.257 0 008.493 0a8.628 8.628 0 00-4.458 1.238 8.385 8.385 0 00-3.13 3.345l2.82 2.143c.672-1.971 2.553-3.434 4.768-3.434z" fill="#EA4335"></path></g><defs><clipPath id="prefix__clip0_30_5926"><path fill="#fff" d="M0 0h51.429v20H0z"></path></clipPath></defs></svg>
                            </div>
                        </a>
                        <a href="https://bankffin.kz/ru/page/kak-podkliucit-kartu-k-samsung-pay-na-smartfone" target="_blank" rel="noreferrer">
                            <div className="px-3 py-2 bg-white rounded-lg">
                                <svg width="79" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M70.834 6.773v7.095H68.24L66.461 8.03h-.048l.096 5.838h-1.778V6.773h2.691l1.682 5.624h.024l-.096-5.624h1.802zm-37.34 7.166l1.346-7.166h3.22l1.345 7.166H37.46l-.985-6.526h-.024l-1.01 6.526h-1.946zm15.282-7.166l.168 7.166h-1.826l-.048-6.454h-.048l-1.201 6.454h-1.85l-1.202-6.454h-.048l-.048 6.454h-1.826l.168-7.166h2.98l.889 5.482h.024l.913-5.482h2.955zm11.366 6.075c.505 0 .672-.333.697-.523.023-.07.023-.19.023-.284V6.773h1.85v5.15c0 .142-.023.402-.023.474-.12 1.329-1.202 1.78-2.548 1.78-1.345 0-2.402-.428-2.523-1.78 0-.072-.024-.332-.024-.475V6.773h1.85v5.315c0 .095 0 .19.025.285.024.143.168.475.673.475zm-29.723-.95c.072.166.048.404.024.522-.072.238-.217.475-.721.475-.457 0-.721-.261-.721-.64v-.689h-1.946v.546c0 1.614 1.273 2.088 2.643 2.088 1.321 0 2.403-.45 2.57-1.637.097-.617.025-1.02 0-1.187-.312-1.494-3.075-1.945-3.267-2.8a1.001 1.001 0 010-.379c.048-.237.216-.475.673-.475.432 0 .673.261.673.641v.451h1.802v-.498c0-1.567-1.418-1.804-2.451-1.804-1.298 0-2.355.427-2.547 1.59a2.68 2.68 0 00.024.973c.288 1.494 2.883 1.898 3.244 2.824zm23.62 0c.072.166.047.38.023.522-.048.238-.216.475-.696.475-.457 0-.721-.261-.721-.64v-.689h-1.922v.546c0 1.59 1.273 2.065 2.619 2.065 1.297 0 2.379-.428 2.547-1.614.096-.617.024-1.02 0-1.163-.313-1.495-3.028-1.922-3.22-2.752a.674.674 0 010-.38c.048-.237.216-.475.649-.475.432 0 .673.261.673.641v.45h1.802v-.497c0-1.543-1.418-1.78-2.427-1.78-1.274 0-2.33.403-2.523 1.566-.048.309-.072.593.024.95.264 1.446 2.811 1.85 3.172 2.776zm21.264.878c.529 0 .697-.332.745-.521.024-.072.024-.19.024-.262v-1.044h-.745V9.905H77.9v1.922c0 .143 0 .237-.025.475-.12 1.305-1.273 1.78-2.57 1.78-1.274 0-2.428-.475-2.548-1.78-.024-.238-.024-.332-.024-.475V8.813c0-.118.024-.355.024-.474.168-1.353 1.25-1.78 2.547-1.78 1.298 0 2.427.427 2.547 1.78.025.213.025.474.025.474v.238h-1.827v-.404s0-.166-.024-.284c-.024-.166-.168-.522-.72-.522-.53 0-.674.356-.721.522-.025.095-.025.213-.025.332v3.274c0 .095 0 .19.025.261 0 .238.192.546.72.546z" fill="#000"></path><path d="M20.092 7.01c-.24-1.85-.913-3.536-2.09-4.77-1.25-1.162-2.956-1.827-4.83-2.064C11.37-.06 10.145.01 10.145.01S8.919-.037 7.117.176c-1.874.237-3.58.902-4.83 2.065C1.11 3.474.437 5.159.197 7.01-.043 8.79.005 10 .005 10s-.049 1.21.168 2.99c.24 1.85.913 3.536 2.09 4.77 1.25 1.162 2.956 1.826 4.83 2.064 1.802.237 3.027.166 3.027.166s1.226.047 3.028-.166c1.874-.238 3.58-.902 4.83-2.065 1.177-1.233 1.85-2.918 2.09-4.77.24-1.779.168-2.989.168-2.989s.096-1.21-.144-2.99z" fill="#1E4BC6"></path><path d="M3.729 7.082h1.826c.288 0 .528.047.769.142.24.095.432.237.6.403.168.166.313.356.409.594.096.237.144.474.144.735s-.048.498-.144.736a1.75 1.75 0 01-.409.593 2.043 2.043 0 01-.6.403 1.93 1.93 0 01-.77.143h-.816v1.495h-.985V7.082h-.024zm.985.901v1.923h.769c.144 0 .288-.024.408-.072a.915.915 0 00.505-.522.973.973 0 00.072-.38.973.973 0 00-.072-.379 1.343 1.343 0 00-.193-.308.915.915 0 00-.312-.214 1.135 1.135 0 00-.408-.071h-.77v.023zm5.046 4.343a2.194 2.194 0 01-1.442-.546 2.262 2.262 0 01-.48-.664 2.163 2.163 0 01-.193-.902c0-.332.048-.64.168-.902.12-.26.289-.474.48-.664.193-.19.433-.309.674-.404.264-.095.504-.142.793-.142.288 0 .552.047.768.142.24.095.433.238.601.404v-.546h.985v4.223h-.985v-.593c-.144.19-.36.333-.6.451-.24.095-.481.143-.77.143zm.168-.878c.192 0 .36-.024.504-.095.145-.071.289-.142.409-.261.12-.119.192-.237.264-.38.072-.143.096-.308.096-.474a1.05 1.05 0 00-.096-.475c-.072-.142-.144-.285-.264-.38a1.2 1.2 0 00-.409-.26.986.986 0 00-.504-.12c-.168 0-.337.025-.505.096a1.201 1.201 0 00-.408.26.993.993 0 00-.265.38 1.05 1.05 0 00-.096.475c0 .166.024.332.096.474.073.143.169.285.265.404.12.119.264.19.408.261.144.047.313.095.505.095zm3.556-3.322l1.201 2.87 1.106-2.87h1.033L14.3 14.248h-1.01l.89-2.112-1.73-4.01h1.033z" fill="#fff"></path></svg>
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