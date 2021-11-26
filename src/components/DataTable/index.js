import React, { useEffect, useState } from "react"
import Header from "components/Header";
import { TableHeader, Pagination, Search } from "components/DataTable";
import useFullPageLoader from "hooks/useFullPageLoader"

const DataTable = () => {
    const [comments, setComments] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, settotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState();
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: ""})
    const ITEMS_PER_PAGE = 50;
    const headers = [
        { name: "No#", field: "id", sortable: false },
        { name: "Wine", field: "Wine", sortable: true },
        { name: "Country", field: "Country", sortable: true},
        { name: "GWS", field: "GWS", sortable: false}

    ];

    useEffect( ()=>{
        const getData = () => {
            showLoader();
              fetch("https://jsonplaceholder.typicode.com/todos/1")
              .then(response => response.json())
              .then(json => {
                  hideLoader();
                  setComments(json);
                  console.log(json);
              });


        };

        getData();
    }, []);

    const commentsData = useMemo(() => {
        let computedComments = comments;

        if(search){
            computedComments = computedComments.filter(
                comment => 
                   comment.wine.toLowerCase().includes( search.toLowerCase() ) ||
                   comment.country.toLowerCase().includes( search.toLowerCase() )
            )
        }

        settotalItems(computedComments.length);

        //Sorting Comments
        if( sorting.field ){
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort((a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field]))
        }
 
        // Current Page Slice
        return computedComments.slice( 
            (currentPage - 1) * ITEMS_PER_PAGE, 
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
            
        );
         
     },  [comments, currentPage, search, sorting]);

    return (
        <>
            <Header title="Building a data table in react" />

<ExternalInfo page="datatable" />

<div className="row w-100">
    <div className="col mb-3 col-12 text-center">
        <div className="row">
            <div className="col-md-6">
                <Pagination
                    total={totalItems}
                    itemsPerPage={ITEMS_PER_PAGE}
                    currentPage={currentPage}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
            <div className="col-md-6 d-flex flex-row-reverse">
                <Search
                    onSearch={value => {
                        setSearch(value);
                        setCurrentPage(1);
                    }}
                />
            </div>
        </div>

        <table className="table table-striped">
            <TableHeader
                headers={headers}
                onSorting={(field, order) =>
                    setSorting({ field, order })
                }
            />
            <tbody>
                {commentsData.map(comment => (
                    <tr>
                        <th scope="row" key={comment.id}>
                            {comment.id}
                        </th>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
{loader}
</>
    );
};

export default DataTable