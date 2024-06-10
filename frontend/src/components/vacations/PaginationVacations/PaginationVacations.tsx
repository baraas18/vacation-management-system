import { Pagination } from "react-bootstrap";

interface PaginationComponentProps {
    totalPages: number,
    currentPage: number,
    setCurrentPage: (pageNumber: number) => void
}

function PaginationComponent(props: PaginationComponentProps): JSX.Element {


    // Change page
    const pageNumbers = [];

    for (let i = 1; i <= props.totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <Pagination>
                {pageNumbers.map((number) => (
                    <Pagination.Item key={number} active={number === props.currentPage} onClick={() => props.setCurrentPage(number)}>
                        {number}
                    </Pagination.Item>
                ))}
            </Pagination>
        </>
    );
};

export default PaginationComponent;