import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

const VNFlag = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 36 36'
    className='inline-block'
  >
    <path
      fill='#DA251D'
      d='M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4'
    />
    <path
      fill='#FF0'
      d='M19.753 16.037L18 10.642l-1.753 5.395h-5.672l4.589 3.333l-1.753 5.395L18 21.431l4.589 3.334l-1.753-5.395l4.589-3.333z'
    />
  </svg>
)

const UKFlag = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 36 36'
    className='inline-block'
  >
    <path
      fill='#00247D'
      d='M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z'
    />
    <path
      fill='#CF1B2B'
      d='m25.14 23l9.712 6.801a4 4 0 0 0 .99-1.749L28.627 23zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943zm10-10h2.141l9.711-6.8a4 4 0 0 0-1.937-1.085L23 12.057zm-12.141 0L1.148 6.2a4 4 0 0 0-.991 1.749L7.372 13z'
    />
    <path
      fill='#EEE'
      d='M36 21H21v10h2v-5.836L31.335 31H32a4 4 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21zM36 9a3.98 3.98 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4 4 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059zM13 5v5.837L4.664 5H4a4 4 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A4 4 0 0 0 0 9v.059L5.628 13H0v2h15V5z'
    />
    <path fill='#CF1B2B' d='M21 15V5h-6v10H0v6h15v10h6V21h15v-6z' />
  </svg>
)

const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'vn' : 'en'
    router.replace(`/${nextLocale}`)
    router.refresh()
  }

  return (
    <button
      onClick={toggleLocale}
      className='flex items-center gap-2 rounded-md border border-foreground px-4 py-2 text-sm transition-colors hover:bg-foreground hover:text-background'
    >
      {locale === 'en' ? <VNFlag /> : <UKFlag />}
      {locale === 'en' ? 'Tiếng Việt' : 'English'}
    </button>
  )
}

export default LanguageSwitcher
