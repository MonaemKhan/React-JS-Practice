import React, { useEffect, useState } from 'react';
import { getEmployeeSearch, getEmployeeByindex, DeleteEmployee } from '@/Services/employee/employee.service'
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';

const EmployeeView = () => {
    const [empsData, setEmpsData] = useState([]);
    const [index, setIndex] = useState(5);
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(2);

    const route = useRouter();

    useEffect(() => {
        const getData = async () => {
            const data = await getEmployeeByindex(index, page);
            setEmpsData(data);
            setPageCount(Math.ceil(data.total/index));
        };
        getData();
    }, [index,page,pageCount]);

    const handleSearch = (e) => {
        console.log(e.target.value);
        const sData = e.target.value;
        setPage(0)
        if (sData == '') {
            const getData = async () => {
                setEmpsData(await getEmployeeByindex(index, page));
                setPageCount(Math.ceil(empsData.total/index))
            }
            getData();
        } else {
            const getData = async () => {
                setEmpsData(await getEmployeeSearch(index, 0, e.target.value));
                setPageCount(Math.ceil(empsData.total/index))
            }
            getData();
            // console.log(empsData);
        }
    }

    const handleSelect = (e) => {
        console.log(e.target.value);
        setIndex(e.target.value);
    }

    const handlePageClick = (data) => {
        console.log(data.selected);
        setPage(data.selected);
    }

    const handleDeleteClick = async (Id,Name) =>{
        const confirm = window.confirm(`Are You sure\n You want to delete data of "${Name}"`)
        if(confirm){
            try{
                await DeleteEmployee(Id);
                
            }catch(error){
                window.alert("Delete Unsuccesfull");
            }
        }
    }

    return (
        <>
            <div className='border border-3 p-3'>
                <div className='bg-light text-secondary d-flex justify-content-between'>
                    <div>
                        <h2> All Employee</h2>
                    </div>
                    <div>
                        <Link href={'/admin/employee/create'} className='fs-5'>Add Employee</Link>
                    </div>
                </div>

                <div className='mt-4 mb-2 d-flex justify-content-between'>
                    <div>
                        <div>
                            <select name="" id="" className='form-select' onChange={(e) => handleSelect(e)}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex'>
                        <label className='form-label me-3 mt-2'>Search </label>
                        <input type='textbox' className='form-control' onChange={(e) => handleSearch(e)} />
                        
                    </div>
                </div>
                <div className='p-3 border border-2'>
                    <table className='table table-hover text-center'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Country</th>
                                <th>City</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empsData?.data?.map((val) => (
                                    <tr key={val.id}>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.phone}</td>
                                        <td>{val.country?.countryName}</td>
                                        <td>{val.city?.cityName}</td>
                                        <td>
                                            <Link href={`employee/details/${val.id}`} className='btn text-primary'> <VisibilityIcon /> </Link>
                                            <Link href={`employee/edit/${val.id}`} className='btn text-primary'> <EditIcon /> </Link>
                                            <button className='btn text-primary' onClick={()=>handleDeleteClick(val.id,val.name)} > <DeleteIcon /> </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="text-end">
                    <ReactPaginate
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination justify-content-end"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"active"}
                    />
                </div>
            </div>
        </>
    );
};

export default EmployeeView;