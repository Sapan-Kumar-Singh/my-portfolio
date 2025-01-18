
import PagesHeader from '../../components/pagesHeader'
import CustomCard from '../../components/customCard'
import { servicesConfig } from '../../config/servicesConfig'

const Services = () => {
    return (
        <>
            <div className='service-container p-10'>
                <div className='text-center'>
                    <PagesHeader pageTitle={servicesConfig.title} pageSubTitle={servicesConfig.subTitle} />
                </div>
                <div className='grid gap-7  grid-cols-3 mx-20 justify-items-center'> 
                    {
                        servicesConfig?.servicedesc.map(({headerName,iconDetail,hidden=false}:ServiceDesc,index:number)=>{
                            return  !hidden? <div  key={`${index}_key`}>
                            <CustomCard headerName={headerName} iconDetail={iconDetail}/>
                        </div> : <></>
                        })
                    }
                   
                </div>
            </div>
        </>
    )
}

export default Services
