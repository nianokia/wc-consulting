import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

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
import ContactQuestion from './pages/ContactQuestion.jsx'
import ClientForm from './pages/ClientForm.jsx'
import ProfessionalForm from './pages/ProfessionalForm.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
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
  path: '/login',
  element: <AdminLogin />
}, {
  path: '/list',
  element: <AdminListEntries />
}
]);

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
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>,
)
