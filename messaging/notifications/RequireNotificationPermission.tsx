// import { Button, Stack, Typography } from '@mui/material';
// import { useTranslation } from 'react-i18next';
// import { isNotificationSupported, useNotificationPermission } from './notification';

// export function RequireNotificationPermission({ children }: { children: React.ReactNode }) {
//   const { permission, requestPermission, isLoading } = useNotificationPermission();

//   const { t } = useTranslation();

//   if (permission === 'granted') {
//     return children;
//   }

//   return (
//     <Stack alignItems="center" justifyContent="center" height="100%" gap={4} padding={4}>
//       {!isNotificationSupported() ? (
//         // On iOS, Notification API is supported only if web app is installed on home screen
//         <>
//           <Typography variant="h4" align="center">
//             {t('notifications.installApp')}
//           </Typography>
//           <ol style={{ fontSize: 14, fontWeight: 'semibold' }}>
//             <li style={{ marginBottom: 5 }}>
//               <Typography variant="body1">{t('notifications.installAppInstructions1')}</Typography>
//             </li>
//             <li>
//               <Typography variant="body1">{t('notifications.installAppInstructions2')}</Typography>
//             </li>
//           </ol>
//         </>
//       ) : !isLoading && permission === 'denied' ? (
//         // We can't request permission if user has already denied it
//         <>
//           <Typography variant="h4" align="center">
//             {t('notifications.deniedPermissionDescription')}
//           </Typography>
//           <ol style={{ fontSize: 14, fontWeight: 'semibold' }}>
//             <li style={{ marginBottom: 5 }}>
//               <Typography variant="body1">{t('notifications.activateNotificationsInstructions1')}</Typography>
//             </li>
//             <li>
//               <Typography variant="body1">{t('notifications.activateNotificationsInstructions2')}</Typography>
//             </li>
//           </ol>
//         </>
//       ) : (
//         // Ask for permission
//         <>
//           <Typography variant="h4" align="center">
//             {t('notifications.grantPermissionDescription')}
//           </Typography>
//           <Button onClick={requestPermission} disabled={isLoading}>
//             {t('notifications.grantPermissionButton')}
//           </Button>
//         </>
//       )}
//     </Stack>
//   );
// }
