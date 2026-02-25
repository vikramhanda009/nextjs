// // Dummy imports
// 'use client'


// import { useSearchParams } from "next/navigation"
// import { useEffect, useState } from "react"
// import {motion, scale} from "motion"

// type GenderResponse = {
//   name: string
//   gender: string
//   probability: number
// }

// const ClientComp = () => {
//   const searchParams = useSearchParams()
//   const name = searchParams.get("name")

//   const [userInfo, setUserInfo] = useState<GenderResponse | null>(null)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     if (!name) {
//       setUserInfo(null)
//       return
//     }

//     setLoading(true)

//     const timer = setTimeout(async () => {
//       try {
//         const res = await fetch(
//           `https://api.genderize.io/?name=${name}`
//         )
//         const data: GenderResponse = await res.json()
//         setUserInfo(data)
//       } catch (err) {
//         console.error(err)
//         setUserInfo(null)
//       } finally {
//         setLoading(false)
//       }
//     }, 300) // ✅ client-side delay

//     // ✅ cleanup
//     return () => clearTimeout(timer)
//   }, [name])

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   return (
//     <>
//       {userInfo ? (
//         <motion.div  className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
//           < motion.img
        
//             className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
//             src="/img/erin-lindford.jpg"
//             alt=""
//           />
//           <div className="space-y-2 text-center sm:text-left">
//             <div className="space-y-0.5">
//               <p className="text-lg font-semibold text-black">
//                 Name: {userInfo.name}
//               </p>
//               <p className="font-medium text-gray-500">
//                 Gender: {userInfo.gender}
//               </p>
//             </div>
//             <div className="percentage">
//               Probability: {Math.round(userInfo.probability * 100)}%
//             </div>
//             <button className="border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-1 rounded">
//               Message
//             </button>
//           </div>
//         </motion.div>
//       ) : (
//         <div>No data</div>
//       )}
//     </>
//   )
// }

// export default ClientComp
