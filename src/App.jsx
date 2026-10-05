function App() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-[1500px] mx-auto px-8">
          <nav className="h-[95px] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2855d9] rounded-lg flex items-center justify-center text-white text-xl">

              </div>
              <span className="text-2xl font-bold">Base</span>
            </div>
            <div className="flex items-center gap-10">
              <a href="" className="text-[#2855d9] font-medium">Home</a>
              <a href="" className="text-grey-700">Features</a>
              <a href="" className="text-grey-700">Pages<span className="ml-1">^</span></a>
              <a href="" className="text-grey-700">Support</a>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-xl"></span>
              <a href="" className="text-sm text-grey-700">Sign In</a>
              <a href="" className="text-sm text-grey-700">Sign Up</a>
            </div>
          </nav>
        </div>
      </header>
      <section className="relative min-h-[780px] overflow-hidden">
        <div className="absolute top-0 left-0 w-[53%] h-600px bg-[#143ed4] rounded-bl-[55%]">
        <div className="absolute right-[8%] top-[125px] w-[470px] h-[450px] overflow-hidden rounded-bl-[50%]">
          <img src="/images/hero.png" alt="" className="w-full h-full object-cover" />

        </div>
        </div>
        <div className="relative z-20 max-w-[1500px] mx-auto px-8 pt-[185px]">
          <div className="w-[50%]">
            <h1 className="text-5xl font-bold leading-[1.8] text-black">We Specialize in UI/UX, Web<br></br> Development, digital<br></br> marketing</h1>
            <p className="text-grey-700 text-lg mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus animi reprehenderit minima consectetur! Ea, aperiam deserunt dolores id quos earum sint porro eligendi.</p>
            <div className="flex items-center gap-6 mt-8">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}