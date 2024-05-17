import { useEffect, useState } from 'react'
import downArrowImg from '../images/downArrow.svg'

export default function LanguageButton({changeLanguageEditor}){

    const [language, setLanguage] = useState("HTML")
    const [showMenu, setShowMenu] = useState(false)

    const changeLanguage = (language) => {
        setLanguage(language)
        setShowMenu(!showMenu)

    }

    const onShowMenu = () => {
        console.log(showMenu)
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        changeLanguageEditor(language)
    },[language])

    return (
        <>
            <button 
                className="relative h-[24px] bg-[#CED6E1] flex py-[4px] pl-[12px] pr-[8px] rounded-full items-center justify-center gap-[4px]"
                onClick={onShowMenu}    
            >
                <span className="text-[#121826] text-[10px] font-semibold">{language}</span>  
                <img src={downArrowImg}></img>      
            </button>

            <div className={`${showMenu ? 'block' : 'hidden'} absolute flex flex-col pt-[34px]`}>
                <button 
                    className='bg-[#CED6E1] h-[24px] py-[4px] pl-[12px] pr-[8px] flex  items-center justify-center'
                    onClick={() => changeLanguage('HTML')}
                >
                    <span className='text-[#121826] text-[10px] font-semibold'>HTML</span>
                </button>
                <button 
                    className='bg-[#CED6E1] h-[24px] py-[4px] pl-[12px] pr-[8px] flex  items-center justify-center'
                    onClick={() => changeLanguage('CSS')}
                >
                    <span className='text-[#121826] text-[10px] font-semibold'>CSS</span>
                </button>
                <button 
                    className='bg-[#CED6E1] h-[24px] py-[4px] pl-[12px] pr-[8px] flex  items-center justify-center'
                    onClick={() => changeLanguage('JavaScript')}
                >
                    <span className='text-[#121826] text-[10px] font-semibold'>JavaScript</span>
                </button>
            </div>
        </>

    )
}