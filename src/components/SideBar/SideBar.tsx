import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
//   icon?: React.ReactNode,
  children?: MenuItem[],
//   type?: 'group',
): MenuItem {
  return {
    key,
    // icon,
    children,
    label,
    // type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Gender/ Age', 'gender', [
    getItem('Men', 'men'),
    getItem('Women', 'women'),
    getItem('Kid', 'kid'),
  ]),

  { type: 'divider' },

  getItem('Category', 'category', [
    getItem('Crest Keyring', '5'),
    getItem('Striker Sticker', '6'),
    getItem('Chronograph Watch', '7'),
    getItem('Wallet', '8'),
    getItem('Notebook & Pen', '9'),
  ]),

  { type: 'divider' },

  getItem('Players', 'player', [
    getItem('Kepa Arrizabalaga', '10'),
    getItem('Marcus Bettinelli', '11'),
    getItem('RobertSanchez', '12'),
    getItem('Lucas Bergstrom', '13'),
    getItem('Eddie Beach', '14'),
    getItem('AxelDisasi.webp', '15'),
    getItem('Marc Cucurella', '16'),
    getItem('Benoit Badiashile', '17'),
    getItem('Thiago Emiliano da Silva', '18'),
  ]),

  { type: 'divider' },
];

const SideBar = ({searches}: any) => {
    const [footballTeam, setFootballTeam] = useState('');
    const [category, setCategory] = useState('');
    const [player, setPlayer] = useState('');
    const [size, setSize] = useState('');

    const filterData = {
        footballTeam,
        category,
        player,
        size,
        searches
    }
  const onClick: MenuProps['onClick'] = (e) => {
    // console.log('click ', e.key);
    switch(e.keyPath[1]){
        case "gender": setFootballTeam(e.key)
        // console.log(e.key);
        console.log(filterData);
        break
        case "category": setCategory(e.key)
        // console.log(e.key);
        break
        case "player": setPlayer(e.key)
        // console.log(e.key);
        break
    }
  };

  useEffect(() => {
    console.log(filterData)
  }, [filterData])

  const handleGetSize = (e: any) => {
    const sizeValue = e.target.textContent
    // console.log(sizeValue)
    setSize(sizeValue)
    // console.log(filterData)
  }

  return (
    <div>
      <div className='flex flex-col'>
        <p className='font-semibold text-14px'>Your selections:</p>
      </div>
        <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    <div className='text-[14px] font-thin pl-[28px] py-[10px] border-b'>
        <h1>Size: </h1>
        <div className='grid-container'>
            <p onClick={handleGetSize} className='grid-item border text-center cursor-pointer hover:bg-[#000] hover:text-white'>S</p>
            <p onClick={handleGetSize} className='grid-item border text-center cursor-pointer hover:bg-[#000] hover:text-white'>SM</p>
            <p onClick={handleGetSize} className='grid-item border text-center cursor-pointer hover:bg-[#000] hover:text-white'>M</p>
            <p onClick={handleGetSize} className='grid-item border text-center cursor-pointer hover:bg-[#000] hover:text-white'>L</p>
            <p onClick={handleGetSize} className='grid-item border text-center cursor-pointer hover:bg-[#000] hover:text-white'>XL</p>
            <p onClick={handleGetSize} className='grid-item border text-center cursor-pointer hover:bg-[#000] hover:text-white'>XXL</p>
        </div>
    </div>
    </div>
  );
};

export default SideBar;