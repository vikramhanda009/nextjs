import Image from 'next/image'
import backg from '@/public/demo.jpg'
export default function Page() {
  return (
    <div className="space-y-6">
      
      {/* Fixed size image */}
      <Image
        src="/window.svg"
        width={200}
        height={200}
        alt="fixed image"
        className="rounded-full"
      />

      {/* Fill image */}
      <div className="relative w-64 h-64">
        <Image
          src={backg}
          fill
          alt="fill image"
          quality={75}
          className="rounded-full object-cover"
          placeholder='blur'
          blurDataURL=""
        />
      </div>

    </div>
  )
}
