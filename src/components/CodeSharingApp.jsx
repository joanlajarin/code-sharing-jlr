import heroBackground from '../images/Hero-Background-notecode@2x.png'
import noteCodeImg from '../images/NoteCodeLogo.svg'
import CodeEditor from './CodeEditor'
import { useParams } from 'react-router-dom'
import { Toaster, toast } from 'sonner'


export function CodeSharingApp () {
    let { linkId } = useParams()


    return <div
        className=" flex flex-col items-center bg-cover bg-center w-full h-full pt-[40px]"
        style={{
        backgroundImage: `url(${heroBackground})`, 
        backgroundSize: 'contain', 
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
        }}
    >
        <img src={noteCodeImg} alt='nodeCodeImg' className='w-[150px]'></img>
        <span className='text-[32px] font-bold pt-[36px]'>Create & Share</span>
        <span className='text-[40px] font-bold pt-[12px] pb-[32px]'>Your Code easily</span>
        <CodeEditor linkId={linkId} />
        <Toaster richColors  />

    </div>
} 