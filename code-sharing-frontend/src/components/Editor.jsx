import ShareButton from "./ShareButton";
import SmallButton from "./SmallButton";

export default function Editor() {
 
    return <div className="w-[880px] h-[720px] rounded-lg px-[16px] pb-[16px] pt-[24px] bg-[#121826]">
    
    <div className="flex ">
        <div className="">

        </div>
        <div className="flex w-full justify-between items-center">
            <div className="flex gap-[8px]">
            <SmallButton/>
            <SmallButton/>
            </div>

            <ShareButton/>
        </div>
    </div>
    </div>
}