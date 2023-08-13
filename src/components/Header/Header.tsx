import { Button, Dropdown, MenuProps } from "antd"
import { FaCircleUser } from "react-icons/fa6";

export default function Header(){

    const handleLogout = () =>{
        localStorage.removeItem("ACCESS_TOKEN")
        if(localStorage.getItem("ACCESS_TOKEN") == null){
            window.location.href='/prelog';
        }
    }

    const goToStore = () => {
        window.location.href='/store'
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Profile
              </a>
            ),
          },
          {
            key: '2',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="/store">
                Go to store
              </a>
            ),
          },
          {
            key: '3',
            label: (
              <a onClick={handleLogout} target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Log out
              </a>
            ),
          },
        ];

    const DropdownItem: React.FC = () => (
        <>
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
                <Button className="text-white flex items-center border-none gap-[12px]">
                    <FaCircleUser className="w-[30px] h-[30px] text-[#fdc52c]" />
                    <p className="text-[14px] font-bold hover:border-b">My account</p>
                </Button>
            </Dropdown>
        </>
    )

    const BeforeLog = () => {
        if(localStorage.getItem("ACCESS_TOKEN") == null){
            return(
                <div className="flex items-center gap-[16px]">
                    <div className="flex items-center">
                            <button className="rounded-full bg-[#154284] mr-[6px]">
                                <i className="fa-regular fa-user p-[11px] text-white"></i>
                            </button>
                            <p className="text-white text-[14px]"><strong><a href="/prelog">Login</a></strong></p>
                        </div>
                        <button className="flex items-center px-[8px] mr-[10px] bg-[linear-gradient(90deg,#8c1a17,#cd122d)] text-white p-[4px] my-[4px] rounded-sm">
                            <img className="pr-[6px]" src="./image/sublogo.png" width="40px"  alt="subLogo"/>
                            <p className="pr-[8px] text-[14px]"><strong>Register</strong></p>
                        </button>
                </div>
            )
        } else{
            return(
                <DropdownItem />
            )
        }
    }

    return(
        <div className="divide sticky top-0 z-99">
        <div className="container">
            <div className="subHeader flex bg-[#0a0927] justify-between">
                <div className="text-white gap-[8px] px-[14px] py-[6px] rounded-3xl subHeader--left flex items-center justify-evenly bg-[linear-gradient(90deg,#154284,#181733)] text-[14px] ml-[10rem] my-[0.4rem]">
                    <a className="font-[700]" href="#">Now you can buy tickets for the new season</a>
                    <i className="fa-solid fa-gear"></i>
                    <p className="text-[#fdc52c]"><strong>BUY</strong></p>
                </div>
                <div className="subHeader--right flex items-center justify-evenly gap-[16px] mr-[24px] border-top shadow-2xl">
                    

                <BeforeLog />


                    <div className="flex items-center">
                        <button className="rounded-full bg-[hsla(0,0%,100%,.12)]">
                            <p className="p-[5px] text-white"><strong className="font-bold">EN</strong></p>
                        </button>
                    </div>
                    <div className="flex items-center">
                        <button className="rounded-full bg-[hsla(0,0%,100%,.12)]">
                            <p className="p-[5px] text-white"><strong className="font-bold"><i className="fa-solid fa-trophy"></i></strong></p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#181733] flex items-center justify-between border-bottom">
            <img className="absolute ml-[1rem]" src="./image/logo--header.webp" width="110px"/>
            <div className="header--left flex items-center text-white py-[1.4rem] ml-[11rem]">
                <div className="flex gap-[16px]">
                    <p className="font-bold">FIRST TEAM</p>
                    <p className="font-bold">CLUB</p>
                    <p className="font-bold">CHELSEA TEAMS</p>
                </div>
            </div>
            <div className="header--right flex gap-[24px] mr-[32px]">
                <div className="text-[#fdc52c] gap-[6px] text-[14px] flex items-center">
                    <i className="fa-solid fa-ticket-simple"></i>
                    <p><strong>TICKETS & MUSEUM</strong></p>
                </div>
                <div onClick={goToStore} className="cursor-pointer flex items-center text-[14px] text-[#fdc52c] gap-[6px]">
                    <i className="fa-solid fa-shirt"></i>
                    <p><strong>SHOP</strong></p>
                </div>
                <div className="flex items-center text-[14px] text-[#fdc52c] gap-[6px]">
                    <i className="fa-solid fa-people-group"></i>
                    <p><strong>CULERS</strong></p>
                </div>
                <div className="w-[1px] bg-[hsla(0,0%,100%,.12)] h-[32px]"></div>
                <div className="flex items-center text-white">
                    <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                </div>
            </div>
        </div>
        <div className="h-[10px] bg-[linear-gradient(90deg,#181733,#154284)]"></div>
    </div>
    )
}