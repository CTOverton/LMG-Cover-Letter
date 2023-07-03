import { motion } from 'framer-motion'
import { IMAGES } from '@/config/images'
import React from 'react'

export const ComponentShowcase = () => (
  <div
    className={'mb-4 mt-16 grid grid-cols-3 rounded-2xl bg-gray-100 xl:-mx-32'}
  >
    <motion.div
      className={'z-0 aspect-square p-2 sm:p-8'}
      initial={{
        x: '100%',
      }}
      whileInView={{
        x: '0%',
      }}
      transition={{
        type: 'Tween',
        delay: 0.5,
        duration: 0.8,
      }}
    >
      <img
        className={'object-fit h-full w-full'}
        src={IMAGES.CATEGORIES_COMPONENT}
        alt={''}
      />
    </motion.div>
    <div className={'z-10 aspect-square p-2 sm:p-8'}>
      <img
        className={'object-fit h-full w-full'}
        src={IMAGES.TRANSACTIONS_COMPONENT}
        alt={''}
      />
    </div>
    <motion.div
      className={'z-0 aspect-square p-2 sm:p-8'}
      initial={{
        x: '-100%',
      }}
      whileInView={{
        x: '0%',
      }}
      transition={{
        type: 'Tween',
        delay: 0.5,
        duration: 0.8,
      }}
    >
      <img
        className={'object-fit h-full w-full'}
        src={IMAGES.MERCHANTS_COMPONENT}
        alt={''}
      />
    </motion.div>
  </div>
)
