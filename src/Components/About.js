import AboutImg from '../assets/AboutImg.jpg';


export default function About(){
   const config ={
      line1:'Hi, My name is R Menaka. I am a Frontend Developer.I built beautiful Websites with React.js and Tailwind CSS',
      line2:'I am proficient in Frontend skills like React.js,Tailwind CSS,Redux,Axios and many more.',
      line3:'I am passionate about driving innovation in technology and creating impactful solutions.'
   }
    return <section id='about'className ='flex flex-col md:flex-row bg-secondary '>
      <div className =' md:w-1/2'>
         <img src={AboutImg}/>
      </div>
      <div className= 'md:w-1/2 flex justify-center'>
         <div className ='flex flex-col justify-center text-white'>
        <h1 className ='text-4xl  border-b-4  border-primary mb-5 w-[170px] font-bold '>About me</h1>
        <p className= 'pb-5'>{config.line1}</p>
        <p className='pb-5'>{config.line2}</p>
        <p className ='pb-5'>{config.line3}</p>
        </div>
      </div>
   
     </section>   
}