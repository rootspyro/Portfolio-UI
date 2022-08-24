function Index(){
	return(
		<div className="flex justify-center flex-wrap px-5 sm:px-10 md:px-28">
			<div className="terminal mt-24 sm:mt-32">
				<div className="terminal-header">
					<p>root@spyro:/About#</p>
				</div>
				<div className="terminal-body">
					<div className="profile flex sm:mr-5 sm:w-1/3 justify-center items-center">
						<div className="mt-3 mb-5 sm:mb-0 border-2 p-2 rounded-md border-light-gray">
							<img id="profile-pic" className="rounded-md " src="https://avatars.githubusercontent.com/u/84992671?s=400&u=fca8a8b1d3b563698dd2d8367d3137d1d6b61f46&v=4" />
						</div>
					</div>
					<fieldset className="terminal-box md:w-full">
						<legend>root@<span>spyro</span>:~#</legend>
						<div className="p-3">
							<p> {">"} <span>Name:</span> Spyridon Mihalopoulos</p>
							<p> {">"} <span>Citizenship:</span> Venezuelan</p>
							<p> {">"} <span>Location:</span> Barquisimeto, Lara - Venezuela</p>
							<p> {">"} <span>Role:</span> Backend Developer</p>
							<p> {">"} <span>Experience:</span> +1 years of laboral experience</p>
							<div className="hidden lg:block">
								<p> {">"} <span>Frontend_techs:</span>[<span>"</span>Javascript<span>"</span>]</p>
								<p> {">"} <span>Backend_techs:</span>[<span>"</span>NodeJs<span>"</span>]</p>
							</div>
						</div>
					</fieldset>
				</div>
			</div>
		</div>
	)
}

export default Index;
