//1.import  axiosinstance

import {AxiosInstance} from '../../util/AxiosInstance';

export const getAllCategories = async()=>{
//2.add th url
const URI='/categories';

try {
    const response = await AxiosInstance.get(URI);
    //console.log(response);
    return response;

}catch(error){
    console.log(error);
    //throw error;
}

}