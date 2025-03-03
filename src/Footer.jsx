import { OutboundArrow } from "src/OutboundArrow"

import { FaReact } from "react-icons/fa"
import { TbBrandVite } from "react-icons/tb"
import { SiMdx } from "react-icons/si"

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return <>
        <footer className="pt-20">
        <hr className="border-secondary-gray opacity-50 border-1 w-full"/>

        <div class="flex whitespace-nowrap justify-between py-2 px-2 shrink merriweather-light text-secondary-gray text-xs">
            <div className="flex flex-row">
                <div>
                    Inspired by <a href="https://www.paco.me" className="underline">paco.me</a>
                </div>
                <OutboundArrow height={"20px"} width={"20px"} />
            </div>
            <div className="flex justify-around text-base">
                <p className="text-xs pr-2">Crafted with</p>
                <FaReact />
                <TbBrandVite />
                <SiMdx />
            </div>
        </div>


        {/* <footer>Heavily inspired by <a href="www.paco.me">paco.me</a> | Crafted with React + MDX + Vite | Copyright _symbol_ 2025 Craig Knoblauch</footer> */}
        </footer>
    </>
}