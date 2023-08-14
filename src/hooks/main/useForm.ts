import { useState } from 'react';

export const useCustomForm = <T>( initState: T ) => {
    
    const [state, setState] = useState( initState );

    const onChange = <K>( value: K,  field: keyof T ) => {
        setState({
            ...state,
            [field]: value
        });
    }

    const onResetForm = () => {
        setState(initState)
    }


    return {
        ...state,
        form: state,
        onChange,
        onResetForm
    }

}