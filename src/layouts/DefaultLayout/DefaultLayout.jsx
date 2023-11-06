import { NavBar } from "../NavBar"

function DefaultLayout({children}) {
	return (
		<div className="flex flex-col w-full h-screen overflow-auto box-border">
			<NavBar />
			{children}
		</div>
	)
}

export default DefaultLayout
