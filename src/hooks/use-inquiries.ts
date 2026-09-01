import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export interface InquiryData {
  name: string;
  email: string;
  phone?: string;
  shift: string;
  seats: string;
  type: string;
  message?: string;
}

const interestLabels: Record<string, string> = {
  general: "General Inquiry",
  tour: "Book a Tour",
  office: "Private Office / Cabin",
  desk: "Dedicated Desk",
  hotdesk: "Hot Desk",
};

export function buildWhatsAppUrl(data: InquiryData): string {
  const phoneNumber = "923334835258";
  const interestLabel = interestLabels[data.type] || data.type;

  const text = 
`Welcome to The Cowork ! 

Thank you for reaching out.

We operate in two dedicated timing slots:
☀️ Day Shift : 09:00 AM – 06:00 PM
🌙 Night Shift : 06:00 PM – 03:00 AM

To help us share the right plans, here are my details:

Your Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "N/A"}
Preferred Shift: ${data.shift}
Number of Seats / Cabin needed: ${data.seats}
Requirement: ${interestLabel}${data.message ? `\nNotes: ${data.message}` : ""}

We look forward to receiving the packages right away!`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}

export async function submitToGoogleSheets(data: InquiryData): Promise<boolean> {
  const sheetUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
  if (!sheetUrl) {
    console.log("Google Sheets URL not set in VITE_GOOGLE_SHEETS_URL. Skipping sheet submission.");
    return false;
  }

  try {
    const payload = {
      timestamp: new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" }),
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      shift: data.shift || "",
      seats: data.seats || "",
      type: interestLabels[data.type] || data.type,
      message: data.message || "",
    };

    await fetch(sheetUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(payload),
    });
    console.log("Inquiry successfully posted to Google Sheets endpoint.");
    return true;
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return false;
  }
}

export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InquiryData) => {
      // Submit to Google Sheets (non-blocking)
      submitToGoogleSheets(data);

      // Open WhatsApp
      const waUrl = buildWhatsAppUrl(data);
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
      return { success: true, data, waUrl };
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Formatted!",
        description: "Your details have been saved and formatted for WhatsApp.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}



