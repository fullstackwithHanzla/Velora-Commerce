import React, { memo } from "react"

const sizes = {
  normal: "w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60",
  lg: "w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-140 lg:h-120"
}

const QuickProductThumbnail = memo(function QuickProductThumbnail({
  size = "normal",
  defaultImgUrl,
  qvProd
}) {

  const sizeClasses = sizes[size] || sizes.normal

  return (
    <div
      className={`bg-gray-400/30 flex grow items-center justify-center p-5 rounded-lg border border-gray-600/30 ${sizeClasses}`}
    >
      <img
        src={defaultImgUrl?.url}
        alt={qvProd?.title || "product image"}
        className="max-w-full max-h-full object-contain"
        loading="lazy"
      />
    </div>
  )
})

export default QuickProductThumbnail