// import { useState } from 'react';
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// // Zod Schema
// const loginSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });


// const LoginPage = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

// const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(loginSchema),
//   });

//   // Submit handler
//   const onSubmit = async (data) => {
//     try {
//       const res = await axios.post("http://localhost:3000/api/auth/login", {
//         email: data.email,
//         password: data.password,
//       });

//       console.log("LOGIN RESPONSE:", res.data);
//       alert("Login Successful!");
//     } catch (error) {
//       console.log("LOGIN ERROR:", error);
//       alert(error.response?.data?.message || "Login Failed");
//     }
//   };


//   return (
//     <div className="font-sans bg-gray-50 h-screen overflow-hidden">
//       <main className="flex h-screen">
//         {/* LEFT SIDE: LOGIN FORM */}
//         <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-4 md:p-8">
//           <div className="w-full max-w-sm p-6 bg-white rounded-lg">
//             {/* Title Block */}
//             <h1 className="text-2xl font-bold text-gray-800 mb-1 text-center">Log in</h1>
//             <p className="text-gray-500 text-sm mb-6 text-center">Enter your email and password to log in.</p>

//             <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
//               {/* Email Address Field */}
//               <div>
//                 <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
//                   Email Address
//                 </label>
//                 <input
//                 {...register("email")}
//                   type="email"
//                   id="email"
//                   placeholder="Write here..."
//                   className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                   aria-label="Email Address"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-xs">{errors.email.message}</p>
//                 )}
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                   {...register("password")}
//                     type={passwordVisible ? "text" : "password"}
//                     id="password"
//                     placeholder="Enter password"
//                     className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
//                     aria-label="Password"
//                   />
//                   {/* Password Visibility Toggle Icon */}
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-500"
//                     onClick={togglePasswordVisibility}
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

//               {/* Forgot Password Link */}
//               <div className="flex justify-end">
//                 <a
//                   href="#"
//                   className="text-xs font-medium text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
//                 >
//                   Forgot password?
//                 </a>
//               </div>

//               {/* Action Buttons */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 text-sm rounded-lg transition duration-150 ease-in-out shadow-md"
//               >
//                 Log in
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
//               Experience seamless collaboration where your goals meet our professional expertise.
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default LoginPage;