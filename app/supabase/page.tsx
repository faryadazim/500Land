"use client"
import { useEffect, useState } from 'react'
import supabase from '../../supabase'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button" 
export default async function Home() {
  const [countryData, setCountryData] = useState<any>()
  const [input, setInput] = useState<any>('')

  const fetchData = async () => {


    let { data: country, error } = await supabase
      .from('country')
      .select('*')
    console.log(country, "country")
    setCountryData(country)
  }


  const insertData = async () => {
    const { data, error } = await supabase
      .from('country')
      .insert([
        { country_name: input }
      ])

  }
  const deleteFunc = async () => {
    const { data, error } = await supabase
      .from('country')
      .insert([
        { country_name: input }
      ])

  }




  // useEffect(() => {
  //   fetchData()
  // }, [])
  return (
    <>

<hr />
<hr />
<hr />

      <ul>

        {
      countryData &&   countryData.map((country: any) => {
            return <li> {country?.country_name}</li>
          })
        }


      </ul>

<hr />

      <br />
<hr />
<br />
<Input placeholder="you@company.com" className="bg-white mt-[6px]"   onChange={(e)=>{setInput(e.target.value)

console.log("Input")
}} />
 
<br />
  <Button  variant="primaryDark" className="  mr-2   w-full px-6 rounded-full font-bold  py-6 my-2" style={{ fontFamily: "sans-serif" }}  onClick={() => insertData}>Send Message</Button>
{/*            
      <button> Submit</button><br />
      <button onClick={() => deleteFunc}> Delete</button> */}

      {/* Lorem */}
    </>
  )
}
