import SignUpForm from "@/components/SignUpForm";
import Divider from "@mui/material/Divider";

const SignUp = () => {
  return (
    <div className="min-h-screen min-w-full overflow-hidden">
      <div className="flex justify-center items-center bg-gradient-to-t from-white to-blue-200">
        <div className="mt-32 md:mr-56 md:px-20 p-10 mb-10 md:gap-16 flex flex-row justify-center items-center rounded-b-3xl rounded-r-3xl border border-gray-500">
          <SignUpForm />
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

export default SignUp;
