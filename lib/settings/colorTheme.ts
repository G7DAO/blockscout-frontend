import type { ColorMode } from '@chakra-ui/react';

import type { ColorThemeId } from 'types/settings';

interface ColorTheme {
  id: ColorThemeId;
  label: string;
  colorMode: ColorMode;
  hex: string;
  sampleBg: string;
}

export const COLOR_THEMES: Array<ColorTheme> = [
  {
    id: 'dark',
    label: 'Dark',
    colorMode: 'dark',
    hex: '#0B0B0B',
    sampleBg: 'url("https://storage.game7test.io/blockscout/dark_theme-sample_bg.png") center / contain no-repeat',
  },
];
