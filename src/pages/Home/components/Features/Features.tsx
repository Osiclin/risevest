import invest from "assets/images/invest.svg"
import remember from "assets/images/remember.svg"
import best from "assets/images/best.svg"
import goals from "assets/images/goals.svg"
import arrowRight from "assets/icons/arrow-right.svg"
import { Link } from "react-router-dom"

export const Features = () => {
    return (
        <div className="max-w-[986px] mx-auto px-[16px] space-y-[43px] md:space-y-0 mb-[64px] md:mb-0">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-[376px] text-center md:text-left">
                    <h3 className="text-[20px] sm:text-[32px] text-heading-32 font-semibold mb-[12px]">Invest your money in dollars</h3>
                    <p className="text-base text-body-16 font-medium">By holding your investments in a stable currency, your money grows more over time and retains its value better.</p>
                    <Link to="/start-investing" className="hidden md:inline-block mt-[20px] text-teal-1 font-medium">
                    Start Investing
                    <img src={arrowRight} width={10} height={12} alt="arrow" className="inline"/>
                    </Link>
                </div>
                <div className="order-first md:order-none">
                    <img src={invest} width={480} height={460} alt="invest" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                    <img src={best} width={480} height={460} alt="best" />
                </div>
                <div className="max-w-[376px] text-center md:text-left">
                    <h3 className="text-[20px] sm:text-[32px] text-heading-32 font-semibold mb-[12px]">Choose what's best for you</h3>
                    <p className="text-base text-body-16 font-medium">Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place.</p>
                    <Link to="/start-investing" className="hidden md:inline-block mt-[20px] text-teal-1 font-medium">
                    Start Investing
                    <img src={arrowRight} width={10} height={12} alt="arrow" className="inline"/>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-[376px] text-center md:text-left">
                    <h3 className="text-[20px] sm:text-[32px] text-heading-32 font-semibold mb-[12px]">Set goals and reach them</h3>
                    <p className="text-base text-body-16 font-medium">You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them.</p>
                    <Link to="/start-investing" className="hidden md:inline-block mt-[20px] text-teal-1 font-medium">
                    Start Investing
                    <img src={arrowRight} width={10} height={12} alt="arrow" className="inline"/>
                    </Link>
                </div>
                <div className="order-first md:order-none">
                    <img src={goals} width={480} height={460} alt="goals" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                    <img src={remember} width={480} height={460} alt="remember" />
                </div>
                <div className="max-w-[376px] text-center md:text-left">
                    <h3 className="text-[20px] sm:text-[32px] text-heading-32 font-semibold mb-[12px]">We remember so you dont have to</h3>
                    <p className="text-base text-body-16 font-medium">Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule.</p>
                    <Link to="/start-investing" className="hidden md:inline-block mt-[20px] text-teal-1 font-medium">
                    Start Investing
                    <img src={arrowRight} width={10} height={12} alt="arrow" className="inline"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}