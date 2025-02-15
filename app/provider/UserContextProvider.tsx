"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product } from "../constants/types";
import { productsData } from "../constants/data";
// Define the shape of the context data
interface UserContextType {
  category: string;
  setCategory: (category: string) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
  filteredProducts: Product[];
  setFilteredProducts: (filteredProducts: Product[]) => void;
  isSignUpModalOpen: boolean;
  setIsSignUpModalOpen: (isSignUpModalOpen: boolean) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  isUserOptionsModalOpen: boolean;
  setIsUserOptionsModalOpen: (isUserOptionsModalOpen: boolean) => void;
}

// Create a default value for the context
const defaultContext: UserContextType = {
  category: "",
  setCategory: () => {}, // Default is a no-op function
  products: productsData,
  setProducts: () => {},
  filteredProducts: productsData,
  setFilteredProducts: () => {},
  isSignUpModalOpen: false,
  setIsSignUpModalOpen: () => {},
  isLogin: false,
  setIsLogin: () => {},
  isUserOptionsModalOpen: false,
  setIsUserOptionsModalOpen: () => {},
};

// Create the context
const UserContext = createContext<UserContextType>(defaultContext);

// Custom hook for consuming the context
export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

// Context Provider Component
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isUserOptionsModalOpen, setIsUserOptionsModalOpen] = useState<boolean>(false);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const json = await res.json();

    setProducts(json);
    setFilteredProducts(json);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <UserContext.Provider value={{ category, setCategory, products, setProducts, filteredProducts, setFilteredProducts, isSignUpModalOpen, setIsSignUpModalOpen, isLogin, setIsLogin, isUserOptionsModalOpen, setIsUserOptionsModalOpen }}>
      {children}
    </UserContext.Provider>
  );
};
