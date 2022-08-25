import { useEffect } from "react"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typed from "typed.js"
export default function Footer(){

	useEffect(()=>{
		new Typed('.footer-logo',{
			strings : ['$ root@<span>spyro</span>:/Footer#'],
			typeSpeed : 40
			})
	},[]);

	return(
		<>
			<footer className="bg-dark">
				<div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
					<div className="flex justify-center">
						<h1 className="text-lg md:text-xl font-bold footer-logo"></h1>
					</div>

					<p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
						consequuntur amet culpa cum itaque neque.
					</p>

					<nav className="mt-12" aria-labelledby="footer-navigation">
						<h2 className="sr-only" id="footer-navigation">Footer navigation</h2>

						<ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
							<li>
								<a className="transition hover:text-dark-text" href="/">
									About
								</a>
							</li>

							<li>
								<a className="transition hover:text-dark-text" href="/">
									CV	
								</a>
							</li>

							<li>
								<a className="transition hover:text-dark-text" href="/">
									API	
								</a>
							</li>

							<li>
								<a className="transition hover:text-dark-text" href="/">
									Repositories	
								</a>
							</li>

							<li>
								<a className="transition hover:text-dark-text" href="/">
									Projects
								</a>
							</li>
						</ul>
					</nav>

					<ul className="flex text-dark-text justify-center gap-6 mt-12 md:gap-8 text-2xl md:text-xl">
						<li>
							<a href="#"
								rel="noopener noreferrer"
								className="transition hover:text-orange"
							>
								<FontAwesomeIcon icon="fa-brands fa-facebook" />
							</a>
						</li>

						<li>
							<a
								href="#" 
								rel="noopener noreferrer"
								target="_blank"
								className="transition hover:text-orange"
							>
								<span className="sr-only">Instagram</span>
								<FontAwesomeIcon icon="fa-brands fa-instagram" />
							</a>
						</li>

						<li>
							<a
								href="/"
								rel="noopener noreferrer"
								target="_blank"
								className="transition hover:text-orange"
							>
								<span className="sr-only">Twitter</span>
								<FontAwesomeIcon icon="fa-brands fa-twitter" />
							</a>
						</li>

						<li>
							<a
								href="/"
								rel="noopener noreferrer"
								target="_blank"
								className="transition hover:text-orange"
							>
								<span className="sr-only">GitHub</span>
								<FontAwesomeIcon icon="fa-brands fa-github" />
							</a>
						</li>

						<li>
							<a
								href="/"
								rel="noopener noreferrer"
								target="_blank"
								className="transition hover:text-orange"
							>
								<span className="sr-only">Linkedin</span>
								<FontAwesomeIcon icon="fa-brands fa-linkedin" />
							</a>
						</li>
					</ul>
				</div>
			</footer>

		</>
	)
}
