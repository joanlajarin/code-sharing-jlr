import downArrowImg from '../images/downArrow.svg'

export default function SmallButton(){

    return (
        <button className="h-[24px] bg-[#CED6E1] flex py-[4px] pl-[12px] pr-[8px] rounded-full items-center justify-center gap-[4px]">
            <span className="text-[#121826] text-[10px] font-semibold">Light</span>  
            <img src={downArrowImg}></img>      
        </button>
    )
}