"use client";
import { ReactNode, ElementType } from 'react';

type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type ResponsiveProp<T> = T | Partial<Record<Breakpoint, T>>;

type TypographyProps = {
  children: ReactNode;
  as?: ElementType;
  fontSize?: ResponsiveProp<'xxsm'|'xsm' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl'>;
  color?: ResponsiveProp<string>;
  weight?: ResponsiveProp<'light' | 'normal' | 'medium' | 'semibold' | 'bold'>;
  lineHeight?: ResponsiveProp<'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'>;
  className?: string;
  hoverColor?: string;
  transition?: string;
};

const defaultProps = {
  as: 'p' as const,
  fontSize: 'md' as const,
  color: 'text-gray-800',
  weight: 'normal' as const,
  lineHeight: 'normal' as const,
};

const Typography = ({
  children,
  as: Tag = defaultProps.as,
  fontSize = defaultProps.fontSize,
  color = defaultProps.color,
  weight = defaultProps.weight,
  lineHeight = defaultProps.lineHeight,
  className = '',
  hoverColor,
  transition,
  ...props
}: TypographyProps) => {
  const generateResponsiveClasses = (
    value: ResponsiveProp<any>,
    mapping: Record<string, string>
  ) => {
    if (typeof value === 'string') {
      return mapping[value];
    }
    
    return Object.entries(value)
      .map(([breakpoint, val]) => 
        breakpoint === 'base' ? 
        mapping[val] : 
        `${breakpoint}:${mapping[val]}`
      )
      .join(' ');
  };

  const sizeClasses = generateResponsiveClasses(fontSize, {
    xxsm:"text-[0.65rem]",
    xsm: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xxl: 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl'
  });

  const weightClasses = generateResponsiveClasses(weight, {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  });

  const lineHeightClasses = generateResponsiveClasses(lineHeight, {
    none: 'leading-none',
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose'
  });

  const colorClasses = typeof color === 'string' ? 
    color : 
    Object.entries(color)
      .map(([breakpoint, col]) => 
        breakpoint === 'base' ? 
        `text-${col}` : 
        `${breakpoint}:text-${col}`
      )
      .join(' ');

  const hoverClass = hoverColor ? `hover:${hoverColor}` : '';
  const transitionClass = transition ? `transition-${transition}` : '';

  const combinedClasses = [
    sizeClasses,
    weightClasses,
    lineHeightClasses,
    colorClasses,
    hoverClass,
    transitionClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <Tag 
      className={combinedClasses}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Typography;