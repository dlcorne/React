import './App.css';
import Counter from './counter';
import ProductSearcher from './ProductSearcher';

const App = () => {
  return (
    <div className="app">
      <main>
        <section>
      <h2> People </h2>
      <Counter/>
        </section>
      </main>
    </div>    
  );
}
 
  export default App;