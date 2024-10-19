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

interface ButtonProps{
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


interface AboutUser{
    headerName:string;
    field?:string;
    value:string;
    hidden?:boolean;

}

interface AboutConfig{
    title:string;
    subtitle:string;
    aboutUser:AboutUser[];
}