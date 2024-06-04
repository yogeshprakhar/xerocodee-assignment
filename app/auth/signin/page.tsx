import Divider from "@mui/material/Divider";
import SignInForm from "@/components/SignInForm";

const SignIn = () => {
  return (
    <div className="min-h-screen min-w-full overflow-hidden">
      <div className="flex justify-center items-center bg-gradient-to-t from-white to-blue-200 ">
        <div className="mt-32 md:mr-56 md:px-20 px-10 md:py-14 py-10 md:gap-16 flex flex-row justify-center items-center rounded-b-3xl rounded-r-3xl border border-gray-500">
          <SignInForm />
          <Divider
            className="hidden md:block mr-64"
            orientation="vertical"
            variant="middle"
            flexItem
          />
          <div className="hidden md:block h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
