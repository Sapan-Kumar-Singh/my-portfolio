
import CustomCard from '../../components/customCard'
import PagesHeader from '../../components/pagesHeader'

import { skillsConfig } from '../../config/skillConfig'

const Skills = () => {
  return (
    <>
      <div className='service-container p-10'>
        <div className='text-center'>
          <PagesHeader pageTitle={skillsConfig.title} pageSubTitle={skillsConfig.subTitle} />
        </div>
        <div className='grid gap-7  grid-cols-3 mx-20 justify-items-center'>
          {
            skillsConfig.skillDesc.map(({ headerName, iconDetail, hidden = false }: SkillDesc, index) => {
              return !hidden ? <div key={`${index}_key`}>
                <CustomCard headerName={headerName} iconDetail={iconDetail} />
              </div> : <></>
            })
          }
        </div>

      </div>
    </>
  )
}

export default Skills
