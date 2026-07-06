import Hero from '../components/Hero'

export default function HeroDemo(){
  return (
    <main>
      <Hero title="Richard" subtitle="Enterprise Software Engineering & Systems Integration" />
      <section className="container-centered mt-12">
        <h2 className="text-2xl font-semibold">Demo content below</h2>
        <p className="mt-4 text-gray-600">This page demonstrates the Hero implementation that matches the mockups. I used placeholder assets; replace /public/assets/* with your real images to match the final design exactly.</p>
      </section>
    </main>
  )
}
