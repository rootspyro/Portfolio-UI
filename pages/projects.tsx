import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typed from "typed.js";
import { useEffect, useState } from "react";

export default function Projects(props : any) { 

	const { projects } = props;

	return(
		<>
			<div className="terminal mt-32">
				<div className="terminal-header">
					<p>root@spuro:/Projects#</p>
				</div>
				<div className="terminal-body">
					<fieldset className="terminal-box">
						<legend>Projects Menu</legend>
						<div className="p-3 text-center">
							<h3 className="text-xl"> Projects</h3>
						</div>
					</fieldset>
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
