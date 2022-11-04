import React from 'react';
import {ReactComponent as ExLogo} from "../../../assets/images/exclamation.svg";
import {instructionsMock} from "./InstructionsMock";
import DropDown from "../../DropDown";


function Instructions() {

    const btn = () => {

        return (
            <div className={'mr-2 bg-slate-100 rounded-full w-[32px] h-[32px] flex items-center justify-center'}>
                <ExLogo className={'w-[16px] h-[16px] text-center'}/>
            </div>
        )
    }

    const openLink = (link, clb) => {
        console.log(link)
        clb(false)
    }

    const menu = (clb) => {

        return (
            <div className={'min-w-[190px] flex flex-col z-[9] bg-white ease-out absolute border border-slate-200 h-fit whitespace-nowrap max-w-[210px] top-[40px] right-0'}>
                <div className={'p-4 text-slate-500 text-sm'}>NEED HELP?</div>
                {
                    instructionsMock.map((el) => (
                        <div className='text-[14px] p-2 font-normal text-base flex text-violet-500 ml-2 rounded items-center fill-violet-500 hover:text-violet-600 cursor-pointer whitespace-normal'
                             key={el.id}
                             onClick={() => openLink(el.link, clb)}
                        >
                            {el.icon}
                            <span className={'ml-3'}>{el.text}</span>
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <div>
            <DropDown openButton={btn()} menu={menu}/>
        </div>
    )
}

export default Instructions