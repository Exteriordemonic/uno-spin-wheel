
import React, { useState, useEffect } from 'react';
import Wheal from '../containers/wheal';
import ColorsPalette from '../utils/ColorsPalette';
import { WedgeLabelProps } from '../components/wedge-label/types';
import Button from '../components/button';
import { ButtonType } from '../components/button/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import SettingsModal from '../containers/settings-modal';
import { v4 as uuidv4 } from 'uuid';
import StorageFactory, { StorageKey, StorageType } from '../services/StorageFactory';


const demoItems: WedgeLabelProps[] = [
  {
    label: 'Draw untill blue',
    fill: ColorsPalette.black,
    rotation: 0,
    height: 0,
    default: true,
    active: true,
    id: uuidv4(),
  },
  {
    label: 'Drop all expect 2',
    fill: ColorsPalette.yellow,
    rotation: 0,
    height: 0,
    default: true,
    active: true,
    id: uuidv4(),
  },
  {
    label: 'Show Your cards',
    fill: ColorsPalette.black,
    rotation: 0,
    height: 0,
    default: true,
    active: true,
    id: uuidv4(),
  },
  {
    label: 'Uno Spin',
    fill: ColorsPalette.green,
    rotation: 0,
    height: 0,
    default: true,
    active: true,
    id: uuidv4(),
  },
  {
    label: 'Swtich Cards',
    fill: ColorsPalette.black,
    rotation: 0,
    height: 0,
    default: true,
    active: true,
    id: uuidv4(),
  },
  {
    label: 'Put all blue cards',
    fill: ColorsPalette.blue,
    rotation: 0,
    height: 0,
    default: true,
    active: true,
    id: uuidv4(),
  },
]

function App() {
  const [items, setItems] = useState([]);
  const [openSettings, setOpenSettings] = useState(true);
  const [activeItems, setActiveItems] = useState([...items]);

  useEffect(() => {
    StorageFactory.getFrom(StorageType.local, StorageKey.items).then((items: WedgeLabelProps[]) => {
      if (items) {
        setItems(items);
      }

      else {
        setItems([...demoItems]);
      }
    });
  }, []);

  useEffect(() => {
    const activeItems = items.filter((item) => item.active);
    setActiveItems(activeItems);

    StorageFactory.set(StorageType.local, StorageKey.items, items);
  }, [items]);


  return (
    <div className="App">
      <header className='fixed top-5 right-5'>
        <Button type={ButtonType.icon} onClick={() => setOpenSettings(true)}><FontAwesomeIcon icon={faGear} /></Button>
      </header>

      <Wheal items={activeItems} />
      <SettingsModal open={openSettings} setOpen={setOpenSettings} items={items} setItems={setItems} />
    </div>
  );
}

export default App;
