import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <section className='bg-red-500 w-full rounded-xl'>
        <div>
            <Image loading='lazy' src="https://i.pinimg.com/564x/4f/9e/4f/4f9e4f9a886af9ead7fa7be65e72824b.jpg" width={100} height={100} alt='img' />
            <Image loading='lazy' src=" https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRuuxsYPbXcBU6yS_19KqNjANDzGUe6jGY3oWp7-LSuGcvvhpuE " width={100} height={100} alt='img' />

        </div>
    </section>
  )
}

export default HomePage