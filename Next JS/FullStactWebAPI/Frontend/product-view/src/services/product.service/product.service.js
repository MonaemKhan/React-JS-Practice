const baseUrl = 'https://localhost:7259/api/Product'

export async function GetAllProduct() {
    const responce = await fetch(`${baseUrl}`);
    // console.log("into the api call");
    try {
        if (!responce.ok) {
            return new Error('Network responce is not ok')
        }
        return await responce.json()
    } catch (error) {
        console.log('Error fetching data : ', error);
        throw error;
    }
}

export async function GetProductByID(Id) {
    const responce = await fetch(`${baseUrl}/Id:int?Id=${Id}`);
    // console.log("into the api call");
    try {
        if (!responce.ok) {
            return new Error('Network responce is not ok')
        }
        return await responce.json()
    } catch (error) {
        console.log('Error fetching data : ', error);
        throw error;
    }
}

export async function GetAllCountry() {
    const responce = await fetch(`https://localhost:7259/api/Country`);
    try {
        if (!responce.ok) {
            return new Error('Network responce is not ok')
        }
        return await responce.json()
    } catch (error) {
        console.log('Error fetching data : ', error);
        throw error;
    }
}

export async function AddProduct(data) {
    const responce = await fetch(`${baseUrl}`, {
        method: 'POST',
        body: data
    });
    console.log(responce);
    try {
        if (!responce.ok) {
            return new Error('Network responce is not ok')
        }
        return await responce.json()
    } catch (error) {
        console.log('Error fetching data : ', error);
        throw error;
    }
}

export async function UpdateProduct(Id, data) {
    const responce = await fetch(`${baseUrl}?Id=${Id}`, {
        method: 'PUT',
        body: data
    });
    console.log(responce);
    try {
        if (!responce.ok) {
            return new Error('Network responce is not ok')
        }
        return await responce.json()
    } catch (error) {
        console.log('Error fetching data : ', error);
        throw error;
    }
}

export async function DeleteEmployee(Id) {
    const responce = await fetch(`${baseUrl}?Id=${Id}`, {
        method: 'DELETE'
    });
    try {
        if (!responce.ok) {
            return new Error('Network responce is not ok')
        }
        return await responce.json()
    } catch (error) {
        console.log('Error fetching data : ', error);
        throw error;
    }
}