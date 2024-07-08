import useStore from '@/helpers/store'
import { FiArrowUpRight } from 'react-icons/fi'

export const IndexOverlay = () => {
  const router = useStore((s) => s.router)

  return (
    <main className='relative flex flex-col h-full'>
      <div className='flex flex-col items-center justify-between h-full py-36 md:py-32'>
        <span className='text-base font-light pointer-events-none md:text-xl md:relative md:self-start text-white/50 font-ubuntu whitespace-nowrap top-28'>
          <h1 className='flex-wrap inline text-2xl italic md:text-3xl text-white/60 font-fog'>
            As a seasoned Python AI, OCR, RAG, and LLM Backend Expert with extensive experience in React and Vue for frontend development, I bring a robust and diverse skill set to the table. With a solid foundation built over 4 years as an AI backend engineer, I have honed my capabilities in developing and integrating advanced technologies into practical, user-friendly applications.
            Key Skills:
            Backend Development: Expertise in Python, AI, OCR (Optical Character Recognition), RAG (Retrieval-Augmented Generation), and LLM (Large Language Models).
            Frontend Development: Proficiency in React and Vue, creating dynamic, responsive, and interactive user interfaces.
            Full-Stack Development: Seamless integration of backend and frontend technologies to build comprehensive, scalable, and efficient applications.
            Project Management: Leading projects from conception to deployment, ensuring alignment with client requirements and industry standards.
            Notable Projects:
            Mautic 5.0 Email Saving Issue: Successfully resolved critical email saving issues for registered customers, enhancing the functionality and reliability of the Mautic 5.0 instance.
            Forex MetaTrader Manager API Integration: Led the integration of the Forex MetaTrader Manager API into web and mobile applications, including developing a WordPress plugin and mobile apps (iOS and Android) with comprehensive features like account management, trading history, and communication tools.
            Mastodon Docker Instance Management: Managed a Mastodon Docker instance, troubleshooting and resolving significant access issues by addressing complex error logs and ensuring a smooth user experience.
            Career Objective:
            My goal is to leverage my expertise in AI, backend, and frontend development to drive innovation and deliver cutting-edge solutions that meet and exceed client expectations. I am passionate about continuous learning and adapting to new technologies, ensuring that my skills and knowledge remain at the forefront of industry advancements.
          </h1>
        </span>
        <div className='flex flex-col items-center pointer-events-none md:self-end md:items-start'>
          <h2 className='relative italic lg:text-8xl text-[10vw] text-white/60 font-fog right-5'>
            <span className='relative lg:text-9xl left-2 text-[11vw]'>AI</span>
            Python Backend and React Frontend &nbsp;
            <span className='lg:text-9xl text-[11vw]'>D</span>e
            <span className='font-light font-ubuntu'>v</span>e
            <span className='font-light font-ubuntu'>l</span>o
            <span className='font-light font-ubuntu'>p</span>er
          </h2>
          <div className='flex flex-col justify-around md:flex-row'>
            {/* <span className='text-base font-light uppercase md:text-xl text-white/50 font-ubuntu indent-10 whitespace-nowrap'>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I Design and Develop
              Websites
              <br />
              From 2D Web Elements to 3D Web <br /> Integrations.
            </span> */}
            {/* <button
              onClick={() => router.push('/projects')}
              className='relative flex items-center self-end text-2xl italic font-light leading-none tracking-wider transition-all pointer-events-auto text-white/70 right-5 bottom-2 font-fog hover-effect'
            >
              Projects
              <FiArrowUpRight />
            </button> */}
          </div>
        </div>
      </div>
      {/* <Socials /> */}
    </main>
  )
}

const Socials: React.FC = () => {
  return (
    <ul className='left-0 flex justify-center w-full mb-10 text-sm font-light tracking-widest md:absolute bottom-10 text-white/70 space-x-5 font-ubuntu [&>li]:flex [&>li]:items-center [&>li]:cursor-pointer [&>li]:transition-all md:justify-start md:mb-0'>
      <li className=' hover:text-white'>
        <a href='https://github.com/hyamero'>GITHUB</a>
        <FiArrowUpRight />
      </li>
      <li className=' hover:text-white'>
        <a href='https://www.instagram.com/hyamero/'>INSTAGRAM</a>
        <FiArrowUpRight />
      </li>
      <li className=' hover:text-white'>
        <a href='https://www.linkedin.com/in/daleban/'>LINKEDIN</a>
        <FiArrowUpRight />
      </li>
    </ul>
  )
}
