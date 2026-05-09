import Card from './components/Card.jsx'

export default function App() {
  return (
    <div>
      <header className="text-center">
        <h1>My blog</h1>
        <p>Lorem ipsum dolor sit <span className="bg-black text-white px-1">amet</span></p>
      </header>

      {/* post card container */}
      <section className='p-4 flex flex-col gap-4'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  )
}

// export default App