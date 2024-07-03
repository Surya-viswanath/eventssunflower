// import {
//     flexRender,
//     getCoreRowModel,
//     getFilteredRowModel,
//     getPaginationRowModel,
//     getSortedRowModel,
//     useReactTable,
// } from "@tanstack/react-table";
// import { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import useAxios from "../../hooks/useAxios"; // Ensure this is the correct path

// const AllUsers = () => {
//     const axios = useAxios();
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [sorting, setSorting] = useState([]);
//     const [filtering, setFiltering] = useState("");

//     const fetchUsers = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get("http://localhost:4000/users");
//             console.log(response)
//             setUsers(response.data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

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
//                 await axios.delete(`/delete-user/${id}`);
//                 fetchUsers();
//                 Swal.fire({
//                     title: "Deleted!",
//                     text: "The user has been deleted.",
//                     icon: "success",
//                 });
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const data = useMemo(() => users, [users]);

//     const columns = [
//         {
//             header: "Name",
//             accessorKey: "name",
//         },
//         {
//             header: "Email",
//             accessorKey: "email",
//         },
//         {
//             header: "Image",
//             accessorKey: "image",
//             cell: ({ cell: { row } }) => (
//                 <img className="w-10 rounded-full" src={row.original.image} />
//             ),
//         },
//         {
//             header: "Role",
//             accessorKey: "role",
//         },
//         {
//             header: "Created Date",
//             accessorKey: "createdAt",
//             cell: ({ cell: { row } }) => (
//                 <span>{new Date(row.original.createdAt).toLocaleDateString()}</span>
//             ),
//         },
//         {
//             header: "Edit",
//             accessor: "_id",
//             cell: ({ cell: { row } }) => (
//                 <Link key={row.original._id} to={`/dashboard/edit-user/${row.original._id}`}>
//                     Edit
//                 </Link>
//             ),
//         },
//         {
//             header: "Delete",
//             accessorKey: "_id",
//             cell: ({ cell: { row } }) => (
//                 <button
//                     onClick={() => handleDelete(row.original._id)}
//                     className="bg-red-600 rounded text-white px-1 py-0.5"
//                 >
//                     Delete
//                 </button>
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

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <div className="flex justify-between items-center py-2">
//                 <h3 className="font-Quicksand text-primary text-2xl font-bold">All Users</h3>
//                 <div className="block relative">
//                     <input
//                         placeholder="Search"
//                         value={filtering}
//                         onChange={(e) => setFiltering(e.target.value)}
//                         className="p-2 w-full border bg-rose-50/60 text-primary dark:bg-rose-100 border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
//                     />
//                 </div>
//             </div>
//             <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//                 <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                     <thead className="text-xs text-gray-700 uppercase bg-rose-50 dark:bg-gray-700 dark:text-gray-400">
//                         {table.getHeaderGroups().map((headerGroup) => (
//                             <tr key={headerGroup.id}>
//                                 {headerGroup.headers.map((header) => (
//                                     <th
//                                         scope="col"
//                                         key={header.id}
//                                         onClick={header.column.getToggleSortingHandler()}
//                                         className="px-6 py-3"
//                                     >
//                                         {header.isPlaceholder ? null : (
//                                             <div>
//                                                 {flexRender(
//                                                     header.column.columnDef.header,
//                                                     header.getContext()
//                                                 )}
//                                                 {
//                                                     {
//                                                         asc: "🔼",
//                                                         desc: "🔽",
//                                                     }[header.column.getIsSorted() ?? null]
//                                                 }
//                                             </div>
//                                         )}
//                                     </th>
//                                 ))}
//                             </tr>
//                         ))}
//                     </thead>
//                     <tbody>
//                         {table.getRowModel().rows.map((row) => (
//                             <tr key={row.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                                 {row.getVisibleCells().map((cell) => (
//                                     <td key={cell.id} className="px-6 py-4">
//                                         {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                                     </td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>

//             </div>
//             <div className="flex flex-col items-center py-5">
//                 <div className="inline-flex mt-2 xs:mt-0">
//                     <button
//                         className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary rounded-s hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                         onClick={() => table.setPageIndex(0)}
//                     >
//                         First
//                     </button>
//                     <button
//                         className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                         disabled={!table.getCanPreviousPage()}
//                         onClick={() => table.previousPage()}
//                     >
//                         Prev
//                     </button>
//                     <button
//                         className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 border-rose-700 hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                         disabled={!table.getCanNextPage()}
//                         onClick={() => table.nextPage()}
//                     >
//                         Next
//                     </button>
//                     <button
//                         className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 border-rose-700 rounded-e hover:bg-rose-900 dark:bg-primary dark:border-rose-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                         onClick={() => table.setPageIndex(table.getPageCount() - 1)}
//                     >
//                         Last
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AllUsers;

import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const AllUsers = () => {
    const axios = useAxiosPublic()
    const [Users, setUsers] = useState([])
    // const { data: request = [], refetch } = useQuery({
    //     queryKey: ['request'],
    //     queryFn: async () => {
    //         const res = await axios.get('/users')
    //         console.log(res)
    //         return res.data;
    //     }
    // })
    useEffect(() => {
        const handleItems = async () => {
          try {
            const response = await axios.get('http://localhost:4000/users');
            setUsers(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        handleItems();
      }, []);

    // const handleApprove = (userId, id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You want to make organizer?",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, Make Organizer"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axios.put(`/users/organizer/${userId}`)
    //                 .then(res => {
    //                     if (res.data.role === 'organizer') {
    //                         axios.put(`/request-organizer/accept/${id}`)
    //                             .then(res => {
    //                                 //console.log(res);
    //                                 if (res.data.status === 'accepted') {
    //                                     refetch()
    //                                     Swal.fire({
    //                                         title: "Organizer!",
    //                                         text: 'He is organizer now.',
    //                                         icon: "success"
    //                                     });
    //                                 }
    //                             })
    //                     }
    //                 })
    //         }
    //     });
    // }
    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:4000/delete-user/${id}`);
          // Update the state after successful deletion
          setUsers(Users.filter(list => list._id !== id));
        } catch (error) {
          console.error('Error deleting list:', error);
        }
      };

    return (
        <div>
            <h2 className=" text-primary text-2xl font-semibold mb-4">
                All Users
            </h2>
            <div className="flex justify-between items-center">
                {/* Other JSX */}
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold ">
                        <tr>
                            <th className="px-4 py-2"></th>
                            {/* <th className="px-4 py-2">Image</th> */}
                            <th className="px-4 py-2">First Name</th>
                            <th className="px-4 py-2">Last Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Role</th>
                            <th className="px-4 py-2">Created Date</th>
                            <th className="px-4 py-2">Delete</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {Users.map((item, index) => (
                            <tr key={item._id} className="border-b text-center">
                                <td className="px-4 py-2">{index + 1}</td>
                                {/* <td className="px-4 py-2"><img src={item?.image} className="w-20 h-20 object-cover rounded-2xl" alt="" /></td> */}
                                <td className="px-4 py-2">{item?.firstname}</td>
                                <td className="px-4 py-2">{item?.lastname}</td>
                                <td className="px-4 py-2">{item?.email}</td>
                                <td className="px-4 py-2">{item?.role}</td>
                                <td className="px-4 py-2">{item?.createdAt}</td>
                               
                                <td className="px-4 py-2">
                                    {/* <button
                                        disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                        onClick={() => handleReject(item._id)}
                                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:from-red-200 disabled:via-red-300 disabled:to-red-400"
                                    >
                                        {item?.status === 'rejected' ? 'Rejected' : 'Reject'}
                                    </button> */}
                                    <MdOutlineDeleteOutline onClick={handleDelete} style={{color:'red'}}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;