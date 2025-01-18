
import { socilaMediaConfig } from "../../config/socialMediaconfig";
interface SocialMediaData{
  field:string;
  icon:JSX.Element;
  bgColor:string;
  textColor:string;
  link?:string;
}

const SocialMedia = () => {
  return (
    <div className="icon-bar fixed top-2/4 z-10 -translate-y-2/4">
      {
        socilaMediaConfig.socialMediaData.map((socialMediaData:SocialMediaData)=>{
          if(socialMediaData.link){
            return <div key={socialMediaData.field}>
              <a href={socialMediaData?.link} target="_blank" className={`block text-center p-3.5 text-lg transition-all ${socialMediaData.bgColor } ${socialMediaData.textColor} hover:bg-black hover:text-white`}>{socialMediaData.icon}</a>
            </div>
          }
          return <div key={socialMediaData.field}>
            <a href={socialMediaData?.link}  download='sample.pdf' className={`block text-center p-3.5 text-lg transition-all ${socialMediaData.bgColor } ${socialMediaData.textColor} hover:bg-black hover:text-white`}>{socialMediaData.icon}</a>
          </div>
        })
      }
  </div>
  )
}

export default SocialMedia
