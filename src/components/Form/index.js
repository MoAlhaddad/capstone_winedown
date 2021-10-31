import React from 'react';
import { Formik, Field } from 'formik';
import { Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

//Pass an array of objects, each object will have a type, key, value, name, a boolean indicating to show a label or not.
//In cases of the select tags it will use a options property
const Form = ({ initialValues, inputArr, submitButtonText }) => {
    const defineErrorObj = (values, valueKeys) => {
        let errorObj = {};
        valueKeys.forEach(valKey => {
            if(!values[valKey]) errorObj[valKey] = `Please provide a ${valKey} field.`;
            else errorObj[valKey] = '';
        });
        return errorObj;
    }
    return (
        <Formik 
            initialValues={initialValues}
            validate={values => {
                const valueKeys = Object.keys(values);
                const errors = defineErrorObj(valueKeys);
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
            }}
        >
            {
                ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <Form onSubmit={handleSubmit}>
                        {
                            inputArr && inputArr.map(inputEl => {
                                if(inputEl.type === 'select') 
                                    <Field 
                                        component="select"
                                        id={uuidV4()}
                                        name={inputEl.name}
                                        multiple={false}
                                    >
                                        {inputEl.options.map(opt => <option key={opt.id} value={opt.value}>{opt.label}</option>)}
                                    </Field>
                                else
                                    return (
                                        <input
                                            value={inputEl.value || ''}
                                            type={inputEl.type || 'text'}
                                            name={inputEl.name || uuidV4()}
                                            key={uuidV4()}
                                        />
                                    ); 
                            })
                        }
                        <Button type="submit" >{submitButtonText ? submitButtonText : 'Submit'}</Button>
                    </Form>
                )
            }
        </Formik>
    );
}

export default Form;