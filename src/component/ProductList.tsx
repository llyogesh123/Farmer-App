import { useParams } from 'react-router-dom';
import ProductCart from './ProductCart';

export default function ProductList() {
  const { user_id } = useParams<{ user_id: string }>();

  return (
    <div className="h-full flex flex-col items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/352096/pexels-photo-352096.jpeg?cs=srgb&dl=pexels-achim-bongard-87217-352096.jpg&fm=jpg')"}}>
      <div className="w-full max-w-4xl p-6 bg-white bg-opacity-75 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-8 text-green-800 text-center">Product List</h1>
        <ProductCart userId={(user_id as unknown) as string} />
      </div>
    </div>
  );
}