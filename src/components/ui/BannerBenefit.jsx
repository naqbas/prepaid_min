

function BannerBenefit(props) {
    return (
        <div className="flex gap-2 text-xl">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 11.5L9.825 18 20 6" stroke="#2a8640" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeLinejoin="round"></path></svg>
            <h3>{props.benefit}</h3>
        </div>
    );
}

export default BannerBenefit