const Article = ({ index, setIndex }) => {
    console.log(index)
    return (
        <article>
            <h1>TITLE TEXT</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut et dolore…</p>
            <button type='button'>More</button>
            <ul>
                <li><div onClick={() => setIndex(0)} className={index === 0 ? 'active' : 'box'} ></div></li>
                <li><div onClick={() => setIndex(1)} className={index === 1 ? 'active' : 'box'}></div></li>
                <li><div onClick={() => setIndex(2)} className={index === 2 ? 'active' : 'box'}></div></li>
                <li><div onClick={() => setIndex(3)} className={index === 3 ? 'active' : 'box'}></div></li>
                <li><div onClick={() => setIndex(4)} className={index === 4 ? 'active' : 'box'}></div></li>
            </ul>
        </article >
    )
}

export default Article;