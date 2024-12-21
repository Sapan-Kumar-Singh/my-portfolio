import { useState } from "react";
import SvgImage from "../svgComp";

const CustomCard = ({ headerName, iconDetail }: ServiceDesc) => {
    const [isHover,setIsHover]=useState<boolean>(false);

    return (
        <div className="card w-80 ms-auto me-auto border-none" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
           
                  <div className={` relative p-9 border-2 border-transparent shadow-md  shadow-yellow-600
                            bg-card-gradient bg-clip-padding rounded-lg 
                            text-center transition-transform duration-300
                             transition-colors duration-1000 ease-in-out
                             ${!isHover ? '' : 'scale-105 shadow-lg bg-card-gradient-hover opacity-75 cursor-pointer'}`}>              
                <div className="inline-block">
                    <SvgImage 
                        fileName={iconDetail?.fileName} 
                        svgHeight={iconDetail?.height} 
                        svgWidth={iconDetail?.width} 
                        fillColor={ isHover  ? "#fff" :iconDetail?.fillColor}
                    />
                </div>
                
                <div className={`pt-2 text-sm font-medium ${!isHover ? 'text-white underline-service' : 'underline-service-hover text-black'}`}>
                    {headerName}
                </div>
            </div>
        </div>
    );
};

export default CustomCard;
