import Image from 'next/image'

export default function Hero({ title='Richard', subtitle='Enterprise Software Engineering & Systems Integration', description, portrait='/assets/portrait-placeholder.svg', river='/assets/hero-river.svg' }){
  return (
    <div className="hero-root bg-white pt-12 pb-6">
      <div className="container-centered relative">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="text-sm uppercase tracking-wide text-teal-700 font-semibold">Meet the instructor</p>
            <h1 className="mt-4 text-5xl font-heading">{title}</h1>
            <p className="mt-3 text-xl text-gray-700 font-medium">{subtitle}</p>
            <p className="mt-6 max-w-prose text-gray-600">{description || 'Experienced instructor helping organisations strengthen enterprise software engineering capability, modern full-stack application development, API integration, and cloud-native delivery.'}</p>
            <div className="mt-6 flex gap-4">
              <button className="cta-primary">Talk to {title.split(' ')[0]}</button>
              <button className="cta-outline">View all instructors →</button>
            </div>

            <div className="card-row mt-8">
              <div className="p-4 bg-white rounded-md border">
                <h4 className="font-semibold">Enterprise software engineering</h4>
                <p className="text-sm text-gray-500 mt-2">Extensive experience across complex enterprise application environments.</p>
              </div>
              <div className="p-4 bg-white rounded-md border">
                <h4 className="font-semibold">Financial services systems</h4>
                <p className="text-sm text-gray-500 mt-2">Strong background in reliable, scalable, high-performance systems.</p>
              </div>
              <div className="p-4 bg-white rounded-md border">
                <h4 className="font-semibold">Full-stack development</h4>
                <p className="text-sm text-gray-500 mt-2">Java, Scala, C#, C++, Python, JavaScript and TypeScript.</p>
              </div>
              <div className="p-4 bg-white rounded-md border">
                <h4 className="font-semibold">Systems integration specialist</h4>
                <p className="text-sm text-gray-500 mt-2">APIs, messaging, distributed systems and modern engineering practices.</p>
              </div>
            </div>

          </div>

          <div className="relative">
            <div className="absolute -right-24 top-8">
              <Image src={river} alt="river" width={420} height={420} className="rounded-l-lg" />
            </div>
            <div className="relative z-10">
              <Image src={portrait} alt="portrait" width={420} height={420} className="hero-portrait" />
            </div>
          </div>
        </div>
        <div className="hero-river-mask" aria-hidden></div>
      </div>
    </div>
  )
}
