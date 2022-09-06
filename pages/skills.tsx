import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typed from "typed.js";
import { useEffect, useState} from "react";

function SkillBox( props : any ) { 
	const { tech, tLength, index } = props;

	function displayLevel(level : string) {
		switch(level) {
			case 'low':
				return "###"
			case 'medium':
				return "#####"
			case 'good':
				return "########"
			case 'perfect':
				return "##########"
			default:
				break;
		}
	}

	return(
			<fieldset 
				key={tech.data.name} 
				className={
				`terminal-box p-3 
				${index > 0 ? "mt-8" : "mt-0"}
				${ tLength % 2 != 0 && index + 1 == tLength ? "col-span-2" : "" }
				md:mt-0 text-xs sm:text-base
				`}
			>
				<legend>{tech.data.name}</legend>
				<div>
					<p>{">"} <span>Exp_years:</span> {tech.data.years} </p>
					<p>{">"} <span>Level:</span> {displayLevel(tech.data.level)} <span>[</span>{tech.data.level}<span>]</span></p>
				</div>
			</fieldset>
	)
}

export default function Skills(props : any) { 

	const { skills } = props;
	const data = skills.data;


	useEffect(()=>{
		new Typed("#skills-endpoint",{
			strings : [`<span>curl</span> -X 'GET' '${process.env.NEXT_PUBLIC_API}${skills.links.self}'`],
			typeSpeed : 40
		})
		new Typed("#skills-backend-endpoint",{
			strings : [`<span>curl</span> -X 'GET' '${process.env.NEXT_PUBLIC_API}${skills.data.backend.links.self}'`],
			typeSpeed : 40
		})
		new Typed("#skills-frontend-endpoint",{
			strings : [`<span>curl</span> -X 'GET' '${process.env.NEXT_PUBLIC_API}${skills.data.frontend.links.self}'`],
			typeSpeed : 40
		})
	},[])

	return(
		<>
			<div className="endpoint-box mt-24 w-full bg-dark-gray shadow-lg">
				<div className="endpoint">
					<span id="skills-endpoint" className="text-light-gray"></span>
				</div>
				<div className="endpoint-button">
					<a className="hover:text-orange/75 transition" target="_blank" href={`${process.env.NEXT_PUBLIC_API}${skills.links.self}`}>
						<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
					</a>
				</div>
			</div>
			<div className="terminal mt-12">
				<div className="terminal-header text-sm sm:text-base">
					<p>root@spyro:/Skills/Backend</p>
				</div>
				<div className="terminal-body p-3">

					<div className="endpoint-box ">
						<div className="endpoint">
							<span className="text-light-gray" id="skills-backend-endpoint"></span>
						</div>
						<div className="endpoint-button">
							<a target="_blank" className="hover:text-orange/75 transition" href={`${process.env.NEXT_PUBLIC_API}${skills.data.backend.links.self}`}><FontAwesomeIcon icon="fa-solid fa-up-right-from-square" /></a>
						</div>
					</div>

					<div className="md:grid sm:grid-cols-2 gap-8">
						{
							data.backend.data.map((tech : any , index : number) => {
								let tLength : number = data.backend.data.length;
								return <SkillBox tLength={tLength} tech={tech} index={index} />
							})
						}
					</div>
				</div>
			</div>


			<div className="terminal mt-12 mb-24">
				<div className="terminal-header text-sm sm:text-base">
					<p>root@spyro:/Skills/Frontend</p>
				</div>
				<div className="text-body p-3">

					<div className="endpoint-box ">
						<div className="endpoint">
							<span className="text-light-gray" id="skills-frontend-endpoint"></span>
						</div>
						<div className="endpoint-button">
							<a target="_blank" className="hover:text-orange/75 transition" href={`${process.env.NEXT_PUBLIC_API}${skills.data.frontend.links.self}`}><FontAwesomeIcon icon="fa-solid fa-up-right-from-square" /></a>
						</div>
					</div>

					<div className="md:grid sm:grid-cols-2 gap-8">
						{
							data.frontend.data.map((tech : any , index : number) => {
								let tLength : number = data.frontend.data.length;
								return <SkillBox tLength={tLength} tech={tech} index={index} />
							})
						}
					</div>
				</div>
			</div>
		</>
	)
}

export async function getServerSideProps(){
	let response = await fetch(`${process.env.NEXT_PUBLIC_API}/developers/62e35d9de62f85cf7553560a/skills`, {
		method : "GET",
		headers : {
			"Content-Type" : "application/json"
		}
	});

	let data = await response.json();

	return { 
		props : {
			skills : data
		}
	}
}
