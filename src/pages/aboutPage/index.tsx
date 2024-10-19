import { aboutConfig } from "../../config/aboutConfig"


const AboutPage = () => {
    return (
        <>
            <div className="conatiner flex justify-around mt-7">
                <div ><img className="h-screen w-96" src="/icons/sapanFirst.svg" alt="loading..." /></div>
                <div>
                    <div className=" mb-4 text-5xl font-bold text-white drop-shadow-[2px_2px_var(--tw-shadow-color)]" style={{ textShadow: "2px 2px #ffbd39" }}>
                        {aboutConfig.title}
                    </div>
                    <p className="mb-7 mt-7">{aboutConfig.subtitle}</p>
                    <ul className="mt-4">
                        {
                            aboutConfig.aboutUser.map((userInfo: AboutUser) => {
                                return (
                                    !userInfo.hidden ? <li className="flex mb-2.5"><span className="text-white font-semibold w-32">{userInfo.headerName}</span><span className="w-[calc(100%-130px)]">{userInfo.value}</span></li> : <></>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AboutPage
