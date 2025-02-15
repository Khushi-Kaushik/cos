// interfaces/UserProfile.ts
export interface WardrobeItem {
    id: number;
    name: string;
    price: number;
    image: string;
    description?: string;
  }
  
  export interface Review {
    id: number;
    username: string;
    userId: string;
    rating: number;
    comment: string;
    date: string;
    profileimg: string,

  }
  
  export interface SocialLinks {
    instagram: string,
    email: string,
    linkedin: string
  }
  export interface UserProfileData {
    // id: string;
    // username: string;
    fullName: string;
    bio: string;
    profession: string;
    profileImageUrl: string;
    followers: number;
    following: number;
    reviews: number;
    location: string,
    lastSeen: string,
    socialLinks :SocialLinks
  }

  
  