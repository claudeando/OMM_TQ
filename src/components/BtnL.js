const BtnL = ({ setIndex }) => {
    return (
        <aside onClick={() => setIndex((current) => current - 1)} className='btnLeft'>
            <img src='../assets/arrowL.png' alt='arrow left' />
        </aside>
    )
}

export default BtnL;