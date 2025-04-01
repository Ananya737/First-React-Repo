import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
       <Link to="home">Home</Link>
       <Link to="about">About</Link>
       <Link to="contact">Contact</Link>
       <Link to="services">Services</Link>

       <hr size="2" color="red"/>

       <Outlet/>

       <hr size="2" color="red" />

       www.MyCompany.com | All rights reserved |


        </>
    )
}
export default Layout;