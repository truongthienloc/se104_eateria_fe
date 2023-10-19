import './styles/App.scss'
import {BrowserRouter} from 'react-router-dom'
import RootRoute from './routes/RootRoute'

function App() {
	return (
		<BrowserRouter>
			<RootRoute />
		</BrowserRouter>
	)
}

export default App
