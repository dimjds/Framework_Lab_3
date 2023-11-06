import React from "react";
import {BsCheck} from "react-icons/bs";
import cn from 'classnames'

const Check = ({isCompleted}) => {
    return (
        <div className={cn('border-2 rounded-lg border-pink-400 w-5 h-5 mr-2 flex items-center justify-center', {
            'bg-pink-400 transition ease-in': isCompleted
        })}>
            {
                isCompleted &&
                <BsCheck size={24} className='text-gray-900 transtition ease-in'/>
            }
        </div>
    )
}

export default Check