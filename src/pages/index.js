import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <Navbar/>
    </div>
  )
}
