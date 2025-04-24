function Loader() {
    return (
        <>
        <div className="overlay">
            <div className="block"></div>
            <div className="block"></div>
        </div>

        <div className="intro-logo">
            <div className="word" id="word-1">
            <h1>
                <span>Ecléx</span>
            </h1>
            </div>
            <div className="word" id="word-2">
            <h1>Life</h1>
            </div>
        </div>
        <div className="divider"></div>
        
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
        </>
    );
}

export default Loader;
