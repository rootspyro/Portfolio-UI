import Navbar from "./navbar"
import Footer from "./footer"
export default function Layout({children}){
	return(
		<div>
			<Navbar />
			<div className="flex justify-center flex-wrap px-5 sm:px-10 md:px-28">
				{children}
			</div>
			<Footer />
		</div>
	)
}
