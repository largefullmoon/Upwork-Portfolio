import useStore from '@/helpers/store'
import { FiArrowUpRight } from 'react-icons/fi'

export const IndexOverlay = () => {
  const router = useStore((s) => s.router)

  return (
    <main className='relative flex flex-col h-full'>
      <div className='flex flex-col items-center justify-between h-full py-10'>
        <span className='text-base font-light pointer-events-none text-wrap md:text-xl md:relative md:self-start text-white/50 font-ubuntu mt-[30%]'>
          <h5 className='inline text-2xl italic md:text-3xl text-white/60 font-fog'>
            As a seasoned Python AI, OCR, RAG, and LLM Backend Expert with extensive experience in React and Vue for frontend development, I bring a robust and diverse skill set to the table.
            <br /><br />With a solid foundation built over 8 years as an AI backend engineer, I have honed my capabilities in developing and integrating advanced technologies into practical, user-friendly applications.
          </h5>
        </span>
      </div>
    </main>
  )
}

