import Empdata from "./Empdata";
import Empdesign from "./Empdesign";

//Map:
const App=()=>{

  const ans=Empdata.map((key)=>{
    return(
      <>
       <Empdesign
       name={key.name}
       age={key.age}
       sub={key.sub}
  
  />

      </>
    )
  }

  )



return(
  <>
<table border={1} cellPadding={10} cellSpacing={5}>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Sub</th>
  </tr>
 {ans}
</table>
  </>
)
}
export default App;

