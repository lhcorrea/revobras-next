import Link from 'next/link'

const AvatarButton = ({ src, size, active = false, children, ...props }) => (
    <Link {...props}>
                     <div>
                        <button type="button" className="flex rounded-full bg-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-yellow-200" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                         <img width={size} height={size} className=" rounded-full" src={src} alt=""></img>
                        </button>
                    </div>
    </Link>
)

export default AvatarButton;
