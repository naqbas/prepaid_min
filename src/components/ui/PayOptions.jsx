import applepayIcon from "../../assets/applepayIcon.svg";
import googlepayIcon from "../../assets/googlepayIcon.svg";
import samsungpayIcon from "../../assets/samsungpayIcon.svg";


function PayOptions() {
  return (
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
  )
}

export default PayOptions
