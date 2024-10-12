import playstore from "assets/images/playstore.svg"
import appstore from "assets/images/app-store.svg"
import phone from "assets/images/hero-phone.svg"

export const Hero = () => {
    return (
        <div className="px-[16px] sm:px-[40px] pt-[23px] pb-[76px] bg-eclipse-mobile md:bg-eclipse bg-no-repeat bg-center bg-contain">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-[930px] mx-auto">
                <div className="max-w-[500px] w-full pt-[70px] pb-[60px] lg:pt-0 lg:pb-0 text-center lg:text-left">
                    <h1 className="text-[40px] sm:text-[56px] leading-[40px] sm:leading-[60px] text-teal-1 mb-[16px] font-semibold relative">
                        Dollar investments that help you grow
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline mt-[-20px]">
                            <circle cx="5" cy="5" r="5" fill="#40BBC3" />
                        </svg>
                    </h1>
                    <span className="text-base text-body-16 font-medium mb-[32px] block">
                        We put your money in high quality assets that help you build wealth and achieve your financial goals.
                    </span>
                    <div className="flex justify-center sm:justify-start space-x-4">
                        <button>
                            <img src={appstore} width={144} height={48} alt="playstore" />
                        </button>
                        <button>
                            <img src={playstore} width={144} height={48} alt="appstore" />
                        </button>
                    </div>

                </div>
                <div>
                    <img src={phone} width={226.46} height={461} alt="phone" className="h-[369px] md:h-[461px]" />
                </div>
            </div>
        </div>
    )
}