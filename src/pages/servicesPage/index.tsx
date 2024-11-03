
import PagesHeader from '../../components/pagesHeader'
import ServicesCard from '../../components/servicesCard'
import { servicesConfig } from '../../config/servicesConfig'

const Services = () => {
    return (
        <>
            <div className='service-container p-20'>
                <div className='text-center'>
                    <PagesHeader pageTitle={servicesConfig.title} pageSubTitle={servicesConfig.subTitle} />
                </div>
                <div className='grid gap-7  grid-cols-3 mx-20 justify-items-center'> 
                    {
                        servicesConfig?.servicedesc.map(({headerName,serviceIcon,hidden=false}:ServiceDesc,index:number)=>{
                            return  !hidden? <div  key={`${index}_key`}>
                            <ServicesCard headerName={headerName} serviceIcon={serviceIcon}/>
                        </div> : <></>
                        })
                    }
                   
                </div>
            </div>
        </>
    )
}

export default Services
