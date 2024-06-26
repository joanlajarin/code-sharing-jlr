import shareBtn from '../images/Share.svg'
import { saveCodeDb } from '../services/saveCodeDb'
import { generateNanoIdLink } from '../services/generateNanoIdLink'
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'

export default function ShareButton({activateBtn , deactivateBtn, passLink, code}) {

    const {loading, postToDb } = saveCodeDb('api/code')
    const navigateTo  = useNavigate()

    const shareCode = () => {
        if(activateBtn) {
          const linkId = generateNanoIdLink()
           const newCodeLink = {
             link:linkId, 
             code: code,
             date: new Date()
          }
            postToDb(newCodeLink)
            passLink(linkId)
 //           navigateTo(`/${linkId}`); 
            deactivateBtn()
            navigator.clipboard.writeText(`https://code-sharing-jlr.netlify.app/${linkId}`);
            toast.success('Link copied to clipboard')

        }
    }
    return(
        <button 
            className={`${activateBtn ? 'bg-[#406AFF]' : 'bg-[#364153]'} flex gap-[8px] py-[12px] px-[24px] items-center justify-center rounded-full`}
            onClick={shareCode}
        >
            <img src={shareBtn}></img> 
            <span className='text-[#FFFFFE] text-[16px] font-semibold'>Share</span>
        </button>
    )
}