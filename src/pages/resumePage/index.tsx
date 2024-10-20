import { resumeConfig } from "../../config/resumeConfig"
import PagesHeader from "../../components/pagesHeader"
import ResumeCard from "../../components/resumeCard"


const ResumePage = () => {
  return (
    <>
      <div className="resume-container p-20">
           <div className="text-center">
           <PagesHeader pageTitle={resumeConfig.title} pageSubTitle={resumeConfig.subTitle}/>
           </div>
           <div className="grid-container grid grid-cols-2 gap-6 ">
            {
                resumeConfig.resumeDesc.map((eachResumeDesc:ResumeDesc)=>{
                    return <div>
                        <ResumeCard duration ={eachResumeDesc.duration} title={eachResumeDesc.title} subTitle={eachResumeDesc.subTitle}  description={eachResumeDesc.description} />
                    </div>
                })
            }
             
           </div>
      </div>
    </>
  )
}

export default ResumePage
