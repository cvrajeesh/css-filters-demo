import React, { useState, useEffect } from "react";

type ImageSelectorProps = {
  onImageSelect?: (url: string) => void;
};

const ImageSelector: React.FC<ImageSelectorProps> = props => {
  const [imageUrl, setImageUrl] = useState<string | null>(
    "https://picsum.photos/600"
  );
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDisable(prev => imageUrl === null || imageUrl.length === 0);
  }, [imageUrl]);

  const { onImageSelect } = props;
  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onload = e => {
        if (onImageSelect && reader.result) {
          setLoading(false);
          onImageSelect(reader.result as string);
        }
      };

      reader.onerror = e => {
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  const handleSetImageUrlClick = () => {
    if (imageUrl && onImageSelect) {
      onImageSelect(imageUrl);
    }
  };

  return (
    <div className="relative flex flex-col justify-center item-center p-4 bg-gray-700 rounded-md shadow-lg">
      <input
        className="file-uploader"
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={handleImageSelect}
      />
      <div className="flex justify-center mb-4">
        <span className="text-sm p-4 text-gray-300 text-center">OR</span>
      </div>
      <div className="flex border border-gray-600 rounded-md">
        <input
          type="url"
          placeholder="Enter image URL"
          className="flex-1 bg-gray-300 p-2 text-sm text-gray-800 rounded-l-md"
          value={imageUrl as string}
          onChange={handleUrlChange}
        />
        <button
          disabled={disable}
          className={`flex-shrink-0 p-2 px-4 text-sm text-center text-gray-200 bg-gray-800 rounded-r-md ${
            disable ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handleSetImageUrlClick}
        >
          Use this URL
        </button>
      </div>

      {loading && (
        <div className="absolute inset-0 text-gray-200 bg-gray-800 opacity-75 text-base flex justify-center items-center rounded-md ">
          Loading...
        </div>
      )}
    </div>
  );
};

export default ImageSelector;
