

//Map:

const Student=["Ananya","Garima","Aastha"];
let ans=Student.map((key)=>{
  return(
    <>
    <h1>{key}</h1>
    </>
  )
}

)

const App=()=>{
  return(
    <>

  {ans};

    </>
  )
}
export default App;

