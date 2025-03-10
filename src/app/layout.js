import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_component/Nav";
import FourBox from "./_component/FourBox";
import Add from "./_component/Add";
import Testimonials from "./_component/Testimonials";
import FooterAbove from "./_component/FooterAbove";
import Footer from "./_component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ATG",
  description: "Next js Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav/> 

      <div className='container-fluid'style={{backgroundColor:'#F7F5F9' }} > 
    <div className='container '> 
       <div className=' row row-cols-12   row-cols-md-2'  style={{paddingTop:'8%'}}>
{/* col1 */}
<div className='col col-md-8  ' >
<div className='   d-flex ' style={{flexDirection:'column' ,padding:'2%',marginRight:'2vw'}} >
    <img src="job.png" style={{width:'75%' }} alt="" />

<div style={{display:'flex',flexDirection:'column',padding:'2vw 0'}} >
<a style={{fontSize:'1vw',paddingBottom:'1.7vw'}}>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
</a>
<a style={{fontSize:'1vw'}}>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</a>
</div>
<img src="Group27.png"  className='pt- w-md-100 '  alt=''/>  
 </div>
</div>
{/* col2 */}
<div className='col col-md-4'  >
<div className='d-flex align-items-center justify-content-center justify-content-md-start pt-md-0 pt-sm-3'  >
  <Link  href='/signin'
  className='fs-lg-3 fs-3 ' style={{fontSize:'2.2vw',fontWeight:'500'}} >Sign In </Link> 
 <Link href='/joinin' className='fs-lg-3 fs-3'  style={{fontSize:'2.2vw',fontWeight:'500',marginLeft:'2.5vw'}}  >Join In   </Link>
</div>
 {children}

</div>
      </div>
    </div>
    </div>
    <FourBox/>
    <Add/>
    <Testimonials/>
    <FooterAbove/>
    <Footer/>
        
        </body>
    </html>
  );
}
