import girlcode from '../assets/girl code.jpg'
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config ={
        subtitle: 'I am a Frontend Developer'
    }

    return <section id='hero' className ='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className=' md:w-1/2 flex flex-col'>
        <h1 className= 'w-1/2 text-white text-6xl font-hero-font'> Hi, <br/>Im <span className='text-black'>R </span>Menaka 
        <p className='text-2xl'>I am a Frontend Developer</p>
        </h1>
        <div className ='flex py-10'>
            <a href='#' className ='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href='#' className='pr-5 hover:text-white'><AiOutlineGithub size ={40}/></a>
            <a href='#' className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
        </div>
        </div>
        <img className ='md:w-1/3 'src={girlcode} />
    </section>
}