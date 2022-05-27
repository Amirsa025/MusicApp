import React from 'react';
import CenterMenu from "../Components/centerMenu/CenterMenu";
import {Facebook, Telegram, Twitter, YouTube} from "@mui/icons-material";

const Footer = () => {
    const footerStyled = "rounded-full border-2 border-white p-2 mr-[5rem] "
    return (
        <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
            <CenterMenu/>
            <div className="flex w-[100%] justify-center mt-14 gap-4">
                <div className={footerStyled}>
                    <Facebook/>
                </div>
                <div className={footerStyled}>
                    <YouTube/>
                </div>
                <div className={footerStyled}>
                    <Twitter/>
                </div>
                <div className={footerStyled}>
                    <Telegram/>
                </div>
            </div>
            {/* detail */}
            <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
                        Design by AmirMohammad Sakizadeh 
            </span>
            <a href="https://github.com/amirsa025">GitHub</a>
        </div>
    );
};

export default Footer;
