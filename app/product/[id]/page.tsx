import ProductDetails from "./ProductDetails";

// Mock Fetch Product Data Function (replace with actual API call)
const fetchProduct = async (id: string) => {
  const products = [
    {
      id: "1",
      name: "Coconut",
      category: "Fruits",
      price: "$6.3/kg",
      rating: 5.0,
      reviewsCount: 1,
      description:
        "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor...",
      longDescription:
        "Our coconuts are sustainably grown, ensuring the best quality and taste...",
      imageUrls: ["/items/coconut.png", "/items/eggplant.png"],
    },
  ];
  return products.find((product) => product.id === id);
};

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  // Access params.id directly
  const product = await fetchProduct(params.id);

  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="pt-16 md:pt-24 pb-4">
        <ProductDetails product={product} />
      </div>
    </div>
  );
}
