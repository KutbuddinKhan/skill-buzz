import React, { useState } from 'react'
import { AiOutlineFullscreen, AiOutlineSetting } from 'react-icons/ai'

const PreferenceNav = () => {



    return (
        <div className="flex items-center justify-between bg-gray-900 h-11 w-full">
            <div className='flex items-center text-white'>
                <button className='flex cursor-pointer items-center rounded focus:outline-none bg-gray-500 text-whtie hover:bg-gray-600  px-2 py-1.5 font-medium'>
                    <div className='flex items-center px-1'>
                        <div className='text-xs text-label-2 dark:text-white'>JavaScript</div>
                    </div>
                </button>
            </div>


            <div className="flex items-center m-2">
                <button className='preferenceBtn group'>
                    <div className='h-4 w-4 text-white font-bold text-lg'>
                        <AiOutlineSetting />
                    </div>
                    <div className='preferenceBtn-tooltip'>Settings</div>
                </button>

                <button className='preferenceBtn group'>
                    <div className='h-4 w-4 text-white font-bold text-lg'>
                        <AiOutlineFullscreen />
                    </div>
                    <div className='preferenceBtn-tooltip'>Full Screen</div>
                </button>
            </div>
        </div>
    )
}

export default PreferenceNav
