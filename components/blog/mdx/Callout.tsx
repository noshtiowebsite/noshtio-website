import { AlertTriangle, Info, Lightbulb } from 'lucide-react';

interface CalloutProps {
  type: 'tip' | 'warning' | 'info';
  children: React.ReactNode;
}

export default function Callout({ type, children }: CalloutProps) {
  const getCalloutStyles = () => {
    switch (type) {
      case 'tip':
        return {
          bgColor: 'bg-gold/10',
          borderColor: 'border-gold/20',
          textColor: 'text-navy',
          icon: <Lightbulb className="h-5 w-5 text-gold flex-shrink-0" />,
        };
      case 'warning':
        return {
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-800',
          icon: <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />,
        };
      case 'info':
      default:
        return {
          bgColor: 'bg-electricBlue/10',
          borderColor: 'border-electricBlue/20',
          textColor: 'text-navy',
          icon: <Info className="h-5 w-5 text-electricBlue flex-shrink-0" />,
        };
    }
  };

  const styles = getCalloutStyles();

  return (
    <div className={`my-6 rounded-lg border-l-4 p-4 ${styles.bgColor} ${styles.borderColor}`}>
      <div className="flex gap-3">
        {styles.icon}
        <div className={styles.textColor}>
          {children}
        </div>
      </div>
    </div>
  );
}
