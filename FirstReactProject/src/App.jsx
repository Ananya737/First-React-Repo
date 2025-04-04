// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';




// import Carousel from 'react-bootstrap/Carousel';
// import tcs1 from './images/tcs1.jpg';
// import tcs2 from './images/tcs2.jpg';
// import tcs3 from './images/tcs3.jpg';


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import tcs4 from './images/tcs4.jpg';
// import tcs5 from './images/tcs5.jpg';
// import tcs6 from './images/tcs6.jpg';




// import Footer from './footer';








// const App=()=>{
// return(
//   <>



// <Navbar bg="black" data-bs-theme="dark" className='navbar' >
//         <Container>
//           <Navbar.Brand href="#home" className='logo'>TCS <span className='fullForm'><span>Tata</span> <span>Consultancy</span> <span>Services</span></span></Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home" className='navLink'>What We Do</Nav.Link>
//             <Nav.Link href="#features" className='navLink'>Features</Nav.Link>
//             <Nav.Link href="#pricing" className='navLink'>Pricing</Nav.Link>
//             <Nav.Link href="#pricing" className='navLink'>Blog</Nav.Link>
//             <Nav.Link href="#pricing" className='navLink'>Gallery</Nav.Link>
//             <Nav.Link href="#pricing" className='navLink'>FAQs</Nav.Link>
//             <Nav.Link href="#pricing" className='navLink'>Contact us</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>










//        <Carousel >
//       <Carousel.Item>
//         <img src={tcs1}  width="80%" height="600px" className='bannerImgs'/>
//         <Carousel.Caption className='banner' >
//           <h3 className='bannerHeading1'>TCS Digital Twindex Report: <br /> Manufacturing</h3>
//           <p className='bannerData1'>Future -Ready manufacturing: Powering the Factories of the Future!</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={tcs2}  width="80%" height="600px" className='bannerImgs' />

//         <Carousel.Caption className='banner'  >
//           <h3 className='bannerHeading2'>TCS gets the Rising Star Award <br /> at GTC 2025</h3>
//           <p className='bannerData2'>
//          Honoring TCS’ rapid progress in AI innovation.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={tcs3}  width="80%" height="600px" className='bannerImgs'/>

//         <Carousel.Caption  className='banner' >
//           <h3 className='bannerHeading3'>TCS Partners with Air New Zealand <br /> to Drive  AI-Led Transformation, <br /> Enhance Passenger Experience</h3>
//           <p className='bannerData3'>
//           TCS is set to modernize Air New Zealand's digital infrastructure.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel> 



// <h1 className='sec2h'>Transforming Businesses</h1>




// <div className='cards'>

// <Card style={{ width: '25rem' }} className='card1'>
//       <img src={tcs4}  />
//       <Card.Body>
//         <Card.Title>MLC Life Insurance Aligns Growth with Digital Transformation.</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '25rem' }} className='card1'>
//       <img src={tcs5}  />
//       <Card.Body>
//         <Card.Title>Air France-KLM and TCS: Celebrating 30 Years of Successful Partnership.</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '25rem' }} className='card1'>
//       <img src={tcs6}  />
//       <Card.Body>
//         <Card.Title>Wm Morrisons Supermarkets Ltd. Transforms Ops with Real-time Insights.</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
// </div>
      

// <Footer/>


//   </>
// )
 
// }
// export default App;






// const display=()=>{
//   alert("Events in React JSX")
// }


// const name=(nm)=>{
// alert(`My name is ${nm}`);
// }

const display=(e)=>{
  alert("Type: "+e.type + "   " + "Name: "+ e.target.name +"   "+ "Value: " + e.target.value)
}



const App=()=>{
return(
  <>

<h1>Hello World!</h1>

<button name="btn1" value="mybtn" onClick={display}>Click here</button>




  </>

)
 
}
export default App;
