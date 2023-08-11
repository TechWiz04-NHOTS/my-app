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
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
  ]),

  { type: 'divider' },

  getItem('Players', 'player', [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
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
            <p onClick={handleGetSize} className='grid-item border text-center cursor-pointer hover:bg-[#000] hover:text-white'>M</p>
        </div>
    </div>
    </div>
  );
};

export default SideBar;