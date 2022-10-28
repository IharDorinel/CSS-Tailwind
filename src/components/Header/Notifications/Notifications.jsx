import {notificationsMock} from "./NotificationsMock";
import DropDown from "../../DropDown";


function Notifications() {

    const btn = () => {
        return (
            <div className={'ml-2 mr-2 bg-slate-100 rounded-full w-[32px] h-[32px] flex items-center justify-center'}>
                <MailsLogo className={'w-[16px] text-center '}/>
            </div>
        )
    }

    const openLink = (link, clb) => {
        console.log(link)
        clb(false)
    }

    const menu = (clb) => {

        return (
            <div className={'min-w-[250px] flex flex-col z-[9] bg-white ease-out absolute right-[-85px] border border-slate-200 h-fit whitespace-nowrap max-w-xs top-[40px] sm:right-0'}>
                <div className={'p-4 text-slate-500 text-sm'}>NOTIFICATIONS</div>
                {
                    notificationsMock.map((el) => (
                        <div className='text-base rounded items-center hover:bg-slate-50 cursor-pointer whitespace-normal'
                             key={el.id}
                        onClick={() => openLink(el.link, clb)}
                        >
                            <div className={'p-2'}>
                                <span>{el.logo}</span>
                                <span className={'font-medium text-sm'}>{el.header}</span>
                                <span className={'text-xs mt-2 text-slate-500'}>{el.date}</span>
                            </div>
                            <div className={'h-[1px] bg-slate-300]'}/>
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

export default Notifications