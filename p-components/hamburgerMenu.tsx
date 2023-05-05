import { UserId } from '@/types/userId'
import Link from 'next/link'
import router from 'next/router'
import { slide as Menu } from 'react-burger-menu'

const HamburgerMenu = ({ userId }: UserId) => (
  <div className="relative">
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={'auto'}
      className="left-0 top-0"
      noOverlay={false}
      customCrossIcon={<CrossIcon />}
      overlayClassName="bg-[#000000] top-0"
      id={'crossBtn'}
    >
      <Links userId={userId} />
    </Menu>
  </div>
)

const HamburgerIcon = () => (
  <div className="">
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.47662 24.7917H29.81"
        stroke="black"
        strokeWidth="1.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.47662 17.5H29.81"
        stroke="black"
        strokeWidth="1.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.47664 10.2084H29.81"
        stroke="black"
        strokeWidth="1.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)
const CrossIcon = () => (
  <div className="">
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.0625 5.94791C18.9661 5.85134 18.8517 5.77473 18.7256 5.72245C18.5996 5.67018 18.4645 5.64328 18.3281 5.64328C18.1917 5.64328 18.0566 5.67018 17.9306 5.72245C17.8046 5.77473 17.6901 5.85134 17.5937 5.94791L12.5 11.0312L7.40624 5.93749C7.3098 5.84105 7.19531 5.76455 7.0693 5.71236C6.9433 5.66016 6.80825 5.6333 6.67186 5.6333C6.53548 5.6333 6.40043 5.66016 6.27442 5.71236C6.14842 5.76455 6.03393 5.84105 5.93749 5.93749C5.84105 6.03393 5.76455 6.14842 5.71236 6.27442C5.66016 6.40043 5.6333 6.53548 5.6333 6.67186C5.6333 6.80825 5.66016 6.9433 5.71236 7.0693C5.76455 7.19531 5.84105 7.3098 5.93749 7.40624L11.0312 12.5L5.93749 17.5937C5.84105 17.6902 5.76455 17.8047 5.71236 17.9307C5.66016 18.0567 5.6333 18.1917 5.6333 18.3281C5.6333 18.4645 5.66016 18.5995 5.71236 18.7256C5.76455 18.8516 5.84105 18.966 5.93749 19.0625C6.03393 19.1589 6.14842 19.2354 6.27442 19.2876C6.40043 19.3398 6.53548 19.3667 6.67186 19.3667C6.80825 19.3667 6.9433 19.3398 7.0693 19.2876C7.19531 19.2354 7.3098 19.1589 7.40624 19.0625L12.5 13.9687L17.5937 19.0625C17.6902 19.1589 17.8047 19.2354 17.9307 19.2876C18.0567 19.3398 18.1917 19.3667 18.3281 19.3667C18.4645 19.3667 18.5995 19.3398 18.7256 19.2876C18.8516 19.2354 18.966 19.1589 19.0625 19.0625C19.1589 18.966 19.2354 18.8516 19.2876 18.7256C19.3398 18.5995 19.3667 18.4645 19.3667 18.3281C19.3667 18.1917 19.3398 18.0567 19.2876 17.9307C19.2354 17.8047 19.1589 17.6902 19.0625 17.5937L13.9687 12.5L19.0625 7.40624C19.4583 7.01041 19.4583 6.34374 19.0625 5.94791Z"
        fill="white"
      />
    </svg>
  </div>
)
export const Links = ({ userId }: UserId) => (
  <>
    <div className="bg-inherit text-white text-xl text-left ml-6 mt-40">
      <div
        className="clickable"
        onClick={() => router.push(`/myProfile/${userId}`)}
      >
        <p className="pr-24 mb-8">Min profil</p>
      </div>
      <Link href="/information-side">
        <p className="pr-24 mb-8">Så fungerar Borrow</p>
      </Link>
      <Link href="/contact">
        <p className="">Kontakta oss</p>
      </Link>
    </div>
  </>
)

export default HamburgerMenu
