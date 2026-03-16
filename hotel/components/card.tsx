import Image from "next/image"
import Link from "next/link"
const Card = () => {
  return (
    <div className="bg-white hover:shadow-2xl transition rounded-lg m-4  overflow-hidden">  
      <div className="relative h-64 w-full">
        <Image src="/hero.png" alt="cardlist" className="object-cover" fill/>
      </div>
      <div className="flex flex-col px-8 py-4">
        <h1 className="text-2xl font-semibold py-1">Luxury Hotel</h1>
        <p><span className="font-semibold">Rp</span> 210.000<span className="text-sm text-gray-500">/night</span></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur!</p>
      </div>
      <div className="flex justify-between px-4 py-2 sm:flex-col ">
        <p>👤 2 People</p>
        <Link href="#" className="bg-orange-400 text-white rounded-md font-semibold hover:bg-orange-500 hover:text-black p-2">Book Now</Link>
      </div>
    </div>
  )
}
export default Card

// import Image from "next/image"
// import Link from "next/link"

// const Card = () => {
//   return (
//     <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden m-4">
//       <div className="relative w-full h-52">
//         <Image src="/hero.png" alt="Luxury Room" fill className="object-cover"/>
//       </div>

//       <div className="p-5 text-center">
//         <h1 className="text-lg font-semibold text-gray-800 ">
//           Luxury Room
//         </h1>
//         <p className="text-orange-500 font-bold mt-1">
//           Rp 2.100.000
//           <span className="text-sm text-gray-400"> /night</span>
//         </p>

//         <div className="flex items-center justify-between mt-4">
//           <p className="text-sm text-gray-500 flex items-center gap-1">
//             👤 2 People
//           </p>
//           <Link href="#" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition">
//             Book Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card

