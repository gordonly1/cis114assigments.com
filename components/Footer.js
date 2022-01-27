import Link from "next/link"


const FooterLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className='text-indigo-600 hover:underline' target='_blank'>
        {children}
      </a>
    </Link>
  )
}

export default function Example() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-600">
            2022,
            {' '}
            <FooterLink href='https://hasansefaozalp.com/'>Hasan Sefa Ozalp</FooterLink>
            {' '}
            - CIS 114, taught by
            {' '}
            <FooterLink href='https://cdasilva.info/'>Professor Claudia P. Ferreira Da Silva</FooterLink>
            {' '}
          </p>
        </div>
      </div>
    </footer>
  )
}
