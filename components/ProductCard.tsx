import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
}) => {
  const router = useRouter();
  return (
    <div className="bg-white shadow-product hover:shadow-product-hover rounded-[16px] p-2 md:p-4 text-center flex flex-col justify-between">
      {/* Product Image Section */}
      <div
        className="bg-[#F4F6F6] rounded-[16px] md:p-4 mb-2 md:mb-4 cursor-pointer h-[150px] flex items-center justify-center overflow-hidden"
        onClick={() => router.push(`/product/${id}`)}
      >
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Product Name */}
      <h3 className="text-lg font-medium text-gray-900">{name}</h3>

      {/* Product Price */}
      <p className="text-sm text-gray-600 mb-4">{price}/kg</p>

      {/* Add to Cart Button */}
      <button className="px-4 py-2 w-full text-gray-700 border border-gray-300 rounded-lg transition-all hover:bg-orange-500 hover:text-white">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
