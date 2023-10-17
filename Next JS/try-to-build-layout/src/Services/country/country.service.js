const Url = "https://localhost:7284/Country"

export async function getAllCountry(){
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