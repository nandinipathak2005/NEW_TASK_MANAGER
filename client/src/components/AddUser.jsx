// // // import { Dialog } from "@headlessui/react";
// // // import React from "react";
// // // import { useForm } from "react-hook-form";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { toast } from "sonner";
// // // import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
// // // import { useUpdateUserMutation } from "../redux/slices/api/userApiSlice";
// // // import { setCredentials } from "../redux/slices/authSlice";
// // // import { Button, Loading, ModalWrapper, Textbox } from "./";

// // // const AddUser = ({ open, setOpen, userData }) => {
// // //   let defaultValues = userData ?? {};
// // //   const { user } = useSelector((state) => state.auth);

// // //   const {
// // //     register,
// // //     handleSubmit,
// // //     formState: { errors },
// // //   } = useForm({ defaultValues });

// // //   const dispatch = useDispatch();

// // //   const [addNewUser, { isLoading }] = useRegisterMutation();
// // //   const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

// // //   const handleOnSubmit = async (data) => {
// // //     try {
// // //       if (userData) {
// // //         const res = await updateUser(data).unwrap();
// // //         toast.success(res?.message);
// // //         if (userData?._id === user?._id) {
// // //           dispatch(setCredentials({ ...res?.user }));
// // //         }
// // //       } else {
// // //         const res = await addNewUser({
// // //           ...data,
// // //           password: data?.email,
// // //         }).unwrap();
// // //         toast.success("New User added successfully");
// // //       }

// // //       setTimeout(() => {
// // //         setOpen(false);
// // //       }, 1500);
// // //     } catch (err) {
// // //       console.log(err);
// // //       toast.error(err?.data?.message || err.error);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <ModalWrapper open={open} setOpen={setOpen}>
// // //         <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
// // //           <Dialog.Title
// // //             as='h2'
// // //             className='text-base font-bold leading-6 text-gray-900 mb-4'
// // //           >
// // //             {userData ? "UPDATE PROFILE" : "ADD NEW USER"}
// // //           </Dialog.Title>
// // //           <div className='mt-2 flex flex-col gap-6'>
// // //             <Textbox
// // //               placeholder='Full name'
// // //               type='text'
// // //               name='name'
// // //               label='Full Name'
// // //               className='w-full rounded'
// // //               register={register("name", {
// // //                 required: "Full name is required!",
// // //               })}
// // //               error={errors.name ? errors.name.message : ""}
// // //             />
// // //             <Textbox
// // //               placeholder='Title'
// // //               type='text'
// // //               name='title'
// // //               label='Title'
// // //               className='w-full rounded'
// // //               register={register("title", {
// // //                 required: "Title is required!",
// // //               })}
// // //               error={errors.title ? errors.title.message : ""}
// // //             />
// // //             <Textbox
// // //               placeholder='Email Address'
// // //               type='email'
// // //               name='email'
// // //               label='Email Address'
// // //               className='w-full rounded'
// // //               register={register("email", {
// // //                 required: "Email Address is required!",
// // //               })}
// // //               error={errors.email ? errors.email.message : ""}
// // //             />

// // //             <Textbox
// // //               placeholder='Role'
// // //               type='text'
// // //               name='role'
// // //               label='Role'
// // //               className='w-full rounded'
// // //               register={register("role", {
// // //                 required: "User role is required!",
// // //               })}
// // //               error={errors.role ? errors.role.message : ""}
// // //             />
// // //           </div>

// // //           {isLoading || isUpdating ? (
// // //             <div className='py-5'>
// // //               <Loading />
// // //             </div>
// // //           ) : (
// // //             <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
// // //               <Button
// // //                 type='submit'
// // //                 className='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto'
// // //                 label='Submit'
// // //               />

// // //               <Button
// // //                 type='button'
// // //                 className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
// // //                 onClick={() => setOpen(false)}
// // //                 label='Cancel'
// // //               />
// // //             </div>
// // //           )}
// // //         </form>
// // //       </ModalWrapper>
// // //     </>
// // //   );
// // // };

// // // export default AddUser;
// // import { Dialog } from "@headlessui/react";
// // import React from "react";
// // import { useForm } from "react-hook-form";
// // import { useDispatch, useSelector } from "react-redux";
// // import { toast } from "sonner";
// // import { useUpdateUserMutation, useAddUserMutation } from "../redux/slices/api/userApiSlice";
// // import { setCredentials } from "../redux/slices/authSlice";
// // import { Button, Loading, ModalWrapper, Textbox } from "./";

// // const AddUser = ({ open, setOpen, userData }) => {
// //   let defaultValues = userData ?? {};
// //   const { user } = useSelector((state) => state.auth);

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm({ defaultValues });

// //   const dispatch = useDispatch();

// //   // 🔥 Use addUser mutation (NOT register)
// //   const [addUser, { isLoading }] = useAddUserMutation();
// //   const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

// //   const handleOnSubmit = async (data) => {
// //     try {
// //       if (userData) {
// //         const res = await updateUser(data).unwrap();
// //         toast.success(res?.message);

// //         if (userData?._id === user?._id) {
// //           dispatch(setCredentials({ ...res?.user }));
// //         }
// //       } else {
// //         const res = await addUser({
// //           ...data,
// //           password: data?.email,
// //         }).unwrap();

// //         toast.success("New User added successfully");
// //       }

// //       setTimeout(() => {
// //         setOpen(false);
// //       }, 1500);
// //     } catch (err) {
// //       console.log(err);
// //       toast.error(err?.data?.message || err.error);
// //     }
// //   };

// //   return (
// //     <ModalWrapper open={open} setOpen={setOpen}>
// //       <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
// //         <Dialog.Title
// //           as='h2'
// //           className='text-base font-bold leading-6 text-gray-900 mb-4'
// //         >
// //           {userData ? "UPDATE PROFILE" : "ADD NEW USER"}
// //         </Dialog.Title>

// //         <div className='mt-2 flex flex-col gap-6'>
// //           <Textbox
// //             placeholder='Full name'
// //             type='text'
// //             name='name'
// //             label='Full Name'
// //             className='w-full rounded'
// //             register={register("name", {
// //               required: "Full name is required!",
// //             })}
// //             error={errors.name ? errors.name.message : ""}
// //           />

// //           <Textbox
// //             placeholder='Title'
// //             type='text'
// //             name='title'
// //             label='Title'
// //             className='w-full rounded'
// //             register={register("title", {
// //               required: "Title is required!",
// //             })}
// //             error={errors.title ? errors.title.message : ""}
// //           />

// //           <Textbox
// //             placeholder='Email Address'
// //             type='email'
// //             name='email'
// //             label='Email Address'
// //             className='w-full rounded'
// //             register={register("email", {
// //               required: "Email Address is required!",
// //             })}
// //             error={errors.email ? errors.email.message : ""}
// //           />

// //           <Textbox
// //             placeholder='Role'
// //             type='text'
// //             name='role'
// //             label='Role'
// //             className='w-full rounded'
// //             register={register("role", {
// //               required: "User role is required!",
// //             })}
// //             error={errors.role ? errors.role.message : ""}
// //           />
// //         </div>

// //         {isLoading || isUpdating ? (
// //           <div className='py-5'>
// //             <Loading />
// //           </div>
// //         ) : (
// //           <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
// //             <Button
// //               type='submit'
// //               className='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto'
// //               label='Submit'
// //             />

// //             <Button
// //               type='button'
// //               className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
// //               onClick={() => setOpen(false)}
// //               label='Cancel'
// //             />
// //           </div>
// //         )}
// //       </form>
// //     </ModalWrapper>
// //   );
// // };

// // export default AddUser;
// import { Dialog } from "@headlessui/react";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "sonner";
// import { useUpdateUserMutation, useAddUserMutation } from "../redux/slices/api/userApiSlice";
// import { setCredentials } from "../redux/slices/authSlice";
// import { Button, Loading, ModalWrapper, Textbox } from "./";

// const AddUser = ({ open, setOpen, userData }) => {
//   let defaultValues = userData ?? {};
//   const { user } = useSelector((state) => state.auth);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ defaultValues });

//   const dispatch = useDispatch();

//   const [addNewUser, { isLoading }] = useAddUserMutation();
//   const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

//   const handleOnSubmit = async (data) => {
//     try {
//       if (userData) {
//         const res = await updateUser(data).unwrap();
//         toast.success(res?.message);

//         if (userData?._id === user?._id) {
//           dispatch(setCredentials({ ...res?.user }));
//         }
//       } else {
//         const res = await addNewUser({
//           ...data,
//           password: data?.email,
//         }).unwrap();

//         toast.success("New User added successfully");
//       }

//       setTimeout(() => {
//         setOpen(false);
//       }, 1500);
//     } catch (err) {
//       console.log(err);
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   return (
//     <>
//       <ModalWrapper open={open} setOpen={setOpen}>
//         <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
//           <Dialog.Title
//             as='h2'
//             className='text-base font-bold leading-6 text-gray-900 mb-4'
//           >
//             {userData ? "UPDATE PROFILE" : "ADD NEW USER"}
//           </Dialog.Title>

//           <div className='mt-2 flex flex-col gap-6'>
//             <Textbox
//               placeholder='Full name'
//               type='text'
//               name='name'
//               label='Full Name'
//               className='w-full rounded'
//               register={register("name", {
//                 required: "Full name is required!",
//               })}
//               error={errors.name ? errors.name.message : ""}
//             />

//             <Textbox
//               placeholder='Title'
//               type='text'
//               name='title'
//               label='Title'
//               className='w-full rounded'
//               register={register("title", {
//                 required: "Title is required!",
//               })}
//               error={errors.title ? errors.title.message : ""}
//             />

//             <Textbox
//               placeholder='Email Address'
//               type='email'
//               name='email'
//               label='Email Address'
//               className='w-full rounded'
//               register={register("email", {
//                 required: "Email Address is required!",
//               })}
//               error={errors.email ? errors.email.message : ""}
//             />

//             <Textbox
//               placeholder='Role'
//               type='text'
//               name='role'
//               label='Role'
//               className='w-full rounded'
//               register={register("role", {
//                 required: "User role is required!",
//               })}
//               error={errors.role ? errors.role.message : ""}
//             />
//           </div>

//           {isLoading || isUpdating ? (
//             <div className='py-5'>
//               <Loading />
//             </div>
//           ) : (
//             <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
//               <Button
//                 type='submit'
//                 className='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto'
//                 label='Submit'
//               />

//               <Button
//                 type='button'
//                 className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
//                 onClick={() => setOpen(false)}
//                 label='Cancel'
//               />
//             </div>
//           )}
//         </form>
//       </ModalWrapper>
//     </>
//   );
// };

// export default AddUser;
import { Dialog } from "@headlessui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAddUserMutation } from "../redux/slices/api/userApiSlice";
import { Button, Loading, ModalWrapper, Textbox } from "./";

const AddUser = ({ open, setOpen, refetchTeam }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addNewUser, { isLoading }] = useAddUserMutation();

  const handleOnSubmit = async (data) => {
    try {
      await addNewUser({
        ...data,
        password: data.email,
      }).unwrap();

      toast.success("New User added successfully");

      refetchTeam(); // important to refresh team list
      setOpen(false);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Dialog.Title as="h2">
          ADD NEW USER
        </Dialog.Title>

        <Textbox
          placeholder="Full name"
          type="text"
          label="Full Name"
          register={register("name", { required: "Full name is required!" })}
          error={errors.name?.message}
        />

        <Textbox
          placeholder="Title"
          type="text"
          label="Title"
          register={register("title", { required: "Title is required!" })}
          error={errors.title?.message}
        />

        <Textbox
          placeholder="Email Address"
          type="email"
          label="Email Address"
          register={register("email", { required: "Email Address is required!" })}
          error={errors.email?.message}
        />

        <Textbox
          placeholder="Role"
          type="text"
          label="Role"
          register={register("role", { required: "User role is required!" })}
          error={errors.role?.message}
        />

        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex gap-2">
            <Button type="submit" label="Submit" />
            <Button type="button" onClick={() => setOpen(false)} label="Cancel" />
          </div>
        )}
      </form>
    </ModalWrapper>
  );
};

export default AddUser;
