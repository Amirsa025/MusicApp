import React from 'react';

const DownloadAds = () => {
    return (
        <div className={"flex gap-6 py-4 items-start "}>
            <img src={require("../../Assets/img/Google Play.png")} alt=""/>
            <img src={require("../../Assets/img/App Store.png")} alt=""/>
        </div>
    );
};

export default DownloadAds;
