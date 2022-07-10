// import { useState } from 'react';

// export const useForm = (initialValue, key) => {
//     const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//     const [values, setValues] = useState(() => {
//         if(window.localStorage.getItem(key)) {
//             return JSON.parse(window.localStorage.getItem(key));
//         }
//         return [initialValue]
//     })

//     const handleChanges = (e) => {
//         setValues({ ...values, [e.target.name]: e.target.value })
//     }

//     const handleSubmit  = (e) => {
//         e.preventDefault();
//         console.log("ms, checkoutform")
//         setShowSuccessMessage(true)
//     }


//     return [values, setValues, handleChanges, handleSubmit, showSuccessMessage]
// }