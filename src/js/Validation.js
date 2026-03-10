import {useState} from "react";

export function Validation(initialValues, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({...prev, [name]: value}));
        setErrors(prev => ({
            ...prev,
            [name]: validate({...values, [name]: value})[name]
        }));
    };

    const handleBlur = (e) => {
        setTouched(prev => ({
            ...prev, [e.target.name]: true
        }));
    };

    const handleSubmit = (onSuccess, path) => (e) => {
        e.preventDefault();
        const allErrors = validate(values);
        setErrors(allErrors);
        if(Object.keys(allErrors).length === 0) {
            onSuccess(values);
            window.location.replace(path);
        }
        else{
            window.alert("one or more fields are empty")
        }
    };

    const reset = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
    }

    return {values, errors, touched , handleChange, handleBlur, handleSubmit, reset};

}