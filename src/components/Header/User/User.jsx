import DropDown from "../../DropDown";
import {userMock} from "./userMock";

function User() {

    const {name, role, avatar} = userMock
    const btn = () => {
        return (
            <div className={'flex items-center justify-center h-[46px]'}>
                <img src={avatar} className={'rounded-full w-[32px] h-[32px]'}/>
                <span className={'whitespace-nowrap ml-2'}>{name}</span>
            </div>
        )
    }

    const openLink = (link, clb) => {
        console.log(link)
        clb(false)
    }

    const menu = (clb) => {

        return (
            <div className={'flex flex-col z-[9] bg-white ease-out absolute inset-0 border border-slate-200 h-fit whitespace-nowrap max-w-[180px] top-[50px]'}>
                <span className={'pt-2 pl-2 pr-2'}>{name}</span>
                <span className={'pb-2 pl-2 pr-2 text-[12px]'}>{role}</span>
                <div className={'h-[1px] bg-slate-300'} />
                <div className='text-[14px] text-violet-500 p-2 text-base rounded items-center hover:text-violet-600 cursor-pointer whitespace-normal'
                     onClick={() => openLink('link', clb)}
                     >
                    Settings
                </div>
                <div className='text-[14px] text-violet-500 p-2 text-base rounded items-center hover:text-violet-600 cursor-pointer whitespace-normal'
                     onClick={() => openLink('link', clb)}
                >
                    Sign out
                </div>
            </div>
        )
    }

    return (
        <div>
            <DropDown openButton={btn()} menu={menu}/>
        </div>
    )

}

export default User