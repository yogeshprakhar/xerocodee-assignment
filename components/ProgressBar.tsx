import React from 'react'
import CircularWithValueLabel from './Bar';
import CardProgressBar from './CardProgressBar';

const ProgressBar = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl md:m-3 shadow-3xl border border-gray-300 ">
      <div className="flex flex-col items-center md:m-5">
        <h1 className="font-bold text-black text-lg">Your Progress</h1>
        <p className="mb-4 text-gray-400 text-sm">towards XeroCodee</p>
        <CircularWithValueLabel />
        <div className='mt-6 text-xs rounded-full border border-gray-300 px-4 py-1'>View Details</div>
      </div>
      <div className='md:m-5 text-gray-600 text-xs flex flex-col gap-2 items-start'>
        <h1>Step 1</h1>
        <CardProgressBar
          img="/amazon.svg"
          color="orange"
          title="AWS"
          status="Complete"
        />
        <h1 className='mt-3'>Step 2</h1>
        <CardProgressBar
          img="/gitlab.svg"
          color="pink"
          title="Gitlab"
          status="Complete"
        />
        <h1 className='mt-3'>Step 3</h1>
        <CardProgressBar
          img="/mongodb.svg"
          color="lime"
          title="MongoDB"
          status="Pending"
        />
      </div>
    </div>
  );
}

export default ProgressBar
