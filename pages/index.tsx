import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Typed from "typed.js";

function Index(props : { developer : any }){
	
	const { developer } = props;
	const data = developer.data.attributes;
	const studies = data.studies.data;
	const skills = data.skills.data;

	console.log(studies)

	useEffect(()=>{
		new Typed('#main-endpoint',{
			strings : [`<span className="text-orange">curl</span> -X 'GET' '${process.env.NEXT_PUBLIC_API}${developer.links.self}'`],
			typeSpeed : 40 
		})

		new Typed('#studies-endpoint',{
			strings : [`<span className="text-orange">curl</span> -X 'GET' '${process.env.NEXT_PUBLIC_API}${data.studies.links.self}'`],
			typeSpeed : 40 
		})
	},[]);

	return(
		<>
			<div className="endpoint-box mt-24 w-full bg-dark-gray shadow-lg">
				<div className="endpoint">
					<span id="main-endpoint" className="text-light-gray"></span>
				</div>
				<div className="endpoint-button">
					<a className="hover:text-orange/75 transition" target="_blank" href={`${process.env.NEXT_PUBLIC_API}${developer.links.self}`}>
						<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
					</a>
				</div>
			</div>
			<div className="terminal mt-5">
				<div className="terminal-header">
					<p>root@spyro:/About#</p>
				</div>
				<div id="profile-terminal" className="terminal-body ">
					<div className="profile flex sm:mr-5 sm:w-1/3 justify-center items-center">
						<div className="mt-3 mb-5 sm:mb-0 border-2 p-2 rounded-md border-light-gray">
							<img id="profile-pic" className="rounded-md " src="https://avatars.githubusercontent.com/u/84992671?s=400&u=fca8a8b1d3b563698dd2d8367d3137d1d6b61f46&v=4" />
						</div>
					</div>
					<fieldset className="terminal-box md:w-full">
						<legend>root@<span>spyro</span>:~#</legend>
						<div className="p-3 text-xs sm:text-base ">
							<p> {">"} <span>Name:</span> {data.name} {data.lastname} </p>
							<p> {">"} <span>Citizenship:</span> {data.citizenship}</p>
							<p> {">"} <span>Location:</span> {data.city}, {data.region} - {data.country}</p>
							<p> {">"} <span>Role:</span> {data.experience.data.role}</p>
							<p> {">"} <span>Experience:</span> +{data.experience.data.years} years of laboral experience</p>
							<div className="hidden lg:block">
								<p> {">"} <span>Frontend_techs: </span> [
								{
									skills.frontend.data.map((tech : any, index : number) => {
										return(
											<><span>"</span>{tech.data.name}<span>"</span>{index + 1 < skills.frontend.data.length ? "," : ""}</>
										)

									})
								}
								]
								</p>
								<p> {">"} <span>Backend_techs: </span> [
								{
									skills.backend.data.map((tech : any,index : number) => {
										return(
											<><span>"</span>{tech.data.name}<span>"</span>{index + 1 < skills.backend.data.length ? "," : ""}</>
										)
									})
								}
								]
								</p>
							</div>
						</div>
					</fieldset>
				</div>
			</div>

			<div className="terminal mt-12 mb-16">
				<div className="terminal-header">
					<p>root@spyro:/Education# </p>
				</div>
				<div className="terminal-body">
					<div className="endpoint-box ">
						<div className="endpoint">
							<span className="text-light-gray" id="studies-endpoint"></span>
						</div>
						<div className="endpoint-button">
							<a target="_blank" className="hover:text-orange/75 transition" href={`${process.env.NEXT_PUBLIC_API}${data.studies.links.self}`}><FontAwesomeIcon icon="fa-solid fa-up-right-from-square" /></a>
						</div>
					</div>
					<div className="md:grid md:grid-cols-2">
						{ 
							studies.map((study : any, index : number)=>{
								return(
									<fieldset key={study.title} className={`terminal-box ${index + 1 < studies.length ? "md:mr-3 mb-5 md:mb-0" : ""}`}>
										<legend>{study.title}</legend>
										<div className="p-3 text-xs sm:text-base">
											<p>{">"} <span>Institution:</span> { study.data.institution }</p>
											<p>{">"} <span>Location:</span> {study.data.ubication}</p>
											<p>{">"} <span>Graduation_year:</span> {study.data.graduation_year}</p>
										</div>
									</fieldset>
								)
							})
						}
					</div>
				</div>
			</div>
		</>
	)
}

export async function getServerSideProps(){
	let response = await fetch(`${process.env.NEXT_PUBLIC_API}/developers/62e35d9de62f85cf7553560a`, {
		method : "GET",
		headers : {
			"Content-Type" : "application/json"
		}
	});	

	let data = await response.json();

	return {
		props : {
			developer : data
		}
	}
}

export default Index;
