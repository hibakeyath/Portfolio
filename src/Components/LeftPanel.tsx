import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function LeftPanel(){
    return(

        <aside className="lg:w-2/5 lg:sticky lg:top-0 lg:h-screen lg:py-22 bg-[#0f172a] px-0">
           
                <h1 className="text-5xl font-bold text-slate-200">Fathima Hiba K </h1>
                <h2 className="mt-3 text-xl font-semibold text-slate-200">Frontend Developer</h2>
                <p className="mt-4 max-w-xs leading-relaxed text-slate-400">I build responsive web applications using React and Tailwind CSS.</p>

               <nav className="mt-16 flex flex-col gap-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 ">
                    <div className="transition-all duration-300 hover:text-cyan-400 hover:translate-x-2"><a href="#About">About</a></div>
                    <div className="transition-all duration-300 hover:text-cyan-400 hover:translate-x-2"><a href="#Experience">Experience</a></div>
                    <div className="transition-all duration-300 hover:text-cyan-400 hover:translate-x-2"><a href="#projects">Projects</a></div>
                </nav>

                <div className="mt-32 flex gap-6 text-2xl text-slate-400">
                    <div className=" hover:text-cyan-400 "><a href="https://www.linkedin.com/in/your-linkedin-username/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></div>
                    <div className=" hover:text-cyan-400 "><a href="https://github.com/hibakeyath" target="_blank" rel="noopener noreferrer"><FaGithub /></a></div>
                    <div className=" hover:text-cyan-400 "><a href="mailto:fahibakeyath@gmail.com"><MdEmail /></a></div></div>
            
           
        </aside>
    );
}