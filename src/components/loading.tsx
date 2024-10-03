import React from 'react'
import {Progress} from "@nextui-org/progress";

const Loading = ({isLoading}) => {
    if(isLoading) {
        return (
            <div>Please wait, processing...</div>
        );
    }
  return (
    <div>
      
    </div>
  );
}

export default Loading
