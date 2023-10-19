import React, { useEffect, useState } from 'react';
import { AddProduct, GetAllCountry } from '@/services/product.service/product.service';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CreateProduct = () => {
    const [country, setCountry] = useState([]);
    const [imgUrl, setImgUrl] = useState('');
    const route = useRouter();

    useEffect(() => {
        const getCountry = async () => {
            setCountry(await GetAllCountry())
        }
        getCountry();
    }, []);

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const base64Data = e.target.result;
                setImgUrl(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("into the Submit");
        await AddProduct(new FormData(e.target));
        route.push('/product')
    }

    return (
        <div>
            <div className='container border my-5 pt-3'>
                <h1 className='text-center'>Create New Product</h1>
                <hr className='mb-5' />
                <form onSubmit={(e) => handleSubmit(e)} className='container ps-5'>
                    <div className="mb-3 col-md-8 d-flex">
                        <label className="form-label col-md-3">Product Name</label>
                        <input type="text" className="form-control" name='productName' />
                    </div>
                    <input type="hidden" className="form-control" name='id' value={0} />
                    <div className="mb-3 col-md-8 d-flex">
                        <label className="form-label col-md-3">Describtion</label>
                        <input type="text" className="form-control" name='description' />
                    </div>
                    {/* select tag */}
                    <div className="mb-3 col-md-8 d-flex">
                        <label className="form-label col-md-3">Con Id</label>
                        <select type="number" className="form-select" name='countryId' >
                            <option value=" " disabled>Select A Country</option>
                            {
                                Array.isArray(country) && country.map((val, index) => (
                                    <option key={index} value={val.id}>{val.countryName}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mb-3 col-md-8 d-flex">
                        <label className="form-label col-md-3">Rating</label>
                        <input type="number" className="form-control" name='rating' />
                    </div>
                    <div className="mb-3 col-md-8 d-flex">
                        <label className="form-label col-md-3">Price</label>
                        <input type="number" className="form-control" name='price' />
                    </div>
                    <div className="mb-3 col-md-8 d-flex">
                        <label className="form-label col-md-3">Sell Price</label>
                        <input type="number" className="form-control" name='sellPrice' />
                    </div>
                    <div className="mb-3 col-md-8 d-flex">
                        <label className="form-label col-md-3">Bar Code</label>
                        <input type="text" className="form-control" name='barCode' />
                    </div>
                    <div className="mb-3 col-md-8 d-flex">
                        <label className="form-label col-md-3">Upload Image</label>
                        <input onChange={(e) => handlePhotoUpload(e)} type="file" accept='image/*' className="form-control" name='imageFile' />
                    </div>

                    <div className="mb-3 col-md-8 d-flex">
                        {
                            imgUrl === ''?
                            <img style={{ width: '150px', height: "150px", border: "2px solid black", borderRadius: "10px" }} src="../../../Photos/person.jpeg" alt="Null Photo" />
                            :<img style={{ width: '150px', height: "150px", border: "2px solid black", borderRadius: "10px" }} src={imgUrl} alt="Image Preview" />
                        }
                    </div>

                    <div className='d-flex justify-content-between'>
                        <Link href={'/product'} className="btn btn-primary mb-3 me-5"> <i className="bi bi-skip-backward-fill"></i> </Link>
                        <input type="submit" className="btn btn-success mb-3 me-5" name='id' />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default CreateProduct;