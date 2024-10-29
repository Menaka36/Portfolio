import Web1 from '../assets/Web1.jpg'
import web2 from '../assets/web2.jpg'


export default function Projects(){
    
   const config ={
      projects : [
         {
            image:'',
            description:'',
            link:''
         },
         {
            image:'',
            description:'',
            link:''
         }

      ]
   }

    return <section id='projects'className="flex  flex-col px-5 py-20 justify-center bg-primary text-white">
        <div className ="w-full">
          <div className="flex flex-col px-10 py-5">
           <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
            <p>These are the some of my projects.I have built these with tailwind css and react.js check themout.</p>
           </div>
        </div>
        <div className ="w-full">
         <div className ='flex flex-col md:flex-row px-10 gap-10'>
            <div className ='relative'>
               <img className ='h-[300px] w-[600px]'src={Web1}/>
               <div className ='project-desc'>
                <p className ="text-center py-8 px-5 ">A Google Clone built Using Tailwind CSS and React js.</p>
               </div>
            </div>
            <div className='relative'>
                 <img className = 'h-[300px] w-[600px]'src={web2}/>
                 <div className='project-desc'>
                    <p className ='text-center py-8 px-5' >
                    Tidal Music cloning website built with Tailwind css and Html.
                    </p>
                 </div>
            </div>
            </div>
     </div>
    </section>
}