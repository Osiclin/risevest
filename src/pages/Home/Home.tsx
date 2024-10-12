import { Footer, Header } from "components";
import { AssetClasses, Customers, Features, Hero } from "./components";
import sponsors from "assets/images/sponsors.svg"
import future from "assets/images/future.svg"
import community from "assets/images/community.svg"
import callToAction from "assets/images/call-to-action.svg"
import playstore from "assets/images/playstore.svg"
import appstore from "assets/images/app-store.svg"

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <div className="px-[16px]">
                <p className="text-lg text-[#7B8DA8] font-bold sm:hidden">We are supported by</p>
                <div className="flex items-center justify-center py-[22.76px] px-[16px]">
                    <img src={sponsors} width={457} height={57.93} alt="sponsors" />
                </div>
            </div>
            <Features />
            <AssetClasses />
            <div className="flex flex-col sm:flex-row justify-between items-center max-w-[877.31px] mx-auto mb-0 md:mb-[47.29px] px-[16px]">
                <div>
                    <img src={future} width={316.31} height={508.71} alt="mobile" />
                </div>
                <div className="text-heading-40 max-w-[401px] text-center sm:text-start">
                    <p className="text-lg mb-[8px]">The  Rise App</p>
                    <h2 className="text-[40px] font-semibold mb-[16px]">Save for your <span>future</span></h2>
                    <p className="text-base mb-[32px]">With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children’s future and more.</p>
                    <button className="text-base text-white bg-teal-1 font-bold h-[48px] px-[32px] rounded-[5px]">
                        Start saving
                    </button>
                </div>
            </div>
            <div className="px-[16px] py-[94px] bg-regulated bg-repeat sm:bg-no-repeat bg-cover w-full mb-[80px] mt-[30px]">
                <div className="max-w-[504px] mx-auto text-center">
                    <h2 className="text-[40px] text-heading-40 mb-[16px] font-medium">How we are Regulated</h2>
                    <p className="text-base text-body-16">Rise is registered and regulated both in the US and in Nigeria. Our team is made up of US registered investment advisers, our Nigerian users are covered by our SEC licensed trustees, ARM Trustees and all our assets are held with regulated third parties, in all relevant jurisdictions</p>
                </div>
            </div>
            <Customers />
            <div className="flex flex-col md:flex-row justify-between items-center max-w-[1000px] mx-auto mb-[80px] px-[16px] space-x-0 md:space-x-[25px]">
                <div className="text-heading-40 max-w-[478px] text-center sm:text-left mt-[40px] md:mt-0">
                    <h2 className="text-[32px] md:text-[40px] font-semibold mb-[16px]">Join The Rise Community</h2>
                    <p className="text-base mb-[32px]">
                        If you want to go far, go together. <span className="hidden sm:block">Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. It's completely free and open to new and seasoned investors.</span>
                    </p>
                    <button className="text-base text-heading-40 bg-teal-3 font-bold h-[48px] px-[32px] rounded-[5px] w-fit">
                        Join our Community
                    </button>
                </div>
                <div className="order-first md:order-last">
                    <img src={community} width={432} height={386} alt="community" />
                </div>
            </div>
            <div className="px-[16px] mb-[40px] sm:mb-[80px] overflow-y-hidden h-[400px] md:h-auto">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-[991px] mx-auto rounded-[50px] bg-[#ECFEFE] pt-[37px] px-[24px]">
                    <div className="max-w-[500px] w-full mb-[32px] text-center md:text-left">
                        <p className="text-base mb-[16px] text-teal-1">Download The Rise App</p>
                        <h2 className="text-[20px] sm:text-[32px] leading-[24px] sm:leading-[42px] text-heading-1 mb-[16px] font-semibold">
                            Join our 100,000 users investing and setting long term goals!
                        </h2>
                        <span className="text-base text-body-16 font-medium mb-[32px] block">
                            Dollar investments that help you grow.
                        </span>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <button>
                                <img src={appstore} width={144} height={48} alt="playstore" />
                            </button>
                            <button>
                                <img src={playstore} width={144} height={48} alt="appstore" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={callToAction} width={208.88} height={425.22} alt="mobile"  />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}