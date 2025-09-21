import { config as gluestackConfig } from '@gluestack-ui/config';
import { createConfig } from '@gluestack-ui/themed';

export const config = createConfig({
  ...gluestackConfig,
  tokens: {
    ...gluestackConfig.tokens,
    fonts: {
      heading: 'PoppinsBold',
      body: 'PoppinsRegular',
      mono: 'PoppinsRegular',
    },
  },
});