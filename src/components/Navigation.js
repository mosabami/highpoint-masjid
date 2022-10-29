// import Link from "next/link"
// import { Link } from 'react-router-dom';
import HeroBanne  from './HeroBanne'
import HeroText from './HeroText'

const navigation = [
 { name: 'Home', href: '/home' },
 { name: 'Events', href: '/events' },
]

export default function Navigation(props) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-24 lg:justify-start" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                
                      <span className="sr-only">{props.data.name}</span>
                      <img
                        className={`${props.data.branding.larger_logo ? "h-32" : "h-16"} w-auto`}
                        src={props.data.branding.logo_url}
                        alt="hero"
                      />
                   
                  </a>
                </div>
              </div>
              <div className="xhidden md:block md:ml-10 pr-4 space-x-8">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-red-900">
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
            <HeroText data={props.data} />
        </div>
      </div>
      <HeroBanne data={props.data} />
    </div>
  )
}
