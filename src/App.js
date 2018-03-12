import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const data = [
  { name: "Julianne", group: "A", id: "19f26c3e-f065-496e-908e-10aee1394aa8" },
  { name: "Roselia", group: "B", id: "b65ac5fe-45cf-43c0-bed0-d27b0d8828d9" },
  { name: "Fredric", group: "B", id: "163c7907-7f3d-4178-80b8-6b8633b3c010" },
  { name: "Tracee", group: "A", id: "5d196331-3eb2-4cb5-979c-fcb31429bd24" },
  { name: "Adelaida", group: "A", id: "305ddd95-3aee-40d4-ac63-b26f4419e898" },
  { name: "Shondra", group: "B", id: "8074c509-196b-40f7-9131-0ddabcc74ba0" },
  { name: "Wenona", group: "B", id: "da04c2ae-afc1-4179-b98b-5a2a840aede8" },
  { name: "Lionel", group: "C", id: "70257fad-3a61-4394-9f16-e54d0e82c7b3" },
  { name: "Winter", group: "A", id: "56819f27-bad4-4423-a48b-f3afe38eb960" },
  { name: "Raymon", group: "B", id: "ea23a7f3-56ae-4d3d-a290-dfd38deb092a" },
  { name: "Johnna", group: "B", id: "651c4be7-5344-4e53-a159-b10d4ccd1ceb" },
  { name: "Oren", group: "A", id: "1b6f73a9-e156-4935-b305-d99a0983462b" },
  { name: "Tristan", group: "A", id: "2398be8a-9d44-441c-bd9e-65530da0a2b1" },
  { name: "Jesenia", group: "A", id: "fceb0ffa-75bb-4884-bbee-90d493239030" },
  { name: "Carrol", group: "C", id: "5f07367c-6e82-4dd6-b018-f05f6abe59ad" },
  { name: "Arlene", group: "C", id: "75438fe4-a49e-4c3a-bf33-0f65c1be51c8" },
  { name: "Eldora", group: "C", id: "79bc37f9-75e4-4c15-b340-8b678e78e788" },
  { name: "Hermina", group: "A", id: "b3b88879-1651-4e99-9a97-7877fd3c4ade" },
  { name: "Dorotha", group: "A", id: "f9b35d7c-76f8-40d1-8ab3-d1b8ae1a9ad3" },
  { name: "Angelika", group: "A", id: "6eed325e-71a6-4b31-afd3-832a8e9eb882" },
  { name: "Lillian", group: "B", id: "50a42e8e-84cb-42c6-915a-c7123c28a95d" },
  { name: "Jayson", group: "B", id: "00f6cba7-4dc7-41e9-9dc7-35e7e36ec691" },
  { name: "Mel", group: "C", id: "73b0eede-c16a-4822-9bae-54785a289da7" },
  { name: "Wallace", group: "A", id: "5c563d99-c481-42c1-939d-68ab94bed2d7" },
  { name: "Lavon", group: "B", id: "7d1ea9c2-94bf-4b78-8276-b9ba66917bfb" },
  { name: "Rana", group: "A", id: "81f4aec1-64e6-4e81-9d3b-7abb1b91abed" },
  { name: "Arline", group: "C", id: "c4e6446e-019b-4070-b06c-947314e5336f" },
  { name: "Natashia", group: "A", id: "f73598bd-71c1-4195-84d2-27a0b345cb5d" },
  { name: "Andra", group: "A", id: "6d1db56a-3ac3-44e7-a807-76386fb24247" },
  { name: "Pei", group: "A", id: "c2eb884c-23f7-4355-80b1-b59618e5460c" },
  { name: "Yuk", group: "C", id: "c9eb0e49-b2c9-4d12-8e39-224a3646e1fe" },
  {
    name: "Marquerite",
    group: "C",
    id: "5784b6f4-fe19-4bcb-9411-5dc3f5a6fa16"
  },
  { name: "Lia", group: "C", id: "e7ef2485-f149-44df-8d5f-8920bbd09ba2" },
  { name: "Romana", group: "B", id: "14646830-16e0-4245-a24e-3e9256d0516d" },
  { name: "Shanae", group: "A", id: "50b3dc51-0f9b-44f3-9a1a-c9fb8fbf53c2" },
  { name: "Rosalinda", group: "A", id: "88600259-de25-4a29-8a7f-b4f6b9853ccf" },
  { name: "Ashlyn", group: "A", id: "34dd3922-a72f-4227-ad7e-b19349cb43b7" },
  { name: "Lavinia", group: "B", id: "d3114442-7c2e-4bb7-b631-6cd6ff09423e" },
  { name: "Sharice", group: "B", id: "33bd5861-67e2-4580-b8bd-347d4d556cb7" },
  { name: "Mac", group: "A", id: "8e83df20-5d82-4d9a-8a47-b9f9fff7145c" },
  { name: "Jerica", group: "B", id: "15f0cd2b-76e9-4727-a631-69ae6ee94b7d" },
  { name: "Adaline", group: "A", id: "3c5aa799-15c1-4e60-9478-4135b06266af" },
  { name: "Tamra", group: "B", id: "0f144613-16a9-4539-b4c4-0a476d766da0" },
  { name: "Maya", group: "A", id: "50159afa-56c4-44c2-a159-edb0198128b4" },
  { name: "Dusty", group: "B", id: "88060cd7-0fd9-4819-9a4d-44790d7b4ca1" },
  { name: "Celestina", group: "C", id: "80845be5-16a7-49a0-855a-f7f85aa3a215" },
  { name: "Bess", group: "C", id: "db5cfaf1-4f8f-482c-ad9b-6f4b3d3f7510" },
  { name: "Leanna", group: "A", id: "8627688b-d843-40c7-ace0-2e2b4d7f61b6" },
  { name: "Marcy", group: "A", id: "6ef1f6da-0302-4d61-af9d-a3e9f8269eab" },
  { name: "Cory", group: "A", id: "4584dd94-b381-4f09-86ca-e6a810c5ad21" }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGroup: "A"
    };
  }

  filterList(d) {
    this.setState({
      selectedGroup: d
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <div>
            <button onClick={() => this.filterList("A")}>Group A</button>
            <button onClick={() => this.filterList("B")}>Group B</button>
            <button onClick={() => this.filterList("C")}>Group C</button>

          </div>
        </div>
        <div className="App-intro" style={{ display: 'flex' }}>
          <div style={{ marginRight: 30 + 'px' }}>
            <h2>TransitionGroup outside Component</h2>
            <TransitionGroup className="container">
              <List data={data.filter(d => d.group == this.state.selectedGroup)} selectedGroup={this.state.selectedGroup} />
            </TransitionGroup>
          </div>
          <div>
            <h2>TransitionGroup inside Component</h2>
            <React.Fragment>
              <List data={data.filter(d => d.group == this.state.selectedGroup)} selectedGroup={this.state.selectedGroup} transitionGroupAsReturn />
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
