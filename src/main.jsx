import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './MyNav.jsx'
import Welcome from './Welcome.jsx'
import Footer from './footer.jsx'
import AllTheBooks from './AllTheBooks.jsx'


createRoot(document.getElementById('root')).render(
  <>
  <MyNav />
  <Welcome />
  <AllTheBooks />
   <Footer />
 
  </>
   )
