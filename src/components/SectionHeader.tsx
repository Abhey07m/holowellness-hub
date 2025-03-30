
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = true, light = false }: SectionHeaderProps) => {
  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      <h2 className={cn(
        'text-3xl md:text-4xl font-bold mb-4',
        light ? 'text-white' : 'text-zenfit-purple-dark'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg max-w-3xl',
          centered && 'mx-auto',
          light ? 'text-white/80' : 'text-zenfit-purple-medium/80'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
