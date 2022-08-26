import { useEffect, useState } from "react"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer(){

	const [contact, setContact] = useState<any>({});
	useEffect(()=>{
		fetch(`${process.env.NEXT_PUBLIC_API}/developers/62e35d9de62f85cf7553560a/contact`, { 

		}).then( response => response.json() )
		.then( data =>{
			setContact(data.data);
			console.log(data);
		})
	},[]);

	return(
		<>
			<footer className="bg-dark">
				<div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
					<div className="flex justify-center">
						<h1 className="text-lg md:text-xl font-bold footer-logo"> $ root@<span>spyro</span>:/Footer#</h1>
					</div>

					<p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500">
					</p>

					<nav className="mt-12" aria-labelledby="footer-navigation">
						<h2 className="sr-only" id="footer-navigation">Footer navigation</h2>

						<ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
							<li>
								<Link href="#"><a className="transition hover:text-dark-text">
									About
								</a></Link>
							</li>

							<li>
								<a className="transition hover:text-dark-text" href="#">
									CV	
								</a>
							</li>

							<li>
								<a className="transition hover:text-dark-text" href={`${process.env.NEXT_PUBLIC_API}/docs`} target="_blank">
									API	
								</a>
							</li>

							<li>
								<a className="transition hover:text-dark-text" href={`${contact.github}?tab=repositories`} target="_blank" >
									Repositories	
								</a>
							</li>

							<li>
								<Link href="#"><a className="transition hover:text-dark-text">
									Projects
								</a></Link>
							</li>
						</ul>
					</nav>

					<ul className="flex text-dark-text justify-center gap-6 mt-12 md:gap-8 text-2xl md:text-xl">
						<li>
							<a
								href={contact.instagram}
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
								href={contact.twitter}
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
								href={contact.github}
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
								href={contact.linkedin}
								rel="noopener noreferrer"
								target="_blank"
								className="transition hover:text-orange"
							>
								<span className="sr-only">Linkedin</span>
								<FontAwesomeIcon icon="fa-brands fa-linkedin" />
							</a>
						</li>
					</ul>
				<div className="text-center text-xs mt-16 text-dark-text">
					<p>Spyridon Mihalopoulos &copy; 2022. All rights reserved.</p>
					<p className="mt-5">Free SVG Background by <a target="_blank" href="https://bgjar.com" className="text-orange">BGJar</a></p>
				</div>
				</div>
			</footer>

		</>
	)
}
