import React from 'react'

interface LoadingProps {
  isLoading: boolean;
}


const Loading: React.FC<LoadingProps> = ({isLoading}) => {
    if(isLoading) {
        return (
            <div className="text-xl">Please wait, processing...</div>
        );
    }
  return (
    <div>
      
    </div>
  );
}

export default Loading
