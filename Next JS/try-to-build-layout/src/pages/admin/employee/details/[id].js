import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getEmployee } from '@/Services/employee/employee.service';
import InfoView from '@/Component/InfoView/infoView';

const ViewEmployee = () => {
    const route = useRouter();
    const ID = route.query.id;
    const [empData, setEmpData] = useState()

    useEffect(() => {
        if(ID != undefined){
            const getdata = async () => {
                setEmpData(await getEmployee(ID));
            }
            getdata();
        }
    }, [ID]);
    // console.log(empData);
    return (
        <>
        <h1>View Detail's of {empData.name}</h1>
            <div className='container my-4 border p-5'>
                <InfoView name="Id" data={empData.id} />
                <InfoView name="Name" data={empData.name} />
                <InfoView name="Email" data={empData.email} />
                <InfoView name="Phone" data={empData.phone} />
                <InfoView name="City" data={empData.city?.cityName} />
                <InfoView name="Country" data={empData.country?.countryName} />
            </div>
        </>
    );
};

export default ViewEmployee;