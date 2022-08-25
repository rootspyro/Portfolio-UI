import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function MobileMenu(props : any){
  const {setMenu} = props;
	return(
    <div className="flex flex-col justify-between h-screen bg-white border-r">
      <div className="px-4 py-6">
        <span className="block w-32 h-10 bg-gray-200 rounded-lg"></span>

        <nav className="flex flex-col mt-6 space-y-1">
          <Link href="/"><a onClick={()=> setMenu(false)}
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
          >
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <span className="ml-3 text-sm font-medium"> About </span>
          </a></Link>

          <Link href="#"><a onClick={()=> setMenu(false)}
            className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <FontAwesomeIcon icon="fa-solid fa-house-laptop" />
            <span className="ml-3 text-sm font-medium"> Experience </span>
          </a></Link>

          <Link href="#"><a onClick={()=> setMenu(false)}
            className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <FontAwesomeIcon icon="fa-solid fa-briefcase" />
            <span className="ml-3 text-sm font-medium"> Projects </span>
          </a></Link>
        
          <Link href="#"><a onClick={()=> setMenu(false)}
            className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <FontAwesomeIcon icon="fa-solid fa-laptop-code" />
            <span className="ml-3 text-sm font-medium"> Skills </span>
          </a></Link>

          <a onClick={()=> setMenu(false)} href={`${process.env.NEXT_PUBLIC_REPO}`} target="_blank"
            className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
            <span className="ml-3 text-sm font-medium"> Repository </span>
          </a>

          <a onClick={()=> setMenu(false)} href={`${process.env.NEXT_PUBLIC_API}/docs`} target="_blank"
            className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <FontAwesomeIcon icon="fa-solid fa-server" />
            <span className="ml-3 text-sm font-medium"> API </span>
          </a>
        </nav>
      </div>
      <div className="fixed inset-x-0 bottom-0 border-t border-gray-100">
        <Link href="#"><a onClick={()=>setMenu(false)} className="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/84992671?s=400&u=fca8a8b1d3b563698dd2d8367d3137d1d6b61f46&v=4"
            alt="Spyridon Mihalopoulos"
          />

          <div className="ml-1.5">
            <p className="text-xs">
              <strong className="block font-medium">Spyridon Mihalopoulos</strong>
              <span>{"<root.spyro@gmail.com>"}</span>
            </p>
          </div>
        </a></Link>
      </div>
    </div>
	)
}
