import { useContext } from "react";
import { ShoppingCarContext } from "../../Context";

const Card = (data) => {
    const { count, 
            setCount, 
            openProductDetail, 
            setProductToShow } = useContext(ShoppingCarContext)
    
    const showProduct = (productDetail) => {;
        openProductDetail();
        setProductToShow(productDetail)
    }

    return (
        <div 
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'
        onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(e) => {
                        e.stopPropagation();
                        setCount(count + 1)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    );
}

export { Card }