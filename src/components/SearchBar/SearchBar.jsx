import { Formik, Form, Field } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { TiZoom } from "react-icons/ti";
import styles from "./SearchBar.module.css";


export default function SearchBar({ onSearch }) {
  const notify = () => {
    toast.error("Please enter text to search for images.");
  };

  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (!values.query.trim()) {
          notify();
          return;
        }
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form className={styles.form}>
      
      <TiZoom className={styles.icon} />
      
        <Field
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          className={styles.input}
        />
        <Toaster />
      </Form>
    </Formik>
  );
}
