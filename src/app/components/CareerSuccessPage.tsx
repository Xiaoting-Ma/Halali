import {
  CheckCircle,
  ArrowLeft,
  Mail,
  Briefcase,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface CareerSuccessPageProps {
  onNavigate: (page: string) => void;
}

export function CareerSuccessPage({
  onNavigate,
}: CareerSuccessPageProps) {
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
            Thank you for your interest in joining the Halali
            team!
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              What happens next:
            </h2>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                <span>
                  Our recruitment team will review your
                  application
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">
                  2
                </span>
                <span>
                  If your profile matches our requirements,
                  we'll schedule an interview
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">
                  3
                </span>
                <span>
                  We'll discuss the role, team culture, and
                  answer any questions you may have
                </span>
              </li>
            </ol>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
            <Mail className="w-5 h-5" />
            <p>
              We will contact you via email within{" "}
              <span className="font-semibold text-gray-900">
                3-5 business days
              </span>
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start space-x-3">
              <Briefcase className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 text-center">
                If you have any questions, please contact us at:
                <a
                  href="mailto:contact@halali.co"
                  className="text-primary font-semibold hover:underline"
                >
                  contact@halali.co
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate("home")}
              size="lg"
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Button>
            <Button
              onClick={() => onNavigate("careers")}
              size="lg"
            >
              View Other Positions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}