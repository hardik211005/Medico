import { Loader } from 'lucide-react'
import React from 'react'
import { WordRotate } from './WordRotateComp'

const WelcomeLoader = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center flex-col gap-6 bg-white'>
      <Loader
        size={50}
        strokeWidth={2.5}
        className='animate-spin text-green-900'
      />
      <WordRotate
        duration={1500}
        words={['Welcome to medico', 'Thanks for being patient']}
      />
    </div>
  )
}

export default WelcomeLoader
