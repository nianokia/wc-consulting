import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

// ------ IMPORT ALL COMPONENTS TO ROUTE ------
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import ContactHome from './components/ContactHome.jsx'
import RatesInsurance from './components/RatesInsurance.jsx'
import Faq from './components/Faqs.jsx'
import FirstSession from './components/FirstSession.jsx'
import ContactQuestion from './components/ContactQuestion.jsx'
import ClientForm from './components/ClientForm.jsx'
import ProfessionalForm from './components/ProfessionalForm.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import AdminListEntries from './components/AdminListEntries.jsx'

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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
