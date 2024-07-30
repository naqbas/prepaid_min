import ConditionsCard from "../../components/ui/ConditionsCard.jsx";
import { useTranslation } from "react-i18next";


function Conditions() {
    const [t, i18n] = useTranslation("landing");

    return (
        <section className="px-5 my-[100px] dark:text-white">
            <h2 className="text-5xl font-bold mb-10">{t("conditions.title")}</h2>
            <table className="w-full my-10">
                <tbody>
                    <tr className="border-b">
                        <td className="p-5 bg-white dark:bg-[#282828] rounded-t-2xl">{t("conditions.line1.column")}</td>
                        <td className="p-5">
                            <h4 className="font-bold">{t("conditions.line1.value")}</h4>
                            <p className="text-xs text-[#5c5c5c]">{t("conditions.line1.caption")}</p>
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-5  bg-white dark:bg-[#282828]">{t("conditions.line2.column")}</td>
                        <td className="p-5 flex sm:flex-col gap-5">
                            <ConditionsCard title={t("conditions.line2.value.first.title")} caption={t("conditions.line2.value.first.caption")} />
                            <ConditionsCard title={t("conditions.line2.value.second.title")} caption={t("conditions.line2.value.second.caption")} />
                            <ConditionsCard title={t("conditions.line2.value.third.title")} caption={t("conditions.line2.value.third.caption")} />
                            <ConditionsCard title={t("conditions.line2.value.fourth.title")} caption={t("conditions.line2.value.fourth.caption")} />
                            <ConditionsCard title={t("conditions.line2.value.fifth.title")} caption={t("conditions.line2.value.fifth.caption")} />
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-5  bg-white dark:bg-[#282828]">{t("conditions.line3.column")}</td>
                        <td className="p-5 font-bold">{t("conditions.line3.value")}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-5  bg-white dark:bg-[#282828]">{t("conditions.line4.column")}</td>
                        <td className="p-5">
                            <h4 className="font-bold">{t("conditions.line4.value")}</h4>
                            <p className="text-xs text-[#5c5c5c]">{t("conditions.line4.caption")}</p>
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-5  bg-white dark:bg-[#282828]">{t("conditions.line5.column")}</td>
                        <td className="p-5 font-bold">{t("conditions.line5.value")}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-5  bg-white dark:bg-[#282828]">{t("conditions.line6.column")}</td>
                        <td className="p-5 font-bold">{t("conditions.line6.value")}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-5  bg-white dark:bg-[#282828]">{t("conditions.line7.column")}</td>
                        <td className="p-5 font-bold">{t("conditions.line7.value")}</td>
                    </tr>
                    <tr>
                        <td className="p-5  bg-white dark:bg-[#282828] rounded-b-2xl">{t("conditions.line8.column")}</td>
                        <td className="p-5 font-bold">{t("conditions.line8.value")}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Conditions