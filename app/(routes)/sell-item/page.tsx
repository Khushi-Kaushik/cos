'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SellItemPage() {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const handleImageUpload = () => {
        // Implement image upload logic
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-start px-4 py-8">
            <div className="w-full max-w-3xl bg-white rounded-lg px-6">
                <h2 className="text-2xl font-medium mb-8">Sell an Item</h2>
                <form className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="title" className="text-base font-medium">Title</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Eg : Red Midi Dress"
                            className="p-3 bg-[#F4F4F4] rounded"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="description" className="text-base font-medium">Describe Your Item</label>
                        <textarea
                            id="description"
                            rows={4}
                            placeholder="Eg : Red dress that has only been used 1-2 times. It is in great condition."
                            className="p-3 bg-[#F4F4F4] rounded"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="category" className="text-base font-medium">Category</label>
                        <select id="category" className="p-3 bg-[#F4F4F4] rounded">
                            <option value="">Select a Category</option>
                            <option value="dresses">Dresses</option>
                            <option value="tops">Tops</option>
                            <option value="bottoms">Bottoms</option>
                            {/* Add more categories as needed */}
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="brand" className="text-base font-medium">Brand</label>
                        <input
                            type="text"
                            id="brand"
                            placeholder="State the brand"
                            className="p-3 bg-[#F4F4F4] rounded"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="price" className="text-base font-medium">Price</label>
                        <input
                            type="text"
                            id="price"
                            placeholder="Eg : Rs 1500/-"
                            className="p-3 bg-[#F4F4F4] rounded"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-base font-medium">Upload Product Images</label>
                        <div className="min-h-[200px] bg-[#F4F4F4] rounded flex flex-col items-center justify-center p-4">
                            <button
                                type="button"
                                onClick={handleImageUpload}
                                className="border border-[#A50705] text-[#A50705] py-2 px-4 rounded"
                            >
                                + UPLOAD PHOTOS
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center pt-4">
                        <button
                            type="button"
                            className="px-6 py-2 bg-[#F4F4F4] text-[#A50705]"
                        >
                            SAVE DRAFT
                        </button>
                        <button
                            type="submit"
                            className="px-16 py-2 bg-[#A50705] text-white"
                        >
                            UPLOAD PRODUCT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 