import { useEffect, useState } from "react"
import StyledPagination from "./StyledPagination"

const Pagination = ({ launches, displayed, setOnPage }) => {
    let length = launches?.length
    let numberOfPages = Math.ceil(length / displayed)
    const [pages, setPages] = useState([])
    const [currPage, setCurrPage] = useState(1)

    const changePage = (page) => {
        setCurrPage(page)
        let start = displayed * (page - 1) // (1 - 1) * 10 = 0
        let end = start + Number(displayed) // 0 + 10
        setOnPage(launches.slice(start, end))
    }

    useEffect(() => {
        if (!pages.length) {
            let tmp = []
            for (let i = 1; i <= numberOfPages; i++) {
                tmp.push(i)
            }
            setPages(tmp)
        }
    }, [pages, launches])

    return (
        <>
            <StyledPagination>
                <button id="btnBack" disabled={currPage <= 1} onClick={() => { changePage(currPage - 1) }}>BACK</button>
                {pages.map(page => <button id="btnNum" onClick={() => { changePage(page) }} key={page}
                 style={page === currPage ? { color: 'red' } : {}} 
                 >{page}</button>)}
                <button id="btnNext" disabled={currPage >= pages.length} onClick={() => { changePage(currPage + 1) }}>NEXT</button>
            </StyledPagination>

        </>
    );
}

export default Pagination;