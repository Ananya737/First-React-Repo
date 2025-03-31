

//Map:

const Array=[
  {
    "name":"Ananya",
    "city":"Sagar",
    "sub":"Java",
    "age":22
  },
  {
    "name":"Ananya",
    "city":"Sagar",
    "sub":"Java",
    "age":22
  },
  {
    "name":"Ananya",
    "city":"Sagar",
    "sub":"Java",
    "age":22
  },
  {
    "name":"Ananya",
    "city":"Sagar",
    "sub":"Java",
    "age":22
  },
  {
    "name":"Ananya",
    "city":"Sagar",
    "sub":"Java",
    "age":22
  }

]

const ans=Array.map((key)=>{
  return(
    <>
    <tr><td>{key.name}</td>
    <td>{key.city}</td>
    <td>{key.sub}</td>
    <td>{key.age}</td>
    </tr>
    </>
  )
}

)

const App=()=>{
  return(
    <>
   
   <table border="1" cellSpacing="4" cellPadding="15" textalign="center" width={500}>
    <tr>
      <th>Name</th>
      <th>City</th>
      <th>Subject</th>
      <th>Age</th>
    </tr>
    {ans}
  
   </table>
   
    

  

    </>
  )
}
export default App;

