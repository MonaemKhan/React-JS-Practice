import { GetProductByID } from '@/services/product.service/product.service';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import InfoView from '@/Component/InfoView';
import Link from 'next/link';

const ViewProduct = () => {
    const route = useRouter();
    const Id = route.query.id;
    const [product, setProduct] = useState({});

    console.log(Id);

    useEffect(() => {
        const getData = async (Id) => {
            const data = await GetProductByID(Id);
            setProduct(data);
            console.log(data);
        }
        if (Id != undefined) {
            getData(Id);
        }
    }, [Id]);
    return (
        <div>
            <div className='container border border-3 my-5 pt-3'>
                <div>
                    <h1 className='text-center'>View Info of {product.productName}</h1>
                </div>
                <hr />
                <div className='my-4'>
                    <div className='d-flex justify-content-center'>
                        <div className='col-md-6'>
                            <InfoView name={"ID"} data={product.id} />
                            <InfoView name={"Product"} data={product.productName} />
                            <InfoView name={"Country"} data={product.countryName} />
                            <InfoView name={"Rating"} data={product.rating} />
                            <InfoView name={"Price"} data={product.price} />
                            <InfoView name={"Sell Price"} data={product.sellPrice} />
                            <InfoView name={"Bar Code"} data={product.barCode} />
                        </div>
                        <div className="mb-3 d-flex">
                            <img style={{ width: '150px', height: "150px", border: "2px solid black", borderRadius: "10px" }} src={`https://localhost:7259/${product.imagePath}`} alt="Image Preview" />
                        </div>
                    </div>
                    <Link className='btn btn-primary' href={'/product'}><i className="bi bi-skip-backward-fill"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;