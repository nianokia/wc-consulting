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
}, {
  path: '/rates-and-insurance',
  element: <RatesInsurance />,
}, {
  path: '/faqs',
  element: <Faq />,
}, {
  path: '/first-session',
  element: <FirstSession />
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
