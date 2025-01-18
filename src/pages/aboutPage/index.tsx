import { aboutConfig } from "../../config/aboutConfig"
import PagesHeader from "../../components/pagesHeader"

const AboutPage = () => {
    return (
        <>

            <div className="container bg-black ml-10 flex justify-center items-center h-screen">
                <div className="mt-10"><img className="h-96 w-96" src="/images/sapan_primary.png" alt="loading..." /></div>
                <div>
                    <div>
                        <PagesHeader pageTitle={aboutConfig.title} pageSubTitle={aboutConfig.subTitle} />
                    </div>

                    <ul className="mt-4">
                        {
                            aboutConfig.aboutUser.map((userInfo: AboutUser, index: number) => {
                                return (
                                    !userInfo.hidden ? <li key={`${userInfo.field}_${index}`} className="flex mb-2.5"><span className="text-white font-semibold w-32">{userInfo.headerName}</span><span className="w-[calc(100%-130px)]">{userInfo.value}</span></li> : <></>
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
