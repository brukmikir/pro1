import React from 'react'
import {useState,useRef} from 'react'
import { motion } from 'framer-motion'
import SectionWrap from '../Hoc/SectionWrap'
// import { emailjs } from '@emailjs/browser'
import emailjs from "@emailjs/browser";

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'
import { div } from 'framer-motion/client'



//template_c1n7o95
//service_trbpktq
//1AWJ8ZYyY7we0wxA_

const Contact = () => {
  
  const formRef=useRef();
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:''
  })
  
const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({...form,[name]:value})
  }
  
const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_trbpktq','template_c1n7o95',{
      from_name:form.name,
      to_name:"Ankit",
      from_email:form.email,
      to_email:"",
      message:form.message},
      "1AWJ8ZYyY7we0wxA_"
      )
      .then(()=>{
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.")

        setForm({
          name:'',
          email:'',
          message:''
        })
      },(error)=>{
        setLoading(false);
        console.log(error);
        alert("Something went wrong")
      })
  }       

  const [loading,setLoading]=useState(false)
  return (
    <div className='flex flex-wrap xl:flex-row flex-col-reverse mt-20 xl:items-center max-xl:gap-10 justify-center'>
      <motion.div variants={slideIn("left", "tween",0.2, 1)}
                  className=' bg-[#020823] flex-[0.75] flex-col w-full min-w-0 gap-3 rounded-xl p-8'>
             <p className={`${styles.sectionSubText} mt-10`}>Get in Touch</p>
             <h1 className={`${styles.sectionHeadText}`}>Contact.</h1>

             <form action="" 
                   className='mt-12 flex flex-col'>
              <label className='flex flex-col'>
                <p className='text-white font-medium mb-4'>Your Name</p>
                <input 
                    type="text"
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder='what is Your Name'
                    className='bg-[#080f2f] py-4 px-6 rounded-lg'/>

              </label>
              <label className='flex flex-col'>
                <p className='text-white font-medium mb-4'>Your email</p>
                <input 
                    type="email"
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='what is Your email'
                    className='bg-[#080f2f] py-4 px-6 rounded-lg'/>

              </label>
              <label className='flex flex-col'>
                <p className='text-white font-medium mb-4'>Your Message</p>
                <textarea 
                    type="text"
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='what is Your Message'
                    className='bg-[#080f2f] py-4 px-6 rounded-lg'/>

              </label>
              <button className='mt-5 rounded-xl bg-[#070e30] w-fit py-3 px-8 shadow-md outline-none
                                font-bold shadow-blue-950'
                                type='submit'
                                onClick={handleSubmit}>
                {loading? "sending...":"send"}
              </button>
             </form>
      </motion.div>
      <motion.div
           variants={slideIn("right", "tween",0.2, 1)}
           className='xl:flex-1 xl:w-auto md:w-[550px]
                      h-[350px] flex items-center justify-center '>
            <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrap(Contact,"contact")