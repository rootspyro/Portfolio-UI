import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typed from "typed.js";
import { useEffect, useState} from "react";

export default function Projects(props : any) { 

	const [ pType, setPType ] = useState("Personal");
	const { projects } = props;

	const data = projects.data;

	useEffect(()=>{
		new Typed("#ls-projects",{
			strings : [`ls -la`],
			typeSpeed : 120
		})
		new Typed("#projects-endpoint",{
			strings : [`<span>curl</span> -X 'GET' '${process.env.NEXT_PUBLIC_API}${projects.links.self}'`],
			typeSpeed : 40
		})
		new Typed("#personal-projects-endpoint",{
			strings : [`<span>curl</span> -X 'GET' '${process.env.NEXT_PUBLIC_API}${projects.links.self}/personal'`],
			typeSpeed : 40
		})
		new Typed("#work-projects-endpoint",{
			strings : [`<span>curl</span> -X 'GET' '${process.env.NEXT_PUBLIC_API}${projects.links.self}/work'`],
			typeSpeed : 40
		})
	},[]);

	return(
		<>
			<div className="endpoint-box mt-24 w-full bg-dark-gray shadow-lg">
				<div className="endpoint">
					<span id="projects-endpoint" className="text-light-gray"></span>
				</div>
				<div className="endpoint-button">
					<a className="hover:text-orange/75 transition" target="_blank" href={`${process.env.NEXT_PUBLIC_API}${projects.links.self}`}>
						<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
					</a>
				</div>
			</div>

			<div className="terminal mt-10 text-sm sm:text-base">
				<div className="terminal-header">
					<p>root@spyro:/Projects/Menu#</p>
				</div>
				<div className="terminal-body">
					<p>root@<span>spyro</span>:/Projects# <code id="ls-projects"></code></p>
					<fieldset className="terminal-box p-3 mt-3 text-xs sm:text-base">
						<legend>total <span>2</span></legend>
						<p>{">"} <span>drwxr-xr-x</span> 2 root root  4096 Sep 2  2022 <button onClick={()=>{setPType("Personal")}} className="text-orange font-bold hover:underline">Personal/</button></p>
						<p>{">"} <span>drwxr-xr-x</span> 2 root root  4096 Sep 2  2022 <button onClick={()=>{setPType("Work")}} className="text-orange font-bold hover:underline">Work/</button></p>
					</fieldset>
				</div>
			</div>

			<div className="terminal mt-12 mb-32 text-sm sm:text-base">
				<div className="terminal-header">
					<p>root@spyro:/Projects/{pType}#</p>
				</div>
				<div className="terminal-body">
					<div className={ pType == 'Personal' ? "block" : "hidden" }>
						<div className="endpoint-box ">
							<div className="endpoint">
								<span className="text-light-gray" id="personal-projects-endpoint"></span>
							</div>
							<div className="endpoint-button">
								<a target="_blank" className="hover:text-orange/75 transition" href={`${process.env.NEXT_PUBLIC_API}${projects.links.self}/personal`}><FontAwesomeIcon icon="fa-solid fa-up-right-from-square" /></a>
							</div>
						</div>
						<div>
							{
								data.personal.data.map((project:any)=>{
									return(
										<fieldset className="terminal-box p-3 mt-6 text-xs sm:text-base" key={project.data.name}>
											<legend>{project.data.name}</legend>
											<div className="p-3">
												<p>{">"} <span>Description:</span> {project.data.description}</p>

												<p className="mt-3">{">"} <span>Technologies:</span></p>
												<div className="flex flex-wrap mt-1">
													[
													<ul className="flex flex-wrap">
														{ project.data.technologies.data.map((tech : any, index : number) => {
															return(
																<li><span>"</span>{tech.data.name}<span>"</span>{ index + 1 == project.data.technologies.data.length ? "" : "," }</li>
															)
														}) 
														}
													</ul>
													]
												</div>
											</div>
											<div className="w-full">
												<ul className="block flex justify-end">
													<li>
														<a href={project.data.web_uri} target="_blank" className="hover:text-orange hover:underline transition">Web</a>
													</li>
													<li className="ml-4">
														<a href={project.data.web_uri} target="_blank" className="hover:text-orange hover:underline transition">Repository</a>
													</li>
												</ul>
											</div>
										</fieldset>
									)
								})
							}
						</div>
					</div>
					<div className={ pType == 'Work' ? "block" : "hidden" } >
						<div className="endpoint-box ">
							<div className="endpoint">
								<span className="text-light-gray" id="work-projects-endpoint"></span>
							</div>
							<div className="endpoint-button">
								<a target="_blank" className="hover:text-orange/75 transition" href={`${process.env.NEXT_PUBLIC_API}${projects.links.self}/work`}><FontAwesomeIcon icon="fa-solid fa-up-right-from-square" /></a>
							</div>
						</div>
						<div>
							{
								data.work.data.map((project:any)=>{
									return(
										<fieldset className="terminal-box p-3 mt-6" key={project.data.name}>
											<legend>{project.data.name}</legend>
											<div className="p-3">
												<p>{">"} <span>Company:</span> {project.data.company_name}</p>
												<p>{">"} <span>Description:</span> {project.data.description}</p>
												<p className="mt-3">{">"} <span>Technologies:</span></p>
												<div className="flex flex-wrap mt-1">
													[
													<ul className="flex flex-wrap">
														{ project.data.technologies.data.map((tech : any, index : number) => {
															return(
																<li><span>"</span>{tech.data.name}<span>"</span>{ index + 1 == project.data.technologies.data.length ? "" : "," }</li>
															)
														}) 
														}
													</ul>
													]
												</div>
											</div>
										</fieldset>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export async function getServerSideProps(){
	let response = await fetch(`${process.env.NEXT_PUBLIC_API}/developers/62e35d9de62f85cf7553560a/projects`, {
		method : "GET",
		headers : {
			"Content-Type" : "application/json"
		}
	});

	let data = await response.json();

	return { 
		props : {
			projects : data
		}
	}
}
