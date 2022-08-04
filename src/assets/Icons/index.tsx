type IconProps = {
  color?: string;
  backgroundColor?: string;
  size?: number;
} & React.SVGAttributes<SVGElement>;

export function SavedIcon({ color, size }: IconProps) {
  return (
    <svg
      width={size || '12'}
      height={size - 2 || '10'}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 4.5L5.25 8.5L10.75 0.5"
        stroke={color || '#7FFF73'}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function EditIcon({ color, size }: IconProps) {
  return (
    <svg
      width={size || '9'}
      height={size || '9'}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.64 8.145H0.36C0.160875 8.145 0 8.30587 0 8.505V8.91C0 8.9595 0.0405 9 0.09 9H8.91C8.9595 9 9 8.9595 9 8.91V8.505C9 8.30587 8.83912 8.145 8.64 8.145ZM1.63913 7.2C1.66163 7.2 1.68413 7.19775 1.70663 7.19438L3.59887 6.8625C3.62137 6.858 3.64275 6.84788 3.6585 6.831L8.42737 2.06212C8.4378 2.05172 8.44608 2.03935 8.45172 2.02575C8.45737 2.01214 8.46027 1.99755 8.46027 1.98281C8.46027 1.96808 8.45737 1.95349 8.45172 1.93988C8.44608 1.92627 8.4378 1.91391 8.42737 1.9035L6.55763 0.032625C6.53625 0.01125 6.50812 0 6.47775 0C6.44737 0 6.41925 0.01125 6.39788 0.032625L1.629 4.8015C1.61212 4.81838 1.602 4.83862 1.5975 4.86112L1.26562 6.75337C1.25468 6.81364 1.25859 6.87567 1.27702 6.93408C1.29544 6.9925 1.32783 7.04555 1.37137 7.08862C1.44562 7.16062 1.539 7.2 1.63913 7.2Z"
        fill={color || 'white'}
      />
    </svg>
  );
}

export function DeleteIcon({ color, size }: IconProps) {
  return (
    <svg
      width={size || '8'}
      height={size + 1 || '9'}
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.615385 0.6C0.452174 0.6 0.295649 0.663214 0.180242 0.775736C0.064835 0.888258 0 1.04087 0 1.2V1.8C0 1.95913 0.064835 2.11174 0.180242 2.22426C0.295649 2.33679 0.452174 2.4 0.615385 2.4H0.923077V7.8C0.923077 8.11826 1.05275 8.42348 1.28356 8.64853C1.51437 8.87357 1.82743 9 2.15385 9H5.84615C6.17257 9 6.48563 8.87357 6.71644 8.64853C6.94725 8.42348 7.07692 8.11826 7.07692 7.8V2.4H7.38462C7.54783 2.4 7.70435 2.33679 7.81976 2.22426C7.93517 2.11174 8 1.95913 8 1.8V1.2C8 1.04087 7.93517 0.888258 7.81976 0.775736C7.70435 0.663214 7.54783 0.6 7.38462 0.6H5.23077C5.23077 0.44087 5.16593 0.288258 5.05053 0.175736C4.93512 0.0632141 4.77859 0 4.61538 0L3.38462 0C3.22141 0 3.06488 0.0632141 2.94947 0.175736C2.83407 0.288258 2.76923 0.44087 2.76923 0.6H0.615385ZM2.46154 3C2.54314 3 2.62141 3.03161 2.67911 3.08787C2.73681 3.14413 2.76923 3.22044 2.76923 3.3V7.5C2.76923 7.57957 2.73681 7.65587 2.67911 7.71213C2.62141 7.76839 2.54314 7.8 2.46154 7.8C2.37993 7.8 2.30167 7.76839 2.24397 7.71213C2.18626 7.65587 2.15385 7.57957 2.15385 7.5V3.3C2.15385 3.22044 2.18626 3.14413 2.24397 3.08787C2.30167 3.03161 2.37993 3 2.46154 3ZM4 3C4.08161 3 4.15987 3.03161 4.21757 3.08787C4.27528 3.14413 4.30769 3.22044 4.30769 3.3V7.5C4.30769 7.57957 4.27528 7.65587 4.21757 7.71213C4.15987 7.76839 4.08161 7.8 4 7.8C3.9184 7.8 3.84013 7.76839 3.78243 7.71213C3.72473 7.65587 3.69231 7.57957 3.69231 7.5V3.3C3.69231 3.22044 3.72473 3.14413 3.78243 3.08787C3.84013 3.03161 3.9184 3 4 3ZM5.84615 3.3V7.5C5.84615 7.57957 5.81374 7.65587 5.75603 7.71213C5.69833 7.76839 5.62007 7.8 5.53846 7.8C5.45686 7.8 5.37859 7.76839 5.32089 7.71213C5.26319 7.65587 5.23077 7.57957 5.23077 7.5V3.3C5.23077 3.22044 5.26319 3.14413 5.32089 3.08787C5.37859 3.03161 5.45686 3 5.53846 3C5.62007 3 5.69833 3.03161 5.75603 3.08787C5.81374 3.14413 5.84615 3.22044 5.84615 3.3Z"
        fill={color || 'white'}
      />
    </svg>
  );
}
