import  {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'

function Cards() {
  const[count,setCount]=useState(0);
  const increment=()=>{
    setCount({
      count:count+1
    })
  }
  const decrement=()=>{
    setCount({
      count:count-1
    })
  }

  return (
    <>
    &nbsp;
    <div className='container'>
    <div className='row'>

    <div className='col-sm'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>mens shirt 3</Card.Title>
        <Card.Text>
        Price: 200<br/>
           description: cotton mens wear 38inch(M)
        </Card.Text>
        <h3>item:{count}</h3>
        <button className ="btn btn-success" onClick={()=>setCount(count+1)}>+</button>
        <Button variant="primary">add to cart</Button>
        <button className ="btn btn-success" onClick={()=>setCount(count-1)}>-</button>

      </Card.Body>
    </Card>
    </div>
     <div className='col-sm'>
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="holder.js/100px180" />
       <Card.Body>
         <Card.Title>mens shirt</Card.Title>
         <Card.Text>
           Price: 200<br/>
           description: cotton mens wear 38inch(M)
         </Card.Text>
         <h3>item:{count}</h3>
        <button className ="btn btn-success" onClick={increment}>+</button>
         <Button variant="primary">add to cart</Button>
         
        <button className ="btn btn-success" onClick={decrement}>-</button>
       </Card.Body>
     </Card>
     </div>
     <div className='col-sm'>
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="holder.js/100px180" />
       <Card.Body>
         <Card.Title>mens shirt2</Card.Title>
         <Card.Text>
         Price: 200<br/>
           description: cotton mens wear 38inch(M)
         </Card.Text>
         <Button variant="primary">add to cart</Button>
       </Card.Body>
     </Card>
     </div>
     
     </div>
     </div>
     </>
    
    
  );
}

export default Cards;