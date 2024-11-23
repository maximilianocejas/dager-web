export default function Nav(){
    return(
        <nav className="w-full h-[60px] flex items-center justify-between text-white px-10">
            <div>
                <a className="uppercase" href="/">dot dager</a>
            </div>
            <div>
                <button className="capitalize font-medium">Menú</button>
            </div>
        </nav>
    )
}