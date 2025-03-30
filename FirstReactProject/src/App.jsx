import Cybrom from "./Cybrom";


const College={
  name:"DHSGSU",
  sub:"Yoga",
  city:"Sagar"

}





const App=()=>{
  return(
    <>
  

<Cybrom 
name={College.name}
sub={College.subject}
city={College.city}
/>




    </>
  )
}
export default App;

