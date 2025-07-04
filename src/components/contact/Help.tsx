import JoinUs from '../About/JoinUs'
import SearchBar from '../SearchBar'
import Categories from './Categories'
import ContactOptions from './ContactOptions'
import Faq from './Faq'

import MassageForm from './MassageForm'

const Help = () => {
  return (
    <div className='pt-20'>
        <div className='flex flex-col items-center justify-center gap-y-5'>
            <p className='text-5xl font-semibold'>We’re here to help</p>
            <p className='text-xl font-normal text-gray-400'>Whether you have a question or need assistance, getting in touch with us is simple.</p>
        </div>
        <div className='py-5'>
            <SearchBar/>
        </div>
        <div>
            <Categories/>
        </div>
        <div className='py-5'>
            <ContactOptions/>
        </div>
        <div className='py-5'>
            <MassageForm/>
        </div>
        <div className='py-5'>
            <Faq />
        </div>
        <div className='py-5'>
            <JoinUs/>
        </div>
    </div>
  )
}

export default Help