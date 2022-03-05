type Props = {
  height?: number;
  width?: number;
  color?: string;
};

export default function Angular({ height = 60, width = 60, color = '#071d28' }: Props) {
  return (
    <svg {...{ height, width }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.5 65">
      <path
        fill={color}
        d="M30.6 0L0 10.8l4.8 40.1L30.7 65l26-14.4 4.8-40.1L30.6 0zM44 47.3l-4.2-9.6h-9.1v23.8l-23-12.7-4.2-35.7 27.2-9.6v1.8l20.2 42.2-6.9-.2zm-6.6-15.1l-6.6-13.4-.1 1.1v12.4h-6.1l6.2-13.4V5.3L11.4 47.4l7-.1 3.8-9.5h8.6v-5.6h6.6z"
      />
    </svg>
  );
}
