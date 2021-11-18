import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
  <div className = "main">

    <div className = "top">

      <div className = "card-body">
        <img src = "https://dummyimage.com/350x300/dee2e6/6c757d.jpg" alt = " a"></img>
        <h3 className = "head">Fancy Product</h3>
        <h4 className = "price">$ 40.00 - $ 80.00</h4>
        <Button variant="outlined">View Option</Button>
      </div>
       
      <div className = "card-body">
        <img src = "https://dummyimage.com/350x300/dee2e6/6c757d.jpg" alt = " "></img>
        <h3 className = "head">Special Item</h3>
        <h4 className = "price"><s>$20.00</s> $18.00</h4>
        <Button variant="outlined">Add to Cart</Button>
      </div>
        
      <div className = "card-body">
        <img src = "https://dummyimage.com/350x300/dee2e6/6c757d.jpg" alt = " "></img>
        <h3 className = "head">Sale Item</h3>
        <h4 className = "price"><s>$50.00</s> $25.00</h4>
        <Button variant="outlined">Add to Cart</Button>
      </div>

      <div className = "card-body">
        <img src = "https://dummyimage.com/350x300/dee2e6/6c757d.jpg" alt = " "></img>
        <h3 className = "head">Popular Item</h3>
        <h4 className = "price">$ 40.00</h4>
        <Button variant="outlined">Add to Cart</Button>
      </div>

    </div>

    <div className = "bottom">

      <div className = "card-body">
        <img src = "https://dummyimage.com/350x300/dee2e6/6c757d.jpg" alt = " a"></img>
        <h3 className = "head">Sale Item</h3>
        <h4 className = "price"><s>$50.00</s> $25.00</h4>
        <Button variant="outlined">View Option</Button>
      </div>
       
      <div className = "card-body">
        <img src = "https://dummyimage.com/350x300/dee2e6/6c757d.jpg" alt = " "></img>
        <h3 className = "head">Fancy Product</h3>
        <h4 className = "price">$120.00 - $280.00</h4>
        <Button variant="outlined">View Option</Button>
      </div>
        
      <div className = "card-body">
        <img src = "https://dummyimage.com/350x300/dee2e6/6c757d.jpg" alt = " "></img>
        <h3 className = "head">Special Item</h3>
        <h4 className = "price"><s>$20.00</s> $18.00</h4>
        <Button variant="outlined">Add to Cart</Button>
      </div>

      <div className = "card-body">
        <img src = "https://dummyimage.com/350x300/dee2e6/6c757d.jpg" alt = " "></img>
        <h3 className = "head">Popular Item</h3>
        <h4 className = "price">$ 40.00</h4>
        <Button variant="outlined">Add to Cart</Button>
      </div>
    </div>

  </div>
  );
}

export default App;
