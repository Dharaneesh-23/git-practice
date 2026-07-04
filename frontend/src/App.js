import './App.css';
import {
    BrowserRouter,
    Route,
    Link,
    Routes,
  } from "react-router-dom";
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ServicesPage from './Components/ServicesPage';
import Packagepage from './Components/Packagepage';
import ContactPage from './Components/ContactPage';
import BookingPage from './Components/BookingPage';
import TopScrollButton from './Components/TopScrollButton';
import './Components/assets/style.css';
import Administration from './Components/Administration';
import LoginPageComponent from './Components/AdminComponents/LoginPageComponent';
import AdminLoggedComp from './Components/AdminComponents/AdminLoggedComp';
import SerivceDetailPage from './Components/SerivceDetailPage';
import PackageDetialPage from './Components/PackageDetialPage';
import Testimonialpage from './Components/Testimonialpage';

function App() {

  const NotFound = () => {
    return (
      <div className="not-found-container">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for could not be found.</p>
        <a href="/">Go to Homepage</a>
      </div>
    );
  };

    return (
        <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/services'>
              <Route path='' element={<ServicesPage/>} />
              <Route path=':serviceName' element={<SerivceDetailPage />} />
            </Route>
            <Route path='/before&after'>
              <Route path='' element={<Packagepage/>} />
              <Route path=':packageName' element={<PackageDetialPage />} /> 
            </Route>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/appointment' element={<BookingPage />}/>
            <Route path='/administration' element={<Administration />}>
              <Route path='' element={<LoginPageComponent/>}/>
              <Route path=':userName' element={<AdminLoggedComp/>} />
            </Route>
            <Route path='/testimonial' element={<Testimonialpage/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
        <TopScrollButton />
        </div>
  );
}

export default App;