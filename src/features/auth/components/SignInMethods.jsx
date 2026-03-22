
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { FaApple } from "react-icons/fa6";
import SignUpMethods from "./SignUpMethods";
import { memo } from "react";

const SignInMethods = memo( () => {
  return (
    <>
        <SignUpMethods method="Google" icon={FcGoogle}>Sign In with Google</SignUpMethods>
      <SignUpMethods method="Github" icon={GrGithub}>Sign In with Github</SignUpMethods>
      <SignUpMethods method="Email" icon={AiOutlineMail}>Sign In with Email</SignUpMethods>
      <SignUpMethods method="Apple" icon={FaApple}>Sign In with Apple</SignUpMethods>
    </>
  )
}
)
export default SignInMethods