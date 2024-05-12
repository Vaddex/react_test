import { Formik, Form, Field } from 'formik';
import css from './FeedbackForm.module.css';

const FeedbackForm = () => {
    return (
        <Formik initialValues={{}} onSubmit={() => {}}>
            <Form className={css.form}>
                <Field className={css.field} type="text" name="username" />
                <Field className={css.field} type="email" name="email" />

                <button className={css.btn} type="submit">
                    Submit
                </button>
            </Form>
        </Formik>
    );
};

export default FeedbackForm;
