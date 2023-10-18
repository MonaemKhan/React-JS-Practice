import { GetAllProduct } from '@/services/product.service/product.service';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ViewAllProduct = () => {
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        const getProduct = async () =>{
            const data = await GetAllProduct();
            setProduct(data)
        };
        getProduct()
        
    },[]);

    return (
        <>
            <div className='border border-3 p-3'>
                <div className='bg-light text-secondary d-flex justify-content-between'>
                    <div>
                        <h2> All Product</h2>
                    </div>
                    <div>
                        <Link href={'/product/create'} className='fs-5'>Add Product</Link>
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