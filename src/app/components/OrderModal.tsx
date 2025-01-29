import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const OrderModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 flex items-center justify-center overflow-hidden bg-black bg-opacity-50'
      onClick={onClose}
    >
      <div
        className='relative max-h-[600px] max-w-xl overflow-y-auto rounded-md border-2 border-black bg-white px-10 py-12 shadow-lg'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute right-2 top-2 text-gray-500 hover:text-gray-700'
          onClick={onClose}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18 18 6M6 6l12 12'
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}

export default OrderModal
