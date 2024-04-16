
// export default function ErrorMessage({ error }) {
//     let message = "Sorry! There was an error.";
    
//     if (error === "noImages") {
//       message = "Sorry! There are no images matching your search.";
//     }
  
//     return <p>{message}</p>;
//   }



  export default function ErrorMessage ({error}){

    return(
       <div>
        {error && <b>Oops! There was an error! Please reload!</b>}
        </div>
       
    )
}
