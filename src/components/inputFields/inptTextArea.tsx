
import { useField } from 'formik'

const InputTextArea = ({ inputField }: any) => {
  const [field, meta] = useField(inputField);

  return (
    <>
      <div className='m-2 inline-block relative'>
        <label className={`block mb-2 text-sm font-medium ${meta.touched && meta.error} ? "text-red-500" :"text-gray-900 dark:text-white"`}>{inputField?.headerName}</label>
        <textarea
          className={` inline-block outline-none p-2.5  text-sm rounded-lg border-2 ${meta.touched && meta.error  ? "border-[#cc0033] bg-[#fce4e4] text-[#cc0033]" : " border-gray-300 bg-card-gradient text-white" }  `}
          {...field}
          {...inputField}
        
        />

        {meta.touched && meta.error ? (
          <div className="absolute text-[#cc0033] text-xs top-[139px]">{meta.error}</div>
        ) : null}
      </div>
    </>
  )
}

export default InputTextArea
