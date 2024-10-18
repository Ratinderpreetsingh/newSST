// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { handleNextPage, handlePreviousPage, setCurrentPage } from '../redux/Slice/PaginationSlice';

// const Pagination = ({ totalPages }) => {
//     const dispatch = useDispatch();
//     const { currentPage } = useSelector((state) => state.pagintiona); // Correct slice name

//     const [pages, setPages] = useState([]);

//     useEffect(() => {
//         const newPages = Array.from({ length: totalPages }, (_, index) => index + 1);
//         setPages(newPages);
//     }, [totalPages]);

//     const handlePageChange = (pageNumber) => {
//         if (pageNumber < 1 || pageNumber > totalPages) return; // Prevent out-of-bounds
//         dispatch(setCurrentPage(pageNumber));
//     };

//     const renderPageNumbers = () => {
//         const pageLimit = 5; // Total number of page links to show
//         const halfLimit = Math.floor(pageLimit / 2);
//         let startPage = Math.max(1, currentPage - halfLimit);
//         let endPage = Math.min(totalPages, currentPage + halfLimit);

//         // Adjust start and end if at boundaries
//         if (currentPage <= halfLimit) {
//             endPage = Math.min(pageLimit, totalPages);
//         }
//         if (currentPage + halfLimit >= totalPages) {
//             startPage = Math.max(1, totalPages - pageLimit + 1);
//         }

//         return pages.slice(startPage - 1, endPage).map((pageNumber) => (
//             <li key={pageNumber} className="page-item">
//                 <span 
//                     style={{ color: currentPage === pageNumber ? '#000' : '#be3134' }} 
//                     className="page-link" 
//                     onClick={() => handlePageChange(pageNumber)}
//                 >
//                     {pageNumber}
//                 </span>
//             </li>
//         ));
//     };

//     return (
//         <nav aria-label="Page navigation example" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <ul className="pagination">
//             <li className="page-item">
//                     <span 
//                         className="page-link" 
//                         style={{ color: '#be3134', cursor: 'pointer' }} 
//                         aria-label="Next" 
//                         onClick={() => handlePageChange(1)}
//                     >
//                         <span aria-hidden="true"><i className="bi bi-chevron-double-left "></i></span>
//                     </span>
//                 </li>
//                 <li className="page-item">
//                     <span 
//                         className="page-link" 
//                         style={{ color: '#be3134', cursor: 'pointer' }} 
//                         aria-label="Previous" 
//                         onClick={() => handlePageChange(currentPage - 1)}
//                     >
//                         <span aria-hidden="true"><i className="bi bi-chevron-left"></i>
// </span>
//                     </span>
//                 </li>

//                 {renderPageNumbers()}

//                 <li className="page-item">
//                     <span 
//                         className="page-link" 
//                         style={{ color: '#be3134', cursor: 'pointer' }} 
//                         aria-label="Next" 
//                         onClick={() => handlePageChange(currentPage + 1)}
//                     >
//                         <span aria-hidden="true"><i className="bi bi-chevron-right"></i></span>
//                         </span>
//                 </li>

//                 <li className="page-item">
//                     <span 
//                         className="page-link" 
//                         style={{ color: '#be3134', cursor: 'pointer' }} 
//                         aria-label="Next" 
//                         onClick={() => handlePageChange(totalPages)}
//                     >
//                         <span aria-hidden="true"><i className="bi bi-chevron-double-right"></i></span>
//                         </span>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Pagination;
import React, { useEffect, useState } from 'react';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const newPages = Array.from({ length: totalPages }, (_, index) => index + 1);
        setPages(newPages);
    }, [totalPages]);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return; // Prevent out-of-bounds
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageLimit = 5; // Total number of page links to show
        const halfLimit = Math.floor(pageLimit / 2);
        let startPage = Math.max(1, currentPage - halfLimit);
        let endPage = Math.min(totalPages, currentPage + halfLimit);

        // Adjust start and end if at boundaries
        if (currentPage <= halfLimit) {
            endPage = Math.min(pageLimit, totalPages);
        }
        if (currentPage + halfLimit >= totalPages) {
            startPage = Math.max(1, totalPages - pageLimit + 1);
        }

        return pages.slice(startPage - 1, endPage).map((pageNumber) => (
            <li key={pageNumber} className="page-item">
                <span
                    style={{ color: currentPage === pageNumber ? '#000' : '#be3134' }}
                    className="page-link"
                    onClick={() => handlePageChange(pageNumber)}
                >
                    {pageNumber}
                </span>
            </li>
        ));
    };

    return (
        <nav aria-label="Page navigation example" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ul className="pagination">
                <li className="page-item">
                    <span
                        className="page-link"
                        style={{ color: '#be3134', cursor: 'pointer' }}
                        aria-label="First"
                        onClick={() => handlePageChange(1)}
                    >
                        <span aria-hidden="true"><i className="bi bi-chevron-double-left "></i></span>
                    </span>
                </li>
                <li className="page-item">
                    <span
                        className="page-link"
                        style={{ color: '#be3134', cursor: 'pointer' }}
                        aria-label="Previous"
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        <span aria-hidden="true"><i className="bi bi-chevron-left"></i></span>
                    </span>
                </li>

                {renderPageNumbers()}

                <li className="page-item">
                    <span
                        className="page-link"
                        style={{ color: '#be3134', cursor: 'pointer' }}
                        aria-label="Next"
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        <span aria-hidden="true"><i className="bi bi-chevron-right"></i></span>
                    </span>
                </li>

                <li className="page-item">
                    <span
                        className="page-link"
                        style={{ color: '#be3134', cursor: 'pointer' }}
                        aria-label="Last"
                        onClick={() => handlePageChange(totalPages)}
                    >
                        <span aria-hidden="true"><i className="bi bi-chevron-double-right"></i></span>
                    </span>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
