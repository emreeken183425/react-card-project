import "./App.css";
import Card from "./components/Card";
import Collapse from "./components/Collapse.jsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
        <div className=" card-group w-100 ">
          <div className="col">
          <Collapse href="collapseExample1">
          <Card
            cardTitle="Card title 1"
            cardText="lorem ipsum 1"
            updatedTime="last uptated 1 min ago "
            image="https://picsum.photos/id/23/200/300"
          />
        </Collapse>
          </div>
          <div className="col">
          <Collapse href="collapseExample2">
          <Card
            cardTitle="Card title 2"
            cardText="lorem ipsum 2"
            updatedTime="last uptated 1 min ago "
            image="https://picsum.photos/id/10/200/300"
          />
        </Collapse>
          </div>
          <div className="col">
          <Collapse href="collapseExample3">
          <Card
            cardTitle="Card title 3"
            cardText="lorem ipsum 3"
            updatedTime="last uptated 1 min ago "
            image="https://picsum.photos/id/235/200/300"
          />
        </Collapse>
          </div>
          </div>
        </div>
      </div>

     
        

        

        
      
    </>
  );
}

export default App;
