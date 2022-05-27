import React,{useState} from 'react';
import MusicPlayer from "../MusicPlayer/musicPlayer";
import VisibilitySensor from "react-visibility-sensor";
import {isVisible} from "@testing-library/user-event/dist/utils";


const Search = () => {
    const [elementIsVisible, SetElement] = useState()
    return (
        <div
            className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
            <div className={"left flex-1"}>
                <img src={require("../../Assets/img/backgraphics.png")} alt=""
                     className="absolute top-[22rem] left-[-47rem]"/>
                <img src={require("../../Assets/img/d1.png")} alt="" className="w-[16rem] top-[26rem] absolute"/>
                <img src={require("../../Assets/img/d2.png")} alt=""
                     className="w-[9rem] absolute top-[32.7rem] left-[7rem]"/>
                <img src={require("../../Assets/img/d3.png")} alt=""
                     className="w-[9rem] top-[33rem] left-[17rem] absolute"/>
                <img src={require("../../Assets/img/d4.png")} alt=""
                     className="w-[14rem] top-[51rem] left-[7rem] absolute"/>
            </div>
            <div className="right flex items-center flex-col justify-start flex-1 h-[100%] pt-[9rem]">
                {/* Search */}
                <div className="searchbar flex justify-start w-[100%]">
                    <input
                        type="text"
                        placeholder="Enter the keyword or URL"
                        className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
                    />
                    {/* SearchIcon */}
                    <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem] animated animate-pulse cursor-pointer">
                        <img
                            src={require("../../Assets/img/search.png")}
                            alt=""
                            className="w-[1.5rem]"
                        />
                    </div>
                </div>
                {/* tiled icon */}
                <div className="tild flex justify-start mt-7 items-center w-[100%] ">
                    <img
                        src={require("../../Assets/img/Path 318.png")}
                        alt=""
                        className="w-[5rem] "
                    />
                </div>

                {/* paragraph */}
                <div className="detail flex flex-col mt-5 text-4xl">
                    <span>Search Music by</span>
                    <span>
            <b>Name or Direct URL</b>
          </span>
                    <span className="text-sm mt-3 text-[#4D586A]">
            پخش موزیک ایزانی و خارجی  <br /> دانلود به روز ترین اهنگ های دنیا در اپیکیشن ما  <br /> volutpat varius.
          </span>
                </div>
                {/* Music Player */}
               <VisibilitySensor onChange={(isVisible)=>SetElement(isVisible)}>
                   <MusicPlayer/>
               </VisibilitySensor>
            </div>
        </div>
    );
};

export default Search;
