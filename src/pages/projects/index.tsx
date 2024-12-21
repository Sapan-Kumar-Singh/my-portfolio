import PagesHeader from "../../components/pagesHeader"
import ProjectCard from "../../components/projectCard"
import { projectConfig } from "../../config/projectConfig"


const Projects = () => {
  return (
    <>
      <div className="project-container p-10">
      <div className="text-center ">
      <PagesHeader pageTitle={projectConfig.title} pageSubTitle={projectConfig.subtitle}/>
      </div>
      <div className="grid gap-7  grid-cols-3 mx-20 pb-5 justify-items-center">
        {
          projectConfig.projDesc.map(({imgName,projLink}:ProjDesc,index:number)=>{
            return (
               <div key={`${index}_key`}><ProjectCard imgName={imgName} projLink={projLink}/></div>
            )
          })
        }
        
      </div>
      </div>
    </>
  )
}

export default Projects
