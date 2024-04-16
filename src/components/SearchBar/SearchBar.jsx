// import toast, { Toaster } from "react-hot-toast";
// import { Formik, Form, Field } from "formik";

// export default function SearchBar({ onSearch }) {
 
//   const notify = () => {
//     toast.error("Please enter text to search for images.");
//   };

//   return (
//     <Formik
//       initialValues={{ query: "" }}
//       onSubmit={(values, actions) => {
//         onSearch(values.query);
//         actions.resetForm();
//       }}
//     >
//       <Form>
//         <Field
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           name="query"
//         />
//         <div>
//           <button type="submit" onClick={notify}>
//             Search
//           </button>
//           <Toaster />
//         </div>
//       </Form>
//     </Formik>
//   );
// }




import { Formik, Form, Field } from "formik";
import { Toaster, toast } from "react-hot-toast";

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
      <Form>
        <Field
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <div>
          <button type="submit">Search</button>
          <Toaster />
        </div>
      </Form>
    </Formik>
  );
}
