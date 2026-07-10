import LeftPanel from "./Components/LeftPanel";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Project from "./Components/Project";

export default function App(){
    return(
        <div className="min-h-screen bg-[#0f172a] text-slate-300">
            <div className="mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:gap-20">
                <LeftPanel />

                <main className="lg:w-3/5 lg:py-24">
                    <About />
                    <Experience/>
                    <Project/>
                </main>
            </div>
        </div>
        
    );
}