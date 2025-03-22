type children={
    children:React.ReactNode
}
export default function Producti({children}:{children:children}){
    return(
        <>
        <header>
   layout-3  checking
        </header>

        {children}
        <footer>
           checking
        </footer>
        </>
    )
}