import woods from '../assets/woods.jpg'

export default function Card() {
    return (
        <div className='flex flex-col border'>
            {/* img */}
            <div className=''>
                <img src={woods} alt="" />
            </div>

            {/* content */}
            <div className='px-2'>
                <h2>title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, harum.</p>
            </div>
        </div>
    )
}