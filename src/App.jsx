import './styles/App.scss'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from './configs/theme'
import RootRoute from './routes/RootRoute'

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<RootRoute />
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
