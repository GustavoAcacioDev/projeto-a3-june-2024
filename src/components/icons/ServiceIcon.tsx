import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ICodeIconProps {
    width?: string | number
    height?: string | number
    className?: string
}

export default function ServiceIcon({
    width = 54,
    height = 54,
    className,
}: ICodeIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
            className={twMerge(
                'stroke-current text-gray-[#114559] transition-colors duration-200 ',
                className,
            )}
        >
            <path d="M48.7076 37.1714C48.9305 37.5582 48.991 38.0175 48.876 38.4488C48.7609 38.8802 48.4797 39.2483 48.0938 39.4727L27.8438 51.2852C27.5857 51.4357 27.2924 51.515 26.9937 51.515C26.695 51.515 26.4016 51.4357 26.1436 51.2852L5.89359 39.4727C5.51326 39.2442 5.23825 38.875 5.1281 38.4452C5.01795 38.0154 5.08154 37.5594 5.30508 37.1761C5.52862 36.7928 5.89414 36.513 6.32249 36.3972C6.75084 36.2815 7.20756 36.3391 7.59375 36.5576L27 47.8744L46.4062 36.5576C46.793 36.3347 47.2524 36.2741 47.6837 36.3892C48.115 36.5042 48.4832 36.7855 48.7076 37.1714ZM46.4062 26.4326L27 37.7494L7.59375 26.4326C7.20952 26.2413 6.76682 26.2036 6.35577 26.3271C5.94472 26.4507 5.59621 26.7263 5.38117 27.0978C5.16613 27.4693 5.10073 27.9087 5.19828 28.3267C5.29583 28.7447 5.549 29.1098 5.90625 29.3477L26.1562 41.1602C26.4143 41.3107 26.7076 41.39 27.0063 41.39C27.305 41.39 27.5984 41.3107 27.8564 41.1602L48.1064 29.3477C48.3009 29.2377 48.4716 29.0901 48.6086 28.9136C48.7456 28.737 48.8462 28.535 48.9045 28.3193C48.9628 28.1036 48.9777 27.8784 48.9483 27.6569C48.9188 27.4354 48.8457 27.2219 48.7331 27.0289C48.6206 26.8358 48.4708 26.6671 48.2924 26.5324C48.1141 26.3977 47.9108 26.2998 47.6943 26.2443C47.4779 26.1889 47.2525 26.1769 47.0314 26.2092C46.8103 26.2416 46.5978 26.3175 46.4062 26.4326ZM5.0625 17.7652C5.06317 17.4696 5.14146 17.1794 5.28954 16.9236C5.43762 16.6678 5.65028 16.4554 5.90625 16.3076L26.1562 4.49507C26.4143 4.3446 26.7076 4.26532 27.0063 4.26532C27.305 4.26532 27.5984 4.3446 27.8564 4.49507L48.1064 16.3076C48.3611 16.4562 48.5725 16.669 48.7194 16.9247C48.8662 17.1805 48.9435 17.4702 48.9435 17.7652C48.9435 18.0601 48.8662 18.3498 48.7194 18.6056C48.5725 18.8613 48.3611 19.0741 48.1064 19.2227L27.8564 31.0352C27.5984 31.1857 27.305 31.265 27.0063 31.265C26.7076 31.265 26.4143 31.1857 26.1562 31.0352L5.90625 19.2227C5.65028 19.0749 5.43762 18.8625 5.28954 18.6067C5.14146 18.3509 5.06317 18.0607 5.0625 17.7652ZM10.0997 17.7652L27 27.6244L43.9003 17.7652L27 7.90593L10.0997 17.7652Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none" />

        </svg>
    )
}
