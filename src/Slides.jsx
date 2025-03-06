import { useEffect, useState } from "react"

function Slides({slides}) {


    const initialButtonStatus = {
        isRestartBtnDisabled: true,
        isPrevBtnDisabled: true,
        isNextBtnDisabled: false
    }

    const [btnStatus, setButtonStatus ] = useState(initialButtonStatus);
    const [currentPage, setCurrentPage] = useState(0);
    const [slideContent, setSlideContent] = useState(slides[currentPage]);
    const [count, setCount] = useState(0);

    const handleRestoreBtnClick = () => {
        setCurrentPage(0)
    }

    const handlePrevBtnClick = () => {
        setCurrentPage((prevState) => prevState - 1);
    }

    function handleNextBtnClick() {
        // setCurrentPage(currentPage => currentPage + 1);
        setCurrentPage((prevState) => prevState + 1);
        console.log(currentPage, count)
    }

    useEffect(() => {
        if (currentPage <= (slides.length - 1)) {
            setSlideContent(slides[currentPage]);
        }
        changeBtnStatus()
        console.log(currentPage, slideContent)
    }, [currentPage]);

    function changeBtnStatus() {
        setButtonStatus({
            isRestartBtnDisabled: (currentPage === 0),
            isPrevBtnDisabled: (currentPage === 0),
            isNextBtnDisabled: (currentPage === (slides.length - 1))
        })
    }



   

    return(
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" 
                    disabled={btnStatus.isRestartBtnDisabled}
                    onClick={handleRestoreBtnClick}
                    >
                    Restart
                </button>
                <button data-testid="button-prev" className="small"
                    disabled={btnStatus.isPrevBtnDisabled}
                    onClick={handlePrevBtnClick}
                >
                Prev
                </button>
                <button data-testid="button-next" className="small"
                    disabled={btnStatus.isNextBtnDisabled}
                    onClick={handleNextBtnClick}
                >
                Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slideContent.title}</h1>
                <p data-testid="text">{slideContent.text}</p>
            </div>
        </div>
    )
}

export default Slides