
import { CSSProperties, PropsWithChildren } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface SkeletonProps {
    count?: number;
    wrapper?: React.FunctionComponent<PropsWithChildren<unknown>>;
    circle?: boolean;
    className?: string;
    containerClassName?: string;
    style?: CSSProperties;
    baseColor?: string;
    highlightColor?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    duration?: number;
    direction?: 'ltr' | 'rtl';
}
const SkeletonLoading = ({ count=1, wrapper, circle=false, className, containerClassName, style, baseColor='#e0e0e0', highlightColor='#f4f6f9', width, height, borderRadius, duration, direction='ltr' }: SkeletonProps) => {
    return (
        <>
        <SkeletonTheme duration={duration} direction={direction} baseColor={baseColor} highlightColor={highlightColor} height={height} width={width} borderRadius={borderRadius}>
            <Skeleton circle={circle} style={style} className={className} containerClassName={containerClassName} count={count} wrapper={wrapper}/>
        </SkeletonTheme>
        </>
    )
}

export default SkeletonLoading
