import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import { AppContextProvider } from './context.jsx';
import { createTheme, ThemeProvider } from '@mui/material';

import './index.css'

// ------ IMPORT ALL COMPONENTS TO ROUTE ------
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import ContactHome from './pages/ContactHome.jsx'
import RatesInsurance from './pages/RatesInsurance.jsx'
import Faq from './pages/Faqs.jsx'
import FirstSession from './pages/FirstSession.jsx'
import ContactQuestion from './components/ContactQuestion.jsx'
import ClientForm from './components/ClientForm.jsx'
import ProfessionalForm from './components/ProfessionalForm.jsx'
import AdminListEntries from './pages/AdminListEntries.jsx'


// --- specifies routes & what they will each display ---
const router = createBrowserRouter([{
  path: '/',
  element: <Home/>,
  errorElement: <ErrorPage/>,
},{
  path: '/services',
  element: <Services />,
}, {
  path: '/about',
  element: <About />,
}, {
  path: '/contact',
  element: <ContactHome />,
  children: [{
    path: '/contact/question',
    element: <ContactQuestion />,
  }, {
    path: '/contact/client',
    element: <ClientForm />,
  }, {
    path: '/contact/professional',
    element: <ProfessionalForm />,
  }],
}, {
  path: '/rates-and-insurance',
  element: <RatesInsurance />,
}, {
  path: '/faqs',
  element: <Faq />,
}, {
  path: '/first-session',
  element: <FirstSession />
}, {
  path: '/list',
  element: <AdminListEntries />
}
]);

let theme = createTheme({
  palette: {
    primary: {
      main: '#70A288',
      lighter: '#e2ece7',
      lightest: '#f1f6f3',
      darker: '#16201b',
      darkest: '#0b100e',
    },
    secondary: {
      main: '#04395E',
      lighter: '#cdd7df',
      lightest: '#e6ebef',
      darker: '#010b13',
      darkest: '#000609',
    },
    tonalOffset: 0.5,
  },
  typography: {
    h1 : {
      fontFamily: '"Lora", serif'
    },
    h2 : {
      fontFamily: '"Lora", serif'
    },
    h3 : {
      fontFamily: '"Merriweather", serif'
    },
    h4 : {
      fontFamily: '"Poppins", sans-serif'
    },
    h5 : {
      fontFamily: '"Plus Jakarta Sans", sans-serif'
    },
    h6 : {
      fontFamily: '"Lexend", sans-serif'
    },
    body1 : {
      fontFamily: '"Karla", sans-serif'
    },
    body2 : {
      fontFamily: '"Karla", sans-serif'
    },
    button : {
      fontFamily: '"Lexend", sans-serif'
    },
    lexend: {
      font: '"Lexend", sans-serif',
    },
    merriweather: {
      font: '"Merriweather", serif',
    },
    poppins: {
      font: '"Poppins", sans-serif',
    },
    jakarta: {
      font: '"Plus Jakarta Sans", sans-serif',
    },
    nunito: {
      font: 'Nunito", sans-serif',
    },
    karla: {
      font: '"Karla", sans-serif',
    },
    lora: {
      font: '"Lora", serif',
    },

  },
  
})

theme = createTheme(theme, {
  palette: {
    tertiary: theme.palette.augmentColor({
      color: {
        main: '#D5896F',
        lighter: '#f7e7e2',
        lightest: '#fbf3f1',
        darker: '#2b1b16',
        darkest: '#150e0b',
      },
      name: 'tertiary',
    }),
    accent: theme.palette.augmentColor({
      color: {
        main: '#DAB785',
        lighter: '#f8f1e7',
        lightest: '#fbf8f3',
        darker: '#2c251b',
        darkest: '#16120d',
      },
      name: 'accent',
    }),
    default: theme.palette.augmentColor({
      color: {
        main: '#031D44',
        lighter: '#cdd2da',
        lightest: '#e6e8ec',
        darker: '#01060e',
        darkest: '#000307',
      },
      name: 'default',
    }),
    background: theme.palette.augmentColor({
      color: {
        main: '#FAFAFA',
        darker: '#323232',
        darkest: '#191919',
      },
      name: 'background',
    }),
    tonalOffset: 0.5,
  }
})

// --- appState contains info about app's state before login attempt ---
const onRedirectCallback = (appState) => {
// --- replace current history entry with a new one ---
// --- browser history will have no record of the in-between authentication step ---
 history.replace(
  // --- conditionally route to returnTo URL if appState exists & has a returnTo prop ---
  // --- if not, route to current URL ---
   appState && appState.returnTo
     ? appState.returnTo
     : window.location.href
 );
};

// --- wrap auth0 container around react router ---
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={process.env.VITE_AUTH0_DOMAIN}
      clientId={process.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <RouterProvider router={router} />
        </AppContextProvider>
      </ThemeProvider>
    </Auth0Provider>
  </StrictMode>,
)
