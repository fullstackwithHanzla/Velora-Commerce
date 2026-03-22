import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { forgotPassSchema } from './ForgotpassSchema'
import LoadingCircle from '../../../shared/components/LoadingCircle'
import LoadingCircleMini from '../../../shared/components/LoadingCircleMini'
import { useToast } from '../../../layouts/providers/ToastProvider'

const Forgotpassword = () => {
    const {register , handleSubmit , formState} = useForm({
        resolver: zodResolver(forgotPassSchema),
        criteriaMode : "all",
        mode : "onSubmit",
        reValidateMode : "onChange",
    })

    const {showToast} = useToast()

    
    

    const onSubmit = async (data) => {
        try {
            await new Promise((res) => setTimeout(res, 900))
            showToast({
                message: "Email has sended Successfully",
                type: "success"
            })
        } catch (error) {
            showToast({
                message: "An error has occurred. Please try again!",
                type: "error"
            })
        }
    }

    


    const emailErrors =  formState.errors?.Email?.types ? Object.values(formState.errors?.Email.types).flat() : []
    
    return (
        <div className=' my-5 min-w-full w-full px-5 flex items-center py-10 justify-center'>
            <form onSubmit={handleSubmit(onSubmit)}
                className='shadow-md  w-full md:w-[60%] border-gray-600 rounded-md
         bg-white flex flex-col gap-8 px-5 py-8
         items-center
         '>
                <div>
                    <h3 className='text-[16px] md:text-lg font-medium text-center'>Forgot Password</h3>
                    <p className='text-[14px] text-center text-gray-600'>Enter Your Email below</p>
                </div>

                <div className='flex flex-col w-full gap-1 '>
                    <span className='text-gray-600 text-[14px]'>Email</span>
                    <input {...register("Email")} type="text" className='border text-[14px] grow rounded-md p-2 border-gray-600/20 focus:outline-(--accent-secondary)' placeholder='Enter Your Email'/>
                    <div className=' mx-8 my-2'>
                        {emailErrors.map((err, index) => (
                            <li className='text-red-600 list-disc text-[13px]' key={index}>{err}</li>
                        ))}
                        </div>
                </div>

                <div className='flex w-full'>
                    <button type='submit' disabled={formState.isSubmitting} className='grow border w-full flex items-center gap-2 justify-center transition-colors duration-300 ease-in-out rounded-md py-2 text-[14px] text-white bg-(--accent-primary) hover:bg-(--accent-secondary)'>
                        {formState.isSubmitting ? "Sending Email" :"Send Email"}
                        {formState.isSubmitting && <LoadingCircleMini/>}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Forgotpassword