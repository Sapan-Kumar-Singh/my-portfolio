
import PagesHeader from '../../components/pagesHeader'
import ServicesCard from '../../components/servicesCard'
import { servicesConfig } from '../../config/servicesConfig'

const Services = () => {
    return (
        <>
            <div className='service-container'>
                <div>
                    <PagesHeader pageTitle={servicesConfig.title} pageSubTitle={servicesConfig.subTitle} />
                </div>
                <div>
                    <ServicesCard/>
                </div>
            </div>
        </>
    )
}

export default Services
