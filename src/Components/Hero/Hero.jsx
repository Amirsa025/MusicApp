import React, {useState} from 'react';
import DownloadAds from "../DownloadAds/DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import {motion} from "framer-motion"

const Hero = () => {
    const [elementIsVisible, SetElement] = useState()
    const bg = {
        true: {
            left: "7rem",
        },
        false: {
            left: "19rem",
        },
    };
    const musicPlayer = {
        true: {
            left: "295px",
        },
        false: {
            left: "235px",
        },
    };
    const rect = {
        true: {
            left: "11rem",
        },
        false: {
            left: "13rem",
        },
    }
    const heart = {
        true: {
            left: "9rem",
        },
        false: {
            left: "12.5rem",
        },
    };
    return (
        <>
            <VisibilitySensor onChange={(isVisible) => SetElement(isVisible)} minTopValue={300}>
                <div
                    className={"\"wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]"}>
                    {/* lef side*/}
                    <div className="heading flex  items-start flex-col h-[100%] text-2xl justify-center text-[3rem]">
                        <span>Experience the</span> {" "}
                        <br/>
                        <span>
                    <b>
                        best Quality Music
                    </b>
                </span>
                        <br/>
                        <span className="flex items-start text-[0.9rem] text-[#525D6E] text-left">
                   best music Persian and InterNational in web App
                      <br/>
                    listen to the best music Persian Pop And ROck And Rap
                    </span>
                        {/*    DownLoad Ads*/}
                        <div className={"text-xl py-4 text-left"}>
                            <span> Download Now Ios and Android</span>
                            <DownloadAds/>
                        </div>
                    </div>
                    {/*    right side */}
                    <div className="images images relative w-[50%]">
                        <motion.img
                            variants={bg}
                            animate={`${elementIsVisible}`}
                            transition={{ duration: 1, type: "ease-out" }}
                                    src={require("../../Assets/img/backgraphics.png")}
                                    alt="backgraphics"
                                    className={"absolute top-[-8rem] left-[19rem]"}/>
                        <motion.img src={require("../../Assets/img/p 1.png")} alt="p1"
                                    className={"absolute top-[-18rem] h-[34rem] left-[13rem]"}/>
                        <motion.img
                            variants={musicPlayer}
                            animate={`${elementIsVisible}`}
                            transition={{
                                duration: 1,
                                type: "ease-out",
                            }}
                            src={require("../../Assets/img/p 2.png")}
                            alt=""
                            className="absolute left-[235px] top-[94px] w-[175px]"
                        />
                        <motion.img
                            variants={rect}
                            animate={`${elementIsVisible}`}
                            transition={{
                                type: "ease-out",
                                duration: 1,
                            }}
                            src={require("../../Assets/img/p 3.png")}
                            alt=""
                            className="absolute w-[5rem] left-[13rem] top-[12rem]"
                        />
                        <motion.img
                            variants={heart}
                            animate={`${elementIsVisible}`}
                            transition={{
                                type: "ease-out",
                                duration: 1,
                            }}
                            src={require("../../Assets/img/p 4.png")}
                            alt=""
                            className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
                        />
                    </div>
                </div>
            </VisibilitySensor>
        </>
    );
};

export default Hero;
