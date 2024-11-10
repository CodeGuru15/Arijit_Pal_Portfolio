import * as Yup from "Yup";
import { useFormik } from "formik";
import SocialLink from "./SocialLink";
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Loader from "./Loader";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name")
    .min(2, "Name must be at least 2 characters")
    .max(15, "Max 15 characters allowed"),
  email: Yup.string().required("Please enter your email"),
  phone: Yup.string()
    // .required("Please enter your phone number")
    .matches(/^[0-9]+$/, "Must be only digits")
    .length(10, "Should be exact 10 digits"),
  message: Yup.string()
    .required("Please enter your message")
    .max(2000, "Max 2000 characters allowed"),
});

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit: (values) => {
      // console.table(values);
      setIsLoading(true);
      emailjs
        .send(
          `${import.meta.env.VITE_EMAIL_SERVICEID}`,
          `${import.meta.env.VITE_EMAIL_TEMPLATEID}`,
          {
            from_name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message,
          },
          `${import.meta.env.VITE_EMAIL_PUBLICID}`
        )
        .then(
          (response) => {
            // console.log("SUCCESS!", response.status, response.text);
            if (response.status === 200) {
              setIsSuccess(true);
              setIsError(false);
              setIsLoading(false);
              setTimeout(() => {
                setIsSuccess(false);
              }, 2000);
            }
          },
          (err) => {
            console.log("FAILED...", err);
            if (err) {
              setIsError(true);
              isSuccess(false);
              setIsLoading(false);
              setTimeout(() => {
                setIsError(false);
              }, 2000);
            }
          }
        );
      formik.resetForm();
    },
  });
  return (
    <div className="flex flex-col items-center justify-around min-h-screen overflow-hidden bg-slate-950">
      <div className="flex flex-col items-center w-full my-auto sm:flex-row sm:justify-around">
        <div className="flex flex-col gap-1 sm:text-xl text-white/80">
          <p className="text-2xl font-semibold tracking-wider text-white sm:text-3xl">
            <span className="text-gold ">Contact</span> Info
          </p>
          <p className="flex flex-row items-end gap-2">
            <span className="text-gold ">
              <IoIosMail />
            </span>{" "}
            <span>arijitpal6111@gmail.com</span>
          </p>
          <p className="flex flex-row items-end gap-2">
            <span className="text-gold ">
              <MdPhone />
            </span>{" "}
            <span>+91 9051119351</span>
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="p-5 sm:w-1/2 md:w-1/3 ">
          <div className="p-2">
            <p className="text-xl font-semibold text-center text-white sm:text-2xl">
              Get In Touch
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <label></label>
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Your Name"
              className="px-4 bg-slate-800 placeholder-white/30 outline-none focus-within:outline-gold text-white/80 py-2 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <p className="h-4 text-xs text-red-500 sm:h-7 sm:text-base">
              {formik.errors.name && formik.touched.name
                ? formik.errors.name
                : null}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <label></label>
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Your Email"
              className="px-4 bg-slate-800 focus-within:outline-gold placeholder-white/30 text-white/80 py-2 rounded-md outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <p className="h-4 text-xs text-red-500 sm:h-7 sm:text-base">
              {formik.errors.email && formik.touched.email
                ? formik.errors.email
                : null}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <label></label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={formik.values.phone}
              placeholder="Your Phone"
              onChange={formik.handleChange}
              className="px-4  bg-slate-800 focus-within:outline-gold placeholder-white/30 text-white/80 py-2 rounded-md outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <p className="h-4 text-xs text-red-500 sm:h-7 sm:text-base">
              {formik.errors.phone && formik.touched.phone
                ? formik.errors.phone
                : null}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <label></label>
            <textarea
              name="message"
              id="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              placeholder="Your Message"
              className="h-20 px-4 py-2 rounded-md outline-none focus-within:outline-gold placeholder-white/30 bg-slate-800 text-white/80 "
            />
            <p className="h-4 text-xs text-red-500 sm:h-7 sm:text-base">
              {formik.errors.message && formik.touched.message
                ? formik.errors.message
                : null}
            </p>
          </div>
          <div className="flex justify-center ">
            {isLoading ? (
              <button className="flex justify-center w-full max-w-md p-2 border border-green-500 rounded-md">
                <Loader />
              </button>
            ) : null}

            {!isLoading && !isSuccess && !isError ? (
              <button
                type="submit"
                className="w-full max-w-md p-2 text-gold border border-gold rounded-md hover:duration-300 hover:bg-gold hover:text-slate-950"
              >
                SEND
              </button>
            ) : null}
            {isSuccess ? (
              <div className="flex justify-center w-full max-w-md p-2 text-white bg-green-600 rounded-md">
                <p className="">Sent Successfully!</p>
              </div>
            ) : null}
            {isError ? (
              <div className="flex justify-center w-full max-w-md p-2 text-white bg-red-600 rounded-md ">
                <p className="">Something Went Wrong!</p>
              </div>
            ) : null}
          </div>
        </form>
      </div>

      <SocialLink />
    </div>
  );
};

export default Contact;
