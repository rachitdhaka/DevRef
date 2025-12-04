import { Sun } from "@/public/svg/Sun"
import { Moon} from "@/public/svg/Moon"
import { ModeToggle } from "./ModeToggle"
export const Navbar = () => {

    const navlinks = [
        { name: "Home", href: "/" },
        { name: "Components", href: "/Main" },
        { name: "Blogs", href: "/Blogs" }
       
    ]
  return (
    <div className="relative z-10  max-w-5xl mt-2 mx-auto    px-4 py-2 flex  justify-evenly items-center rounded-lg ">
        
        <div>
            <span>Logo</span>
        </div>
       <div className="flex gap-8">
         {navlinks.map((link, index) => (
            <a key={index} href={link.href} >
                {link.name}
            </a>
        ))}
       </div>
        <div className="">
            <ModeToggle/>
        </div>
        
        
    </div>
  )
}