import jesse from "assets/images/jesse.svg"
import raye from "assets/images/raye.svg"

export const Customers = () => {
    const feedbacks = [
        {
            comment: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
            name: "Lade",
            image: jesse
        },
        {
            comment: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
            name: "Jesse",
            image: jesse
        },
        {
            comment: "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
            name: "Raye",
            image: raye
        }
    ]

    return (
        <div className="mb-[72px] md:mb-[80px]">
            <div className="max-w-[570px] mx-auto text-center mb-[40px] px-[16px]">
                <h2 className="text-[40px] text-teal-1 mb-[8px] font-medium">From The People Who Use Rise</h2>
                <p className="text-base text-body-16">
                Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.
                </p>
            </div>
            <div className="flex justify-center gap-[24px] overflow-x-auto bg-teal-50">
                {feedbacks.map((item) => (
                    <div
                        key={item.name}
                        className="p-[24px] flex flex-col justify-between w-[409px] shrink-0 rounded-[10px] bg-white"
                    >
                        <p className="text-base text-body-16">{item.comment}</p>
                        <div className="flex items-center mt-[23px] space-x-4">
                            <div>
                                <img src={item.image} width={32} height={32} alt={item.name} />
                            </div>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}