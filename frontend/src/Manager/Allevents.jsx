
import React, { useEffect, useMemo, useState } from 'react';
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import { useAuth } from '../auth/AuthContext';
import { MdOutlineDeleteOutline } from "react-icons/md";

const AllEvents = () => {
    const axios = useAxios();
    const { admin } = useAuth(); // Assuming you need admin information for some functionality

    const [events, setEvents] = useState([]);
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");

    useEffect(() => {
        fetchEvents();
    }, []); // Fetch events on component mount

    const fetchEvents = async () => {
        try {
            const response = await axios.get("http://localhost:4000/events");
            setEvents(response.data); // Update events state with fetched data
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    const filteredEvents = useMemo(() => {
        return events.filter((event) =>
            event.title.toLowerCase().includes(filtering.toLowerCase())
        );
    }, [events, filtering]);

    const columns = [
        {
            header: "Title",
            accessorKey: "title",
        },
        {
            header: "Location",
            accessorKey: "location",
        },
        {
            header: "Seat",
            accessorKey: "seat",
        },
        {
            header: "Event Date",
            accessorKey: "date",
            cell: ({ cell: { row } }) => (
                <span>
                    {new Date(row.original.date).toLocaleDateString()}
                </span>
            ),
        },
        {
            header: "Created Date",
            accessorKey: "createdAt",
            cell: ({ cell: { row } }) => (
                <span>
                    {new Date(row.original.createdAt).toLocaleDateString()}
                </span>
            ),
        },
        {
            header: "Actions",
            accessorKey: "actions",
            cell: ({ cell: { row } }) => (
                <button
                    onClick={() => handleDelete(row.original.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Delete
                </button>
            ),
        },
    ];

    const table = useReactTable({
        data: filteredEvents,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    });

    const handleDelete = async (id) => {
        console.log("Deleting event with ID:", id);
        try {
            const swalConfirm = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            });
            if (swalConfirm.isConfirmed) {
                await axios.delete(`http://localhost:4000/delete-event/${id}`);
                // fetchEvents(); // Refetch events after deletion
                setEvents(events.filter(list => list._id !== id));
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Camp has been deleted.",
                    icon: "success",
                });
            }
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };


    
    return (
        <div>
            <div className="flex justify-between items-center py-2">
                <h3 className="font-Quicksand text-primary text-2xl font-bold">
                    All Events
                </h3>
                <div className="block relative">
                    <input
                        placeholder="Search"
                        value={filtering}
                        onChange={(e) => setFiltering(e.target.value)}
                        className="p-2 w-full border bg-rose-50/60 text-primary dark:bg-rose-100 border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                    />
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-rose-50 dark:bg-gray-700 dark:text-gray-400">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        scope="col"
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                        className="px-6 py-3 cursor-pointer"
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div>
                                                {flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                                {
                                                    {
                                                        asc: "🔼",
                                                        desc: "🔽",
                                                    }[
                                                        header.column.getIsSorted() ??
                                                        null
                                                    ]
                                                }
                                            </div>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr
                                key={row.id}
                                className="bg-white border-b dark:bg-primary dark:border-rose-700"
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-6 py-4">
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table> */}
                <table className="table-auto w-full">
                    {/* <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold ">
                        <tr>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">First Name</th>
                            <th className="px-4 py-2">Last Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Role</th>
                            <th className="px-4 py-2">Created Date</th>
                            <th className="px-4 py-2">Delete</th>
                           
                        </tr>
                    </thead> */}
                    <thead className="text-xs text-gray-700 uppercase bg-rose-50 dark:bg-gray-700 dark:text-gray-400">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        scope="col"
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                        className="px-6 py-3 cursor-pointer"
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div>
                                                {flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                                {
                                                    {
                                                        asc: "🔼",
                                                        desc: "🔽",
                                                    }[
                                                        header.column.getIsSorted() ??
                                                        null
                                                    ]
                                                }
                                            </div>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {events.map((item, index) => (
                            <tr key={item._id} className="border-b text-center">
                                <td className="px-4 py-2">{item?.title}</td>
                                {/* <td className="px-4 py-2"><img src={item?.image} className="w-20 h-20 object-cover rounded-2xl" alt="" /></td> */}
                                <td className="px-4 py-2">{item?.location}</td>
                                <td className="px-4 py-2">{item?.seat}</td>
                                <td className="px-4 py-2">{item?.date}</td>
                                {/* <td className="px-4 py-2">{item?.role}</td> */}
                                <td className="px-4 py-2">{item?.createdAt}</td>
                               
                                <td className="px-4 py-2">
                                    {/* <button
                                        disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                        onClick={() => handleReject(item._id)}
                                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:from-red-200 disabled:via-red-300 disabled:to-red-400"
                                    >
                                        {item?.status === 'rejected' ? 'Rejected' : 'Reject'}
                                    </button> */}
                                    {/* <MdOutlineDeleteOutline onClick={handleDelete(item._id)} style={{color:'red'}}/> */}
                                    <MdOutlineDeleteOutline 
    onClick={() => handleDelete(item._id)} 
    style={{color:'red'}} 
/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col items-center py-5">
                <div className="inline-flex mt-2 xs:mt-0">
                    <button
                        className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary rounded-s hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() => table.setPageIndex(0)}
                    >
                        First
                    </button>
                    <button
                        className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        disabled={!table.getCanPreviousPage()}
                        onClick={() => table.previousPage()}
                    >
                        Prev
                    </button>
                    <button
                        className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 border-rose-700 hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        disabled={!table.getCanNextPage()}
                        onClick={() => table.nextPage()}
                    >
                        Next
                    </button>
                    <button
                        className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 border-rose-700 rounded-e hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() =>
                            table.setPageIndex(table.getPageCount() - 1)
                        }
                    >
                        Last
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllEvents;




// import {
//     flexRender,
//     getCoreRowModel,
//     getFilteredRowModel,
//     getPaginationRowModel,
//     getSortedRowModel,
//     useReactTable,
// } from "@tanstack/react-table";
// import { useMemo, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import useAxios from "../hooks/useAxios";

// const AllEvents = () => {
//     const axios = useAxios();
//     const [users, setUsers] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [sorting, setSorting] = useState([]);
//     const [filtering, setFiltering] = useState("");

//     useEffect(() => {
//         const fetchEvents = async () => {
//             try {
//                 const response = await axios.get("/events");
//                 setUsers(response.data);
//                 setIsLoading(false);
//             } catch (err) {
//                 setError(err.response ? err.response.data : err.message);
//                 setIsLoading(false);
//             }
//         };

//         fetchEvents();
//     }, [axios]);

//     const data = useMemo(() => users, [users]);

//     const columns = [
//         {
//             header: "Event Banner",
//             accessorKey: "image",
//             cell: ({ cell: { row } }) => (
//                 <>
//                     <img className="w-36 rounded-lg" src={row.original.image} />
//                 </>
//             ),
//         },
//         {
//             header: "Title",
//             accessorKey: "title",
//         },
//         {
//             header: "Location",
//             accessorKey: "location",
//         },
//         {
//             header: "Seat",
//             accessorKey: "seat",
//         },
//         {
//             header: "Events Date",
//             accessorKey: "date",
//             cell: ({ cell: { row } }) => (
//                 <span>
//                     {new Date(row.original.date).toLocaleDateString()}
//                 </span>
//             ),
//         },
//         {
//             header: "Created Date",
//             accessorKey: "createdAt",
//             cell: ({ cell: { row } }) => (
//                 <span>
//                     {new Date(row.original.createdAt).toLocaleDateString()}
//                 </span>
//             ),
//         },
//     ];

//     const table = useReactTable({
//         data,
//         columns,
//         getCoreRowModel: getCoreRowModel(),
//         getPaginationRowModel: getPaginationRowModel(),
//         getSortedRowModel: getSortedRowModel(),
//         getFilteredRowModel: getFilteredRowModel(),
//         state: {
//             sorting: sorting,
//             globalFilter: filtering,
//         },
//         onSortingChange: setSorting,
//         onGlobalFilterChange: setFiltering,
//     });

//     const handleDelete = async (id) => {
//         try {
//             const swalConfirm = await Swal.fire({
//                 title: "Are you sure?",
//                 text: "You won't be able to revert this!",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#3085d6",
//                 cancelButtonColor: "#d33",
//                 confirmButtonText: "Yes, delete it!",
//             });
//             if (swalConfirm.isConfirmed) {
//                 await axios.delete(`/delete-event/${id}`);
//                 setUsers((prevUsers) => prevUsers.filter(user => user._id !== id));
//                 Swal.fire({
//                     title: "Deleted!",
//                     text: "Your event has been deleted.",
//                     icon: "success",
//                 });
//             }
//         } catch (error) {
//             Swal.fire({
//                 title: "Error!",
//                 text: error.response ? error.response.data : error.message,
//                 icon: "error",
//             });
//         }
//     };

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <p>Error loading events: {typeof error === 'string' ? error : JSON.stringify(error)}</p>;
//     }

//     return (
//         <>
//             <div>
//                 <div className="flex justify-between items-center py-2">
//                     <h3 className="font-Quicksand text-primary text-2xl font-bold">
//                         All Events
//                     </h3>
//                     <div className="block relative">
//                         <input
//                             placeholder="Search"
//                             value={filtering}
//                             onChange={(e) => setFiltering(e.target.value)}
//                             className="p-2 w-full border bg-rose-50/60 text-primary dark:bg-rose-100 border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
//                         />
//                     </div>
//                 </div>
//                 <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//                     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                         <thead className="text-xs text-gray-700 uppercase bg-rose-50 dark:bg-gray-700 dark:text-gray-400">
//                             {table.getHeaderGroups().map((headerGroup) => (
//                                 <tr key={headerGroup.id}>
//                                     {headerGroup.headers.map((header) => (
//                                         <th
//                                             scope="col"
//                                             key={header.id}
//                                             onClick={header.column.getToggleSortingHandler()}
//                                             className="px-6 py-3"
//                                         >
//                                             {header.isPlaceholder ? null : (
//                                                 <div>
//                                                     {flexRender(
//                                                         header.column.columnDef
//                                                             .header,
//                                                         header.getContext()
//                                                     )}
//                                                     {
//                                                         {
//                                                             asc: "🔼",
//                                                             desc: "🔽",
//                                                         }[
//                                                         header.column.getIsSorted() ??
//                                                         null
//                                                         ]
//                                                     }
//                                                 </div>
//                                             )}
//                                         </th>
//                                     ))}
//                                 </tr>
//                             ))}
//                         </thead>
//                         <tbody>
//                             {table.getRowModel().rows.map((row) => (
//                                 <tr
//                                     key={row.id}
//                                     className="bg-white border-b dark:bg-primary dark:border-rose-700"
//                                 >
//                                     {row.getVisibleCells().map((cell) => (
//                                         <td key={cell.id} className="px-6 py-4">
//                                             {flexRender(
//                                                 cell.column.columnDef.cell,
//                                                 cell.getContext()
//                                             )}
//                                         </td>
//                                     ))}
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="flex flex-col items-center py-5">
//                     <div className="inline-flex mt-2 xs:mt-0">
//                         <button
//                             className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary rounded-s hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                             onClick={() => table.setPageIndex(0)}
//                         >
//                             First
//                         </button>
//                         <button
//                             className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                             disabled={!table.getCanPreviousPage()}
//                             onClick={() => table.previousPage()}
//                         >
//                             Prev
//                         </button>
//                         <button
//                             className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 border-rose-700 hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                             disabled={!table.getCanNextPage()}
//                             onClick={() => table.nextPage()}
//                         >
//                             Next
//                         </button>
//                         <button
//                             className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 border-rose-700 rounded-e hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                             onClick={() =>
//                                 table.setPageIndex(table.getPageCount() - 1)
//                             }
//                         >
//                             Last
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AllEvents;