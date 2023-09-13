import ProdMenuBar from "../../components/production/MenuBar";
import TopContainer from "../../components/production/TopContainer";
import BtmContainer from '../../components/production/BtmContainer';
import { useState } from 'react';

export default function ProductionMain() {
  const [selectedMenu, setSelectedMenu] = useState()

  const onClickMenu = (event) => {
    setSelectedMenu(event.target.id);
  }

  return (
    <>
      <ProdMenuBar selectedMenu={selectedMenu} onClickMenu={onClickMenu}/>
      <TopContainer selectedMenu={selectedMenu}/>
      <BtmContainer selectedMenu={selectedMenu}/>
    </>
  );
}
