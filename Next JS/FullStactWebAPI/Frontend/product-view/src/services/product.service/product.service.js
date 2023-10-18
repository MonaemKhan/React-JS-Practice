const baseUrl = 'https://localhost:7259/api/Product'

export async function GetAllProduct(){
    const responce = await fetch(`${baseUrl}`);
    // console.log("into the api call");
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

export async function GetAllCountry(){
    const responce = await fetch(`https://localhost:7259/api/Country`);
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

export async function AddProduct(data){
    const responce = await fetch(`${baseUrl}`,{
        method: 'POST',
        body: data
    });
    console.log(responce);
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

