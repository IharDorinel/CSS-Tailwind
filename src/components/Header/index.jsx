import Notifications from "./Notifications/Notifications";
import Instructions from "./Instructions/Instructions";
import User from "./User/User";
import Search from "./Search/Search";


function Header() {

    return (
        <div className={'bg-white flex justify-end items-center p-2 pr-5 pl-5 fixed z-[9] w-screen'}>
            <Search/>
            <Notifications/>
            <Instructions/>
            <User/>

        </div>
    )
}

export default Header