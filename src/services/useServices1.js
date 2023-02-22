
import { useEffect, useState } from 'react'

const useServices = () => {
  const [items, setItems] = useState()
  return (
    <div>useServices</div>
  )
}

export default useServices

// import axios from "axios";
// import { useEffect, useState } from "react";

// // const [items, setItems] = useState()

// // // const getDatas = async () => {
// // //   try {
// // //     const response = await axios.get('http://localhost:3000/items')
// // //     return response
// // //   } catch (error) {
// // //     throw error('Error')
// // //   }
// // // }

// // const getData = async () => {
// //   try {

// //   } catch (error) {
// //     const {items} = axios.get('http://localhost:3000')
// //   }
// // }

// // useEffect(() => ({

// // }))

// const [items, setItems] = useState();

// const getData = async () => {
//    try {
//       const { items } = await axios.get("http://localhost:3000");
//       setItems(items);
//    } catch (error) {
//       throw error("Error");
//    }
// };

// useEffect(() => {
//   getData();
// }, []);

// export { getDatas };

// import axios from 'axios'
// import { useEffect, useState } from 'react'

// const getData = async () => {
//   try {
//     const { items } = await axios.get('http://localhost:3000')
//   } catch (error) {

//   }
// }

// export { getData }
