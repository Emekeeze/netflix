

function HomeBanner() {
  return (
    <div className='h-screen w-screen relative'>
      <img
        className='w-full h-full'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/7cb43595-6e14-4ab0-986a-ab7f2a0d5275/NG-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_9ba9a38a-7aa7-412f-9d27-8a221b05d24f_small.jpg"
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/7cb43595-6e14-4ab0-986a-ab7f2a0d5275/NG-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_9ba9a38a-7aa7-412f-9d27-8a221b05d24f_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/7cb43595-6e14-4ab0-986a-ab7f2a0d5275/NG-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_9ba9a38a-7aa7-412f-9d27-8a221b05d24f_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/7cb43595-6e14-4ab0-986a-ab7f2a0d5275/NG-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_9ba9a38a-7aa7-412f-9d27-8a221b05d24f_large.jpg 1800w"
        alt=""
      />
      <div className='absolute   h-full w-full bg-black bg-opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
        <div className="text-center">
          <h1 className="text-white font-bold text-5xl">
            Unlimited Movies, TV shows, and more
          </h1>
          <p className='text-white text-3xl mt-3'>Watch Anywhere, cancel Anytime</p>
          <div className='mt-8'>
            <a href='/login' className='bg-red-700 mt-8 text-white p-4 px-16 text-lg rounded font-semibold'>Signup</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
