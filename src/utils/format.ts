// Utilidades de formateo
export class FormatUtils {
  // Formatear precio
  static formatPrice(price: string): string {
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  // Formatear teléfono
  static formatPhone(phone: string): string {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  // Truncar texto
  static truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  // Capitalizar primera letra
  static capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  // Formatear categoría para mostrar
  static formatCategory(category: string): string {
    const categoryMap: Record<string, string> = {
      'consumible': 'Consumible',
      'accesorio': 'Accesorio',
      'utensilio': 'Utensilio',
      'otros': 'Otros'
    };
    
    return categoryMap[category.toLowerCase()] || this.capitalize(category);
  }
}