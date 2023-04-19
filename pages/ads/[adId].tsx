// import clientPromise from '@/lib/mongodb'
// import { useRouter } from 'next/router'
// import { Ad } from '@/types/ads'
// import { useEffect, useState } from 'react'
// import Link from 'next/link'
// import { v4 as uuidv4 } from 'uuid'

// interface Props {
//   ads: Ad
// }

// export default function Post({ ads }: Props) {
//   const router = useRouter()
//   const { adId } = router.query
//   console.log(adId)

//   /*Defining a function (pass to other files), that has
//   a object formData that contains following properties*/

//   console.log(ads?.id)
//   return (
//     <div className="bg-[#F5F5F5] text-center max-w-sm  ">
//       <div className=" font-sans">
//         <div className="px-4">
//           <div className="flex-column">
//             <div className="text-left">
//               <div className="mt-6 rounded-sm border-[#46649D] border-2">
//                 <p className="bold text-[#0f0e0e] mt-2">
//                   <b>
//                     Titel:
//                     <div
//                       className="bg-[#F5F5F5]"
//                       // placeholder={`${ads.title}`}
//                     ></div>
//                   </b>
//                 </p>
//                 <p className="text-[#0f0e0e] mt-2 placeholder-black">
//                   Beskrivning:
//                   <div
//                     className="bg-[#F5F5F5] mt-2 placeholder-black"
//                     // placeholder={`${ads.description}`}
//                   ></div>
//                 </p>
//                 <p className="text-[#0f0e0e] mt-2 placeholder-black">
//                   Annonsör:
//                   <div
//                     className="bg-[#F5F5F5] mt-2 placeholder-black"
//                     // placeholder={`${ads.fullName}`}
//                   ></div>
//                 </p>

//                 <button>
//                   <p style={{ color: 'blue' }}>
//                     <b className="text-[#0f0e0e] ">Kontakt: </b>
//                     <div
//                       className="bg-[#F5F5F5] mt-2 placeholder-blue-950"
//                       // placeholder={`${ads.email}`}
//                     ></div>
//                   </p>
//                 </button>

//                 <div className="flex mt-4">
//                   {/* <div className="">
//                       <button
//                         className="bg-[#9EBB9D] rounded-sm bg- mb-1 mx-1 px-2"
//                         value={ads._id}
//                         type="submit"
//                         //   onClick={() => updateAd(ad.id)}
//                       >
//                         Bekräfta ändring
//                       </button>
//                     </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export async function getServerSideProps(context: any) {
//   try {
//     const { adId } = context.query
//     const client = await clientPromise
//     const db = client.db('borrow')

//     const ads = await db.collection('ads').findOne({ id: adId })
//     console.log(ads)

//     return {
//       props: { ads: JSON.parse(JSON.stringify(ads)) },
//     }
//   } catch (e) {
//     console.error(e)
//     return {
//       props: { ads: {} },
//     }
//   }
// }
