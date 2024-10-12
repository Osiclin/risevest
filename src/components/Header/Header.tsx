import logo from "assets/images/logo.svg"
import { Link, useLocation } from "react-router-dom"

export const Header = () => {
    const { pathname } = useLocation()

    const options = [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "Products",
            icon: "/",
            url: "/products"
        },
        {
            label: "Investment club",
            url: "/investment-club"
        },
        {
            label: "blog",
            url: "/blog"
        },
        {
            label: "About us",
            url: "/about-us"
        },
        {
            label: "FAQs",
            url: "/faqs"
        }
    ]

    return (
        <header className="flex justify-between items-center px-[16px] sm:px-[40px] md:px-[120px] py-[18.15px] sm:py-[28px] sticky top-0">
            <img src={logo} width={53.91} height={17.69} alt="rise" />
            <div className="hidden md:flex items-center space-x-[23px]">
                {options.map((option) => (
                    <Link
                        to={option.url}
                        key={option.label}
                        className={`text-teal-1 ${pathname === option.url ? "font-bold" : "font-normal"}`}
                    >
                        <span className="block mb-[8px]">{option.label}</span>
                        <div className={`w-[8px] h-[8px] rounded-full ${pathname === option.url ? "bg-teal-1" : ""} mx-auto`} />
                    </Link>
                ))}
            </div>
        </header>
    )
}