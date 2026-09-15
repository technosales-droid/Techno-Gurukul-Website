import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import GallerySection from "@/components/gallery/GallerySection";
import MainLayout from "@/components/layout/MainLayout";
import ImageModal from "@/components/modal/ImageModal";

const GalleryMain = () => {
  return (
    <>
      <MainLayout>
        <BreadcrumbSection title="Gallery" />
        <GallerySection />
      </MainLayout>
      {/* Modal */}
      <ImageModal />
    </>
  );
};

export default GalleryMain;
