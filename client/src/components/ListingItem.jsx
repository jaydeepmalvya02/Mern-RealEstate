import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";
import MapEmbed from "./mapEmbed";

export default function ListingItem({ listing }) {
  const [showMap, setShowMap] = useState(false); // 👈 useState ko sabse upar lao

  const handleMapClick = (e) => {
    e.preventDefault(); // **STOP Link navigation**
    setShowMap((prev) => !prev); // **Toggle map**
  };

  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      {/* Image pe Link */}
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="Listing Cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
      </Link>

      <div className="p-3 flex flex-col gap-2 w-full">
        {/* Name normal */}
        <p className="truncate text-slate-700 text-lg font-semibold">
          {listing.name}
        </p>

        <div className="flex items-center gap-1">
          {/* Location Icon pe map toggle */}
          <MdLocationOn
            onClick={handleMapClick}
            className="h-4 w-4 text-green-700 cursor-pointer"
          />
          {/* Address normal text */}
          <p className="text-sm text-gray-600 truncate w-full">
            {listing.address}
          </p>
        </div>

        {/* Map embed hone ka area */}
        {showMap && (
          <div className="mt-4">
            <MapEmbed />
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {listing.description}
        </p>

        {/* Price */}
        <p className="text-slate-500 mt-2 font-semibold">
          $
          {listing.offer
            ? listing.discountPrice.toLocaleString("en-US")
            : listing.regularPrice.toLocaleString("en-US")}
          {listing.type === "rent" && "/month"}
        </p>

        {/* Beds and Baths */}
        <div className="text-slate-700 flex gap-4">
          <div className="font-bold text-xs">
            {listing.bedrooms > 1
              ? `${listing.bedrooms} beds`
              : `${listing.bedrooms} bed`}
          </div>
          <div className="font-bold text-xs">
            {listing.bathrooms > 1
              ? `${listing.bathrooms} baths`
              : `${listing.bathrooms} bath`}
          </div>
        </div>
      </div>
    </div>
  );
}
