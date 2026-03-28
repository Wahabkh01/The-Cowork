import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: any) => {
      // Since the backend is removed, we'll just simulate a successful submission
      console.log("New Inquiry Data:", data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      return { success: true, data };
    },
    onSuccess: (_data) => {
      toast({
        title: "Inquiry Received (Simulated)",
        description: "Check the browser console to see the submitted data.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      // This part is less likely to be triggered now, but good to keep
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
