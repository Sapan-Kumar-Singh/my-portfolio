interface NavbarConfig {
    headerName: string;
    field: string;
    hidden?:boolean;
    navigateTo:string;
}

interface DeveloperIntro{
    firstName:string;
    middleName?:string;
    lastName?:string;
    title?:string;
   
}

interface DeveloperShortInfo{
    jobTitleFirstName:string;
    jobTitleMiddleName?:string;
    jobTitleLastName?:string;
    loaction:string;
    expertise:string;
}


interface CustomButton {
    label:string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; 
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;  
    style?: React.CSSProperties;  
    className?: string; 
    icon?: JSX.Element; 
    iconPosition?: 'left' | 'right';  
    ariaLabel?: string;  
    variant?: 'text' | 'outline';  
    size?: 'small' | 'medium' | 'large'; 
    loading?: boolean;  
 }
type type='text' | 'textArea' | 'checkbox' | 'email' | 'password' | 'number' | 'date';

interface InputField{
   type:type;
   headerName?:string;
   field:string;
   placeholder?:string;
   size?:String;
   height?:string;
   required?:boolean;
   hidden?:boolean;
   rows?:string;
   cols?:string;
   name:string;
}






interface AboutUser{
    headerName:string;
    field?:string;
    value:string;
    hidden?:boolean;

}

interface AboutConfig{
    title:string;
    subTitle?:string;
    aboutUser:AboutUser[];
}

interface ResumeDesc {
    duration: string;
    title: string;
    subTitle: string;
    description: string;

}
interface ResumeConfig {
    title: string;
    subTitle?: string;
    resumeDesc: ResumeDesc[];
}

interface IconDetail{
    fileName:string;
    height:string;
    width:string;
    fillColor:string;
}


interface ServiceDesc{
    headerName:string;
    field?:string;
    iconDetail:IconDetail;
    hidden?:boolean;
}

interface ServicesConfig{
    title:string;
    subTitle?:string;
    servicedesc:ServiceDesc[];
}



interface SkillDesc{
    headerName:string;
    field?:string;
    iconDetail:IconDetail;
    hidden?:boolean;
}

interface NavIcon{
    iconsDetail:IconDetail[]
}
interface SkillsConfig{
    title:string;
    subTitle?:string;
    skillDesc:SkillDesc[];
}

interface ProjDesc{
    imgName:string;
    projLink?:string;
}

interface ProjectsConfig{
    title:string;
    subtitle?:string;
    projDesc:ProjDesc[];
}

interface FormGrp{
    inputFields:InputField[];
    submitBtn:CustomButton;
     
}

interface ContactConfig{
    title:string;
    subtitle?:string;
    formGrp:FormGrp;
}