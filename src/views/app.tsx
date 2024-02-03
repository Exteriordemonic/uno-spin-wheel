
import React, {useState , useEffect} from 'react';
import Wheal from '../containers/wheal';
import ColorsPalette from '../utils/ColorsPalette';
import { WedgeLabelProps } from '../components/wedge-label/types';
import Button from '../components/button';
import { ButtonType } from '../components/button/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import SettingsModal from '../containers/settings-modal';


const demoItems:WedgeLabelProps[] = [
  {
    label: 'Draw untill blue',
    fill: ColorsPalette.black,
    rotation: 0,
    height: 0,
    default: true,
    active: true,
  },
  {
    label: 'Drop all expect 2',
    fill: ColorsPalette.yellow,
    rotation: 0,
    height: 0,
    default: true,
    active: true,
  },
  {
    label: 'Show Your cards',
    fill: ColorsPalette.black,
    rotation: 0,
    height: 0,
    default: true,
    active: true,
  },
  {
    label: 'Uno Spin',
    fill: ColorsPalette.green,
    rotation: 0,
    height: 0,
    default: true,
    active: true,
  },
  {
    label: 'Swtich Cards',
    fill: ColorsPalette.black,
    rotation: 0,
    height: 0,
    default: true,
    active: true,
  },
  {
    label: 'Put all blue cards',
    fill: ColorsPalette.blue,
    rotation: 0,
    height: 0,
    default: true,
    active: true,
  },
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
  const [openSettings, setOpenSettings] = useState(true);

  return (
    <div className="App"> 
      <header className='fixed top-5 right-5'>
        <Button type={ButtonType.icon} onClick={() => setOpenSettings(true)}><FontAwesomeIcon icon={faGear} /></Button>
      </header>

      <Wheal items={items} />
      <SettingsModal open={openSettings} setOpen={setOpenSettings} items={items} setItems={setItems}/>
    </div> 
  );
}

export default App;
