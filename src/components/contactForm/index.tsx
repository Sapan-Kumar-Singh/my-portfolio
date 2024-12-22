
import InputFields from '../inputFields';
import Button from '../../button';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import emailjs from '@emailjs/browser';
import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ inputFields, submitBtn }: FormGrp) => {


  const initialValues = {
    user_name: '',
    user_email: '',
    user_message: '',
  }
  const validationSchema = () => {
    return Yup.object({
      user_name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('This field is required'),
      user_email: Yup.string()
        .email('Invalid userEmail address')
        .required('This field is required'),
      user_message: Yup.string()
        .min(20, 'Must be 20 character or more')
        .required('This field  is required')
    })
  }

  return (
    <>
      <div >
        <Formik initialValues={initialValues}
          validationSchema={validationSchema()}
          onSubmit={(values, { setSubmitting }) => {
            
            setTimeout(() => {
              const SERVICE_ID='service_wbnj836';
              const TEMPLATE_ID='template_mou9o0p';
              const USER_ID='4etCfj2aQyiYxNVU_'
              const templateParams ={...values};

              emailjs.send(SERVICE_ID,TEMPLATE_ID,templateParams,USER_ID).then(()=>{
                toast.success("email send successfully!",{
                  position:'top-center'
                })
              },(error)=>{
                toast.error(`Email failed to send:${error}`,{
                  position:'top-center'
                })
              })
              setSubmitting(false);
            }, 400);
          }}

        >
          {
            ({ isSubmitting }) => (
              <Form >
                {
                  inputFields.map((inputField: any) => {
                    return (
                      <div key={inputField?.field}>
                        <InputFields inputField={inputField} />
                      </div>

                    )
                  })
                }

                <Button
                  label={submitBtn?.label}
                  variant={submitBtn?.variant}
                  size={submitBtn?.size}
                  onClick={() =>{}}
                  type={submitBtn?.type}
                  disabled={isSubmitting}
                />

              </Form>
            )
          }


        </Formik>
        <ToastContainer />
        <div>

        </div>
      </div>


    </>
  )
}

export default ContactForm
