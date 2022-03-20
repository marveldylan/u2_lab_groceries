import './App.css';
import List from './components/List'

function App() {

  const groceries = [
    {
      item: 'butter',
      brand: 'Land-O-Lakes',
      units: '12 oz',
      quantity: 0,
      isPurchased: true
    },
    {
      item: 'milk',
      brand: 'Kemps',
      units: '1 gallon',
      quantity: 0,
      isPurchased: true
    },
    {
      item: 'eggs',
      brand: 'Happy Farms',
      units: '1 dozen case',
      quantity: 0,
      isPurchased: true
    }
  ]



  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <List groceries={ groceries }/>
      </main>
    </div>
  );
}

export default App;
