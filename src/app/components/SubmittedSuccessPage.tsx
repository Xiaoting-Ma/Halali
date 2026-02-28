import { CheckCircle, ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface SubmittedSuccessPageProps {
  onNavigate: (page: string) => void;
}

export function SubmittedSuccessPage({
  onNavigate,
}: SubmittedSuccessPageProps) {
  return (
    <div className="min-h-[600px] flex items-center justify-center bg-gray-50 py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Application Successfully Submitted!
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Thank you for choosing to join Halali.
          </p>

          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
            <Mail className="w-5 h-5" />
            <p>
              We will contact you via email within{" "}
              <span className="font-semibold text-gray-900">
                24 hours
              </span>
            </p>
          </div>

          <p className="text-gray-600 mb-8">
            If you have any questions, please contact us at:
            <br />
            <a
              href="mailto:support@halali.co"
              className="text-primary font-semibold hover:underline"
            >
              contact@halali.co
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}