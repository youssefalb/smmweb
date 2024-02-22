import React from 'react';

interface CustomCheckboxProps {
    checked: boolean;
    onChange: () => void; // Adjust if you need to pass event or other parameters
  }
  
  const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange }) => {
    return (
      <div className="flex items-center">
        <div 
          onClick={onChange} // Use the div as the clickable element
          className={`cursor-pointer w-6 h-6 rounded-full border-2 flex items-center justify-center ${checked ? 'bg-green-500 border-green-500' : 'border-green-500'}`}
        >
          {checked && (
            <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          )}
        </div>
      </div>
    );
  };

  export default CustomCheckbox;