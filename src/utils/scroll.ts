export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed navigation
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};