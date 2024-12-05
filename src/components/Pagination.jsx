export default function Pagination(props) {
    return (
        <div className="w-full flex justify-end ">
            <button className="hover:underline" onClick={() => props.setPage(props.page - 1)} disabled={props.page === 1}>Prev</button>
            <p className="mx-3">{props.page}</p>
            <button className="hover:underline" onClick={() => props.setPage(props.page + 1)} disabled={props.page === props.maxPages}>Next
            </button>
        </div>
    )
}