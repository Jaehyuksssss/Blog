
// type ButtonSize = "small" | "medium" | "large";
// type ButtonVariant = "primary" | "secondary" | "outline";

// interface ButtonProps {
//   size?: ButtonSize;
//   variant?: ButtonVariant;
//   fullWidth?: boolean;
// }

// const getButtonSize = (size: ButtonSize) => {
//   switch (size) {
//     case "small":
//       return css`
//         padding: 0.5rem 1rem;
//         font-size: 0.875rem;
//       `;
//     case "large":
//       return css`
//         padding: 1rem 2.5rem;
//         font-size: 1.125rem;
//       `;
//     default:
//       return css`
//         padding: 0.75rem 2rem;
//         font-size: 1rem;
//       `;
//   }
// };

// export const Button = styled.button<ButtonProps>`
//   ${({ size = "medium", variant = "primary", fullWidth, theme }) => css`
//     ${getButtonSize(size)}
//     width: ${fullWidth ? "100%" : "auto"};
//     border-radius: 4px;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease;
//     font-weight: 500;

//     ${variant === "primary" &&
//     css`
//       background-color: ${theme.colors.primary};
//       color: white;
//       &:hover {
//         background-color: ${theme.colors.primary.dark};
//       }
//     `}

//     ${variant === "secondary" &&
//     css`
//       background-color: ${theme.colors.background.secondary};
//       color: white;
//       &:hover {
//         background-color: ${theme.colors.background.secondary};
//       }
//     `}

//     ${variant === "outline" &&
//     css`
//       background-color: transparent;
//       border: 1px solid ${theme.colors.primary};
//       color: ${theme.colors.primary};
//       &:hover {
//         background-color: ${theme.colors.primary.light};
//       }
//     `}
//   `}
// `;
