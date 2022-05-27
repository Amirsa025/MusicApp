import React from 'react';

const CenterMenu = () => {
    const listStyled = "mr-[3rem] hover:cursor-pointer"
    return (
        <div className={"menu flex "}>
            <ul className={"flex w-[100%] justify-between " }>
                <li className={listStyled}>Home</li>
                <li className={listStyled}>About</li>
                <li className={listStyled}> Preformer</li>
                <li className={listStyled}>Event  shedule</li>
            </ul>
        </div>
    );
};

export default CenterMenu;
