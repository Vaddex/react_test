import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './FeedbackForm.module.css';

const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required!'),
    email: Yup.string().email('Must be a valid email!').required('Required'),
    message: Yup.string()
        .min(3, 'Too short!')
        .max(100, 'Too long!')
        .required('Required!'),
    level: Yup.string().oneOf(['lol', 'kek', 'varenik']).required('Required'),
});

const initialValues = {
    username: 'hello',
    email: 'hello@gmail.com',
    message: 'sho ti golova',
    level: 'varenik',
};

const FeedbackForm = () => {
    const nameFieldId = useId();
    const emailFieldId = useId();
    const msgFieldId = useId();
    const levelFieldId = useId();

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form className={css.form}>
                <div>
                    <label htmlFor={nameFieldId}>Username</label>
                    <Field
                        className={css.field}
                        type="text"
                        name="username"
                        id={nameFieldId}
                    />
                    <ErrorMessage
                        name="username"
                        component="span"
                        className={css.errorArea}
                    />
                </div>

                <br />

                <div>
                    <label htmlFor={emailFieldId}>Email</label>
                    <Field
                        className={css.field}
                        type="email"
                        name="email"
                        id={emailFieldId}
                    />
                    <ErrorMessage
                        name="email"
                        component="span"
                        className={css.errorArea}
                    />
                </div>

                <br />

                <div>
                    <label htmlFor={msgFieldId}>Message</label>
                    <Field
                        className={css.field}
                        as="textarea"
                        name="message"
                        cols="60"
                        rows="1"
                        id={msgFieldId}
                    />
                    <ErrorMessage
                        name="message"
                        component="span"
                        className={css.errorArea}
                    />
                </div>

                <br />

                <div>
                    <Field
                        as="select"
                        className={css.field}
                        name="level"
                        id={levelFieldId}
                    >
                        <option value="lol">lol</option>
                        <option value="kek">kek</option>
                        <option value="varenik">varenik</option>
                    </Field>
                    <ErrorMessage
                        name="level"
                        component="span"
                        className={css.errorArea}
                    />
                </div>

                <br />

                <button className={css.btn} type="submit">
                    Submit
                </button>
            </Form>
        </Formik>
    );
};

export default FeedbackForm;
