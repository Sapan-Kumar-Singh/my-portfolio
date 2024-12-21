
import InputText from './inputText';
import InputTextArea from './inptTextArea';

const InputFields = ({ inputField }: any) => {
    
    const rendrerInputField = () => {
        switch (inputField?.type) {
            case "text":
                return <InputText inputField={inputField} />

            case "email":
                return <InputText inputField={inputField} />
            case "textArea":
                return <InputTextArea inputField={inputField} />

            default:
                break;
        }
    }

    return (
        <>
            {rendrerInputField()}
        </>
    )
}

export default InputFields
