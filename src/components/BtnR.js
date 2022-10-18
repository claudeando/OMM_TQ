const BtnR = ({ setIndex }) => {
    return (
        <aside onClick={() => setIndex((current) => current + 1)} className='btnRight'>
            <img src='../assets/arrowL.png' alt='arrow left' />
        </aside>
    )
}

export default BtnR;