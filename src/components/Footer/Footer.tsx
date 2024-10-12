import logo from "assets/images/logo-black.svg"
import { Link } from "react-router-dom"
import arrowRightUp from "assets/icons/arrow-right-up.svg"

export const Footer = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[40px] text-base text-heading-40 px-[16px] lg:px-[80px] pb-[80px]">
            <div>
                <img src={logo} width={53.91} height={17.69} alt="rise" className="mb-[32px]" />
                <div className="space-y-[16px]">
                    <Link to={"/"} className="block w-fit">About Us</Link>
                    <Link to={"/"} className="block w-fit">Careers</Link>
                    <Link to={"/"} className="block w-fit">FAQs</Link>
                    <Link to={"/"} className="block w-fit">Contact Info</Link>
                    <Link to={"/"} className="block w-fit">Press</Link>
                    <Link to={"/"} className="block w-fit">Rise Impact</Link>
                </div>
            </div>
            <div>
                <p className="mb-[32px] font-semibold">Explore</p>
                <div className="space-y-[16px]">
                    <Link to={"/"} className="block w-fit">Investment Club <img src={arrowRightUp} width={16} height={16} alt="arrow" className="inline" /></Link>
                    <Link to={"/"} className="block w-fit">Blog <img src={arrowRightUp} width={16} height={16} alt="arrow" className="inline"  /></Link>
                </div>
            </div>
            <div>
                <p className="mb-[32px] font-semibold">Products</p>
                <div className="space-y-[16px]">
                    <Link to={"/"} className="block w-fit">Rise App</Link>
                    <Link to={"/"} className="block w-fit">Wallets</Link>
                    <Link to={"/"} className="block w-fit">Asset Classes</Link>
                </div>
            </div>
            <div>
                <p className="mb-[32px] font-semibold">Contact Us</p>
                <div className="space-y-[16px]">
                    <a href="tel:0818 714 7405" className="block w-fit">0818 714 7405 <img src={arrowRightUp} width={16} height={16} alt="arrow" className="inline"  /></a>
                    <a href="mailto:hello@rise.capital" className="block w-fit">hello@rise.capital <img src={arrowRightUp} width={16} height={16} alt="arrow" className="inline"  /></a>
                    <a href="https://" className="block w-fit">Newsletter <img src={arrowRightUp} width={16} height={16} alt="arrow" className="inline"  /></a>
                    <a href="https://" className="block w-fit">Instagram <img src={arrowRightUp} width={16} height={16} alt="arrow" className="inline"  /></a>
                    <a href="https://" className="block w-fit">Twitter <img src={arrowRightUp} width={16} height={16} alt="arrow" className="inline"  /></a>
                </div>
            </div>
        </div>
    )
}