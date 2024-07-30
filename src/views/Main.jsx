import Banner from "./main/Banner.jsx"
import HowWorks from "./main/HowWorks.jsx"
import Conditions from "./main/Conditions.jsx"
import Questions from "./main/Questions.jsx"


function Main() {


    return (
        <main className="bg-[#f5f6f7] dark:bg-[#1a1a1a] w-full">
            <Banner />
            <HowWorks />
            <Conditions />
            <Questions />
        </main>
    );
}

export default Main