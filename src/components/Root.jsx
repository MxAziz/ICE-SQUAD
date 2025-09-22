import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
// import Navbar from './Navbar';

const Root = () => {
    return (
      <div className='flex flex-col min-h-screen'>
        <Header></Header>
        {/* <Navbar></Navbar> */}
        <div className="w-11/12 mx-auto flex-grow">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;