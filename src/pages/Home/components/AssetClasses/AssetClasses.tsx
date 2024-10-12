import stocks from "assets/images/stocks.svg"
import realEstate from "assets/images/real-estate.svg"
import fixedIncome from "assets/images/fixed-income.svg"

export const AssetClasses = () => {
    const assets = [
        {
            label: "Stocks",
            description: "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
            historical_returns: "14% per annum",
            risk_level: "medium",
            image: stocks,
            theme: "bg-[#FFF4F0]"
        },
        {
            label: "Real Estate",
            description: "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
            historical_returns: "14% per annum",
            risk_level: "medium",
            image: realEstate,
            theme: "bg-[#F6F2FF]"
        },
        {
            label: "Fixed Income",
            description: "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
            historical_returns: "14% per annum",
            risk_level: "medium",
            image: fixedIncome,
            theme: "bg-[#ECFEFE]"
        }
    ]

    return (
        <div className="mb-[82px] px-[16px]">
            <div className="text-center mb-[42px]">
                <h2 className="text-[40px] text-heading-40 font-semibold">Asset Classes</h2>
                <p className="text-base text-body-16">It’s your money, choose where you invest it</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-[16px] lg:space-x-[46px] space-y-[46px] md:space-y-0">
                {assets.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-[8px] bg-white w-full md:w-[300px] text-center border-[2px] border-[#919FB533] pb-[30px] flex flex-col justify-between"
                    >
                        <div>
                            <div className={`${item.theme} h-[100px] rounded-t-[8px]`} />
                            <div className="mb-[8px] border-[14px] border-white w-[85px] h-[85px] rounded-full mx-auto mt-[-42px]">
                                <img src={item.image} width={85} height={85} alt={item.label} />
                            </div>
                            <div className="mb-[24px] px-[8px]">
                                <p className="text-[24px] text-heading-24 font-semibold mb-[16px]">{item.label}</p>
                                <p className="text-base text-body-16 mb-[8px]">{item.description}</p>
                                <p className="text-base text-gray-400">
                                    Historical returns: <span className="text-body-16">{item.historical_returns}</span>
                                </p>
                                <p className="text-base text-gray-400">
                                    Risk level: <span className="text-body-16">{item.risk_level}</span>
                                </p>
                            </div>
                        </div>
                        <p className="text-base font-semibold text-teal-1">Learn how {item.label} work</p>
                    </div>
                ))}
            </div>
        </div>
    )
}