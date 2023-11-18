"use client"
import Head from '@/components/Header';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head />
      <ul>
        <Link href={"/profile/1"}>Profile 1</Link>
        <Link href={"/profile/2"}>Profile2</Link>
        {/* Passing query in link */}
        <Link
          // suppose i have to prefetch some data then i will use
          prefetch={true}
          // if you want to scroll top of page then pass
          scroll
          href={{
            pathname: "/profile/3",
            query: {
              userName: "akshay",
            },
          }}>Profile 3</Link>
      </ul>
    </div>
  )
}
