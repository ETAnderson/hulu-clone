import Image from 'next/image'
import HeaderItem from '../pages/HeaderItem'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline';


function Header() {
    return (
        <header className=''>
            <div>
                <HeaderItem title='HOME' Icon={HomeIcon}/>
            </div>
            <Image 
                className='object-contain'
                src='https://upload.wikimedia.org/wikipedia/commons/3/30/Hulu_logo_2017.svg' 
                alt=''
                width={200}
                height={100}
            />
            
        </header>
    )
}

export default Header
