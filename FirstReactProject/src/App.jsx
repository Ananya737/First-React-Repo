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

// const display=(e)=>{
//   alert("Type: "+e.type + "   " + "Name: "+ e.target.name +"   "+ "Value: " + e.target.value)
// }

// const display=(nm,e)=>{
//   alert("Name: "+ nm +"   "+ "Name: "+ e.target.name + "   "+ "Type: " + e.type+ "   " + "Value: " + e.target.value )
// }

// const App=()=>{
// return(
//   <>

// <h1>Hello World!</h1>

// <button name="btn1" value="mybtn" onClick={(e)=>{display("Ananya",e)}}>Click here</button>




//   </>

// )
 
// }
// export default App;




//---------------------------------------------------------Form:----------------------------------------------------------------------
// import { useState } from "react";


// const App=()=>{
// const [color,setColor]= useState("grey");
// return(
//   <>

// <h1 style={{color:color}}>color : {color}</h1>

// <button onClick={()=>{setColor("pink")}}>pink</button>
// <button onClick={()=>{setColor("blue")}}>blue</button>
// <button onClick={()=>{setColor("yellow")}}>yellow</button>





//   </>

// )
 
// }
// export default App;




// import Button from 'react-bootstrap/Button';

// const App=()=>{
//     const [cnt,setCnt]=useState(0);

//     const mydec=()=>{
// if(cnt<1){
//     alert("Cannot decrease below 0!");
// }
// else{
//     setCnt(cnt-1);
// }
//     }
//     return(
//       <>
//       <body style={{backgroundColor:"grey"}}>
//       <div style={{width:"550px",
//     height:"250px",
//     border:"1px solid black", 
//     borderRadius:"25px",
//     textAlign:"center", 
//     color:"black", 
//     paddingTop:"30px", 
//     position:"absolute",
//     left:"30%" ,
//     top:"30%",
//     backgroundColor:"bisque",
//     boxShadow:"25px 25px 3px 2px black"
//     }}>

//     <h1 style={{textDecoration:"underline",fontStyle:"bold",fontWeight:"700"}}>Counter App!</h1>
//     <h1 style={{color:"brown"}}>Count: {cnt}</h1>
//     <Button variant="primary" onClick={()=>{setCnt(cnt+1)}} style={{marginLeft:"20px",border:"1px solid black",marginTop:"20px",fontWeight:"700"}}>Increment</Button>
//     <Button variant="primary" onClick={mydec} style={{marginLeft:"20px",border:"1px solid black",marginTop:"20px",fontWeight:"700"}}>Decrement</Button>
//     <Button variant="danger" onClick={()=>{setCnt(0)}} style={{marginLeft:"20px",border:"1px solid black",marginTop:"20px",fontWeight:"700"}}>Reset</Button>
//     </div>
//       </body>

//       </>
    
//     )
     
//     }
//     export default App;




// Use Effect hook: 
// this is of 3 types: 
// 1) Renders on every render.
// 2) Renders on first render.
// 3) Renders when dependency changes.



// import { useState,useEffect } from "react";

// const App=()=>{

//   const [cnt,setCnt]=useState(0);
//   const [multi,setMulti]=useState(0);
//   useEffect(()=>{
    
//       setMulti(cnt*2)
    
//   },[cnt])
//   return(
//     <>
//   <h1>Count: {cnt}</h1>
//   <h1>Multiplication: {multi}</h1>

//   <button onClick={()=>{setCnt(cnt+1)}}>Click here!</button>

//     </>
  
//   )
//     }

// export default App;




//-----------------------------------------------------------------Form handling---------------------------------------------------------------------------------------



// import { useState,useEffect } from "react";

// const App=()=>{
//     const [name,setName]=useState("");
//     const [city,setCity]=useState("");
//     const [number,setNumber]=useState();
//     const [age,setAge]=useState();
    
// return(
// <>
// <h1 style={{display:"flex",justifyContent:"center",marginTop:"40px"}}>Learning Form Handling!</h1>

// <form style={{display:"flex",
//     flexDirection:"column",
//     width:"300px", 
//     border:"2px solid black", 
//     padding:"20px",
//     borderRadius:"10px",
//     position:"absolute",
//     left:"600px",
//     top:"150px",
//     backgroundColor:"lightBlue"
//     }}>

//     Enter Name: <input type="text" style={{border:"1px solid black",borderRadius:"5px"}} onChange={(e)=>{setName(e.target.value)}} value={name}/> <br />
//     Enter City: <input type="text" style={{border:"1px solid black",borderRadius:"5px"}} onChange={(e)=>{setCity(e.target.value)}} value={city}/> <br />
//     Enter number: <input type="number" style={{border:"1px solid black",borderRadius:"5px"}} onChange={(e)=>{setCity(e.target.value)}} value={number}/> <br />
//     Enter Age: <input type="number" style={{border:"1px solid black",borderRadius:"5px"}} onChange={(e)=>{setCity(e.target.value)}} value={age}/> <br />
//     <input type="submit" style={{backgroundColor:"black", color:"white",borderRadius:"5px"}} />
    

// </form>


// </>
// )
//     }

// export default App;





//------------------------------------------------------handling multiple inputs in one function-------------------------------------------------------



import {useState } from "react";
import axios from "axios";

const App=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
let name=e.target.name;
let value=e.target.value;
setInput(values=>({...values,[name]:value}))
console.log(input)

    }

    const handleSubmit=async()=>{
        let api="http://localhost:3000/Students";
        let res=await axios.post(api,input)
        console.log(res)
        alert("Saved!")

    }
    return(
        <>

        <div style={{display:"flex",flexDirection:"column",padding:"50px"}}>
            Enter Name: <input type="text" onChange={handleInput} name="name"/>  <br />
            Enter City: <input type="text" onChange={handleInput} name="city"/> <br />
            Enter Fees: <input type="text" onChange={handleInput} name="fees"/> <br />
            Enter Roll: <input type="text" onChange={handleInput} name="roll"/> <br />
            <button onClick={handleSubmit}>Save!</button>
        </div>

        </>
    )

}
 export default App;




      






























