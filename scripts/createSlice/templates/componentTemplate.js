const interfaceConst = 'interface';

module.exports = (componentName) => `import { cn } from '@/shared/lib/classNames/classNames';
import cls from './${componentName}.module.scss';
import { memo } from 'react';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props;
    
    return (
        <div className={cn(cls.${componentName}, {}, [className])}>
           
        </div>
    );
});`;