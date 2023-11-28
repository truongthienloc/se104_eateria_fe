import './styles/App.scss'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from './configs/theme'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import RootRoute from './routes/RootRoute'

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<ThemeProvider theme={defaultTheme}>
				<BrowserRouter>
					<RootRoute />
				</BrowserRouter>
			</ThemeProvider>
		</LocalizationProvider>
	)
}

export default App
