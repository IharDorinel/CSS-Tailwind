import {acmeData} from "./mock";
import AcmeChartComponent from "./AcmeChartComponent/AcmeChartComponent";


function Main() {

    return (
        <>
            <div className={'lg:flex lg:flex-row w-full pt-[84px] flex-col'}>
                {acmeData.map((data) => (
                    <AcmeChartComponent {...data} key={data.name}/>
                    )
                )}
            </div>
        </>
    )
}

export default Main