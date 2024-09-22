import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer';
import { useForm } from "react-hook-form"

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <Navbar/>
      <div className='min-h-screen'>
        <div className="flex items-center justify-center p-12 mt-10">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("email", { required: true })}
              />
              <br/>
                {errors.email && <span>This field is required</span>}
            </div>
            <div className="mb-5">
            <label
              htmlFor="mobile"
              className="mb-3 block text-base font-medium text-white"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Enter your 10-digit mobile number"
              pattern="[0-9]{10}"
              maxLength="10"
              minLength="10"
              inputMode="numeric"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onInput={(e) => e.target.value = e.target.value.replace(/\D/, '')}
              {...register("mobile", { required: true })}
            />
            <br/>
            {errors.mobile && <span>This field is required</span>}
          </div>

            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-white"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("text", { required: true })}
              />
              <br />
              {errors.text && <span>This field is required</span>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-white"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#707684] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("message", { required: true })}
              />
            </div>
            <div>
              <button
                className="hover:shadow-form rounded-md bg-pink-500 hover:bg-pink-800 py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div></div>
      <Footer/>
    </>
  );
}

export default Contact;
