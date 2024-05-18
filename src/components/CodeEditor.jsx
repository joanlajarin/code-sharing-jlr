import Editor from '@monaco-editor/react'
import ShareButton from "./ShareButton"
import LanguageButton from "./LanguageButton"
import ThemeButton from "./ThemeButton"
import linkImg from '../images/link.svg'
import { getCodeDb } from '../services/getCodeDb'
import { useEffect, useState } from 'react'

export default function CodeEditor({linkId}) {
    console.log(linkId)
    const { codeDb, loading } = linkId !== undefined ? getCodeDb(linkId) : { codeDb: null, loading: false };
    const [value, setValue] = useState(`<html>
    <head>
      <title>HTML Sample</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <style type="text/css">
        h1 {
          color: #CCA3A3;
        }
      </style>
      <script type="text/javascript">
        alert("I am a sample... visit devChallenges.io for more projects");
      </script>
    </head>
    <body>
        <h1>Heading No.1</h1>
        <input disabled type="button" value="Click me" />
    </body>
</html>`)
    const [theme, setTheme] = useState("vs-dark")
    const [language, setLanguage] = useState("html")
    const [activateBtn, setActivateBtn] = useState(true)
    const [linkCode, setLinkCode] = useState()

    useEffect(()=>{
        if(codeDb !== "" && (Array.isArray(codeDb) && codeDb.length > 0) && codeDb !== null ) {
            console.log("if")
            console.log(codeDb[0].code)
            setValue(codeDb[0].code)
        }
    },[codeDb])

    const changeLanguageEditor = (language) => {
        if(language === "HTML") {
            setLanguage("html")
        }else if(language === "CSS") {
            setLanguage("css")
        } else if(language === "JavaScript") {
            setLanguage("javascript")
        }
    }

    const changeThemeEditor = (theme) => {
        if(theme === 'VS Dark') {
            setTheme('vs-dark')
        } else {
            setTheme('light')
        }
    }

    const deactivateBtn = () => {
        setActivateBtn(false)
    }

    const handleEditorChange = (value, event) => {
        console.log("Here is the current model value:", value)
        setValue(value)
        setActivateBtn(true)
      }

    const passLink = (linkId) => {
        setLinkCode(linkId)
    }  

    return (
    <div className={`${theme === 'vs-dark'? 'bg-[#121826]' : 'bg-[#FFFFFE]'} w-[95%] max-w-[880px] h-[720px] rounded-lg flex flex-col px-[16px] pb-[16px] pt-[24px] `}>    
        <div className='flex-grow'>
            <Editor 
                height="90%"
                defaultLanguage={language}
                value={value}
                onChange={handleEditorChange}
                theme={theme}
            />
        </div>
        
        <div className="flex w-full justify-between items-center ">
            <div className="flex gap-[8px]">
                <LanguageButton changeLanguageEditor={changeLanguageEditor}/>
                <ThemeButton changeThemeEditor={changeThemeEditor}/>
            </div>
            <div className="flex gap-[8px]">
                <div className={`${ activateBtn ? 'hidden' : 'block'} flex gap-[12px] text-[#364153] items-center justify-center`}>
                    <img src={linkImg}></img>
                    <span className='text-[16px] font-bold'>../{linkCode}</span>
                </div>
                <ShareButton theme={theme} activateBtn={activateBtn} deactivateBtn={deactivateBtn} passLink={passLink} code={value}/>
            </div>
        </div>
    </div>)
}