import React from 'react';
import CenterMenu from "../centerMenu/CenterMenu";
const Header = () => {
const buttonStyled = "border-[0.125rem] rounded-[0.625rem] border-[#232A4E] px-[1.563rem] py-[7px] hover:bg-[#232A4E]"
    return (
        <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem ]">
            {/*logo*/}
            <img src={require("../../Assets/img/MuzicLogo.png")} alt="logo" className="logo w-[42px] h-[42px]"/>
            {/*side menu*/}
            <CenterMenu/>
            {/*buttons*/}
            <div className="buttons flex gap-4 mb-2">
                <button className={ buttonStyled}>signUp</button>
                <button className={buttonStyled}>Log In</button>
            </div>
        </div>
    );
};

export default Header;
