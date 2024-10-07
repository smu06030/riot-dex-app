'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='w-full h-[100vh] flex justify-center items-center flex-col bg-black'>
      <h2 className='text-3xl text-[#ff5555] mb-4'>{error.message}</h2>
      <button
        onClick={
          () => reset()
        }
        className='bg-[#ff5555] text-white px-4 py-2 rounded-sm'
      >
        다시 시도
      </button>
    </div>
  )
}