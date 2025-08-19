import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import CourseCards from './components/CourseCards';
import ToolsCarousel from './components/ToolsCarousel';
import CurriculumTabs from './components/CurriculumTabs';
import Internships from './components/Internships';
import CareerServices from './components/CareerServices';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookCallPopup from './components/BookCallPopup';
import CurriculumDownloadPopup from './components/CurriculumDownloadPopup';
import CareerGuidancePopup from './components/CareerGuidancePopup';
import WhatsAppChat from './components/WhatsAppChat';
import CourseDetailPage from './components/CourseDetailPage';
import InternshipDetailPage from './components/InternshipDetailPage';

function App() {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'course' | 'internship'>('home');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedInternship, setSelectedInternship] = useState<string | null>(null);

  const openPopup = (popupType: string) => {
    setActivePopup(popupType);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const openCourseDetail = (courseId: string) => {
    // Scroll to top when opening course detail
    window.scrollTo(0, 0);
    setSelectedCourse(courseId);
    setCurrentView('course');
  };

  const openInternshipDetail = (internshipId: string) => {
    // Scroll to top when opening internship detail
    window.scrollTo(0, 0);
    setSelectedInternship(internshipId);
    setCurrentView('internship');
  };

  const backToHome = () => {
    // Scroll to top when going back to home
    window.scrollTo(0, 0);
    setCurrentView('home');
    setSelectedCourse(null);
    setSelectedInternship(null);
  };

  if (currentView === 'course' && selectedCourse) {
    return (
      <div className="min-h-screen bg-white">
        <Header onOpenCourseDetail={openCourseDetail} onOpenInternshipDetail={openInternshipDetail} />
        <CourseDetailPage 
          courseId={selectedCourse} 
          onBack={backToHome}
          onOpenPopup={openPopup}
        />
        <Footer />

        {/* Popups */}
        <BookCallPopup 
          isOpen={activePopup === 'bookCall'} 
          onClose={closePopup} 
        />
        <CurriculumDownloadPopup 
          isOpen={activePopup === 'downloadCurriculum'} 
          onClose={closePopup} 
        />
        <CareerGuidancePopup 
          isOpen={activePopup === 'careerGuidance'} 
          onClose={closePopup} 
        />

        {/* WhatsApp Chat Integration */}
        <WhatsAppChat />
      </div>
    );
  }

  if (currentView === 'internship' && selectedInternship) {
    return (
      <div className="min-h-screen bg-white">
        <Header onOpenCourseDetail={openCourseDetail} onOpenInternshipDetail={openInternshipDetail} />
        <InternshipDetailPage 
          internshipId={selectedInternship} 
          onBack={backToHome}
          onOpenPopup={openPopup}
        />
        <Footer />

        {/* Popups */}
        <BookCallPopup 
          isOpen={activePopup === 'bookCall'} 
          onClose={closePopup} 
        />
        <CurriculumDownloadPopup 
          isOpen={activePopup === 'downloadCurriculum'} 
          onClose={closePopup} 
        />
        <CareerGuidancePopup 
          isOpen={activePopup === 'careerGuidance'} 
          onClose={closePopup} 
        />

        {/* WhatsApp Chat Integration */}
        <WhatsAppChat />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenCourseDetail={openCourseDetail} onOpenInternshipDetail={openInternshipDetail} />
      <Hero onOpenPopup={openPopup} />
      <WhyChooseUs />
      <CourseCards onOpenPopup={openPopup} onOpenCourseDetail={openCourseDetail} />
      <ToolsCarousel />
      <CurriculumTabs onOpenPopup={openPopup} />
      <Internships onOpenPopup={openPopup} onOpenInternshipDetail={openInternshipDetail} />
      <CareerServices onOpenPopup={openPopup} />
      <Testimonials onOpenPopup={openPopup} />
      <FAQ onOpenPopup={openPopup} />
      <Footer />

      {/* Popups */}
      <BookCallPopup 
        isOpen={activePopup === 'bookCall'} 
        onClose={closePopup} 
      />
      <CurriculumDownloadPopup 
        isOpen={activePopup === 'downloadCurriculum'} 
        onClose={closePopup} 
      />
      <CareerGuidancePopup 
        isOpen={activePopup === 'careerGuidance'} 
        onClose={closePopup} 
      />

      {/* WhatsApp Chat Integration */}
      <WhatsAppChat />
    </div>
  );
}
// dummy
export default App;