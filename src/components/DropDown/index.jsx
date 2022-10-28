import React, {useEffect, useRef, useState} from 'react';

function DropDown({openButton, menu}) {

    const ref = useRef()
    const [isOpenDropDown, setIsOpenDropDown] = useState(false)

    const openMenu = () => {
        isOpenDropDown ? setIsOpenDropDown(false) : setIsOpenDropDown(true)
    }

    const clickOutside = (e) => {
        if(ref.current.contains(e.target)) {
            return
        }
        setIsOpenDropDown(false)
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside)
        return () => {
            document.removeEventListener('mousedown', clickOutside)
        }
    }, [isOpenDropDown])

    return (
        <div className={'relative'} ref={ref}>
            <button onClick={openMenu}>
                {openButton}
            </button>
            {isOpenDropDown &&
                <div>
                    {menu(isOpenDropDown)}
                </div>
            }
        </div>
    )
}

export default DropDown