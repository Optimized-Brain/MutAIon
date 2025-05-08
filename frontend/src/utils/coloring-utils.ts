export function getNucleotideColorClass(nucleotide: string): string {
    switch (nucleotide.toUpperCase()) {
      case "A":
        return "text-red-600";
      case "T":
        return "text-blue-600";
      case "G":
        return "text-green-600";
      case "C":
        return "text-amber-600";
      default:
        return "text-gray-500";
    }
  }
  
  export function getClassificationColorClasses(classification: string): string {
    if (!classification) return "bg-yellow-100 text-yellow-800";
    const lowercaseClass = classification.toLowerCase();
  
    if (lowercaseClass.includes("pathogenic")) {
      return "bg-red-100 text-red-800";
    } else if (lowercaseClass.includes("benign")) {
      return "bg-green-100 text-green-800";
    } else {
      return "bg-yellow-100 text-yellow-800";
    }
  }