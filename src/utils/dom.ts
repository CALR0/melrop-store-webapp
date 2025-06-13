// Utilidades para manipulación del DOM
export class DOMUtils {
  // Scroll suave hacia arriba
  static scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
    window.scrollTo({
      top: 0,
      behavior
    });
  }

  // Scroll hacia un elemento específico
  static scrollToElement(elementId: string, behavior: ScrollBehavior = 'smooth'): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior });
    }
  }

  // Verificar si un elemento está visible en el viewport
  static isElementInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Obtener posición de scroll
  static getScrollPosition(): { x: number; y: number } {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop
    };
  }
}