'use client'

import React, { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import { products } from '@/lib/products'
import { useOrder } from '@/hooks/useOrder'
import { calculateTotal } from '@/utils/orderCalculations'
import { Toaster, toast } from 'react-hot-toast'
import OrderModal from './OrderModal'

type Translations = {
  en: { name: string; description: string }
  vn: { name: string; description: string }
}

const Hero = () => {
  const t = useTranslations('hero')
  const locale = useLocale()
  const { orderItems, updateQuantity, resetOrder } = useOrder()
  const [filter, setFilter] = useState<'all' | 'food' | 'drinks'>('all')
  const [isModalOpen, setIsModalOpen] = useState(false)

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
      'alcohol',
      'coca-cola',
      'pepsi',
      '7up',
    ].some((drinkId) => product.id.includes(drinkId))
    return filter === 'drinks' ? isDrink : !isDrink
  })

  const showToast = (message: string, type: 'success' | 'destructive') => {
    toast(message, {
      duration: 1500,
      style: {
        background: type === 'success' ? '#c3f3d7' : '#f3c3c3',
        color: type === 'success' ? '#2e5c41' : '#a75151',
      },
    })
  }

  const handleUpdateQuantity = (productId: string, delta: number) => {
    const productName = products.find((p) => p.id === productId)?.translations[
      locale === 'en' ? 'en' : 'vn'
    ].name
    if (delta > 0) {
      showToast(`${t('added-product')} ${productName}`, 'success')
    } else {
      showToast(`${t('removed-product')} ${productName}`, 'destructive')
    }
    updateQuantity(productId, delta)
  }

  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: 'green',
              secondary: 'white',
            },
          },
        }}
      />
      <div className='mx-auto my-20 flex max-w-7xl flex-col items-center justify-center gap-8 px-4'>
        <LanguageSwitcher />
        <h1 className='text-center text-4xl font-bold md:text-5xl'>
          {t('title')}
        </h1>

        <div className='mb-4 flex gap-2'>
          <button
            onClick={() => setFilter('all')}
            className={`rounded-md px-6 py-3 text-lg ${
              filter === 'all'
                ? 'border border-gray-900 bg-gray-900 text-white hover:bg-gray-700'
                : 'border border-gray-900 bg-white text-gray-900 hover:bg-gray-200'
            }`}
          >
            {locale === 'en' ? 'All' : 'Tất cả'}
          </button>
          <button
            onClick={() => setFilter('food')}
            className={`flex flex-col items-center gap-1 rounded-md px-6 py-3 text-lg md:flex-row ${
              filter === 'food'
                ? 'border border-gray-900 bg-gray-900 text-white hover:bg-gray-700'
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
            className={`flex flex-col items-center gap-1 rounded-md px-6 py-3 text-lg md:flex-row ${
              filter === 'drinks'
                ? 'border border-gray-900 bg-gray-900 text-white hover:bg-gray-700'
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

        <div className='mb-40 grid min-w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className='flex min-h-[300px] flex-col items-center justify-between gap-2 rounded-lg border p-10 shadow-md'
            >
              <div className='text-center text-3xl font-bold'>
                {
                  product.translations[
                    locale as keyof typeof product.translations
                  ].name
                }
              </div>
              <div className='text-center text-2xl'>
                {product.price.toLocaleString()}đ
              </div>
              <div className='flex items-center gap-2'>
                <button
                  onClick={() => handleUpdateQuantity(product.id, -1)}
                  className='rounded bg-red-500 px-4 pb-2 text-4xl text-white hover:bg-red-900'
                >
                  -
                </button>
                <span className='mr-1 flex w-6 justify-center text-2xl font-bold'>
                  {orderItems[product.id] || 0}
                </span>
                <button
                  onClick={() => handleUpdateQuantity(product.id, 1)}
                  className='rounded bg-green-700 px-4 pb-2 text-4xl text-white hover:bg-green-900'
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {Object.keys(orderItems).length > 0 && (
        <div className='w-full text-center md:w-auto'>
          <h2 className='text-lg font-bold md:text-xl'>{t('order_summary')}</h2>
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

                {` (${orderItems[product.id]}x)`}
              </div>
            ))}
          <div className='fixed bottom-0 flex w-full flex-col items-center gap-4 border-t border-gray-200 bg-white p-4'>
            <h1 className='text-xl font-bold md:text-2xl'>
              {t('total')}:{' '}
              <span className='text-green-600'>
                {calculateTotal(orderItems).toLocaleString()}đ
              </span>
            </h1>
            <hr className='w-full border-t border-gray-200' />
            <div className='flex w-full flex-col justify-center gap-4 md:flex-row'>
              <button
                onClick={() => setIsModalOpen(true)}
                className='w-full rounded bg-gray-900 px-6 py-3 text-lg font-medium text-white hover:bg-gray-700 md:w-auto'
              >
                {t('view_order')}
              </button>
              <button
                onClick={resetOrder}
                className='w-full rounded bg-red-600 px-6 py-3 text-lg font-medium text-white hover:bg-red-700 md:w-auto'
              >
                {t('reset_order')}
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className='mb-4 text-3xl font-bold'>{t('order_summary')}</h2>
          {products
            .filter((product) => orderItems[product.id])
            .map((product) => (
              <div
                key={`modal-summary-${product.id}`}
                className='flex text-sm md:text-xl'
              >
                <div className='flex'>
                  {
                    product.translations[
                      locale as keyof typeof product.translations
                    ].name
                  }
                  <span className='ml-1 font-bold'>{`(${orderItems[product.id]}x)`}</span>
                </div>
                <div className='ml-auto font-bold'>
                  {` ${orderItems[product.id] * product.price}đ`}
                </div>
              </div>
            ))}
          <div className='mt-4'>
            <hr className='w-full border-t border-gray-200' />
          </div>
          <div className='mt-4'>
            <h1 className='text-xl text-center font-bold md:text-2xl'>
              {t('total')}:{' '}
              <span className='text-green-600'>
                {calculateTotal(orderItems).toLocaleString()}đ
              </span>
            </h1>
          </div>
        </OrderModal>
      )}
    </>
  )
}

export default Hero
