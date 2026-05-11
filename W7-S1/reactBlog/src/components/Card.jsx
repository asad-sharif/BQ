
export default function Card(props) {
    console.log(props);

    return (
        <div className='flex flex-col border'>
            {/* img */}
            <div className=''>
                <img src={props.img} alt="" />
            </div>

            {/* content */}
            <div className='px-2'>
                {props.title && <h2>{props.title}</h2>}
                <p>{props.description}</p>
            </div>
        </div>
    )
}