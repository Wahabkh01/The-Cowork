import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateInquiry, buildWhatsAppUrl, InquiryData } from "@/hooks/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, MessageCircle } from "lucide-react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "@/components/ui/alert-dialog";
import { useState } from "react";

const insertInquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  shift: z.string().min(1, { message: "Please select a preferred shift." }),
  seats: z.string().min(1, { message: "Please specify number of seats or cabin needed." }),
  type: z.string(),
  message: z.string().optional(),
});

type InsertInquiry = z.infer<typeof insertInquirySchema>;

export function InquiryForm({ defaultType = "general" }: { defaultType?: string }) {
  const mutation = useCreateInquiry();
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);
  const [waUrl, setWaUrl] = useState<string>("https://wa.me/923334835258");
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      shift: "Day Shift (09:00 AM – 06:00 PM)",
      seats: "",
      type: defaultType,
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    const inquiryData: InquiryData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      shift: data.shift,
      seats: data.seats,
      type: data.type,
      message: data.message,
    };
    const generatedUrl = buildWhatsAppUrl(inquiryData);
    setWaUrl(generatedUrl);
    mutation.mutate(inquiryData, {
      onSuccess: () => {
        form.reset();
        setShowThankYouDialog(true);
      },
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" className="bg-white/5 border-white/10 text-white focus:border-primary/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Email Address *</FormLabel>
                  <FormControl>
                    <Input placeholder="john@company.com" className="bg-white/5 border-white/10 text-white focus:border-primary/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+92 300 ..." className="bg-white/5 border-white/10 text-white focus:border-primary/50" {...field} value={field.value || ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shift"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Preferred Shift *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-primary/50">
                        <SelectValue placeholder="Select shift timing" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-zinc-900 border-white/10 text-white">
                      <SelectItem value="Day Shift (09:00 AM – 06:00 PM)">☀️ Day Shift (09:00 AM – 06:00 PM)</SelectItem>
                      <SelectItem value="Night Shift (06:00 PM – 03:00 AM)">🌙 Night Shift (06:00 PM – 03:00 AM)</SelectItem>
                      <SelectItem value="Both / Flexible">⏰ Both / Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="seats"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Number of Seats / Cabin needed *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 2 Seats, 1 Private Cabin" className="bg-white/5 border-white/10 text-white focus:border-primary/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Requirement / Space Type *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-primary/50">
                        <SelectValue placeholder="Select interest" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-zinc-900 border-white/10 text-white">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="tour">Book a Tour</SelectItem>
                      <SelectItem value="office">Private Office / Cabin</SelectItem>
                      <SelectItem value="desk">Dedicated Desk</SelectItem>
                      <SelectItem value="hotdesk">Hot Desk</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Message / Additional Details</FormLabel>
                <FormControl>
                  <Textarea placeholder="Any specific requirements or questions..." className="bg-white/5 border-white/10 text-white focus:border-primary/50 min-h-[100px]" {...field} value={field.value || ''} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full !mt-8 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2" size="lg" disabled={mutation.isPending}>
            {mutation.isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <MessageCircle className="h-5 w-5" />
            )}
            Send Inquiry via WhatsApp
          </Button>
        </form>
      </Form>

      <AlertDialog open={showThankYouDialog} onOpenChange={setShowThankYouDialog}>
        <AlertDialogContent className="bg-zinc-900 border-white/10 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-xl font-bold">
              <MessageCircle className="h-6 w-6 text-green-500" />
              Inquiry Formatted!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white/70 space-y-2 text-sm">
              <span>Your inquiry details have been formatted and sent to WhatsApp.</span>
              <br />
              <span className="text-xs text-white/50">If the WhatsApp application didn't open automatically, click the button below to open WhatsApp with your pre-filled details.</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Open WhatsApp Chat
              </Button>
            </a>
            <AlertDialogAction onClick={() => setShowThankYouDialog(false)} className="w-full mt-2 sm:mt-0 sm:w-auto">
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}


