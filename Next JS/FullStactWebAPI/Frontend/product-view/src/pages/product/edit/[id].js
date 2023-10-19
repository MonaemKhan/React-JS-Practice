import { GetAllCountry, GetProductByID, UpdateProduct } from '@/services/product.service/product.service';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const UpdateXProduct = () => {

    const [country, setCountry] = useState([]);
    const [imgUrl, setImgUrl] = useState('');
    const route = useRouter();
    const Id = route.query.id;
    const [product, setProduct] = useState({});

    // console.log(Id);

    useEffect(() => {
        const getData = async (Id) => {
            const data = await GetProductByID(Id);
            setProduct(data);
            setImgUrl(`https://localhost:7259/${data.imagePath}`)
            // console.log(data);
        }
        if (Id != undefined) {
            getData(Id);
        }
        const getCountry = async () => {
            setCountry(await GetAllCountry())
        }
        getCountry();
    }, [Id]);
    
    const handleChange = (e) => {
        setProduct((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

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
        await UpdateProduct(Id,new FormData(e.target));
        route.push('/product')
    }


    return (
        <div>
            <div>
                <div className='container border my-5 pt-4'>
                    <h1 className='text-center'>Update Info of "{product.productName}"</h1>
                    <hr className='mb-5' />
                    <form onSubmit={(e) => handleSubmit(e)} className='container ps-5'>
                        <input type="hidden" className="form-control" name='id' value={product.id} />
                        <input type="hidden" className="form-control" name='imagePath' value={product.imagePath} />

                        <div className="mb-3 col-md-8 d-flex">
                            <label className="form-label col-md-3">Product Name</label>
                            <input onChange={(e) => handleChange(e)} type="text" className="form-control" name='productName' value={product.productName} />
                        </div>
                        <input type="hidden" className="form-control" name='id' value={0} />
                        <div className="mb-3 col-md-8 d-flex">
                            <label className="form-label col-md-3">Describtion</label>
                            <input onChange={(e) => handleChange(e)} type="text" className="form-control" name='description' value={product.description} />
                        </div>
                        {/* select tag */}
                        <div className="mb-3 col-md-8 d-flex">
                            <label className="form-label col-md-3">Con Id</label>
                            <select onChange={(e) => handleChange(e)} type="number" className="form-select" name='countryId' value={product.countryId}>
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
                            <input onChange={(e) => handleChange(e)} type="number" className="form-control" name='rating' value={product.rating} />
                        </div>
                        <div className="mb-3 col-md-8 d-flex">
                            <label className="form-label col-md-3">Price</label>
                            <input onChange={(e) => handleChange(e)} type="number" className="form-control" name='price' value={product.price} />
                        </div>
                        <div className="mb-3 col-md-8 d-flex">
                            <label className="form-label col-md-3">Sell Price</label>
                            <input onChange={(e) => handleChange(e)} type="number" className="form-control" name='sellPrice' value={product.sellPrice} />
                        </div>
                        <div className="mb-3 col-md-8 d-flex">
                            <label className="form-label col-md-3">Bar Code</label>
                            <input onChange={(e) => handleChange(e)} type="text" className="form-control" name='barCode' value={product.barCode} />
                        </div>
                        <div className="mb-3 col-md-8 d-flex">
                            <label className="form-label col-md-3">Upload Image</label>
                            <input  onChange={(e) => handlePhotoUpload(e)} type="file" accept='image/*' className="form-control" name='imageFile' />
                        </div>

                        <div className="mb-3 col-md-8 d-flex">
                            <img style={{ width: '150px', height: "150px", border: "2px solid black", borderRadius: "10px" }} src={imgUrl} alt="Image Preview" />
                        </div>

                        <div className='d-flex justify-content-between'>
                            <Link href={'/product'} className="btn btn-primary mb-3 me-5"> <i class="bi bi-skip-backward-fill"></i> </Link>
                            <input type="submit" className="btn btn-primary mb-3 me-5" value={"Save"} />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateXProduct;