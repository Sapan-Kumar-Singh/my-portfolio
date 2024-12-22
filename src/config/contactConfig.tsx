


export const contactConfig:ContactConfig={
    title: "Contact me",
    subtitle:"Feel free to reach out to me anytime. Looking forward to connecting with you!",
   formGrp:{
    inputFields:[{
        type:'text',
        field:'user_name',
        placeholder:'Enter your name',
        size:'80',
        name:'user_name',
    },{
        type:'email',
        field:'user_email',
        placeholder:'Enter your email',
        size:'80',
        name:'user_email'
    },{
        type:'textArea',
        field:'user_message',
        placeholder:'Enter your message',
        rows:'5',
        cols:'83',
        name:'user_message'
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