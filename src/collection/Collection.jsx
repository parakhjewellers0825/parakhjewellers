import React, { useState, useMemo } from "react";
import { Star, X } from "lucide-react";

// Data is now clean and correct.
// The "Bichhiya" category has been re-enabled to match the image data.
const navigationLinks = [
  // Gold Products
  { id: 1, title: "Haar (Necklace)", category: "haar", metal: "gold", hindi: "हार" },
  { id: 2, title: "Anguthi (Ring)", category: "anguthi", metal: "gold", hindi: "अंगूठी" },
  { id: 3, title: "Jhumka (Earrings)", category: "jhumka", metal: "gold", hindi: "झुमका" },
  { id: 4, title: "Chain", category: "chain", metal: "gold", hindi: "चेन" },
  { id: 5, title: "Mangalsutra", category: "mangalsutra", metal: "gold", hindi: "मंगलसूत्र" },
  // Silver Products
  { id: 6, title: "Payal (Anklet)", category: "payal", metal: "silver", hindi: "पायल" },
  // { id: 7, title: "Bichhiya (Toe Ring)", category: "bichhiya", metal: "silver", hindi: "बिछिया" },
  { id: 8, title: "Kardhan (Waist Chain)", category: "kardhan", metal: "silver", hindi: "करधन" },
  { id: 9, title: "Accessories", category: "accessories", metal: "silver", hindi: "बर्तन" },
];

// CORRECTED: All items now have a unique 'id'. This was the main cause of the issue.
// React requires unique keys for list items to render and update correctly.
const allGalleryImages = [
  // Gold Images
  { id: 1, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763215/DSC_5003_s4rici.jpg", alt: "Intricate Kundan style necklace", category: "haar", metal: "gold", price: "₹45,000", rating: 4.9, featured: true },
  { id: 2, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763214/DSC_4979_ala8cn.jpg", alt: "Traditional temple jewellery necklace", category: "haar", metal: "gold", price: "₹32,000", rating: 4.7 },
  { id: 3, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763212/DSC_4961_yz4owz.jpg", alt: "Elegant temple jewellery set", category: "haar", metal: "gold", price: "₹38,000", rating: 4.6 },
  { id: 4, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763211/DSC_4965_as8fwm.jpg", alt: "Ornate Kundan necklace design", category: "haar", metal: "gold", price: "₹42,000", rating: 4.8 },
  { id: 5, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763208/DSC_4950_u8hado.jpg", alt: "Classic Kundan jewelry piece", category: "haar", metal: "gold", price: "₹35,000", rating: 4.5 },
  { id: 6, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763208/DSC_4963_xvwpbe.jpg", alt: "Designer Kundan necklace", category: "haar", metal: "gold", price: "₹48,000", rating: 4.9 },
  { id: 7, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763206/DSC_5021_u1vmtp.jpg", alt: "Premium temple jewellery", category: "haar", metal: "gold", price: "₹55,000", rating: 5.0, featured: true },
  { id: 8, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755763204/DSC_4988_mqxnfz.jpg", alt: "Handcrafted temple necklace", category: "haar", metal: "gold", price: "₹40,000", rating: 4.7 },
  
  // Jhumka
  { id: 9, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764433/DSC_5112_x6lste.jpg", alt: "Elegant gold jhumka design", category: "jhumka", metal: "gold", price: "₹12,000", rating: 4.6 },
  { id: 10, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764428/DSC_5100_m1gqsg.jpg", alt: "Classic gold jhumka pair", category: "jhumka", metal: "gold", price: "₹14,000", rating: 4.5 },
  { id: 11, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764424/DSC_5102_lkzyqx.jpg", alt: "Designer gold jhumka", category: "jhumka", metal: "gold", price: "₹16,000", rating: 4.6 },
  { id: 12, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764424/DSC_5103_gx2q1l.jpg", alt: "Ornate jhumka design", category: "jhumka", metal: "gold", price: "₹19,000", rating: 4.8 },
  { id: 13, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764424/DSC_5109_qftggs.jpg", alt: "Luxury gold jhumka", category: "jhumka", metal: "gold", price: "₹28,000", rating: 4.9 },
  { id: 14, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755764423/DSC_5098_suhfeo.jpg", alt: "Handcrafted jhumka earrings", category: "jhumka", metal: "gold", price: "₹21,000", rating: 4.7 },
  
  // Anguthi
  { id: 15, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755779846/DSC_5126_f3ik9x.jpg", alt: "Classic gold ring", category: "anguthi", metal: "gold", price: "₹8,000", rating: 4.4 },
  { id: 16, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755779844/DSC_5131_bynti1.jpg", alt: "Diamond gold ring", category: "anguthi", metal: "gold", price: "₹35,000", rating: 4.8 },
  { id: 17, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755779844/DSC_5119_ujz6wz.jpg", alt: "Elegant solitaire ring", category: "anguthi", metal: "gold", price: "₹45,000", rating: 4.9 },
  { id: 18, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755779841/DSC_5130_u5niae.jpg", alt: "Traditional pattern gold ring", category: "anguthi", metal: "gold", price: "₹15,000", rating: 4.6 },
  { id: 19, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755779840/DSC_5129_yeruwl.jpg", alt: "Modern design gold ring", category: "anguthi", metal: "gold", price: "₹22,000", rating: 4.7 },
  
  // Chain
  { id: 20, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771461/DSC_5197_yzjwor.jpg", alt: "Simple gold chain", category: "chain", metal: "gold", price: "₹25,000", rating: 4.6 },
  
  // Mangalsutra
  { id: 21, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771689/DSC_5028_h0jvxz.jpg", alt: "Traditional mangalsutra", category: "mangalsutra", metal: "gold", price: "₹18,000", rating: 4.7 },
  { id: 22, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771687/DSC_5040_jpfdoo.jpg", alt: "Modern mangalsutra design", category: "mangalsutra", metal: "gold", price: "₹24,000", rating: 4.8 },
  { id: 23, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771687/DSC_5145_s5qyep.jpg", alt: "Diamond pendant mangalsutra", category: "mangalsutra", metal: "gold", price: "₹32,000", rating: 4.9 },
  { id: 24, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771686/DSC_5041_rnyjfy.jpg", alt: "Lightweight mangalsutra", category: "mangalsutra", metal: "gold", price: "₹16,000", rating: 4.5 },
  { id: 25, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771685/DSC_5138_h3nknm.jpg", alt: "Short mangalsutra", category: "mangalsutra", metal: "gold", price: "₹19,500", rating: 4.6 },
  { id: 26, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771683/DSC_5043_syda69.jpg", alt: "Black beads mangalsutra", category: "mangalsutra", metal: "gold", price: "₹21,000", rating: 4.7 },
  { id: 27, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771677/DSC_5029_dip9j3.jpg", alt: "Ornate pendant mangalsutra", category: "mangalsutra", metal: "gold", price: "₹28,000", rating: 4.8 },
  { id: 28, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755771672/DSC_5045_pf7lbq.jpg", alt: "Elegant mangalsutra chain", category: "mangalsutra", metal: "gold", price: "₹26,000", rating: 4.7 },
  
  // Silver items
  { id: 29, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755840635/DSC_5077-ezgif.com-resize_qwul78.jpg", alt: "Silver anklet with bells", category: "payal", metal: "silver", price: "₹3,500", rating: 4.3 },
  { id: 30, src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop", alt: "Traditional toe rings", category: "bichhiya", metal: "silver", price: "₹1,200", rating: 4.2 },
  { id: 31, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755840553/DSC_5078_hthvtp.jpg", alt: "Silver waist chain", category: "kardhan", metal: "silver", price: "₹5,500", rating: 4.4 },
  { id: 32, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755840962/DSC_5199_tghmsv.jpg", alt: "Silver bowl", category: "accessories", metal: "silver", price: "₹2,800", rating: 4.5 },
  { id: 33, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755840952/DSC_5206_qfjxbd.jpg", alt: "Silver glass set", category: "accessories", metal: "silver", price: "₹4,200", rating: 4.6 },
  { id: 34, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755840924/DSC_5207_mbx3cm.jpg", alt: "Silver plate", category: "accessories", metal: "silver", price: "₹6,800", rating: 4.7 },
  { id: 35, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755840786/DSC_5004_bmwtpr.jpg", alt: "Silver puja thali", category: "accessories", metal: "silver", price: "₹8,500", rating: 4.8 },
  { id: 36, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755840747/DSC_5057_vfu3cy.jpg", alt: "Silver idol", category: "accessories", metal: "silver", price: "₹12,000", rating: 4.9 },
  { id: 37, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755840757/DSC_5055_yws617.jpg", alt: "Silver coin", category: "accessories", metal: "silver", price: "₹1,500", rating: 4.5 },
  { id: 38, src: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1755840750/DSC_5051_uf9hev.jpg", alt: "Silver lamp", category: "accessories", metal: "silver", price: "₹4,000", rating: 4.6 },
];

const JewelryShowcase = () => {
  const [activeMetal, setActiveMetal] = useState("gold");
  const [activeCategory, setActiveCategory] = useState("haar");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleMetalClick = (metal) => {
    setActiveMetal(metal);
    // Automatically select the first category of the chosen metal
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

  // This filtering logic was already correct. The problem was the data.
  const filteredAndSortedImages = useMemo(() => {
    let filtered = allGalleryImages.filter(
      (image) =>
        image.category === activeCategory &&
        image.metal === activeMetal &&
        (image.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          image.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Sorting logic remains the same
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
  
  const filteredNavLinks = navigationLinks.filter(
    (link) => link.metal === activeMetal
  );

  const currentCategoryName = navigationLinks.find(
    link => link.category === activeCategory
  )?.title || "";

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating)
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
            e.target.src = `https://placehold.co/600x400/FFF/333?text=Image+Not+Found`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );

  const Modal = ({ image, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <X className="w-6 h-6 text-gray-700" />
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
            <div className="flex space-x-3 pt-4">
              <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105">
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
    <div className="bg-gradient-to-br from-amber-50 via-white to-yellow-50 min-h-screen font-sans">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20"></div>
        <div className="relative max-w-6xl mx-auto text-center pt-28 px-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent mb-6">
            Timeless Elegance
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover our exquisite collection of handcrafted gold and silver jewelry
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-12">
        <nav className="flex justify-center my-8">
          <div className="bg-white rounded-full shadow-lg p-2 flex items-center space-x-2">
            {["gold", "silver"].map((metal) => (
              <button
                key={metal}
                onClick={() => handleMetalClick(metal)}
                className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${activeMetal === metal
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

        <nav className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {filteredNavLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleCategoryClick(link.category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === link.category
                    ? "bg-white shadow-lg border-2 border-yellow-400 text-yellow-700"
                    : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md"
                  }`}
              >
                <div className="text-center">
                  <div className="font-semibold">{link.title}</div>
                </div>
              </button>
            ))}
          </div>
        </nav>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {currentCategoryName} Collection
            <span className="text-base font-normal text-gray-600 ml-2">
              ({filteredAndSortedImages.length} items)
            </span>
          </h2>
        </div>

        {filteredAndSortedImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedImages.map((image) => (
              <ImageCard
                key={image.id} // CORRECTED: Using the now-unique image.id
                image={image}
                onClick={setSelectedImage}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💎</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No items found in this category
            </h3>
            <p className="text-gray-500">
              Please check back later or select another category.
            </p>
          </div>
        )}

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
