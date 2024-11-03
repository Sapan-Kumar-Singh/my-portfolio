import SvgImage from "../svgComp";

const ServicesCard = ({ headerName, serviceIcon }: ServiceDesc) => {
    return (
        <div className="card w-80 ms-auto me-auto border-none">
            <div className="container-card 
                            relative p-9 border-2 border-transparent 
                            bg-card-gradient bg-clip-padding rounded-lg 
                            text-center transition-transform duration-300 
                            hover:scale-105 hover:shadow-lg 
                            transition-colors duration-1000 ease-in-out 
                            hover:bg-card-gradient-hover
                            hover:opacity-75
                            hover:cursor-pointer">
                <div className="inline-block">
                    <SvgImage 
                        fileName={serviceIcon?.fileName} 
                        svgHeight={serviceIcon?.height} 
                        svgWidth={serviceIcon?.width} 
                        fillColor={serviceIcon?.fillColor}
                    />
                </div>
                <div className="pt-2 text-sm font-medium text-white underline-service hover:text-gray-300">
                    {headerName}
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
