import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typed from "typed.js";
import { useEffect, useState } from "react";


function CompanyAbout(props : any){

	const baseData = {
			id : "",
			attributes : {
				name : "",
				country : "",
				direction : "",
				description : "",
				contact : {
					web : "",
					email : "",
					phone : ""
				}
			},
			links : {
				self : ""
			},
			meta : {}
	}

	const { company_id, open, setOpen } = props;
	const [ data, setData ] = useState(baseData);

	useEffect(()=>{

		if( company_id == "" ){

		} else if ( company_id != "" && open == true ) {

			fetch(`${process.env.NEXT_PUBLIC_API}/companies/${company_id}`, {
				method : 'GET',
				headers : {
					"Content-Type" : "application/json"
				}
			})
			.then(response => response.json())
			.then(data => {
				setData(data.data);
			});
		}


	}, [open]);
	return(
		<>
			<div className={`modal-background ${open ? "flex" : "hidden"}`}>
				<div className="modal-header">
					<div className="flex flex-wrap fixed w-full justify-center px-3">
						<div className="terminal mt-24">
							<div className="terminal-header text-xs sm:text-sm">
								<p>root@spyro:/Companies#</p>
							</div>
							<div className="terminal-body">
								<div>
									<fieldset className="terminal-box sm:text-base text-xs">
										<legend>{data.attributes.name}</legend>
										<div className="p-5">
											<p>{">"} <span>Country: </span>{ data.attributes.country}</p>
											<p>{">"} <span>Direction: </span>{ data.attributes.direction}</p>
											<fieldset className="terminal-box sm:text-base text-xs mt-3">
												<legend><span>Description</span></legend>
												<div className="p-3">
													{ data.attributes.description }
												</div>
											</fieldset>
											<div className="flex justify-end">
												<ul className="flex mt-5">
													<li><a href={data.attributes.contact.web} target="_blank" className="underline hover:text-orange transition">Web</a></li>
													<li><a href={`mailto:${data.attributes.contact.email}`} target="_blank" className="underline ml-3 hover:text-orange transition">Email</a></li>
													<li><a href={`tel:${data.attributes.contact.phone}`} target="_blank" className="underline ml-3 hover:text-orange transition">Phone</a></li>
												</ul>
											</div>
										</div>
									</fieldset>
								</div>
							</div>
						</div>
						<div className="w-full mt-16 text-center">
							<button onClick={()=>setOpen(false)} className="py-3 border-2 border-light-gray px-5 rounded-full bg-dark-gray shadow-lg hover:bg-light-gray hover:text-dark">X</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default function Experience(props : any ){

	const {experience} = props;
	const data = experience.data;
	const jobs = data.jobs.data;

	const [ companyId, setCompanyId ] = useState<string>('');
	const [ aboutOpen, setAboutOpen ] = useState<Boolean>(false);

	useEffect(()=>{
		new Typed("#experience-endpoint",{
			strings : [`<span>curl</span> -X 'GET' '${process.env.NEXT_PUBLIC_API}${experience.links.self}'`],
			typeSpeed : 40
		})
	}, []);
	return(
		<>
			<div className="endpoint-box mt-24 w-full bg-dark-gray shadow-lg">
				<div className="endpoint">
					<span id="experience-endpoint" className="text-light-gray"></span>
				</div>
				<div className="endpoint-button">
					<a className="hover:text-orange/75 transition" target="_blank" href={`${process.env.NEXT_PUBLIC_API}${experience.links.self}`}>
						<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
					</a>
				</div>
			</div>

			<div className="terminal mt-5">
				<div className="terminal-header">
					<p>root@spyro:/Experience#</p>
				</div>
				<div className="terminal-body">
					<div>
						<fieldset className="terminal-box sm:text-base text-xs">
							<legend>Laboral Experience</legend>
							<div className="p-3">
								<p> {">"} <span>Main Role:</span> {data.role}</p>
								<p> {">"} <span>Years:</span> +{data.years} years working as developer</p>
								<p> {">"} <span>Jobs:</span> {jobs.length}</p>
							</div>
						</fieldset>
					</div>
				</div>
			</div>

			<div className="terminal mt-10 mb-10">
				<div className="terminal-header">
					<p>root@spyro:/Jobs_Detail#</p>
				</div>
				<div className="terminal-body">
					<div className="md:grid md:grid-cols-2 gap-8 md:px-3">
						{
							jobs.map((job : any, index : number)=>{
								return(
									<fieldset key={job.attributes.title} className={`
										terminal-box text-xs sm:text-base 
										${ jobs.length % 2 != 0 && index + 1 == jobs.length ? "col-span-2" : "" }
										${index == 0 ? "" : "mt-8 md:mt-0"}
										`}>
										<legend>{job.attributes.title}</legend>
										<div className="p-3">
											<p>{">"} <span>Company:</span> {job.attributes.company_name}</p>
											<p>{">"} <span>Type_of_work:</span> {job.attributes.type_of_work}</p>
											<p>{">"} <span>Position:</span> {job.attributes.position}</p>
											<p>{">"} <span>Entry_date:</span> {job.attributes.entry_date}</p>
											<p>{">"} <span>retirement_date:</span> {job.attributes.retirement_date}</p>
											<button className="sm:text-end text-center w-full mt-3 px-2 hover:text-orange transition underline decoration-2" onClick={()=>{ setCompanyId(job.company_id); setAboutOpen(true); }}>About_Company</button>
										</div>
									</fieldset>
								)
							})
						}
					</div>
				</div>
			</div>
			<button className=" shadow-lg max-w-5xl block w-full text-center border-2 border-light-gray rounded-sm p-3 mb-24 bg-dark-gray hover:bg-light-gray hover:text-dark transition">Download CV <FontAwesomeIcon icon="fa-solid fa-download" /></button>
			<CompanyAbout open={aboutOpen} setOpen={setAboutOpen} company_id={companyId} />
		</>
	)
}

export async function getServerSideProps(){
	let response = await fetch(`${process.env.NEXT_PUBLIC_API}/developers/62e35d9de62f85cf7553560a/experience`, {
		method : "GET",
		headers : {
			"Content-Type" : "application/json"
		}
	});

	let data = await response.json();

	return { 
		props : {
			experience : data
		}
	}
}
