"use client"
import { useRouter } from "next/navigation";

const Card = () => {
    const router = useRouter();

  return (
    <div onClick={()=> router.replace('/')} className="border hover:cursor-pointer hover:bg-blue-300 rounded-lg border-gray-400 flex bg-white">
      <div className="border rounded-lg border-gray-500 h-20 w-20 m-5"></div>
      <div className="md:mr-20  gap-3 flex flex-col justify-center">
        <div className="text-lg font-semibold">Import Existing App</div>
        <div className="text-sm">
          Import An Existing Form Your Own Repository
        </div>
      </div>
    </div>
  );
};

export default Card;
