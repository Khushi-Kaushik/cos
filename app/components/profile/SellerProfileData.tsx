// data/userProfileData.ts
import { UserProfileData, WardrobeItem, Review } from './SellerProfileItems';

export const userData: UserProfileData = {
  
  profileImageUrl: "https://images.unsplash.com/photo-1737553338682-cd52f5df9781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
  fullName: "John Doe",
  profession: "Software Engineer",
  bio: "Passionate developer creating innovative solutions and exploring cutting-edge technologies.",
  reviews: 256,
  location: "New York, NY",
  lastSeen: "2h ago",
  followers: 1200,
  following: 845,
  socialLinks: {
    instagram: "https://instagram.com/johndoe",
    email: "john.doe@example.com",
    linkedin: "https://linkedin.com/in/johndoe"
}
};



export const wardrobeItems: WardrobeItem[] = [
  // { 
  //   id: 1, 
  //   name: 'Floral Summer Dress', 
  //   price: 1100,
  //   image: 'https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
  //   description: 'Lightweight floral summer dress with v-neck'
    
  // },
  // { 
  //   id: 2, 
  //   name: 'Classic Denim Jacket', 
  //   price: 1100,
  //   image: 'https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
  //   description: 'Vintage blue denim jacket with distressed details'
  // },
  // { 
  //   id: 3, 
  //   name: 'High-Waisted Jeans', 
  //   price: 1100,
  //   image: 'https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
  //   description: 'Dark wash slim-fit high-waisted jeans'
  // },
  // { 
  //   id: 4, 
  //   name: 'Silk Blouse', 
  //   price: 1100,
  //   image: 'https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
  //   description: 'Ivory silk blouse with delicate embroidery'
  // },
  // { 
  //   id: 5, 
  //   name: 'Leather Midi Skirt', 
  //   price: 1100,
  //   image: 'https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
  //   description: 'Black leather midi skirt with side zipper'
  // },
  // { 
  //   id: 6, 
  //   name: 'Oversized Knit Sweater', 
  //   price: 1100,
  //   image: 'https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
  //   description: 'Cream-colored oversized knit sweater'
  // },
  // { 
  //   id: 7, 
  //   name: 'Cocktail Dress', 
  //   price: 1100,
  //   image: 'https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
  //   description: 'Emerald green cocktail dress with sequin details'
  // },
  // { 
  //   id: 8, 
  //   name: 'White Sneakers', 
  //   price: 1100,
  //   image: 'https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
  //   description: 'Classic white leather sneakers'
    
  // }
];

export const reviews: Review[] = [
  // { 
  //   id: 1,
  //   profileimg: 'https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
  //   username: 'Emily', 
  //   userId: 'user_002',
  //   rating: 5, 
  //   comment: 'Amazing style and great quality! Emma always looks stunning and her fashion advice is top-notch.',
  //   date: '2'
  // },
  // { 
  //   id: 2,
  //   username: 'Michael', 
  //   profileimg: 'https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',

  //   userId: 'user_003',
  //   rating: 4, 
  //   comment: 'Love the fashion insights and outfit combinations. Truly inspirational content!',
  //   date: '4'
  // },
  // { 
  //   id: 4,
  //   username: 'Sarah', 
  //   profileimg: 'https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',

  //   userId: 'user_004',
  //   rating: 5, 
  //   comment: 'Emma\'s wardrobe is incredible. Her styling tips have completely transformed my fashion choices.',
  //   date: '6'
  // },
  // { 
  //   id: 5,
  //   username: 'David', 
  //   profileimg: 'https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',

  //   userId: 'user_005',
  //   rating: 4, 
  //   comment: 'Great mix of classic and trendy pajbshdjabdawhdiaewhdipswdehpishudcidshciawhdkpAJDOSA adsjhasd JABSDasd JKDSKAHDKPA ieces. Always look forward to new posts!',
  //   date: '1'
  // }
];

