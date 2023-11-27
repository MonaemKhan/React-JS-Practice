import { DeleteEmployee, GetAllProduct } from '@/services/product.service/product.service';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ViewAllProduct = () => {
    const [product,setProduct] = useState([]);
    const [lodaing,setLoading] = useState(true);

    useEffect(()=>{
        const getProduct = async () =>{
            const data = await GetAllProduct();
            setProduct(data)
            setLoading(false);
            console.log(lodaing);
        };
        getProduct()
        
    },[]);

    const handleDeleteClick = async (Id,Name) =>{
        const confirm = window.confirm(`Are You sure\n You want to delete data of "${Name}"`)
        if(confirm){
            try{
                await DeleteEmployee(Id);
                location.reload();
                
            }catch(error){
                window.alert("Delete Unsuccesfull");
            }
        }
    }

    return (
            (lodaing)?
            <>
                <h1 className='d-flex justify-content-center align-itemns-center'>Loading ...... </h1>
            </>:
            <>
            <div className='border border-3 p-3 bg-light'>
                <div className='m-5 text-secondary d-flex justify-content-between'>
                    <div>
                        <h2>View All Product</h2>
                    </div>
                    <div>
                        <Link href={'/product/create'} className='fs-5'><i className="bi bi-bag-plus-fill"></i>Add Product</Link>
                    </div>
                </div>

                {/* <div className='mt-4 mb-2 d-flex justify-content-between'>
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
                </div> */}
                <div className='p-3 border border-2'>
                    <table className='table table-hover text-center'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Describtion</th>
                                <th>Price</th>
                                <th>Sell Price</th>
                                <th>Country</th>
                                <th>Image</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product?.map((val)=>(
                                    <tr key={val.id}>
                                        <td>{val.productName}</td>
                                        <td>{val.description}</td>
                                        <td>{val.price}</td>
                                        <td>{val.sellPrice}</td>
                                        <td>{val.countryName}</td>
                                        <td><img style={{width:"50px", height:"50px"}} src={`https://localhost:7259/${val.imagePath}`} /></td>
                                        <td>
                                            <Link href={`/product/edit/${val.id}`} className='btn btn-success me-2'> <i class="bi bi-pencil-fill"></i> </Link>
                                            <Link href={`/product/view/${val.id}`} className='btn btn-primary me-2'> <i className="bi bi-eye-fill"></i> </Link>
                                            <Link href={`/product`} onClick={()=>handleDeleteClick(val.id,val.productName)} className='btn btn-danger'> <i class="bi bi-archive-fill"></i> </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ViewAllProduct;