type children={
    children:React.ReactNode
}
export default function Product({children}:{children:children}){
    return(
        <>
        <header>
      layout-2      this is heading
        </header>

        {children}
        <footer>
            this is footer tag
        </footer>
        </>
    )
}