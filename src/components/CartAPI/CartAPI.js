import axios from "axios";

export const fetchCartItems = () => {
    return axios("http://localhost:4000/profile")
        .then(res => res.data)  
};

export const deleteItem = (id) => {
    return axios.delete(`http://localhost:4000/profile/${id}`);
};

export const addItem = (newItem) => {
    return axios.post(`http://localhost:4000/profile`, newItem)
        .then(res => res.data)
};

// export const fetchCartItems = () => {
//   return  fetch("http://localhost:4000/profile")
//     .then(res => res.json())
// }

// export const deleteItem = (id) => {
//     return  fetch(`http://localhost:4000/profile/${id}`, {
//         method: "DELETE"
//     })
// }

// export const addItem = (newItem) => {
//     return  fetch(`http://localhost:4000/profile`, {
//         method: "POST",
//         headers: {"Content-Type" : "application/json"},
//         body: JSON.stringify(newItem),
//     }).then((res) => res.json())
// }