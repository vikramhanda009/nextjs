// // Dummy imports
// 'use client'
// //  import styles from "./contact.module.css"
  
  
//   import styles from "./contact.module.css"
//   import {Mulish} from "next/font/google";
//   import {useActionState, useState, useTransition} from "react";
// import { serverAction } from "./contact.action";
// import { log } from "console";
// import { useFormStatus } from "react-dom";
//   const mulish = Mulish({
//       subsets: ['latin'],
//       display: 'swap',
//       weight: ['300', '400', '500', '600', '700', '800', '900']
//   })
//   const user ={
//         username:"",
//         email:"",
//         phone:"",
//         message:""
//     }
//     const status= "success"
//   // const[user, setUser] = useState({
//   //       username:"",
//   //       email:"",
//   //       phone:"",
//   //       message:""
//   //   })
//   //   const [status, setStatus] = useState(null);
// const handleSubmit = (formData: FormData) => {
//   const { fname, lname, email, password } = Object.fromEntries(formData.entries());
//   console.log(" email, password", name, lname,email, password);
  
// };
//   const ContactForm = () => {
//    const [isPending, startTransition, ]= useTransition()
//    const [contactFormResponse, setContactFormResponse] = useState(null);
//       //  const [contactFormResponse, formAction, isPending] = useActionState(serverAction, null);

// //    const handleSubmit =(formdata)=>{
// // const {email, password}= Object.fromEntries(formdata.enteries());

// //     }
//     const handleChange = (form: FormData) => {
//   startTransition(async () => {
//     const res = await serverAction(null, form); // ✅ correct order
//     // setContactFormResponse(res);
//   });
// };
  
  
//       return (<>
//           <form className="max-w-sm mx-auto" action={handleChange}>
//             <div className="mb-5">
//     <label htmlFor  ="fname"  className="block mb-2.5 text-sm font-medium text-heading">Your fname</label>
//     <input type="text" id="fname"  name="fname" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
//   </div>
//   <div className="mb-5">
//     <label htmlFor  ="lname"  className="block mb-2.5 text-sm font-medium text-heading">Your lname</label>
//     <input type="text" id="lname"  name="lname" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
//   </div>
//   <div className="mb-5">
//     <label htmlFor  ="email"  className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
//     <input type="email" id="email"  name="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
//   </div>
//   <div className="mb-5">
//     <label htmlFor  ="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
//     <input type="password" name="password"  id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
//   </div>
//   <label htmlFor  ="remember" className="flex items-center mb-5">
//     <input id="remember" name="remember"  type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
//     <p className="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</p>
//   </label>
//   <Submit/>
//   {/* <button disabled={isPending} type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
    
//     </button> */}
// </form>
// <section>
// {contactFormResponse && (<p className={contactFormResponse.success?"text-green-500 max-w-sm mx-auto":" max-w-sm mx-auto text-red-500"} >{contactFormResponse.msg} </p>)}
// </section>
// </>
//       );
//   };
  
//   export default ContactForm;
//  const  Submit = ()=> {
//   const {pending} = useFormStatus();
//   return (<button disabled={pending} type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
//      {pending?<span>Loding...</span>:<span>Submit</span>}
//     </button>)
// }