import { useRouter } from 'next/router'
import React from 'react'


export default function Home() {
  const router = useRouter();
  const section = router.query.home;
  let sectionText = `Section : ${section}`
  if(section === undefined){
     sectionText = " "
  }
  console.log(router)
  return (
    <div>
      <h1>Home</h1>
      <p>{sectionText}</p>
    </div>
  )
}
