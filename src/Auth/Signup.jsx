// import { useState } from 'react';
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";


// const signUpSchema = z
//   .object({
//     name: z.string().min(3, "Name must be at least 3 characters"),
//     companyName: z.string().min(2, "Company name is required"),
//     companyAddress: z.string().min(3, "Company address is required"),
//     email: z.string().email("Invalid email"),
//     password: z.string().min(6, "Password must be at least 6 characters"),
//     confirmPassword: z.string().min(6, "Confirm password is required"),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });


// const SignUp = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   // const togglePasswordVisibility = () => {
//   //   setPasswordVisible(!passwordVisible);
//   // };

//   // const toggleConfirmPasswordVisibility = () => {
//   //   setConfirmPasswordVisible(!confirmPasswordVisible);
//   // };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(signUpSchema),
//   });


//   const onSubmit = async (data) => {
//     try {
//       const res = await axios.post("http://localhost:3000/api/auth/register", {
//         email: data.email,
//         userName: data.name,
//         password: data.password,
//         companyName: data.companyName,
//         companyAddress: data.companyAddress,
//       });

//       console.log("REGISTER RESPONSE:", res.data);
//       alert("User Registered Successfully!");
//     } catch (error) {
//       console.log("REGISTER ERROR:", error);
//       alert(error.response?.data?.message || "Registration Failed");
//     }
//   };

// // const [name, setName] = useState("");
// //   const [companyName, setCompanyName] = useState("");
// //   const [companyAddress, setCompanyAddress] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await axios.post("http://localhost:3000/api/auth/register", {
// //         email,
// //         userName: name,
// //         password,
// //         companyName,
// //         companyAddress,
// //       });

// //       console.log("REGISTER RESPONSE:", res.data);
// //       alert("User Registered Successfully!");
// //     } catch (error) {
// //       console.log("REGISTER ERROR:", error);
// //       alert(error.response?.data?.message || "Registration Failed");
// //     }
// //   };

//   return (
//     <div className="font-sans bg-gray-50 h-screen overflow-hidden">
//       <main className="flex h-screen">
//         {/* LEFT SIDE: SIGN UP FORM */}
//         <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-4 md:p-8">
//           <div className="w-full max-w-sm p-6 bg-white rounded-lg">
//             {/* Title Block */}
//             <h1 className="text-2xl font-bold text-gray-800 mb-1 text-center">Sign Up</h1>
//             <p className="text-gray-500 text-sm mb-6 text-center">Enter your email and password to Sign Up.</p>

//             <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
//               {/* Name Field */}
//               <div>
//                 <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">Name</label>
//                 <input
//                 {...register("name")}
//                   type="text"
//                   // value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   id="name"
//                   placeholder="Write here..."
//                   className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                   aria-label="Name"
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-xs">{errors.name.message}</p>
//                 )}
//               </div>

//               {/* Company Name Field */}
//               <div>
//                 <label htmlFor="company" className="block text-xs font-medium text-gray-700 mb-1">Company Name</label>
//                 <input
//                 {...register("companyName")}
//                   type="text"
//                   // value={companyName}
//                   onChange={(e) => setCompanyName(e.target.value)}
//                   id="company"
//                   placeholder="Your Company Name"
//                   className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                   aria-label="Company Name"
//                 />
//                 {errors.companyName && (
//                   <p className="text-red-500 text-xs">{errors.companyName.message}</p>
//                 )}
//               </div>
// <div>
//                 <label htmlFor="companyAddress" className="block text-xs font-medium text-gray-700 mb-1">Company Address</label>
//                 <input
//                 {...register("companyAddress")}
//                   type="text"
//                   // value={companyAddress}
//                   onChange={(e) => setCompanyAddress(e.target.value)}
//                   id="companyAddress"
//                   placeholder="Your Company Address"
//                   className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                   aria-label="Company Address"
//                 />
//                 {errors.companyAddress && (
//                   <p className="text-red-500 text-xs">{errors.companyAddress.message}</p>
//                 )}
//               </div>
//               {/* Email Field */}
//               <div>
//                 <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                 {...register("email")}

//                   type="email"
//                   // value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   id="email"
//                   placeholder="Write here..."
//                   className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                   aria-label="Email"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-xs">{errors.email.message}</p>
//                 )}
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">Password</label>
//                 <div className="relative">
//                   <input
//                   {...register("password")}
//                     type={passwordVisible ? "text" : "password"}
//                     // value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     id="password"
//                     placeholder="Enter password"
//                     className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                     aria-label="Password"
//                   />

//                   {/* Password Visibility Toggle */}
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-500"
//                     onClick={() => setPasswordVisible(!passwordVisible)}
//                   >
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       {passwordVisible ? (
//                         <>
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                         </>
//                       ) : (
//                         <>
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                         </>
//                       )}
//                     </svg>
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-xs">{errors.password.message}</p>
//                 )}
//               </div>

//               {/* Confirm Password Field */}
//               <div>
//                 <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700 mb-1">Confirm Password</label>
//                 <div className="relative">
//                   <input
//                   {...register("confirmPassword")}
//                     type={confirmPasswordVisible ? "text" : "password"}
//                     // value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     id="confirmPassword"
//                     placeholder="Enter Confirm password"
//                     className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                     aria-label="Confirm Password"
//                   />
//                   {/* Confirm Password Visibility Toggle */}
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-500"
//                     onClick={() =>
//                       setConfirmPasswordVisible(!confirmPasswordVisible)}
//                   >
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       {confirmPasswordVisible ? (
//                         <>
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                         </>
//                       ) : (
//                         <>
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                         </>
//                       )}
//                     </svg>
//                   </button>
//                 </div>
//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
//                 )}
//               </div>

//               {/* Sign Up Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 text-sm rounded-lg transition duration-150 ease-in-out shadow-md"
//               >
//                 Sign Up
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* RIGHT SIDE: VISUAL PANEL */}
//         <div
//           className="hidden md:flex md:w-1/2 relative flex-col items-center justify-center p-8"
//           style={{
//             background: 'linear-gradient(135deg, #0e7490 0%, #38bdf8 100%)',
//           }}
//         >
//           <img
//             src="/images/split_img.jpg"
//             alt="Login Visual"
//             className="w-48 md:w-56 lg:w-64 h-auto rounded-xl shadow-lg object-cover"
//           />

//           {/* Footer Text */}
//           <div className="mt-6 text-center text-white">
//             <h2 className="text-xl font-bold mb-2 leading-tight">Your Vision, Our Expertise</h2>
//             <p className="text-sm font-light opacity-90 max-w-xs">
//               Experience seamless collaboration where your goals meet our professional expertise. Together, we create exceptional results.
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SignUp;