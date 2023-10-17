const Url = "https://localhost:7284/Employee"

async function getEmployee(Id){
    // console.log('in fetch')
    const responce = await fetch(`${Url}/Id?Id=${Id}`);
    try{
        if(!responce.ok){
            return new Error('Network responce is not ok')
        }
        return await responce.json()
    }catch(error){
        console.log('Error fetching data : ',error);
        throw error;
    }
}

// /Search:?ser=p

async function getEmployeeSearch(index,page,searchData){
    const responce = await fetch(`${Url}/SearchIndexPage?index=${index}&page=${page}&ser=${searchData}`);
    try{
        if(!responce.ok){
            return new Error('Network responce is not ok')
        }
        return await responce.json()
    }catch(error){
        console.log('Error fetching data : ',error);
        throw error;
    }
}

async function getEmployeeByindex(index,page){
    const responce = await fetch(`${Url}/Index&PageNum?index=${index}&page=${page}`);
    try{
        if(!responce.ok){
            return new Error('Network responce is not ok')
        }
        return await responce.json()
    }catch(error){
        console.log('Error fetching data : ',error);
        throw error;
    }
}

async function AddEmployee(data){
    const responce = await fetch(`${Url}`,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try{
        if(!responce.ok){
            return new Error('Network responce is not ok')
        }
        return await responce.json()
    }catch(error){
        console.log('Error fetching data : ',error);
        throw error;
    }
}

async function EditEmployee(data){
    const responce = await fetch(`${Url}`,{
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try{
        if(!responce.ok){
            return new Error('Network responce is not ok')
        }
        return await responce.json()
    }catch(error){
        console.log('Error fetching data : ',error);
        throw error;
    }
}

async function DeleteEmployee(Id){
    const responce = await fetch(`${Url}?Id=${Id}`,{
        method: 'DELETE'});
    try{
        if(!responce.ok){
            return new Error('Network responce is not ok')
        }
        return await responce.json()
    }catch(error){
        console.log('Error fetching data : ',error);
        throw error;
    }
}

export {
    getEmployee,
    getEmployeeSearch,
    getEmployeeByindex,
    AddEmployee,
    EditEmployee,
    DeleteEmployee
}