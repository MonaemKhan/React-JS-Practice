const Url = "https://localhost:7284/city"

export async function getAllCity(){
    const responce = await fetch(`${Url}`);
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


export async function getCityByCountry(Id){
    const responce = await fetch(`${Url}/CityByCountry?Id=${Id}`);
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