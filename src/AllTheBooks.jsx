import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import fantasy from './books/fantasy.json'
import horror from './books/horror.json'
import romance from './books/romance.json'
import scifi from './books/scifi.json'
import history from './books/history.json'

const booksData = {
  Fantasy: fantasy,
  Horror: horror,
  Romance: romance,
  SciFi:scifi,
  History: history
}

function AllTheBooks() {
  const [categoria, setCategoria] = useState('Fantasy')

  return (
    <div className="container my-4">
        <select className="form-select mb-3" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          {Object.keys(booksData).map(cat => (
          <option key={cat}>{cat}</option>
         ))}
       </select>

      <div className ="row">
         {booksData[categoria].map(book =>(
          <div className ="col-6 col-sm-6 col-md-2 mb-4" key={book.asin}>
             <Card className ="h-100">
             <Card.Img variant="top" src={book.img} style={{height:150}}/>
             <Card.Body>
             <Card.Title >{book.title}</Card.Title>
             <Card.Text>
             Price: {book.price}
             </Card.Text>
             </Card.Body>
             </Card>
           </div>
          ))}
      </div>
      </div>
  )
}


export default AllTheBooks