import './styles/App.scss'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { ToastContainer } from 'react-toastify'
import { defaultTheme } from './configs/theme'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import RootRoute from './routes/RootRoute'
import { AutoLoginProvider } from './components/AutoLoginProvider'

function App() {
	return (
		<AutoLoginProvider>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ThemeProvider theme={defaultTheme}>
					<BrowserRouter>
						<RootRoute />
					</BrowserRouter>
					<ToastContainer
						position='top-right'
						autoClose={3000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss={false}
						draggable
						pauseOnHover={false}
						theme='light'
					/>
				</ThemeProvider>
			</LocalizationProvider>
		</AutoLoginProvider>
	)
}

export default App
