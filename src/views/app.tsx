
import React, {useState , useEffect} from 'react';
import Wheal from '../containers/wheal';
import ColorsPalette from '../utils/ColorsPalette';
import { WedgeLabelProps } from '../components/wedge-label/types';
import DummyComponent from '../components/dummy';



const demoItems:WedgeLabelProps[] = [
  {
    label: 'Label 1',
    fill: ColorsPalette.blue,
    rotation: 0,
    height: 0,
  },
  {
    label: 'Label 2',
    fill: ColorsPalette.yellow,
    rotation: 0,
    height: 0,
  },
  {
    label: 'Label 3',
    fill: ColorsPalette.green,
    rotation: 0,
    height: 0,
  },
  {
    label: 'Label 4',
    fill: ColorsPalette.lightRed,
    rotation: 0,
    height: 0,
  },
  // {
  //   label: 'Label 1',
  //   fill: ColorsPalette.yellow,
  //   rotation: 0,
  //   height: 0,
  // },
  // {
  //   label: 'Label 2',
  //   fill: ColorsPalette.red,
  //   rotation: 0,
  //   height: 0,
  // },
  // {
  //   label: 'Label 3',
  //   fill: ColorsPalette.lightGreen,
  //   rotation: 0,
  //   height: 0,
  // },
  // {
  //   label: 'Label 4',
  //   fill: ColorsPalette.lightGreen,
  //   rotation: 0,
  //   height: 0,
  // }
]

function App() {
  const [items, setItems] = useState([...demoItems]);

  return (
    <div className="App"> 
      <Wheal items={items} />
      <DummyComponent />
    </div> 
  );
}

export default App;
