import  { useState } from 'react'

interface ProjectCardProps{
  imgName:string;
  projLink?:string
}
const ProjectCard = ({imgName,projLink}:ProjectCardProps) => {

  const [isHover,setIsHover]=useState<boolean>(false);
  const projectHandler=(projLink ?:string)=>{
        if(projLink){
         return window.location.href=projLink
        }
        return;
  }
  return (
    <>
      <div className='card-container  p-9 relative inline-block ms-auto me-auto '>
          <div className={`w-80  ransition-transform duration-300  ${!isHover ? '' : 'scale-105 '}`}  onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            <img src={`/images/${imgName}`} alt='loading...'/>
          </div>
          <div className='w-80 h-14  bg-card-gradient shadow-md text-white  shadow-yellow-600 pt-2 text-center hover:cursor-pointer hover:text-light-orange' onClick={()=>projectHandler(projLink)}>Open</div>
      </div>
    </>
  )
}

export default ProjectCard
