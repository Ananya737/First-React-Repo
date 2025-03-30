import Cybrom from "./Cybrom";


const College={
  name:"DHSGSU",
  sub:"Yogic Science",
  city:"Sagar"
}





const App=()=>{
  return(
    <>
  

<Cybrom 
name={College.name}
subject={College.sub}
city={College.city}
/>




    </>
  )
}
export default App;

