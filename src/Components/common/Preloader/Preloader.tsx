import React from "react";
import preloader from "../../../assets/images/preloader.gif";

type PropsType = {

}

let Preloader: React.FC = () => {
    return <div>
        <img src={preloader} />
    </div>
}
export default Preloader;