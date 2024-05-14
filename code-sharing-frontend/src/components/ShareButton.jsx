import shareBtn from '../images/Share.svg'
export default function ShareButton() {

    return(
        <div className="flex gap-[8px] py-[12px] px-[24px] bg-[#364153] rounded-full">
            <img src={shareBtn}></img> 
            <span className='text-[#FFFFFE] text-[16px] font-semibold'>Share</span>
        </div>
    )
}