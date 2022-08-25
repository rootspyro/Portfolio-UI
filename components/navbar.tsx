import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Navbar(){
	return(
	<header className="bg-dark-gray w-full fixed">
  <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="md:flex md:items-center md:gap-12">
        <Link href="/"><a className="block">
          <span className="sr-only">Home</span>
          <h3 className="md:text-lg font-bold">$ root@<span>spyro</span>:~#</h3>
        </a></Link>
      </div>

      <div className="hidden md:block">
        <nav aria-labelledby="header-navigation">
          <h2 className="sr-only" id="header-navigation">Header navigation</h2>

          <ul className="flex items-center gap-6 text-md">
            <li>
              <Link href="#">
                <a className="text-light-gray transition hover:text-orange/75">
                  <span>/</span>About
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="text-light-gray transition hover:text-orange/75">
                  <span>/</span>Experience
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="text-light-gray transition hover:text-orange/75">
                  <span>/</span>Skills
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="text-light-gray transition hover:text-orange/75">
                  <span>/</span>Projects
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:gap-4 sm:flex hidden">
          <a className="px-2 py-2.5 text-md" target="_blank" href={`${process.env.NEXT_PUBLIC_REPO}`}>
            Repository <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <div className="hidden sm:flex">
            <a className="px-2 py-2.5 text-md" target="_blank" href={`${process.env.NEXT_PUBLIC_API}/docs`} >
              API <FontAwesomeIcon icon="fa-solid fa-server" />
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            className="p-2 transition text-xl hover:text-orange/75"
          >
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
	)
}
