import React from 'react'
import { MuiThemeProvider, createGenerateClassName,} from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppContainer from './components/AppContainer'
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/Index";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore(rootReducer, devTools);


const theme = createMuiTheme()

function App() {
	return (
		<Provider store={store}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<AppContainer />
			</MuiThemeProvider>
		</Provider>
	)
}

export default App
