"use client";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { courses as allCourses } from "../data";
import type { CourseDataType } from "../types";

interface ContextData {
  isMenuOpen: boolean;
  toggleMobileMenu: () => void;
  showVideoModal: boolean;
  openVideoModal: () => void;
  closeVideoModal: () => void;
  modalImg: string;
  showImageModal: boolean;
  openImageModal: (img: string) => void;
  closeImageModal: () => void;
  search: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredCourses: CourseDataType[];
  currentPage: number;
  handlePageClick: (page: number) => void;
  handleCategoryChange: (value: string) => void;
  category: string;
}

const Context = createContext<ContextData | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  // Mobile Menu modal
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Video Modal Modal
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);

  const openVideoModal = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };
  // Video Modal Modal
  const [modalImg, setModalImg] = useState<string>(
    "/assets/img/gallery/innerPage/1.jpg"
  );
  const [showImageModal, setShowImageModal] = useState<boolean>(false);

  const openImageModal = (img: string) => {
    setShowImageModal(true);
    setModalImg(img);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  // Course Filter
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(search);
      const matchesCategory = category ? course.category === category : true;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const handlePageClick = (page: number) => setCurrentPage(page);

  // Return
  const contextValue: ContextData = {
    isMenuOpen,
    toggleMobileMenu,
    showVideoModal,
    openVideoModal,
    closeVideoModal,
    modalImg,
    showImageModal,
    openImageModal,
    closeImageModal,
    search,
    handleSearchChange,
    filteredCourses,
    currentPage,
    handleCategoryChange,
    handlePageClick,
    category,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useCustomContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useCustomContext must be used within an ContextProvider");
  }
  return context;
};
