

//Props: props are passed as arguement in functional components;


const Stu=(props)=>{
    return(
        <>
        <h1>I am {props.name}</h1>
        <h2>I live in {props.city}</h2>
        <h3>My age is {props.age}</h3>
        </>
      
    )
}

export default Stu;