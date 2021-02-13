import {baseUrl} from "./ApiServer"

export default function API(variables, method, apiMethod, token) {
    
    var init = apiMethod === "GET" ? {
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            'Authorization': token ? token : ''
        },
        // body: JSON.stringify(variables)
    } :
        {
            method: apiMethod,
            headers: {
                'Content-Type': "application/json",
                'Authorization': token ? token : '',
                 Accept:"application/json"
            },
            body: JSON.stringify(variables)
        }
      
    return fetch(baseUrl+method, init)
        .then(res => res.json()
            .then(data => {
                var apiData = {
                    status: res.status,
                    data: data
                }
              
                return apiData;
            }))
        .catch(err => {
            // console.log("API ERR ->",err)
            var apiData = {
                status: 900,
                data: "please check your internet connection"
            }
            return apiData
        });
};
