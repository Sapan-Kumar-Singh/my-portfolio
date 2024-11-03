import { aboutConfig } from "../../config/aboutConfig"
import PagesHeader from "../../components/pagesHeader"

const AboutPage = () => {
    return (
        <>
    
            <div className="conatiner flex justify-around mt-7">
                <div ><img className="h-screen w-96" src="/icons/primaryImage.svg" alt="loading..." /></div>
                <div>
                    <PagesHeader pageTitle={aboutConfig.title}  pageSubTitle={aboutConfig.subTitle}/>
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
