import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vendor Registration | Sell Food with Zero Commission | noshtio',
  description:
    'Register as a food vendor on noshtio and start selling directly to customers with zero commission. Join India\'s first truly commission-free food marketplace.',
  keywords:
    'vendor registration, food business, sell food online, zero commission, restaurant registration, home kitchen registration',
};

export default function VendorRegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
