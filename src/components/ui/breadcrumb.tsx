// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbSeparator,
//   SystemStyleObject,
//   BreadcrumbProps,
// } from '@chakra-ui/react';
// import * as React from 'react';

// export interface BreadcrumbRootProps extends BreadcrumbProps {
//   separator?: React.ReactNode;
//   separatorGap?: SystemStyleObject['gap'];
// }

// export const BreadcrumbRoot = React.forwardRef<HTMLDivElement, BreadcrumbRootProps>(
//   function BreadcrumbRoot(props, ref) {
//     const { separator, separatorGap, children, ...rest } = props;

//     const validChildren = React.Children.toArray(children).filter(React.isValidElement);

//     return (
//       <Breadcrumb ref={ref} {...rest}>
//         <Breadcrumb.List gap={separatorGap}>
//           {validChildren.map((child, index) => {
//             const last = index === validChildren.length - 1;
//             return (
//               <React.Fragment key={index}>
//                 <BreadcrumbItem>{child}</BreadcrumbItem>
//                 {!last && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
//               </React.Fragment>
//             );
//           })}
//         </Breadcrumb.List>
//       </Breadcrumb>
//     );
//   }
// );

// // Export these directly from Chakra UI
// export { BreadcrumbLink };
// export const BreadcrumbCurrentLink = BreadcrumbLink; // Alias if necessary
