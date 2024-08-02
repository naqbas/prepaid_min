import optionIcon from "../../assets/optionIcon.svg";


function BannerBenefit(props) {
    return (
        <div className="flex gap-2 text-xl">
            <img src={optionIcon} alt="Опция" className="w-[24px] h-[24px]" />
            <h3>{props.benefit}</h3>
        </div>
    );
}

export default BannerBenefit