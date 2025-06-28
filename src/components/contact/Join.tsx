import signUpImage from '../../assets/signUpImage.png'; // Adjust the path as necessary

const Join = () => {
  return (
    <div className='bg-orange-500 text-white p-6 rounded-md flex flex-col md:flex-row items-center justify-between'>
        <div className='gap-y-3'>
        <div className="mb-4 md:mb-0 gap-y-3">
          <h3 className="text-2xl font-bold">WHY WAIT? JOIN US TODAY!</h3>
          <p className="text-sm mt-2">
            Start your journey with us and experience a platform designed for trust, quality, and convenience.
          </p>
        </div>
        <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-950">
          Sign Up
        </button>
      </div>
      <div>
        <img src={signUpImage} alt="" />
      </div>
    </div>
    
  )
}

export default Join