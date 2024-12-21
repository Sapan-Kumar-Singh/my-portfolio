


export const contactConfig:ContactConfig={
    title: "Contact me",
    subtitle:"Feel free to reach out to me anytime. Looking forward to connecting with you!",
   formGrp:{
    inputFields:[{
        type:'text',
        field:'userName',
        placeholder:'Enter your name',
        size:'80',
        name:'userName',
    },{
        type:'email',
        field:'userEmail',
        placeholder:'Enter your email',
        size:'80',
        name:'userEmail'
    },{
        type:'textArea',
        field:'userMessage',
        placeholder:'Enter your message',
        rows:'5',
        cols:'83',
        name:'userMessage'
    }],
    submitBtn:{
    label:'Send message',
    onClick:()=>{} , 
    type:'submit',
    disabled:true,  
    variant:'outline',  
    size:'medium',  
    }
   }
}