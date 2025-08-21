import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Star, Heart, Search, Filter } from "lucide-react";

const navigationLinks = [
  // Gold Products
  { id: 1, title: "Haar (Necklace)", category: "haar", metal: "gold", hindi: "हार" },
  { id: 2, title: "Anguthi (Ring)", category: "anguthi", metal: "gold", hindi: "अंगूठी" },
  { id: 3, title: "Jhumka (Earrings)", category: "jhumka", metal: "gold", hindi: "झुमका" },
  { id: 4, title: "Chain", category: "chain", metal: "gold", hindi: "चेन" },
  { id: 5, title: "Mangalsutra", category: "mangalsutra", metal: "gold", hindi: "मंगलसूत्र" },
  // Silver Products
  { id: 6, title: "Payal (Anklet)", category: "payal", metal: "silver", hindi: "पायल" },
  { id: 7, title: "Bichhiya (Toe Ring)", category: "bichhiya", metal: "silver", hindi: "बिछिया" },
  { id: 8, title: "Kardhan (Waist Chain)", category: "kardhan", metal: "silver", hindi: "कड़धन" },
  { id: 9, title: "Bartan (Utensils)", category: "bartan", metal: "silver", hindi: "बर्तन" },
];

const allGalleryImages = [
  // Gold Images
  {
    id: 1,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763216/DSC_5012_jgepgh.jpg",
    alt: "Beautiful gold jhumka earrings",
    category: "jhumka",
    metal: "gold",
    price: "₹15,000",
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763215/DSC_5003_s4rici.jpg",
    alt: "Intricate Kundan style necklace",
    category: "haar",
    metal: "gold",
    price: "₹45,000",
    rating: 4.9,
    featured: true
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763214/DSC_4979_ala8cn.jpg",
    alt: "Traditional temple jewellery necklace",
    category: "haar",
    metal: "gold",
    price: "₹32,000",
    rating: 4.7
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763212/DSC_4961_yz4owz.jpg",
    alt: "Elegant temple jewellery set",
    category: "haar",
    metal: "gold",
    price: "₹38,000",
    rating: 4.6
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763211/DSC_4965_as8fwm.jpg",
    alt: "Ornate Kundan necklace design",
    category: "haar",
    metal: "gold",
    price: "₹42,000",
    rating: 4.8
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763208/DSC_4950_u8hado.jpg",
    alt: "Classic Kundan jewelry piece",
    category: "haar",
    metal: "gold",
    price: "₹35,000",
    rating: 4.5
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763208/DSC_4963_xvwpbe.jpg",
    alt: "Designer Kundan necklace",
    category: "haar",
    metal: "gold",
    price: "₹48,000",
    rating: 4.9
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763206/DSC_5021_u1vmtp.jpg",
    alt: "Premium temple jewellery",
    category: "haar",
    metal: "gold",
    price: "₹55,000",
    rating: 5.0,
    featured: true
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763204/DSC_4988_mqxnfz.jpg",
    alt: "Handcrafted temple necklace",
    category: "haar",
    metal: "gold",
    price: "₹40,000",
    rating: 4.7
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764433/DSC_5112_x6lste.jpg",
    alt: "Elegant gold jhumka design",
    category: "jhumka",
    metal: "gold",
    price: "₹12,000",
    rating: 4.6
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764429/DSC_5125_xhxvmi.jpg",
    alt: "Diamond studded jhumka",
    category: "jhumka",
    metal: "gold",
    price: "₹25,000",
    rating: 4.8
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764428/DSC_5118_d2pikr.jpg",
    alt: "Traditional gold jhumka",
    category: "jhumka",
    metal: "gold",
    price: "₹18,000",
    rating: 4.7
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764428/DSC_5100_m1gqsg.jpg",
    alt: "Classic gold jhumka pair",
    category: "jhumka",
    metal: "gold",
    price: "₹14,000",
    rating: 4.5
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764426/DSC_5126_h25wfn.jpg",
    alt: "Premium jhumka earrings",
    category: "jhumka",
    metal: "gold",
    price: "₹22,000",
    rating: 4.9
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764424/DSC_5102_lkzyqx.jpg",
    alt: "Designer gold jhumka",
    category: "jhumka",
    metal: "gold",
    price: "₹16,000",
    rating: 4.6
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764424/DSC_5103_gx2q1l.jpg",
    alt: "Ornate jhumka design",
    category: "jhumka",
    metal: "gold",
    price: "₹19,000",
    rating: 4.8
  },
  {
    id: 17,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764424/DSC_5109_qftggs.jpg",
    alt: "Luxury gold jhumka",
    category: "jhumka",
    metal: "gold",
    price: "₹28,000",
    rating: 4.9
  },
  {
    id: 18,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764423/DSC_5098_suhfeo.jpg",
    alt: "Handcrafted jhumka earrings",
    category: "jhumka",
    metal: "gold",
    price: "₹21,000",
    rating: 4.7
  },
  // Placeholder images for other categories
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
    alt: "Classic gold ring",
    category: "anguthi",
    metal: "gold",
    price: "₹8,000",
    rating: 4.4
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop",
    alt: "Diamond gold ring",
    category: "anguthi",
    metal: "gold",
    price: "₹35,000",
    rating: 4.8
  },
  {
    id: 21,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771461/DSC_5197_yzjwor.jpg",
    alt: "Simple gold chain",
    category: "chain",
    metal: "gold",
    price: "₹25,000",
    rating: 4.6
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771689/DSC_5028_h0jvxz.jpg",
    alt: "Traditional mangalsutra",
    category: "mangalsutra",
    metal: "gold",
    price: "₹18,000",
    rating: 4.7
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771687/DSC_5040_jpfdoo.jpg",
    alt: "Traditional mangalsutra",
    category: "mangalsutra",
    metal: "gold",
    price: "₹18,000",
    rating: 4.7
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771687/DSC_5145_s5qyep.jpg",
    alt: "Traditional mangalsutra",
    category: "mangalsutra",
    metal: "gold",
    price: "₹18,000",
    rating: 4.7
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771686/DSC_5041_rnyjfy.jpg",
    alt: "Traditional mangalsutra",
    category: "mangalsutra",
    metal: "gold",
    price: "₹18,000",
    rating: 4.7
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771685/DSC_5138_h3nknm.jpg ",
    alt: "Traditional mangalsutra",
    category: "mangalsutra",
    metal: "gold",
    price: "₹18,000",
    rating: 4.7
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771683/DSC_5043_syda69.jpg ",
    alt: "Traditional mangalsutra",
    category: "mangalsutra",
    metal: "gold",
    price: "₹18,000",
    rating: 4.7
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771677/DSC_5029_dip9j3.jpg",
    alt: "Traditional mangalsutra",
    category: "mangalsutra",
    metal: "gold",
    price: "₹18,000",
    rating: 4.7
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771672/DSC_5045_pf7lbq.jpg",
    alt: "Traditional mangalsutra",
    category: "mangalsutra",
    metal: "gold",
    price: "₹18,000",
    rating: 4.7
  },
  
  // Silver items
  {
    id: 23,
    src: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=400&fit=crop",
    alt: "Silver anklet with bells",
    category: "payal",
    metal: "silver",
    price: "₹3,500",
    rating: 4.3
  },
  {
    id: 24,
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
    alt: "Traditional toe rings",
    category: "bichhiya",
    metal: "silver",
    price: "₹1,200",
    rating: 4.2
  },
  {
    id: 25,
    src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop",
    alt: "Silver waist chain",
    category: "kardhan",
    metal: "silver",
    price: "₹5,500",
    rating: 4.4
  },
  {
    id: 26,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    alt: "Silver bowl",
    category: "bartan",
    metal: "silver",
    price: "₹2,800",
    rating: 4.5
  },
];

const JewelryShowcase = () => {
  const [activeMetal, setActiveMetal] = useState("gold");
  const [activeCategory, setActiveCategory] = useState("haar");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedImage, setSelectedImage] = useState(null);
  const [favorites, setFavorites] = useState(new Set());

  const handleMetalClick = (metal) => {
    setActiveMetal(metal);
    const firstCategoryForMetal = navigationLinks.find(
      (link) => link.metal === metal
    );
    if (firstCategoryForMetal) {
      setActiveCategory(firstCategoryForMetal.category);
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const toggleFavorite = (imageId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(imageId)) {
      newFavorites.delete(imageId);
    } else {
      newFavorites.add(imageId);
    }
    setFavorites(newFavorites);
  };

  const filteredNavLinks = navigationLinks.filter(
    (link) => link.metal === activeMetal
  );

  const filteredAndSortedImages = useMemo(() => {
    let filtered = allGalleryImages.filter(
      (image) => 
        image.category === activeCategory &&
        image.metal === activeMetal &&
        (image.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
         image.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Sort images
    switch (sortBy) {
      case "featured":
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case "price-low":
        filtered.sort((a, b) => 
          parseInt(a.price.replace(/[₹,]/g, '')) - parseInt(b.price.replace(/[₹,]/g, ''))
        );
        break;
      case "price-high":
        filtered.sort((a, b) => 
          parseInt(b.price.replace(/[₹,]/g, '')) - parseInt(a.price.replace(/[₹,]/g, ''))
        );
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [activeCategory, activeMetal, searchTerm, sortBy]);

  const currentCategoryName = navigationLinks.find(
    link => link.category === activeCategory
  )?.title || "";

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? "text-yellow-400 fill-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  const ImageCard = ({ image, onClick }) => (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
     
     
      <div 
        className="relative overflow-hidden cursor-pointer"
        onClick={() => onClick(image)}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{image.alt}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center space-x-1">
            {renderStars(image.rating)}
          </div>
          <span className="ml-2 text-sm text-gray-600">({image.rating})</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">{image.price}</span>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105">
            View Details
          </button>
        </div>
      </div> */}
    </div>
  );

  const Modal = ({ image, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <ChevronRight className="w-6 h-6 rotate-45" />
        </button>
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">{image.alt}</h2>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {renderStars(image.rating)}
              </div>
              <span className="text-gray-600">({image.rating} rating)</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{image.price}</p>
            <p className="text-gray-600">
              Exquisite {activeMetal} jewelry piece crafted with traditional techniques 
              and modern design sensibilities. Perfect for special occasions and daily wear.
            </p>
            <div className="flex space-x-3">
              <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200">
                Add to Cart
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-yellow-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20"></div>
        <div className="relative max-w-6xl mx-auto text-center pt-28 px-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent mb-6">
            Timeless Elegance
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover our exquisite collection of handcrafted gold and silver jewelry
          </p>
          {/* <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
              4.8 Average Rating
            </span>
            <span>•</span>
            <span>1000+ Happy Customers</span>
            <span>•</span>
            <span>Lifetime Warranty</span>
          </div> */}
        </div>
      </section>

      <div className="container mx-auto px-4 pb-12">
        {/* Metal Navigation */}
        <nav className="flex justify-center mb-8">
          <div className="bg-white rounded-full shadow-lg p-2 flex items-center space-x-2">
            {["gold", "silver"].map((metal) => (
              <button
                key={metal}
                onClick={() => handleMetalClick(metal)}
                className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activeMetal === metal
                    ? metal === "gold"
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg"
                      : "bg-gradient-to-r from-gray-400 to-gray-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {metal === "gold" ? "Gold (सोना)" : "Silver (चाँदी)"}
              </button>
            ))}
          </div>
        </nav>

        {/* Search and Filter Bar */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jewelry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none w-64"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div> */}

        {/* Category Navigation */}
        <nav className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {filteredNavLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleCategoryClick(link.category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === link.category
                    ? "bg-white shadow-lg border-2 border-yellow-400 text-yellow-700"
                    : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md"
                }`}
              >
                <div className="text-center">
                  <div className="font-semibold">{link.title}</div>
                  {/* <div className="text-xs opacity-75">{link.hindi}</div> */}
                </div>
              </button>
            ))}
          </div>
        </nav>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {currentCategoryName} Collection
            <span className="text-base font-normal text-gray-600 ml-2">
              ({filteredAndSortedImages.length} items)
            </span>
          </h2>
        </div>

        {/* Image Gallery */}
        {filteredAndSortedImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedImages.map((image) => (
              <ImageCard
                key={`${image.id}-${image.category}`}
                image={image}
                onClick={setSelectedImage}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💎</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No items found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Modal */}
        {selectedImage && (
          <Modal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default function App() {
  return <JewelryShowcase />;
}