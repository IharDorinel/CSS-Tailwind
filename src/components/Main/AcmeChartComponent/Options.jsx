import React from 'react';
import DropDown from "../../DropDown";

function Options({options}) {

    const openButton = () => {
        return (
            <div className={'flex p-3 cursor-pointer'}>
                <div className="w-[4px] h-[4px] bg-slate-300 rounded ml-0.5"></div>
                <div className="w-[4px] h-[4px] bg-slate-300 rounded ml-0.5"></div>
                <div className="w-[4px] h-[4px] bg-slate-300 rounded ml-0.5"></div>
            </div>
        )
    }

    const menu = (setIsOpenDropDown) => {
        return (
            <div className={'flex flex-col p-2 ease-out absolute border border-slate-200 whitespace-nowrap right-5 z-10 bg-white'}>
                {options.map((el) => (
                    <div key={el.name} onClick={() => setIsOpenDropDown(false)} className={"text-sm cursor-pointer pr-16 pt-1 pb-1 pl-1 hover: text-slate-600"}>{el.name}</div>
                ))}
                <div className={"text-sm cursor-pointer pr-16 pt-1 pb-1 pl-1 text-red-600 hover: text-red-700"}>Remove</div>
            </div>
        )
    }

    return (
        <DropDown openButton={openButton()} menu={menu}/>
    )
}

export default Options