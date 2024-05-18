import { useEffect, useState } from 'react'
import downArrowImg from '../images/downArrow.svg'

export default function ThemeButton({changeThemeEditor}){

    const [theme, setTheme] = useState("Light")

    const changeTheme = () => {
        if(theme === 'VS Dark') {
            setTheme('Light')
        } else{
            setTheme('VS Dark')
        }
    }

    useEffect(() =>{
        changeThemeEditor(theme)
    },[theme])

    return (
        <button 
            className="h-[24px] bg-[#CED6E1] flex py-[4px] pl-[12px] pr-[8px] rounded-full items-center justify-center gap-[4px]"
            onClick={changeTheme}
        >
            <span className="text-[#121826] text-[10px] font-semibold">{theme}</span>  
            <img src={downArrowImg}></img>      
        </button>
    )
}