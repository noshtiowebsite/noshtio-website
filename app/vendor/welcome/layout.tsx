import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome to noshtio | Start Selling Your Food Today',
  description:
    'Welcome to noshtio! You are now a registered vendor. Download the app and start selling your food with zero commission.',
};

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
