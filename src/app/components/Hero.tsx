'use client'

import React, { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import { products } from '@/lib/products'
import { useOrder } from '@/hooks/useOrder'
import { calculateTotal } from '@/utils/orderCalculations'

const Hero = () => {
  const t = useTranslations('Hero')
  const locale = useLocale()
  const { orderItems, updateQuantity, resetOrder } = useOrder()
  const [filter, setFilter] = useState<'all' | 'food' | 'drinks'>('all')

  const filteredProducts = products.filter((product) => {
    if (filter === 'all') return true
    const isDrink = [
      'sting',
      'redbull',
      'coffee',
      'larue',
      'tiger-crystal',
      'saigon-beer',
      'coconut',
      'water',
      'sugarcane',
      'orange-juice',
      'soju-jinro',
      'nep-moi',
      'mens-vodka',
      'coca-cola',
      'pepsi',
      '7up',
    ].some((drinkId) => product.id.includes(drinkId))
    return filter === 'drinks' ? isDrink : !isDrink
  })

  return (
    <>
      <div className='mx-auto my-20 flex max-w-2xl flex-col items-center justify-center gap-4 px-4'>
        <LanguageSwitcher />
        <h1 className='text-center text-3xl font-bold md:text-4xl'>
          {t('title')}
        </h1>

        <div className='mb-4 flex gap-2'>
          <button
            onClick={() => setFilter('all')}
            className={`rounded-full px-6 py-3 text-lg ${
              filter === 'all'
                ? 'bg-gray-900 text-white hover:bg-gray-700'
                : 'border border-gray-900 bg-white text-gray-900 hover:bg-gray-200'
            }`}
          >
            {locale === 'en' ? 'All' : 'Tất cả'}
          </button>
          <button
            onClick={() => setFilter('food')}
            className={`flex items-center gap-1 rounded-full px-6 py-3 text-lg ${
              filter === 'food'
                ? 'bg-gray-900 text-white hover:bg-gray-700'
                : 'border border-gray-900 bg-white text-gray-900 hover:bg-gray-200'
            }`}
          >
            {locale === 'en' ? (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 14 14'
                  className='inline'
                >
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M7 13.5A6.5 6.5 0 0 0 13.5 7H.5A6.5 6.5 0 0 0 7 13.5ZM7.5 5l3-4.5M9 5.5l3.5-3'
                  />
                </svg>
                Food{' '}
              </>
            ) : (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 14 14'
                  className='inline'
                >
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M7 13.5A6.5 6.5 0 0 0 13.5 7H.5A6.5 6.5 0 0 0 7 13.5ZM7.5 5l3-4.5M9 5.5l3.5-3'
                  />
                </svg>
                Đồ ăn{' '}
              </>
            )}
          </button>
          <button
            onClick={() => setFilter('drinks')}
            className={`flex items-center gap-1 rounded-full px-6 py-3 text-lg ${
              filter === 'drinks'
                ? 'bg-gray-900 text-white hover:bg-gray-700'
                : 'border border-gray-900 bg-white text-gray-900 hover:bg-gray-200'
            }`}
          >
            {locale === 'en' ? (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 48 48'
                  className='inline'
                >
                  <g
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='4'
                  >
                    <path
                      d='M2 20c0 12.15 6 22 18 22s18-9.85 18-22z'
                      clipRule='evenodd'
                    />
                    <path d='M20 14V6m10 8v-4m-20 4v-4m26.19 20.623c.99-2.584 1.574-5.486 1.752-8.572Q38.46 22 39 22c3.866 0 7 2.015 7 4.5S42.866 31 39 31c-1 0-1.95-.135-2.81-.377' />
                  </g>
                </svg>
                Drinks{' '}
              </>
            ) : (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 48 48'
                  className='inline'
                >
                  <g
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='4'
                  >
                    <path
                      d='M2 20c0 12.15 6 22 18 22s18-9.85 18-22z'
                      clipRule='evenodd'
                    />
                    <path d='M20 14V6m10 8v-4m-20 4v-4m26.19 20.623c.99-2.584 1.574-5.486 1.752-8.572Q38.46 22 39 22c3.866 0 7 2.015 7 4.5S42.866 31 39 31c-1 0-1.95-.135-2.81-.377' />
                  </g>
                </svg>
                Đồ uống{' '}
              </>
            )}
          </button>
        </div>

        <div className='flex w-full flex-col gap-4'>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className='flex w-full flex-col items-center justify-between gap-2 md:flex-row md:gap-4'
            >
              <div className='text-center text-lg font-bold md:text-left md:text-xl'>
                {
                  product.translations[
                    locale as keyof typeof product.translations
                  ].name
                }
              </div>
              <div className='flex flex-col items-center gap-2 md:flex-row md:gap-4'>
                <div className='text-center text-base md:w-40 md:text-right md:text-lg'>
                  {typeof product.price === 'number' ? (
                    `${product.price.toLocaleString()}đ`
                  ) : (
                    <div className='flex flex-col items-center gap-1 md:items-end'>
                      <div>
                        {locale === 'en' ? 'Small' : 'Nhỏ'}:{' '}
                        {product.price.small?.toLocaleString()}đ
                      </div>
                      <div>
                        {locale === 'en' ? 'Big' : 'Lớn'}:{' '}
                        {product.price.big?.toLocaleString()}đ
                      </div>
                    </div>
                  )}
                </div>
                <div className='flex items-center gap-2'>
                  <button
                    onClick={() => updateQuantity(product.id, -1)}
                    className='rounded bg-red-500 px-2 py-1 text-white hover:bg-red-900'
                  >
                    -
                  </button>
                  <span className='w-6 text-center'>
                    {orderItems[product.id] || 0}
                  </span>
                  <button
                    onClick={() => updateQuantity(product.id, 1)}
                    className='rounded bg-green-500 px-2 py-1 text-white hover:bg-green-700'
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {Object.keys(orderItems).length > 0 && (
          <button
            onClick={resetOrder}
            className='w-full rounded bg-red-500 px-4 py-2 text-white hover:bg-red-900 md:w-auto'
          >
            {t('reset_order')}
          </button>
        )}

        {Object.keys(orderItems).length > 0 && (
          <div className='mt-4 w-full text-center md:w-auto'>
            <h2 className='text-lg font-bold md:text-xl'>
              {t('order_summary')}
            </h2>
            {products
              .filter((product) => orderItems[product.id])
              .map((product) => (
                <div
                  key={`summary-${product.id}`}
                  className='text-sm md:text-base'
                >
                  {
                    product.translations[
                      locale as keyof typeof product.translations
                    ].name
                  }
                  {typeof product.price !== 'number' &&
                    ` (${orderItems[product.id]}x)`}
                </div>
              ))}
            <div className='mt-2 text-lg font-bold md:text-xl'>
              {t('total')}: {calculateTotal(orderItems).toLocaleString()}đ
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Hero
