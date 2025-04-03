import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";



const App=()=>{
return(
  <>

<div style={{display:"flex",flexDirection:"column", gap:"50px"}}>

<img src={img1} width={400} />
<img src={img2}  width={400}/>
<img src={img3}  width={400}/>


</div>
     




  



  </>
)
 
}
export default App;

