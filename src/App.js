import "./App.css";
import Card from "./components/Card";
import Collapse from "./components/Collapse.jsx";

function App() {
  return (
    <div className=" d-flex justify-content-evenly  " >
      <Collapse>
        <Card
          cardTitle="Card title 1"
          cardText="lorem ipsum 1"
          updatedTime="last uptated 1 min ago "
          image="https://picsum.photos/id/23/200/300"
        />
      </Collapse>

      <Collapse>
        <Card
          cardTitle="Card title 2"
          cardText="lorem ipsum 2"
          updatedTime="last uptated 1 min ago "
          image="https://picsum.photos/id/10/200/300"
        />
      </Collapse>

      <Collapse>
        <Card
          cardTitle="Card title 3"
          cardText="lorem ipsum 3"
          updatedTime="last uptated 1 min ago "
          image="https://picsum.photos/id/235/200/300"
        />
      </Collapse>
    </div>
  );
}

export default App;
