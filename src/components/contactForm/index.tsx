
import InputFields from '../inputFields';
import Button from '../../button';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
const ContactForm = ({ inputFields, submitBtn }: FormGrp) => {


  const initialValues = {
    userName: '',
    userEmail: '',
    userMessage: '',
  }
  const validationSchema = () => {
    return Yup.object({
      userName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('This field is required'),
      userEmail: Yup.string()
        .email('Invalid userEmail address')
        .required('This field is required'),
      userMessage: Yup.string()
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
              console.log("submit valuse---", values)
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
                  onClick={() => console.log("clicked")}
                  type={submitBtn?.type}
                  disabled={isSubmitting}
                />

              </Form>
            )
          }


        </Formik>

        <div>

        </div>
      </div>


    </>
  )
}

export default ContactForm
