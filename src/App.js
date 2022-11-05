import "./App.css";
import Card from "./components/Card";




function App() {
  return (
    <div className="app d-flex m-auto ">
         <Card cardTitle="Card title 1" 
         cardText="lorem ipsum 1" 
         updatedTime="last uptated 1 min ago "
         image="https://picsum.photos/id/23/200/300"
         />

         <Card cardTitle="Card title 2" 
         cardText="lorem ipsum 2"
         updatedTime="last uptated 1 min ago "
         image="https://picsum.photos/id/10/200/300"
         />

         <Card cardTitle="Card title 3"  
         cardText="lorem ipsum 3" 
         updatedTime="last uptated 1 min ago "
         image="https://picsum.photos/id/235/200/300"
         />

    </div>
  );
}

export default App;
