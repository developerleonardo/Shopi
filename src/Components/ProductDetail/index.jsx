import { useContext } from 'react';
import { ShoppingCarContext } from '../../Context';
import './styles.css'

const ProductDetail = () => {
    const { isProductDetailOpen,
        closeProductDetail,
        productToShow } = useContext(ShoppingCarContext);

    return (
        <aside
            className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-full f-full md:w-[360px] h-5/6 md:top-[68px] flex-col fixed right-0 border border-black rounded-lg bg-white overflow-y-scroll`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div
                    onClick={() => { closeProductDetail() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </div>
            </div>
            <figure className='px-6'>
                <img
                    className='w-full h-full rounded-lg'
                    src={productToShow.image}
                    alt={productToShow.title} />
            </figure>
            <p className='flex flex-col p-6 h-full'>
                <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
                <span className='font-medium text-md'>{productToShow.title}</span>
                <span className='font-light text-sm'>{productToShow.description}</span>
            </p>
        </aside>
    )
};

export { ProductDetail };