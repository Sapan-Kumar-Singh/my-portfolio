
interface PagesHeaderProps{
    pageTitle:string;
    pageSubTitle?:string
}

const PagesHeader = ({pageTitle,pageSubTitle}:PagesHeaderProps) => {
    return (
        <>
            <div className=" mb-4 text-5xl font-bold text-white drop-shadow-[2px_2px_var(--tw-shadow-color)]" style={{ textShadow: "2px 2px #ffbd39" }}>
                {pageTitle}
            </div>
            <p className="mb-7 mt-7">{pageSubTitle}</p>
        </>
    )
}

export default PagesHeader
