/**
 * Schedully - Class Schedule & Lock Screen Wallpaper Builder
 * Includes Matcha Green, Mocha Brown Palettes + Auto-Contrast Lockscreen Clock Fix
 */

const THEME_PALETTES = {
  light: {
    indigo: {
      top: '#2563EB', bottom: '#DBEAFE', bg: '#F0F4FA', surface: '#FFFFFF', variant: '#E2E8F0', text: '#0F172A', subtext: '#475569', outline: '#CBD5E1', primaryContainer: '#DBEAFE',
      defaultBg: '#F0F4FA', defaultHeader: '#DBEAFE', defaultSurface: '#F8FAFC',
      swatches: ['#F8FAFC', '#E2E8F0', '#CBD5E1', '#94A3B8', '#64748B', '#475569', '#334155', '#1E293B', '#0F172A'],
      courseSwatches: ['#1D4ED8', '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE']
    },
    coral: {
      top: '#D97706', bottom: '#FEF3C7', bg: '#FFFBEB', surface: '#FFFFFF', variant: '#FDE68A', text: '#451A03', subtext: '#92400E', outline: '#FCD34D', primaryContainer: '#FEF3C7',
      defaultBg: '#FFFBEB', defaultHeader: '#FDE68A', defaultSurface: '#FFFDF5',
      swatches: ['#FFFDF5', '#FEF3C7', '#FDE68A', '#FCD34D', '#FBBF24', '#F59E0B', '#D97706', '#B45309', '#78350F'],
      courseSwatches: ['#92400E', '#B45309', '#D97706', '#F59E0B', '#FBBF24', '#FDE68A']
    },
    lavender: {
      top: '#7C3AED', bottom: '#EDE9FE', bg: '#FAF5FF', surface: '#FFFFFF', variant: '#E9D5FF', text: '#3B0764', subtext: '#7E22CE', outline: '#D8B4FE', primaryContainer: '#EDE9FE',
      defaultBg: '#FAF5FF', defaultHeader: '#E9D5FF', defaultSurface: '#FAF8FF',
      swatches: ['#FAF8FF', '#F3E8FF', '#E9D5FF', '#D8B4FE', '#C084FC', '#A855F7', '#9333EA', '#7E22CE', '#6B21A8'],
      courseSwatches: ['#5B21B6', '#6D28D9', '#7C3AED', '#8B5CF6', '#A855F7', '#C084FC']
    },
    blush: {
      top: '#DB2777', bottom: '#FCE7F3', bg: '#FDF2F8', surface: '#FFFFFF', variant: '#FBCFE8', text: '#500724', subtext: '#BE185D', outline: '#F9A8D4', primaryContainer: '#FCE7F3',
      defaultBg: '#FDF2F8', defaultHeader: '#FBCFE8', defaultSurface: '#FFF5F9',
      swatches: ['#FFF5F9', '#FCE7F3', '#FBCFE8', '#F9A8D4', '#F472B6', '#EC4899', '#DB2777', '#BE185D', '#9D174D'],
      courseSwatches: ['#9F1239', '#BE123C', '#E11D48', '#F43F5E', '#FB7185', '#FDA4AF']
    },
    sky: {
      top: '#0284C7', bottom: '#E0F2FE', bg: '#F0F9FF', surface: '#FFFFFF', variant: '#BAE6FD', text: '#0C4A6E', subtext: '#0369A1', outline: '#7DD3FC', primaryContainer: '#E0F2FE',
      defaultBg: '#F0F9FF', defaultHeader: '#BAE6FD', defaultSurface: '#F5FBFF',
      swatches: ['#F5FBFF', '#E0F2FE', '#BAE6FD', '#7DD3FC', '#38BDF8', '#0284C7', '#0369A1', '#075985', '#0C4A6E'],
      courseSwatches: ['#075985', '#0369A1', '#0284C7', '#38BDF8', '#7DD3FC', '#BAE6FD']
    },
    matcha: {
      top: '#166534', bottom: '#DCFCE7', bg: '#F0FDF4', surface: '#FFFFFF', variant: '#BBF7D0', text: '#14532D', subtext: '#15803D', outline: '#86EFAC', primaryContainer: '#DCFCE7',
      defaultBg: '#F0FDF4', defaultHeader: '#BBF7D0', defaultSurface: '#F4FDF7',
      swatches: ['#F4FDF7', '#DCFCE7', '#BBF7D0', '#86EFAC', '#4ADE80', '#22C55E', '#16A34A', '#15803D', '#14532D'],
      courseSwatches: ['#14532D', '#15803D', '#16A34A', '#22C55E', '#4ADE80', '#86EFAC']
    },
    mocha: {
      top: '#7C6B5E', bottom: '#ECE1D5', bg: '#F5EBE4', surface: '#FFFFFF', variant: '#D6C6B9', text: '#4E3E37', subtext: '#7C6B5E', outline: '#CBB4A9', primaryContainer: '#ECE1D5',
      defaultBg: '#F5EBE4', defaultHeader: '#D6C6B9', defaultSurface: '#FCF8F5',
      swatches: ['#FCF8F5', '#ECE1D5', '#D6C6B9', '#CBB4A9', '#AA9686', '#8C7868', '#7C6B5E', '#6B4D43', '#4E3E37'],
      courseSwatches: ['#4E3E37', '#6B4D43', '#7C6B5E', '#8C7868', '#AA9686', '#CBB4A9']
    },
    sage: {
      top: '#3A5A40', bottom: '#DAD7CD', bg: '#F2F4F0', surface: '#FFFFFF', variant: '#C5C9B8', text: '#344E41', subtext: '#588157', outline: '#A3B18A', primaryContainer: '#DAD7CD',
      defaultBg: '#F2F4F0', defaultHeader: '#C5C9B8', defaultSurface: '#F8FAF5',
      swatches: ['#F8FAF5', '#DAD7CD', '#C5C9B8', '#A3B18A', '#899A72', '#588157', '#486946', '#3A5A40', '#344E41'],
      courseSwatches: ['#344E41', '#3A5A40', '#486946', '#588157', '#899A72', '#A3B18A']
    },
    slate: {
      top: '#3D405B', bottom: '#E5E7EB', bg: '#F3F4F6', surface: '#FFFFFF', variant: '#D1D5DB', text: '#1E293B', subtext: '#475569', outline: '#9CA3AF', primaryContainer: '#E5E7EB',
      defaultBg: '#F3F4F6', defaultHeader: '#D1D5DB', defaultSurface: '#F9FAFB',
      swatches: ['#F9FAFB', '#E5E7EB', '#D1D5DB', '#9CA3AF', '#6B7280', '#4B5563', '#374151', '#1F2937', '#111827'],
      courseSwatches: ['#1E293B', '#334155', '#3D405B', '#475569', '#64748B', '#94A3B8']
    },
    sunset: { top: '#E34F26', bottom: '#FFDDC1', bg: '#FFF0E6', surface: '#FFFFFF', variant: '#FFCBA4', text: '#5C1A06', subtext: '#E34F26', outline: '#FFB38A', primaryContainer: '#FFDDC1', defaultBg: '#FFF0E6', defaultHeader: '#FFCBA4', defaultSurface: '#FFF6F0', swatches: ['#FFF6F0', '#FFDDC1', '#FFCBA4', '#FFB38A', '#FF9B70', '#E34F26', '#B83A18', '#8C270D', '#5C1A06'], courseSwatches: ['#5C1A06', '#8C270D', '#B83A18', '#E34F26', '#FF9B70', '#FFB38A'] },
    ocean: { top: '#006D77', bottom: '#EDF6F9', bg: '#F4F9F9', surface: '#FFFFFF', variant: '#83C5BE', text: '#003A40', subtext: '#006D77', outline: '#83C5BE', primaryContainer: '#EDF6F9', defaultBg: '#F4F9F9', defaultHeader: '#83C5BE', defaultSurface: '#F8FBFB', swatches: ['#F8FBFB', '#EDF6F9', '#83C5BE', '#4EA8DE', '#006D77', '#00535B', '#003A40', '#002225', '#001012'], courseSwatches: ['#003A40', '#00535B', '#006D77', '#4EA8DE', '#83C5BE', '#EDF6F9'] },
    forest: { top: '#283618', bottom: '#DDA15E', bg: '#FEFAE0', surface: '#FFFFFF', variant: '#E9EDC9', text: '#131A0C', subtext: '#283618', outline: '#CCD5AE', primaryContainer: '#DDA15E', defaultBg: '#FEFAE0', defaultHeader: '#E9EDC9', defaultSurface: '#FFFCF0', swatches: ['#FFFCF0', '#FEFAE0', '#E9EDC9', '#CCD5AE', '#A3B18A', '#606C38', '#283618', '#1A2410', '#131A0C'], courseSwatches: ['#131A0C', '#1A2410', '#283618', '#606C38', '#A3B18A', '#CCD5AE'] },
    sand: { top: '#C2A878', bottom: '#F9F6F0', bg: '#FDFBF7', surface: '#FFFFFF', variant: '#EAE0CC', text: '#4A3F2C', subtext: '#C2A878', outline: '#D6C8A9', primaryContainer: '#F9F6F0', defaultBg: '#FDFBF7', defaultHeader: '#EAE0CC', defaultSurface: '#FEFDFB', swatches: ['#FEFDFB', '#F9F6F0', '#EAE0CC', '#D6C8A9', '#C2A878', '#9B865D', '#756343', '#4A3F2C', '#292217'], courseSwatches: ['#4A3F2C', '#756343', '#9B865D', '#C2A878', '#D6C8A9', '#EAE0CC'] },
    plum: { top: '#6D597A', bottom: '#F3EBF6', bg: '#FAF5FC', surface: '#FFFFFF', variant: '#E3D5E8', text: '#2E2236', subtext: '#6D597A', outline: '#CBB8D4', primaryContainer: '#F3EBF6', defaultBg: '#FAF5FC', defaultHeader: '#E3D5E8', defaultSurface: '#FDF9FE', swatches: ['#FDF9FE', '#F3EBF6', '#E3D5E8', '#CBB8D4', '#B596C1', '#6D597A', '#52415E', '#392C42', '#2E2236'], courseSwatches: ['#2E2236', '#392C42', '#52415E', '#6D597A', '#B596C1', '#CBB8D4'] },
    cherry: { top: '#780000', bottom: '#FCECEC', bg: '#FDF5F5', surface: '#FFFFFF', variant: '#F4C8C8', text: '#3B0000', subtext: '#780000', outline: '#EBA4A4', primaryContainer: '#FCECEC', defaultBg: '#FDF5F5', defaultHeader: '#F4C8C8', defaultSurface: '#FEFAFA', swatches: ['#FEFAFA', '#FCECEC', '#F4C8C8', '#EBA4A4', '#C1121F', '#780000', '#540000', '#3B0000', '#240000'], courseSwatches: ['#3B0000', '#540000', '#780000', '#C1121F', '#EBA4A4', '#F4C8C8'] },
    mint: { top: '#2A9D8F', bottom: '#E6F4F1', bg: '#F2F9F7', surface: '#FFFFFF', variant: '#C0E4DC', text: '#0F3D37', subtext: '#2A9D8F', outline: '#95D1C6', primaryContainer: '#E6F4F1', defaultBg: '#F2F9F7', defaultHeader: '#C0E4DC', defaultSurface: '#F7FCFB', swatches: ['#F7FCFB', '#E6F4F1', '#C0E4DC', '#95D1C6', '#59BBAE', '#2A9D8F', '#1F756A', '#16544C', '#0F3D37'], courseSwatches: ['#0F3D37', '#16544C', '#1F756A', '#2A9D8F', '#59BBAE', '#95D1C6'] },
    rust: { top: '#B04105', bottom: '#FAEEE7', bg: '#FDF6F2', surface: '#FFFFFF', variant: '#F0D4C3', text: '#4D1A00', subtext: '#B04105', outline: '#E4B599', primaryContainer: '#FAEEE7', defaultBg: '#FDF6F2', defaultHeader: '#F0D4C3', defaultSurface: '#FEF9F6', swatches: ['#FEF9F6', '#FAEEE7', '#F0D4C3', '#E4B599', '#D17C4D', '#B04105', '#822D00', '#5F2100', '#4D1A00'], courseSwatches: ['#4D1A00', '#5F2100', '#822D00', '#B04105', '#D17C4D', '#E4B599'] },
    ash: { top: '#7F8C8D', bottom: '#F0F2F2', bg: '#F7F8F8', surface: '#FFFFFF', variant: '#D3D7D7', text: '#2C3E50', subtext: '#7F8C8D', outline: '#BDC3C7', primaryContainer: '#F0F2F2', defaultBg: '#F7F8F8', defaultHeader: '#D3D7D7', defaultSurface: '#FBFCFC', swatches: ['#FBFCFC', '#F0F2F2', '#D3D7D7', '#BDC3C7', '#A0A7A7', '#7F8C8D', '#546363', '#394646', '#2C3E50'], courseSwatches: ['#2C3E50', '#394646', '#546363', '#7F8C8D', '#A0A7A7', '#BDC3C7'] }
  },
  dark: {
    indigo: {
      top: '#3B82F6', bottom: '#1D4ED8', bg: '#0F172A', surface: '#1E293B', variant: '#334155', text: '#F8FAFC', subtext: '#CBD5E1', outline: 'rgba(226,232,240,0.3)', primaryContainer: '#1E293B', onPrimary: '#FFFFFF',
      defaultBg: '#0F172A', defaultHeader: '#1E293B', defaultSurface: '#334155',
      swatches: ['#0F172A', '#1E293B', '#334155', '#475569', '#64748B', '#94A3B8', '#CBD5E1', '#E2E8F0', '#F4F6FA'],
      courseSwatches: ['#93C5FD', '#60A5FA', '#3B82F6', '#2563EB', '#1D4ED8', '#1E40AF']
    },
    coral: {
      top: '#D97706', bottom: '#B45309', bg: '#451A03', surface: '#78350F', variant: '#92400E', text: '#FFFBEB', subtext: '#FDE68A', outline: 'rgba(253,230,138,0.3)', primaryContainer: '#78350F', onPrimary: '#FFFFFF',
      defaultBg: '#451A03', defaultHeader: '#78350F', defaultSurface: '#92400E',
      swatches: ['#451A03', '#78350F', '#B45309', '#D97706', '#F59E0B', '#FBBF24', '#FCD34D', '#FDE68A', '#FFFBEB'],
      courseSwatches: ['#FDE68A', '#FBBF24', '#F59E0B', '#D97706', '#B45309', '#92400E']
    },
    lavender: {
      top: '#7C3AED', bottom: '#6D28D9', bg: '#3B0764', surface: '#5B21B6', variant: '#6B21A8', text: '#FAF5FF', subtext: '#E9D5FF', outline: 'rgba(233,213,255,0.3)', primaryContainer: '#5B21B6', onPrimary: '#FFFFFF',
      defaultBg: '#3B0764', defaultHeader: '#5B21B6', defaultSurface: '#6B21A8',
      swatches: ['#3B0764', '#5B21B6', '#6B21A8', '#7E22CE', '#9333EA', '#A855F7', '#C084FC', '#D8B4FE', '#FAF5FF'],
      courseSwatches: ['#D8B4FE', '#C084FC', '#A855F7', '#8B5CF6', '#7C3AED', '#6D28D9']
    },
    blush: {
      top: '#DB2777', bottom: '#BE185D', bg: '#500724', surface: '#831843', variant: '#9D174D', text: '#FDF2F8', subtext: '#FBCFE8', outline: 'rgba(251,207,232,0.3)', primaryContainer: '#831843', onPrimary: '#FFFFFF',
      defaultBg: '#500724', defaultHeader: '#831843', defaultSurface: '#9D174D',
      swatches: ['#500724', '#831843', '#9D174D', '#BE185D', '#DB2777', '#EC4899', '#F472B6', '#F9A8D4', '#FDF2F8'],
      courseSwatches: ['#FDA4AF', '#FB7185', '#F43F5E', '#E11D48', '#BE123C', '#9F1239']
    },
    sky: {
      top: '#0284C7', bottom: '#0369A1', bg: '#0C4A6E', surface: '#075985', variant: '#0369A1', text: '#F0F9FF', subtext: '#BAE6FD', outline: 'rgba(186,230,253,0.3)', primaryContainer: '#075985', onPrimary: '#FFFFFF',
      defaultBg: '#0C4A6E', defaultHeader: '#075985', defaultSurface: '#0369A1',
      swatches: ['#0C4A6E', '#075985', '#0369A1', '#0284C7', '#38BDF8', '#7DD3FC', '#BAE6FD', '#E0F2FE', '#F0F9FF'],
      courseSwatches: ['#BAE6FD', '#7DD3FC', '#38BDF8', '#0284C7', '#0369A1', '#075985']
    },
    matcha: {
      top: '#16A34A', bottom: '#15803D', bg: '#14532D', surface: '#166534', variant: '#15803D', text: '#F0FDF4', subtext: '#BBF7D0', outline: 'rgba(187,247,208,0.3)', primaryContainer: '#166534', onPrimary: '#FFFFFF',
      defaultBg: '#14532D', defaultHeader: '#166534', defaultSurface: '#15803D',
      swatches: ['#14532D', '#166534', '#15803D', '#16A34A', '#22C55E', '#4ADE80', '#86EFAC', '#BBF7D0', '#F0FDF4'],
      courseSwatches: ['#86EFAC', '#4ADE80', '#22C55E', '#16A34A', '#15803D', '#14532D']
    },
    mocha: {
      top: '#AA9686', bottom: '#8C7868', bg: '#4E3E37', surface: '#6B4D43', variant: '#7C6B5E', text: '#F5EBE4', subtext: '#D6C6B9', outline: 'rgba(203,180,169,0.3)', primaryContainer: '#6B4D43', onPrimary: '#FFFFFF',
      defaultBg: '#4E3E37', defaultHeader: '#6B4D43', defaultSurface: '#7C6B5E',
      swatches: ['#4E3E37', '#6B4D43', '#7C6B5E', '#8C7868', '#AA9686', '#CBB4A9', '#D6C6B9', '#ECE1D5', '#FCF8F5'],
      courseSwatches: ['#CBB4A9', '#AA9686', '#8C7868', '#7C6B5E', '#6B4D43', '#4E3E37']
    },
    sage: {
      top: '#899A72', bottom: '#588157', bg: '#344E41', surface: '#3A5A40', variant: '#486946', text: '#F8FAF5', subtext: '#C5C9B8', outline: 'rgba(163,177,138,0.3)', primaryContainer: '#3A5A40', onPrimary: '#FFFFFF',
      defaultBg: '#344E41', defaultHeader: '#3A5A40', defaultSurface: '#486946',
      swatches: ['#344E41', '#3A5A40', '#486946', '#588157', '#899A72', '#A3B18A', '#C5C9B8', '#DAD7CD', '#F8FAF5'],
      courseSwatches: ['#A3B18A', '#899A72', '#588157', '#486946', '#3A5A40', '#344E41']
    },
    slate: {
      top: '#9CA3AF', bottom: '#6B7280', bg: '#111827', surface: '#1F2937', variant: '#374151', text: '#F9FAFB', subtext: '#D1D5DB', outline: 'rgba(156,163,175,0.3)', primaryContainer: '#1F2937', onPrimary: '#FFFFFF',
      defaultBg: '#111827', defaultHeader: '#1F2937', defaultSurface: '#374151',
      swatches: ['#111827', '#1F2937', '#374151', '#4B5563', '#6B7280', '#9CA3AF', '#D1D5DB', '#E5E7EB', '#F9FAFB'],
      courseSwatches: ['#9CA3AF', '#6B7280', '#4B5563', '#374151', '#1F2937', '#111827']
    },
    sunset: { top: '#FF9B70', bottom: '#E34F26', bg: '#331005', surface: '#5C1A06', variant: '#8C270D', text: '#FFF0E6', subtext: '#FFCBA4', outline: 'rgba(255,179,138,0.3)', primaryContainer: '#5C1A06', onPrimary: '#FFFFFF', defaultBg: '#331005', defaultHeader: '#5C1A06', defaultSurface: '#8C270D', swatches: ['#331005', '#5C1A06', '#8C270D', '#B83A18', '#E34F26', '#FF9B70', '#FFB38A', '#FFCBA4', '#FFF0E6'], courseSwatches: ['#FFB38A', '#FF9B70', '#E34F26', '#B83A18', '#8C270D', '#5C1A06'] },
    ocean: { top: '#4EA8DE', bottom: '#006D77', bg: '#001A1D', surface: '#003A40', variant: '#00535B', text: '#F4F9F9', subtext: '#83C5BE', outline: 'rgba(131,197,190,0.3)', primaryContainer: '#003A40', onPrimary: '#FFFFFF', defaultBg: '#001A1D', defaultHeader: '#003A40', defaultSurface: '#00535B', swatches: ['#001A1D', '#003A40', '#00535B', '#006D77', '#4EA8DE', '#83C5BE', '#A9D6D1', '#CBE8E4', '#F4F9F9'], courseSwatches: ['#83C5BE', '#4EA8DE', '#006D77', '#00535B', '#003A40', '#001A1D'] },
    forest: { top: '#606C38', bottom: '#283618', bg: '#0C1108', surface: '#131A0C', variant: '#1A2410', text: '#FEFAE0', subtext: '#CCD5AE', outline: 'rgba(204,213,174,0.3)', primaryContainer: '#131A0C', onPrimary: '#FFFFFF', defaultBg: '#0C1108', defaultHeader: '#131A0C', defaultSurface: '#1A2410', swatches: ['#0C1108', '#131A0C', '#1A2410', '#283618', '#606C38', '#A3B18A', '#CCD5AE', '#E9EDC9', '#FEFAE0'], courseSwatches: ['#CCD5AE', '#A3B18A', '#606C38', '#283618', '#1A2410', '#131A0C'] },
    sand: { top: '#C2A878', bottom: '#9B865D', bg: '#292217', surface: '#4A3F2C', variant: '#756343', text: '#FDFBF7', subtext: '#D6C8A9', outline: 'rgba(214,200,169,0.3)', primaryContainer: '#4A3F2C', onPrimary: '#FFFFFF', defaultBg: '#292217', defaultHeader: '#4A3F2C', defaultSurface: '#756343', swatches: ['#292217', '#4A3F2C', '#756343', '#9B865D', '#C2A878', '#D6C8A9', '#EAE0CC', '#F9F6F0', '#FDFBF7'], courseSwatches: ['#D6C8A9', '#C2A878', '#9B865D', '#756343', '#4A3F2C', '#292217'] },
    plum: { top: '#B596C1', bottom: '#6D597A', bg: '#1D1522', surface: '#2E2236', variant: '#392C42', text: '#FAF5FC', subtext: '#CBB8D4', outline: 'rgba(203,184,212,0.3)', primaryContainer: '#2E2236', onPrimary: '#FFFFFF', defaultBg: '#1D1522', defaultHeader: '#2E2236', defaultSurface: '#392C42', swatches: ['#1D1522', '#2E2236', '#392C42', '#52415E', '#6D597A', '#B596C1', '#CBB8D4', '#E3D5E8', '#FAF5FC'], courseSwatches: ['#CBB8D4', '#B596C1', '#6D597A', '#52415E', '#392C42', '#2E2236'] },
    cherry: { top: '#C1121F', bottom: '#780000', bg: '#170000', surface: '#3B0000', variant: '#540000', text: '#FDF5F5', subtext: '#EBA4A4', outline: 'rgba(235,164,164,0.3)', primaryContainer: '#3B0000', onPrimary: '#FFFFFF', defaultBg: '#170000', defaultHeader: '#3B0000', defaultSurface: '#540000', swatches: ['#170000', '#3B0000', '#540000', '#780000', '#C1121F', '#EBA4A4', '#F4C8C8', '#FCECEC', '#FDF5F5'], courseSwatches: ['#EBA4A4', '#C1121F', '#780000', '#540000', '#3B0000', '#170000'] },
    mint: { top: '#59BBAE', bottom: '#2A9D8F', bg: '#0A2522', surface: '#0F3D37', variant: '#16544C', text: '#F2F9F7', subtext: '#95D1C6', outline: 'rgba(149,209,198,0.3)', primaryContainer: '#0F3D37', onPrimary: '#FFFFFF', defaultBg: '#0A2522', defaultHeader: '#0F3D37', defaultSurface: '#16544C', swatches: ['#0A2522', '#0F3D37', '#16544C', '#1F756A', '#2A9D8F', '#59BBAE', '#95D1C6', '#C0E4DC', '#F2F9F7'], courseSwatches: ['#95D1C6', '#59BBAE', '#2A9D8F', '#1F756A', '#16544C', '#0F3D37'] },
    rust: { top: '#D17C4D', bottom: '#B04105', bg: '#291100', surface: '#4D1A00', variant: '#5F2100', text: '#FDF6F2', subtext: '#E4B599', outline: 'rgba(228,181,153,0.3)', primaryContainer: '#4D1A00', onPrimary: '#FFFFFF', defaultBg: '#291100', defaultHeader: '#4D1A00', defaultSurface: '#5F2100', swatches: ['#291100', '#4D1A00', '#5F2100', '#822D00', '#B04105', '#D17C4D', '#E4B599', '#F0D4C3', '#FDF6F2'], courseSwatches: ['#E4B599', '#D17C4D', '#B04105', '#822D00', '#5F2100', '#4D1A00'] },
    ash: { top: '#A0A7A7', bottom: '#7F8C8D', bg: '#1C252D', surface: '#2C3E50', variant: '#394646', text: '#F7F8F8', subtext: '#BDC3C7', outline: 'rgba(189,195,199,0.3)', primaryContainer: '#2C3E50', onPrimary: '#FFFFFF', defaultBg: '#1C252D', defaultHeader: '#2C3E50', defaultSurface: '#394646', swatches: ['#1C252D', '#2C3E50', '#394646', '#546363', '#7F8C8D', '#A0A7A7', '#BDC3C7', '#D3D7D7', '#F7F8F8'], courseSwatches: ['#BDC3C7', '#A0A7A7', '#7F8C8D', '#546363', '#394646', '#2C3E50'] }
  }
};

class SchedullyApp {
  constructor() {
    this.classes = [];

    this.selectedColor = '#1D4ED8';
    this.newCourseFontColor = '#FFFFFF';
    this.activeDevice = 'phone';

    this.currentMode = 'auto';
    this.currentPalette = 'indigo';

    // Layout Customization State
    this.showTitle = true;
    this.timetableTitleText = 'Untitled';
    this.newCourseDisplayTime = true;
    this.globalCardTimes = true;
    this.globalCourseType = true;
    this.globalCourseRoom = true;
    this.globalCourseLecturer = true;
    this.globalCourseGroup = true;
    this.globalAdaptiveColor = true;
    this.showTable = true;
    this.showLockUI = true;
    this.clockFormat = '12';
    this.gridStartHour = 9;
    this.gridEndHour = 17;
    this.classes = [];
    this.activeDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    this.gridWidthVal = 100;
    this.gridHeightVal = 49;
    this.gridFontSizeVal = 9;
    this.gridYPosVal = 0;

    this.initDOMElements();
    this.bindEvents();

    this.applyThemeEngine();

    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (this.currentMode === 'auto') {
          this.applyThemeEngine();
        }
      });
    }

    this.updateClock();
    setInterval(() => this.updateClock(), 60000);

    // this.loadFromLocal();
    this.renderAll();
  }

  initDOMElements() {
    this.headerTheme = document.getElementById('header-theme');
    this.contentTheme = document.getElementById('content-theme');
    
    this.headerLayoutOptions = document.getElementById('header-layout-options');
    this.contentLayoutOptions = document.getElementById('content-layout-options');

    this.headerAddCourse = document.getElementById('header-add-course');
    this.contentAddCourse = document.getElementById('content-add-course');
    this.headerFileImport = document.getElementById('header-file-import');
    this.contentFileImport = document.getElementById('content-file-import');
    this.headerScanner = document.getElementById('header-scanner');
    this.contentScanner = document.getElementById('content-scanner');

    this.ocrFileInput = document.getElementById('ocr-file-input');
    this.ocrLoadingBar = document.getElementById('ocr-loading-bar');
    this.ocrLoadingText = document.getElementById('ocr-loading-text');
    
    const inputApiKey = document.getElementById('input-api-key');
    if (inputApiKey) {
      const savedKey = localStorage.getItem('tf_api_key');
      if (savedKey) inputApiKey.value = savedKey;
      
      // Auto-save key as user types or pastes
      inputApiKey.addEventListener('input', (e) => {
        localStorage.setItem('tf_api_key', e.target.value.trim());
      });
    }

    this.addCourseForm = document.getElementById('add-course-form');
    this.inputCourseCode = document.getElementById('input-course-code');
    this.inputStartTime = document.getElementById('input-start-time');
    this.inputEndTime = document.getElementById('input-end-time');
    this.inputType = document.getElementById('input-type');
    this.inputLocation = document.getElementById('input-location');
    this.inputLecturer = document.getElementById('input-lecturer');
    this.inputGroup = document.getElementById('input-group');

    this.btnExportICal = document.getElementById('btn-export-ical');
    this.btnDownloadHD = document.getElementById('btn-download-hd');
    this.btnSavePdf   = document.getElementById('btn-save-pdf');
    this.btnAutoResolve = document.getElementById('btn-auto-resolve');
    this.btnResetLayout = document.getElementById('btn-reset-layout');

    this.clashAlert = document.getElementById('clash-alert');
    this.clashTitle = document.getElementById('clash-title');
    this.clashDesc = document.getElementById('clash-desc');

    this.slotsBadgeCount = document.getElementById('slots-badge-count');
    this.btnClearAll = document.getElementById('btn-clear-all');
    this.universalTimetableGrid = document.getElementById('universal-timetable-grid');
    this.classListContainer = document.getElementById('class-list-container');
    this.phoneCanvas = document.getElementById('phone-canvas');
    this.lockTime = document.getElementById('lock-time');
    this.lockDate = document.getElementById('lock-date');
    this.phoneLockHeader = document.getElementById('phone-lock-header');
    this.lockGridTitle = document.getElementById('lock-grid-title');
    this.lockTitleText = document.getElementById('lock-title-text');
    this.lockTimetableContainer = document.getElementById('lock-timetable-container');

    this.stageDeviceLabel = document.getElementById('stage-device-label');
    this.stageTitleBar = document.querySelector('.stage-title-bar');

    this.gridStartTimeSelect = document.getElementById('grid-start-time');
    this.gridEndTimeSelect = document.getElementById('grid-end-time');
    this.customBgColorInput = document.getElementById('custom-bg-color');
    this.customHeaderColorInput = document.getElementById('custom-header-color');
    this.customFontColorInput = document.getElementById('custom-font-color');

    this.inputTitleStage = document.getElementById('input-title-text-stage');
    this.inputTitleSidebar = document.getElementById('input-title-text-sidebar');

    // New Importer
    this.icsCsvFileInput = document.getElementById('ics-csv-file-input');
    
    // OCC Modal
    this.occModal = document.getElementById('occ-modal');
    this.occModalBody = document.getElementById('occ-modal-body');
    this.btnOccCancel = document.getElementById('btn-occ-cancel');
    this.btnOccConfirm = document.getElementById('btn-occ-confirm');
    this.pendingCsvClasses = [];
  }

  getContrastColor(hexColor) {
    if (!hexColor) return '#FFFFFF';
    let hex = hexColor.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const r = parseInt(hex.substring(0, 2), 16) || 0;
    const g = parseInt(hex.substring(2, 4), 16) || 0;
    const b = parseInt(hex.substring(4, 6), 16) || 0;
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 140 ? '#0F172A' : '#FFFFFF';
  }

  updateClockContrast(bgHex) {
    if (!this.phoneLockHeader) return;
    const contrastFont = this.getContrastColor(bgHex);
    this.phoneLockHeader.style.color = contrastFont;
  }

  applyThemeEngine() {
    let resolvedMode = this.currentMode;
    if (resolvedMode === 'auto') {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      resolvedMode = isDark ? 'dark' : 'light';
    }

    const paletteGroup = THEME_PALETTES[resolvedMode] || THEME_PALETTES.light;
    const selectedTheme = paletteGroup[this.currentPalette] || paletteGroup.indigo;

    const root = document.documentElement;
    root.style.setProperty('--m3-sys-color-background', selectedTheme.bg);
    root.style.setProperty('--m3-sys-color-surface', selectedTheme.surface);
    root.style.setProperty('--m3-sys-color-surface-variant', selectedTheme.variant);
    root.style.setProperty('--m3-sys-text-primary', selectedTheme.text);
    root.style.setProperty('--m3-sys-text-secondary', selectedTheme.subtext);
    root.style.setProperty('--m3-sys-color-outline', selectedTheme.outline);
    root.style.setProperty('--m3-sys-color-primary', selectedTheme.top);
    root.style.setProperty('--m3-sys-color-primary-container', selectedTheme.primaryContainer);
    root.style.setProperty('--m3-sys-color-on-primary', selectedTheme.onPrimary || '#FFFFFF');

    // Apply default high-contrast font color for headers/title
    if (!this.userHasPickedFontColor) {
      root.style.setProperty('--m3-font-custom-color', selectedTheme.text);
    }

    document.querySelectorAll('.palette-dot.dual-tone').forEach(dot => {
      const pName = dot.getAttribute('data-palette');
      const pData = paletteGroup[pName];
      if (pData) {
        const topEl = dot.querySelector('.tone-top');
        const botEl = dot.querySelector('.tone-bottom');
        if (topEl) topEl.style.backgroundColor = pData.top;
        if (botEl) botEl.style.backgroundColor = pData.bottom;
      }
    });

    // Apply 3 distinct tone colors for Wallpaper Background, Header, and Grid Surface
    if (!this.userHasPickedBgColor) {
      this.phoneCanvas.style.backgroundColor = selectedTheme.defaultBg || selectedTheme.bg;
    }
    if (!this.userHasPickedHeaderColor) {
      this.applyHeaderColor(selectedTheme.defaultHeader || selectedTheme.bottom);
    }
    if (!this.userHasPickedSurfaceColor) {
      document.documentElement.style.setProperty('--m3-grid-surface-bg', selectedTheme.defaultSurface || selectedTheme.surface);
    }

    const surfaceSwatches = document.querySelectorAll('#grid-surface-picker .color-swatch-btn');
    const bgSwatches = document.querySelectorAll('#bg-color-picker .color-swatch-btn');
    const headerSwatches = document.querySelectorAll('#header-color-picker .color-swatch-btn');

    selectedTheme.swatches.forEach((hex, idx) => {
      if (surfaceSwatches[idx]) {
        surfaceSwatches[idx].setAttribute('data-surface', hex);
        surfaceSwatches[idx].style.backgroundColor = hex;
      }
      if (bgSwatches[idx]) {
        bgSwatches[idx].setAttribute('data-bg', hex);
        bgSwatches[idx].style.backgroundColor = hex;
      }
      if (headerSwatches[idx]) {
        headerSwatches[idx].setAttribute('data-header', hex);
        headerSwatches[idx].style.backgroundColor = hex;
      }
    });

    const courseDots = document.querySelectorAll('.swatch-grid .swatch-dot');
    selectedTheme.courseSwatches.forEach((hex, idx) => {
      if (courseDots[idx]) {
        courseDots[idx].setAttribute('data-color', hex);
        courseDots[idx].style.backgroundColor = hex;
      }
    });

    if (selectedTheme.courseSwatches.length > 0) {
      this.selectedColor = selectedTheme.courseSwatches[0];
    }

    if (this.classes.length > 0 && this.classes[0].id === 1) {
      this.classes[0].customColor = selectedTheme.courseSwatches[0];
    }

    // Auto-check lockscreen clock contrast on theme change
    this.updateClockContrast(selectedTheme.bg);

    this.renderTimetableGrid();
    this.renderClassList();
  }

  applyHeaderColor(colorVal) {
    const root = document.documentElement;
    root.style.setProperty('--m3-header-custom-bg', colorVal);
  }

  applyCardTextColor(colorVal) {
    const root = document.documentElement;
    root.style.setProperty('--m3-card-text-color', colorVal);
  }

  applyFontColor(colorVal) {
    const root = document.documentElement;
    if (colorVal) {
      this.userHasPickedFontColor = true;
      root.style.setProperty('--m3-font-custom-color', colorVal);
    } else {
      this.userHasPickedFontColor = false;
      root.style.removeProperty('--m3-font-custom-color');
    }
  }

  updateTitleText(newText) {
    this.timetableTitleText = newText.trim() || 'Untitled';
    this.lockTitleText.innerText = this.timetableTitleText;
    this.inputTitleStage.value = newText;
    this.inputTitleSidebar.value = newText;
  }

  bindEvents() {
    // Expandable Card Accordions
    this.headerTheme.addEventListener('click', () => {
      const isHidden = this.contentTheme.classList.contains('hidden');
      this.contentTheme.classList.toggle('hidden');
      this.headerTheme.querySelector('.expand-arrow').classList.toggle('open', isHidden);
    });

    this.headerLayoutOptions.addEventListener('click', () => {
      const isHidden = this.contentLayoutOptions.classList.contains('hidden');
      this.contentLayoutOptions.classList.toggle('hidden');
      this.headerLayoutOptions.querySelector('.expand-arrow').classList.toggle('open', isHidden);
    });

    this.headerAddCourse.addEventListener('click', () => {
      const isHidden = this.contentAddCourse.classList.contains('hidden');
      this.contentAddCourse.classList.toggle('hidden');
      this.headerAddCourse.querySelector('.expand-arrow').classList.toggle('open', isHidden);
    });

    if (this.headerFileImport) {
      this.headerFileImport.addEventListener('click', () => {
        const isHidden = this.contentFileImport.classList.contains('hidden');
        this.contentFileImport.classList.toggle('hidden');
        this.headerFileImport.querySelector('.expand-arrow').classList.toggle('open', isHidden);
      });
    }

    if (this.headerScanner) {
      this.headerScanner.addEventListener('click', () => {
        const isHidden = this.contentScanner.classList.contains('hidden');
        this.contentScanner.classList.toggle('hidden');
        this.headerScanner.querySelector('.expand-arrow').classList.toggle('open', isHidden);
      });
    }

    // INSTANT TITLE INPUT SYNC (STAGE BAR & SIDEBAR)
    this.inputTitleStage.addEventListener('input', (e) => {
      this.updateTitleText(e.target.value);
    });

    this.inputTitleSidebar.addEventListener('input', (e) => {
      this.updateTitleText(e.target.value);
    });

    // Title Toggle (YES / NO)
    document.querySelectorAll('#toggle-title .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-title .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.showTitle = (btn.getAttribute('data-val') === 'yes');
        this.lockGridTitle.style.display = this.showTitle ? 'block' : 'none';
      });
    });

    // SCHEDULE LIST QUICK SETTINGS TOGGLE DRAWER
    const btnScheduleSettings = document.getElementById('btn-schedule-settings-toggle');
    const quickSettingsPanel = document.getElementById('schedule-quick-settings');

    btnScheduleSettings?.addEventListener('click', () => {
      if (quickSettingsPanel) {
        quickSettingsPanel.classList.toggle('hidden');
      }
    });

    // Quick Setting: Master Display Time Toggle
    document.querySelectorAll('#toggle-quick-time .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-quick-time .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const show = (btn.getAttribute('data-val') === 'yes');
        this.globalCardTimes = show;
        this.classes.forEach(c => c.displayTime = show);
        this.renderTimetableGrid();
      });
    });

    // Quick Setting: Master Course Type Toggle
    document.querySelectorAll('#toggle-quick-type .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-quick-type .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.globalCourseType = (btn.getAttribute('data-val') === 'yes');
        this.renderTimetableGrid();
      });
    });

    // Quick Setting: Master Location Toggle
    document.querySelectorAll('#toggle-quick-room .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-quick-room .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.globalCourseRoom = (btn.getAttribute('data-val') === 'yes');
        this.renderTimetableGrid();
      });
    });

    // Quick Setting: Master Lecturer Toggle
    document.querySelectorAll('#toggle-quick-lecturer .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-quick-lecturer .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.globalCourseLecturer = (btn.getAttribute('data-val') === 'yes');
        this.renderTimetableGrid();
      });
    });

    // Quick Setting: Master Group Toggle
    document.querySelectorAll('#toggle-quick-group .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-quick-group .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.globalCourseGroup = (btn.getAttribute('data-val') === 'yes');
        this.renderTimetableGrid();
      });
    });

    // Quick Setting: Master Adaptive Color Toggle
    document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.globalAdaptiveColor = (btn.getAttribute('data-val') === 'yes');
        this.renderTimetableGrid();
      });
    });

    // Randomize Subject Card Colors (Dice Button)
    document.getElementById('btn-randomize-colors')?.addEventListener('click', () => {
      const paletteColors = [
        '#A3B18A', '#588157', '#3A5A40', // Muted Greens / Sage
        '#E07A5F', '#D4A373', '#CBB4A9', // Terracotta, Tan, Mocha
        '#3D405B', '#81B29A', '#F2CC8F', // Navy Slate, Mint, Muted Yellow
        '#B5838D', '#E5989B', '#FFB4A2', // Muted Mauve, Rose, Peach
        '#6D6875', '#B56576', '#E56B6F', // Plum, Crimson, Coral
        '#4A4E69', '#9A8C98', '#C9ADA7'  // Slate, Lilac, Greige
      ];
      
      // Auto-turn OFF global adaptive color so custom randomized colors take effect immediately
      this.globalAdaptiveColor = false;
      document.querySelectorAll('#toggle-quick-adaptive .pill-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-val') === 'no');
      });

      // Map unique random colors per course code
      const codeColorMap = {};
      this.classes.forEach(c => {
        if (!codeColorMap[c.code]) {
          codeColorMap[c.code] = paletteColors[Math.floor(Math.random() * paletteColors.length)];
        }
        c.customColor = codeColorMap[c.code];
      });

      this.renderAll();
    });

    // GLOBAL DEFAULT DISPLAY TIME TOGGLE IN ADD A COURSE CARD
    document.querySelectorAll('#toggle-display-time .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-display-time .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.newCourseDisplayTime = (btn.getAttribute('data-val') === 'yes');
      });
    });

    // Show/Hide Lock UI Toggle
    document.querySelectorAll('#toggle-lock-ui .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-lock-ui .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.showLockUI = (btn.getAttribute('data-val') === 'yes');
        const header = document.getElementById('phone-lock-header');
        if (header) header.style.opacity = this.showLockUI ? '1' : '0';
      });
    });

    // Show/Hide Table Toggle
    document.querySelectorAll('#toggle-show-table .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-show-table .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.showTable = (btn.getAttribute('data-val') === 'yes');
        const container = document.getElementById('lock-timetable-container');
        if (container) {
          container.style.opacity = this.showTable ? '1' : '0';
          container.style.pointerEvents = this.showTable ? 'auto' : 'none';
        }
      });
    });

    // Clock Format Toggle (12-HOUR vs 24-HOUR)
    document.querySelectorAll('#toggle-clock-type .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-clock-type .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.clockFormat = btn.getAttribute('data-val');
        this.renderTimetableGrid();
      });
    });

    // Filter Start/End Time Selects
    this.gridStartTimeSelect.addEventListener('change', (e) => {
      this.gridStartHour = parseInt(e.target.value.split(':')[0]);
      this.renderTimetableGrid();
    });

    this.gridEndTimeSelect.addEventListener('change', (e) => {
      this.gridEndHour = parseInt(e.target.value.split(':')[0]);
      this.renderTimetableGrid();
    });

    // Day Display Checkboxes
    document.querySelectorAll('.day-toggle').forEach(chk => {
      chk.addEventListener('change', () => {
        const checked = Array.from(document.querySelectorAll('.day-toggle:checked')).map(c => c.value);
        this.activeDays = checked.length > 0 ? checked : ['Mon'];
        this.renderTimetableGrid();
      });
    });

    // Grid Width Steppers & Input (50% to 100%)
    const btnWidthDec = document.getElementById('btn-width-dec');
    const btnWidthInc = document.getElementById('btn-width-inc');
    const gridWidthValEl = document.getElementById('grid-width-val');

    gridWidthValEl?.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      if (!isNaN(val)) {
        this.gridWidthVal = Math.min(100, Math.max(50, val));
        this.renderTimetableGrid();
      }
    });
    gridWidthValEl?.addEventListener('blur', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val) || val < 50) e.target.value = 50;
      else if (val > 100) e.target.value = 100;
      this.gridWidthVal = parseInt(e.target.value, 10);
      this.renderTimetableGrid();
    });

    btnWidthDec?.addEventListener('click', () => {
      if (this.gridWidthVal > 50) {
        this.gridWidthVal -= 5;
        if (gridWidthValEl) gridWidthValEl.value = this.gridWidthVal;
        this.renderTimetableGrid();
      }
    });

    btnWidthInc?.addEventListener('click', () => {
      if (this.gridWidthVal < 100) {
        this.gridWidthVal += 5;
        if (gridWidthValEl) gridWidthValEl.value = this.gridWidthVal;
        this.renderTimetableGrid();
      }
    });

    // Grid Height Steppers & Input
    const btnHeightDec = document.getElementById('btn-height-dec');
    const btnHeightInc = document.getElementById('btn-height-inc');
    const gridHeightValEl = document.getElementById('grid-height-val');

    gridHeightValEl?.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      if (!isNaN(val)) {
        this.gridHeightVal = Math.min(90, Math.max(30, val));
        this.renderTimetableGrid();
      }
    });
    gridHeightValEl?.addEventListener('blur', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val) || val < 30) e.target.value = 30;
      else if (val > 90) e.target.value = 90;
      this.gridHeightVal = parseInt(e.target.value, 10);
      this.renderTimetableGrid();
    });

    btnHeightDec?.addEventListener('click', () => {
      if (this.gridHeightVal > 30) {
        this.gridHeightVal -= 3;
        if (gridHeightValEl) gridHeightValEl.value = this.gridHeightVal;
        this.renderTimetableGrid();
      }
    });

    btnHeightInc?.addEventListener('click', () => {
      if (this.gridHeightVal < 90) {
        this.gridHeightVal += 3;
        if (gridHeightValEl) gridHeightValEl.value = this.gridHeightVal;
        this.renderTimetableGrid();
      }
    });

    // Font Size Steppers & Input (6px to 16px)
    const btnFontSizeDec = document.getElementById('btn-fontsize-dec');
    const btnFontSizeInc = document.getElementById('btn-fontsize-inc');
    const gridFontSizeValEl = document.getElementById('grid-fontsize-val');

    gridFontSizeValEl?.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      if (!isNaN(val)) {
        this.gridFontSizeVal = Math.min(16, Math.max(6, val));
        this.renderTimetableGrid();
      }
    });
    gridFontSizeValEl?.addEventListener('blur', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val) || val < 6) e.target.value = 6;
      else if (val > 16) e.target.value = 16;
      this.gridFontSizeVal = parseInt(e.target.value, 10);
      this.renderTimetableGrid();
    });

    btnFontSizeDec?.addEventListener('click', () => {
      if (this.gridFontSizeVal > 6) {
        this.gridFontSizeVal -= 1;
        if (gridFontSizeValEl) gridFontSizeValEl.value = this.gridFontSizeVal;
        this.renderTimetableGrid();
      }
    });

    btnFontSizeInc?.addEventListener('click', () => {
      if (this.gridFontSizeVal < 16) {
        this.gridFontSizeVal += 1;
        if (gridFontSizeValEl) gridFontSizeValEl.value = this.gridFontSizeVal;
        this.renderTimetableGrid();
      }
    });

    // Y Position Steppers & Input with strict boundary limits
    const btnYPosDec = document.getElementById('btn-ypos-dec');
    const btnYPosInc = document.getElementById('btn-ypos-inc');
    const gridYPosValEl = document.getElementById('grid-ypos-val');

    gridYPosValEl?.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      if (!isNaN(val)) {
        this.gridYPosVal = Math.min(150, Math.max(-120, val));
        this.renderTimetableGrid();
      }
    });
    gridYPosValEl?.addEventListener('blur', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val) || val < -120) e.target.value = -120;
      else if (val > 150) e.target.value = 150;
      this.gridYPosVal = parseInt(e.target.value, 10);
      this.renderTimetableGrid();
    });

    btnYPosDec?.addEventListener('click', () => {
      // Calculate min Y bound so top edge doesn't cross screen top
      const canvasEl = document.getElementById('phone-canvas');
      const containerEl = document.getElementById('lock-timetable-container');
      let minY = -120;
      if (canvasEl && containerEl) {
        const cRect = canvasEl.getBoundingClientRect();
        const tRect = containerEl.getBoundingClientRect();
        const topGap = tRect.top - (cRect.top + 20); // 20px padding from top border
        minY = this.gridYPosVal - Math.max(0, topGap);
      }

      if (this.gridYPosVal > minY) {
        this.gridYPosVal = Math.max(Math.round(minY), this.gridYPosVal - 5);
        if (gridYPosValEl) gridYPosValEl.value = this.gridYPosVal;
        this.renderTimetableGrid();
      }
    });

    btnYPosInc?.addEventListener('click', () => {
      // Calculate max Y bound so bottom edge doesn't cross phone bottom bar (24px from bottom)
      const canvasEl = document.getElementById('phone-canvas');
      const containerEl = document.getElementById('lock-timetable-container');
      let maxY = 140;
      if (canvasEl && containerEl) {
        const cRect = canvasEl.getBoundingClientRect();
        const tRect = containerEl.getBoundingClientRect();
        const bottomGap = (cRect.bottom - 24) - tRect.bottom;
        maxY = this.gridYPosVal + Math.max(0, bottomGap);
      }

      if (this.gridYPosVal < maxY) {
        this.gridYPosVal = Math.min(Math.round(maxY), this.gridYPosVal + 5);
        if (gridYPosValEl) gridYPosValEl.value = this.gridYPosVal;
        this.renderTimetableGrid();
      }
    });

    // Grid Surface Colour Swatches (Targets timetable cell slot cells only)
    document.querySelectorAll('#grid-surface-picker .color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#grid-surface-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const colorVal = btn.getAttribute('data-surface');
        this.userHasPickedSurfaceColor = true;
        document.documentElement.style.setProperty('--m3-grid-surface-bg', colorVal);
      });
    });
    document.getElementById('custom-surface-color')?.addEventListener('input', (e) => {
      this.userHasPickedSurfaceColor = true;
      document.documentElement.style.setProperty('--m3-grid-surface-bg', e.target.value);
    });

    // Background Colour Swatches with Auto-Contrast Clock Handler
    document.querySelectorAll('#bg-color-picker .color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#bg-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const colorVal = btn.getAttribute('data-bg');
        this.userHasPickedBgColor = true;
        this.phoneCanvas.style.backgroundColor = colorVal;
        this.updateClockContrast(colorVal);
      });
    });

    this.customBgColorInput.addEventListener('input', (e) => {
      this.userHasPickedBgColor = true;
      this.phoneCanvas.style.backgroundColor = e.target.value;
      this.updateClockContrast(e.target.value);
    });

    // Course Font Color Picker (new course only)
    document.querySelectorAll('#course-font-color-picker .font-swatch-sq').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.id === 'btn-course-font-custom') {
          document.getElementById('course-font-custom').click();
          return;
        }
        document.querySelectorAll('#course-font-color-picker .font-swatch-sq').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.newCourseFontColor = btn.getAttribute('data-coursefont');
      });
    });
    document.getElementById('course-font-custom')?.addEventListener('input', (e) => {
      this.newCourseFontColor = e.target.value;
      document.getElementById('btn-course-font-custom').style.background = e.target.value;
    });

    // Course Grid Color Custom Picker (new course only)
    document.getElementById('course-grid-custom')?.addEventListener('input', (e) => {
      document.querySelectorAll('#course-grid-color-picker .swatch-dot').forEach(d => d.classList.remove('active'));
      this.selectedColor = e.target.value;
      const btn = document.getElementById('btn-course-grid-custom');
      if (btn) btn.style.background = e.target.value;
    });

    // Header Colour Swatches
    document.querySelectorAll('#header-color-picker .color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#header-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const colorVal = btn.getAttribute('data-header');
        this.userHasPickedHeaderColor = true;
        this.applyHeaderColor(colorVal);
      });
    });

    this.customHeaderColorInput.addEventListener('input', (e) => {
      this.userHasPickedHeaderColor = true;
      this.applyHeaderColor(e.target.value);
    });

    // Font Colour Swatches Event Handler
    document.querySelectorAll('#font-color-picker .color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#font-color-picker .color-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const colorVal = btn.getAttribute('data-font');
        this.applyFontColor(colorVal);
      });
    });

    this.customFontColorInput.addEventListener('input', (e) => {
      this.applyFontColor(e.target.value);
    });

    // Reset Layout Button
    this.btnResetLayout.addEventListener('click', () => {
      this.showTitle = true;
      this.showTable = true;
      this.showLockUI = true;
      this.newCourseDisplayTime = true;
      this.globalCardTimes = true;
      this.clockFormat = '12';
      this.gridStartHour = 9;
      this.gridEndHour = 17;
      this.activeDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      this.gridWidthVal = 100;
      this.gridHeightVal = 49;
      this.gridFontSizeVal = 9;
      this.gridYPosVal = 0;

      document.querySelectorAll('.day-toggle').forEach(chk => {
        chk.checked = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(chk.value);
      });
      const gwEl = document.getElementById('grid-width-val');
      const ghEl = document.getElementById('grid-height-val');
      const fsEl = document.getElementById('grid-fontsize-val');
      const gyEl = document.getElementById('grid-ypos-val');
      if (gwEl) gwEl.value = '100';
      if (ghEl) ghEl.value = '49';
      if (fsEl) fsEl.value = '9';
      if (gyEl) gyEl.value = '0';

      this.updateTitleText('Untitled');

      this.lockGridTitle.style.display = 'block';
      this.phoneLockHeader.style.display = 'block';
      this.phoneCanvas.style.backgroundColor = '';
      this.applyHeaderColor('');
      this.applyFontColor('');
      // Reset per-card font colors
      document.getElementById('content-add-course')?.closest('section')?.style.removeProperty('--m3-card-text-color');
      document.querySelector('.m3-right-sidebar')?.style.removeProperty('--m3-card-text-color');

      document.querySelectorAll('#toggle-title .pill-btn')[0].click();
      document.querySelectorAll('#toggle-display-time .pill-btn')[0].click();
      document.querySelectorAll('#toggle-clock-type .pill-btn')[0].click();

      this.gridStartTimeSelect.value = '09:00';
      this.gridEndTimeSelect.value = '17:00';

      this.renderAll();
    });

    // Theme Mode Dots
    document.querySelectorAll('.theme-mode-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        document.querySelectorAll('.theme-mode-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        this.currentMode = dot.getAttribute('data-mode');
        this.applyThemeEngine();
      });
    });

    // Dynamic Swatch Palette Buttons
    document.querySelectorAll('.palette-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        document.querySelectorAll('.palette-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        this.currentPalette = dot.getAttribute('data-palette');
        this.applyThemeEngine();
      });
    });

    // System Theme Randomizer (Surprise Me)
    document.getElementById('btn-randomize-theme')?.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent the expand/collapse card header event
      const modeDots = Array.from(document.querySelectorAll('.theme-mode-dot'));
      const paletteDots = Array.from(document.querySelectorAll('.palette-dot'));
      
      if (modeDots.length > 0 && paletteDots.length > 0) {
        const randomModeDot = modeDots[Math.floor(Math.random() * modeDots.length)];
        const randomPaletteDot = paletteDots[Math.floor(Math.random() * paletteDots.length)];
        
        // Update mode
        modeDots.forEach(d => d.classList.remove('active'));
        randomModeDot.classList.add('active');
        this.currentMode = randomModeDot.getAttribute('data-mode');
        
        // Update palette
        paletteDots.forEach(d => d.classList.remove('active'));
        randomPaletteDot.classList.add('active');
        this.currentPalette = randomPaletteDot.getAttribute('data-palette');
        
        // Apply engine ONCE to avoid double-render lag
        this.applyThemeEngine();
      }
    });

    // Segmented Capsule Switcher
    document.querySelectorAll('.capsule-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.capsule-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const device = btn.getAttribute('data-device');
        this.activeDevice = device;

        const lockUIToggle = document.getElementById('toggle-lock-ui');

        if (device === 'tablet') {
          this.phoneCanvas.className = 'm3-phone-canvas canvas-tablet';
          this.stageDeviceLabel.innerText = 'LIVE TABLET LOCKSCREEN PREVIEW';
          this.stageTitleBar.style.maxWidth = '920px';
          document.querySelector('.m3-phone-wrapper').className = 'm3-phone-wrapper tablet-mode';
          if (lockUIToggle) lockUIToggle.style.display = 'flex';
        } else if (device === 'paper') {
          this.phoneCanvas.className = 'm3-phone-canvas canvas-paper';
          this.stageDeviceLabel.innerText = 'LIVE PAPER PREVIEW';
          this.stageTitleBar.style.maxWidth = '720px';
          document.querySelector('.m3-phone-wrapper').className = 'm3-phone-wrapper paper-mode';
          if (lockUIToggle) lockUIToggle.style.display = 'none';
        } else {
          this.phoneCanvas.className = 'm3-phone-canvas canvas-phone';
          this.stageDeviceLabel.innerText = 'LIVE PHONE LOCKSCREEN PREVIEW';
          this.stageTitleBar.style.maxWidth = '380px';
          document.querySelector('.m3-phone-wrapper').className = 'm3-phone-wrapper';
          if (lockUIToggle) lockUIToggle.style.display = 'flex';
        }

        // Reset inline screen size styles if switching device modes
        this.phoneCanvas.style.width = '';
        this.phoneCanvas.style.height = '';

        // Auto-adapt grid & font scaling on device switch
        this.renderTimetableGrid();
      });
    });

    // Swatch Color Dots
    document.querySelectorAll('.swatch-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        document.querySelectorAll('.swatch-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        this.selectedColor = dot.getAttribute('data-color');
      });
    });

    // Add Course Form Submit
    this.addCourseForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const code = this.inputCourseCode.value.trim().toUpperCase();
      if (!code) return;

      const startTime = this.inputStartTime.value;
      const endTime = this.inputEndTime.value;
      const courseType = this.inputType.value.trim();
      const location = this.inputLocation.value.trim();
      const lecturer = this.inputLecturer ? this.inputLecturer.value.trim() : '';
      const group = this.inputGroup ? this.inputGroup.value.trim() : '';

      const checkedDays = Array.from(document.querySelectorAll('input[name="day"]:checked')).map(cb => cb.value);
      const selectedDay = checkedDays.length > 0 ? checkedDays[0] : 'Mon';

      this.classes.push({
        id: Date.now(),
        code: code,
        title: courseType ? `${code} (${courseType})` : code,
        day: selectedDay,
        startTime: startTime,
        endTime: endTime,
        type: courseType,
        room: location,
        lecturer: lecturer,
        group: group,
        customColor: this.selectedColor,
        fontColor: this.newCourseFontColor,
        displayTime: this.newCourseDisplayTime
      });

      this.inputCourseCode.value = '';
      this.inputType.value = '';
      this.inputLocation.value = '';
      if (this.inputGroup) this.inputGroup.value = '';

      this.renderAll();
    });

    // Scanner Image Upload
    this.ocrFileInput.addEventListener('change', async (e) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        this.ocrLoadingBar.classList.remove('hidden');
        
        let extracted = [];
        try {
          const provider = document.getElementById('select-api-provider')?.value || 'gemini';
          const apiKey = document.getElementById('input-api-key')?.value.trim() || '';
          
          if (!apiKey) {
            alert("Please enter a valid API key to use the scanner.");
            return;
          }
          
          localStorage.setItem('tf_api_key', apiKey);

          const extracted = await window.ocrParser.scanWithCloudAPI(file, provider, apiKey, (msg) => {
            this.ocrLoadingText.innerText = msg;
          });
          
          if (!extracted || extracted.length === 0) {
            const scanErrorAlert = document.getElementById('scan-error-alert');
            const scanErrorTitle = document.getElementById('scan-error-title');
            const scanErrorDesc = document.getElementById('scan-error-desc');
            if (scanErrorAlert) {
              scanErrorAlert.classList.remove('hidden');
              if (scanErrorTitle) scanErrorTitle.innerText = "Scanning Failed: Image Unreadable";
              if (scanErrorDesc) scanErrorDesc.innerText = "The scanner could not recognize valid timetable text in this image. Please ensure your API key is correct and the image is clear.";
            }
            return;
          }

          this.classes = extracted.map((c, i) => ({
            id: Date.now() + i,
            code: c.code,
            title: c.title,
            day: (c.day && c.day.length >= 3) ? (c.day.charAt(0).toUpperCase() + c.day.slice(1, 3).toLowerCase()) : 'Mon',
            startTime: c.startTime,
            endTime: c.endTime,
            type: c.type || '',
            room: c.room || '',
            lecturer: c.lecturer || '',
            group: c.group || '',
            customColor: this.selectedColor,
            fontColor: this.newCourseFontColor,
            displayTime: this.newCourseDisplayTime
          }));

          const scannedDays = Array.from(new Set(this.classes.map(c => c.day.substring(0, 3))));
          if (scannedDays.length > 0) {
            const daysOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            this.activeDays = daysOrder.filter(d => scannedDays.includes(d));
            if (this.activeDays.length < 5) this.activeDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
            document.querySelectorAll('.display-days-row input[type="checkbox"]').forEach(cb => {
              cb.checked = this.activeDays.includes(cb.value);
            });
          }

          const numActiveDays = this.activeDays.length;
          const autoOptimumFont = Math.min(12, Math.max(7, Math.round(52 / numActiveDays)));
          this.gridFontSizeVal = autoOptimumFont;
          const fontInput = document.getElementById('input-grid-fontsize');
          if (fontInput) fontInput.value = autoOptimumFont;

          let minStartH = 24;
          let maxEndH = 0;
          this.classes.forEach(c => {
            if (c.startTime) {
              const sh = parseInt(c.startTime.split(':')[0], 10);
              if (sh < minStartH) minStartH = sh;
            }
            if (c.endTime) {
              const [eh, em] = c.endTime.split(':').map(Number);
              const floatEnd = eh + (em > 0 ? 1 : 0);
              if (floatEnd > maxEndH) maxEndH = floatEnd;
            }
          });

          if (minStartH < 24) {
            this.gridStartHour = minStartH;
            if (this.gridStartTimeSelect) this.gridStartTimeSelect.value = String(minStartH).padStart(2, '0') + ':00';
          }
          if (maxEndH > 0) {
            this.gridEndHour = maxEndH;
            if (this.gridEndTimeSelect) this.gridEndTimeSelect.value = String(maxEndH).padStart(2, '0') + ':00';
          }

          this.renderAll();
        } catch (err) {
          console.error("Scanner Error:", err);
          const scanErrorAlert = document.getElementById('scan-error-alert');
          const scanErrorTitle = document.getElementById('scan-error-title');
          const scanErrorDesc = document.getElementById('scan-error-desc');
          if (scanErrorAlert) {
            scanErrorAlert.classList.remove('hidden');
            if (scanErrorTitle) scanErrorTitle.innerText = "Scanning Failed";
            if (scanErrorDesc) scanErrorDesc.innerText = err.message || "The scanner could not recognize valid timetable text.";
          }
        } finally {
          this.ocrLoadingBar.classList.add('hidden');
          e.target.value = '';
        }
      }
    });

    // ICS / CSV File Import
    if (this.icsCsvFileInput) {
      this.icsCsvFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          const reader = new FileReader();
          
          reader.onload = (evt) => {
            const content = evt.target.result;
            try {
              let parsedEvents = [];
              if (file.name.toLowerCase().endsWith('.ics') || content.includes('BEGIN:VEVENT')) {
                 parsedEvents = window.ScheduleParser.parseICS(content);
                 if (parsedEvents.length === 0) alert("No classes found in this ICS file.");
                 this.importClassesDirectly(parsedEvents);
              } else {
                 parsedEvents = window.ScheduleParser.parseCSV(content);
                 if (parsedEvents.length === 0) alert("No readable classes found in CSV. Make sure your CSV contains columns like 'Code', 'Subject', or 'Module Offering'.");
                 this.handleCSVImportWithOCC(parsedEvents);
              }
            } catch (err) {
              console.error("File parsing error:", err);
              alert("CRITICAL ERROR parsing file: " + err.message + "\nStack: " + err.stack);
            }
          };
          reader.readAsText(file);
          this.icsCsvFileInput.value = '';
        }
      });
    }

    // OCC Modal Events
    if (this.btnOccCancel) {
      this.btnOccCancel.addEventListener('click', () => {
        this.occModal.classList.add('hidden');
        this.pendingCsvClasses = [];
      });
    }

    if (this.btnOccConfirm) {
      this.btnOccConfirm.addEventListener('click', () => {
        this.occModal.classList.add('hidden');
        
        // Collect selected OCCs
        const selectedOCCs = {};
        const courseCodesInModal = new Set();
        document.querySelectorAll('.occ-cards-container').forEach(container => {
          const courseCode = container.getAttribute('data-coursecode');
          courseCodesInModal.add(courseCode);
          const selectedCard = container.querySelector('.occ-card.selected');
          if (selectedCard) {
             selectedOCCs[courseCode] = (selectedCard.getAttribute('data-group') || '').trim().toLowerCase();
          }
        });

        // Filter the master list with flexible group matching
        const filteredEvents = this.pendingCsvClasses.filter(c => {
          if (courseCodesInModal.has(c.code)) {
             if (!selectedOCCs[c.code]) return false; // User deselected this subject! Drop it.
             const cGroupNorm = (c.group || '').trim().toLowerCase();
             return cGroupNorm === selectedOCCs[c.code];
          }
          return true; // Not in modal (shouldn't happen, but safe fallback)
        });

        this.importClassesDirectly(filteredEvents);
        this.pendingCsvClasses = [];
      });
    }

    if (this.btnClearAll) {
      this.btnClearAll.addEventListener('click', (e) => {
         try {
           const originalText = e.currentTarget.innerHTML;
           e.currentTarget.innerHTML = "Clearing...";
           e.currentTarget.style.backgroundColor = "#dcfce7";
           e.currentTarget.style.color = "#166534";
           
           // Clear internal state
           this.classes = [];
           localStorage.removeItem('schedully_classes');
           localStorage.removeItem('timefactory_classes');
           
           // Forcefully clear the UI immediately
           if (this.classListContainer) this.classListContainer.innerHTML = '';
           if (this.universalTimetableGrid) this.universalTimetableGrid.innerHTML = '';
           if (this.slotsBadgeCount) this.slotsBadgeCount.innerText = '0';
           if (this.clashAlert) this.clashAlert.classList.add('hidden');
           
           // Render to reset empty states
           this.renderAll();
           
           // Revert button visually
           setTimeout(() => {
             if (this.btnClearAll) {
               this.btnClearAll.innerHTML = originalText;
               this.btnClearAll.style.backgroundColor = "#fee2e2";
               this.btnClearAll.style.color = "#b91c1c";
             }
           }, 400);
         } catch (err) {
           alert("Error clearing classes: " + err.message);
         }
      });
    }

    // Auto-Resolve Clash Button
    this.btnAutoResolve.addEventListener('click', () => {
      const clashes = window.timetableEngine.detectClashes(this.classes);
      if (clashes.length > 0) {
        const target = clashes[0].c2;
        target.day = 'Friday';
        target.startTime = '14:00';
        target.endTime = '16:00';
        delete target.isClashing;
        this.ignoreClashes = false;
        this.renderAll();
        alert("⚡ Clash Auto-Resolved! Shifted overlapping slot to Friday 2:00 PM.");
      }
    });

    // Ignore Clash Button
    const btnIgnoreClash = document.getElementById('btn-ignore-clash');
    if (btnIgnoreClash) {
      btnIgnoreClash.addEventListener('click', () => {
        this.ignoreClashes = true;
        this.clashAlert.classList.add('hidden');
        this.renderAll();
      });
    }

    // iCal Export Button
    this.btnExportICal.addEventListener('click', () => {
      if (this.classes.length === 0) {
        alert("⚠️ Your schedule is empty! Fill out the Add A Course form or scan an image first.");
        return;
      }
      window.timetableEngine.exportToICal(this.classes, `schedully_schedule.ics`);
      alert("📅 Exported .ics Calendar File! Open this file to import into Google Calendar or Apple Calendar.");
    });

    // Shared wallpaper export helper — exact 1:1 WYSIWYG layout capture
    const exportWallpaper = (onComplete) => {
      if (this.classes.length === 0) {
        alert("⚠️ Your schedule is empty! Fill out the Add A Course form or scan an image first.");
        return;
      }

      const phoneCanvasEl = document.getElementById('phone-canvas');
      const clockHeader = phoneCanvasEl.querySelector('.phone-lock-header');
      const cameraDot = phoneCanvasEl.querySelector('.phone-camera-dot');
      const navBar = phoneCanvasEl.querySelector('.phone-nav-bar');

      // 1. Hide mock icons cleanly without altering layout
      if (clockHeader) clockHeader.style.visibility = 'hidden';
      if (cameraDot) cameraDot.style.visibility = 'hidden';
      if (navBar) navBar.style.visibility = 'hidden';

      // 2. Temporarily strip visual frame elements and disable global zoom
      phoneCanvasEl.style.setProperty('border-color', 'transparent', 'important');
      phoneCanvasEl.style.setProperty('border-radius', '0px', 'important');
      phoneCanvasEl.style.setProperty('box-shadow', 'none', 'important');
      
      const originalZoom = document.body.style.zoom;
      document.body.style.zoom = '1';

      // 3. Capture using html2canvas.
      html2canvas(phoneCanvasEl, {
        scale: 3,
        useCORS: true,
        backgroundColor: null,
        logging: false,
        scrollY: -window.scrollY,
        scrollX: 0,
        letterRendering: true
      }).then(canvas => {
        // 4. Restore everything
        document.body.style.zoom = originalZoom || '';
        if (clockHeader) clockHeader.style.visibility = 'visible';
        if (cameraDot) cameraDot.style.visibility = 'visible';
        if (navBar) navBar.style.visibility = 'visible';
        phoneCanvasEl.style.removeProperty('border-color');
        phoneCanvasEl.style.removeProperty('border-radius');
        phoneCanvasEl.style.removeProperty('box-shadow');

        onComplete(canvas);
      }).catch(err => {
        console.error("Export Error: ", err);
        alert("Failed to export image. Check console for details.");
        
        // Restore on error as well
        document.body.style.zoom = originalZoom || '';
        if (clockHeader) clockHeader.style.visibility = 'visible';
        if (cameraDot) cameraDot.style.visibility = 'visible';
        if (navBar) navBar.style.visibility = 'visible';
        phoneCanvasEl.style.removeProperty('border-color');
        phoneCanvasEl.style.removeProperty('border-radius');
        phoneCanvasEl.style.removeProperty('box-shadow');
      });
    };

    // Download Image Button — Pure clean wallpaper PNG export
    this.btnDownloadHD.addEventListener('click', () => {
      exportWallpaper((canvas) => {
        const link = document.createElement('a');
        link.download = 'schedully_wallpaper.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    });

    // Save As PDF Button — Pure clean wallpaper PDF export
    this.btnSavePdf.addEventListener('click', () => {
      exportWallpaper((canvas) => {
        const { jsPDF } = window.jspdf;
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = pageWidth - 20;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const yPos = Math.max(10, (pageHeight - imgHeight) / 2);

        pdf.addImage(imgData, 'PNG', 10, yPos, imgWidth, imgHeight);
        pdf.save('schedully_wallpaper.pdf');
      });
    });
  }
  loadFromLocal() {
    try {
      const saved = localStorage.getItem('schedully_classes') || localStorage.getItem('timefactory_classes');
      if (saved) {
        this.classes = JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not load classes from local storage", e);
      this.classes = [];
    }
  }

  saveToLocal() {
    try {
      localStorage.setItem('schedully_classes', JSON.stringify(this.classes));
    } catch (e) {
      console.warn("Could not save classes to local storage", e);
    }
  }

  importClassesDirectly(newEvents) {
    if (!newEvents || newEvents.length === 0) {
       alert("No matching classes found for the selected groups.");
       return;
    }
    
    // Auto-clear previous classes when importing a new file or scan
    this.classes = [];
    
    // Deduplicate against existing classes and within the imported batch
    const makeSig = (c) => {
      const code = (c.code || '').toUpperCase().trim();
      const grp = (c.group || '').toUpperCase().trim();
      const day = (c.day || 'Mon').substring(0, 3);
      const st = (c.startTime || '').trim();
      const et = (c.endTime || '').trim();
      const type = (c.type || '').toUpperCase().trim();
      return `${code}|${grp}|${day}|${st}|${et}|${type}`;
    };

    const existingSigs = new Set(this.classes.map(makeSig));
    const dedupedEvents = [];

    newEvents.forEach(c => {
      const sig = makeSig(c);
      if (!existingSigs.has(sig)) {
        existingSigs.add(sig);
        dedupedEvents.push(c);
      }
    });

    if (dedupedEvents.length === 0) {
      alert("All selected classes are already in your timetable!");
      return;
    }

    // Auto-assign random colors if importing
    const themeColors = document.querySelectorAll('.swatch-dot');
    
    const mapped = dedupedEvents.map((c, i) => {
      let randomColor = this.selectedColor;
      if (themeColors.length > 0) {
         const randomIdx = Math.floor(Math.random() * themeColors.length);
         randomColor = themeColors[randomIdx].getAttribute('data-color');
      }
      return {
        id: Date.now() + i,
        code: c.code,
        title: c.title,
        day: c.day,
        startTime: c.startTime,
        endTime: c.endTime,
        type: c.type || '',
        room: c.room || '',
        lecturer: c.lecturer || '',
        group: c.group || '',
        customColor: randomColor,
        fontColor: this.newCourseFontColor,
        displayTime: this.newCourseDisplayTime
      };
    });

    this.classes.push(...mapped);
    this.saveToLocal();
    this.renderAll();
  }

  handleCSVImportWithOCC(events) {
    if (!events || events.length === 0) {
      alert("No readable classes found in CSV.");
      return;
    }

    // Check if there are multiple OCCs/Groups per Course Code
    const groupedByCode = {};
    events.forEach(e => {
       if (!groupedByCode[e.code]) groupedByCode[e.code] = {};
       const g = e.group || 'Default';
       if (!groupedByCode[e.code][g]) groupedByCode[e.code][g] = [];
       groupedByCode[e.code][g].push(e);
    });

    let requiresSelection = false;
    let conflictsCount = 0;
    this.occModalBody.innerHTML = '';
    
    for (const [code, groupObj] of Object.entries(groupedByCode)) {
      const groups = Object.keys(groupObj);
      if (groups.length >= 1) {
        requiresSelection = true;
        conflictsCount++;
        
        const row = document.createElement('div');
        row.className = 'occ-course-row';
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'occ-course-info';
        
        const titleDiv = document.createElement('div');
        titleDiv.className = 'occ-course-title';
        // Grab the title from the very first event in this course
        const firstEvent = groupObj[groups[0]][0];
        titleDiv.innerText = firstEvent.title || code;
        
        const codeDiv = document.createElement('div');
        codeDiv.className = 'occ-course-code';
        codeDiv.innerText = code;
        
        infoDiv.appendChild(titleDiv);
        infoDiv.appendChild(codeDiv);
        row.appendChild(infoDiv);
        
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'occ-cards-container';
        cardsContainer.setAttribute('data-coursecode', code);
        
        const sortedGroups = groups.sort();
        let isFirst = true;
        
        sortedGroups.forEach(g => {
           const card = document.createElement('div');
           card.className = 'occ-card';
           if (isFirst) {
              card.classList.add('selected');
              isFirst = false;
           }
           card.setAttribute('data-group', g);
           
           const cardTitle = document.createElement('div');
           cardTitle.className = 'occ-card-title';
           cardTitle.innerText = g;
           card.appendChild(cardTitle);
           
           // List all slots for this group
           const slots = groupObj[g];
           slots.forEach(slot => {
              const slotDiv = document.createElement('div');
              slotDiv.className = 'occ-card-slot';
              // Format time to 12-hour
              const formatTime = (t) => {
                 if (!t) return '';
                 const parts = t.split(':');
                 if (parts.length < 2) return t;
                 let h = parseInt(parts[0], 10);
                 const m = parts[1];
                 const ampm = h >= 12 ? 'PM' : 'AM';
                 h = h % 12 || 12;
                 return `${h}:${m} ${ampm}`;
              };
              
              slotDiv.innerHTML = `<strong>${slot.day}</strong>${formatTime(slot.startTime)} - ${formatTime(slot.endTime)}`;
              card.appendChild(slotDiv);
           });
           
           card.addEventListener('click', () => {
              if (card.classList.contains('selected')) {
                 card.classList.remove('selected');
              } else {
                 cardsContainer.querySelectorAll('.occ-card').forEach(c => c.classList.remove('selected'));
                 card.classList.add('selected');
              }
           });
           
           cardsContainer.appendChild(card);
        });
        
        row.appendChild(cardsContainer);
        this.occModalBody.appendChild(row);
      }
    }

    if (requiresSelection) {
       const subtitle = document.getElementById('occ-modal-subtitle');
       if (subtitle) {
         subtitle.innerText = `Please review and select your preferred groups for all ${Object.keys(groupedByCode).length} subjects before importing.`;
       }
       this.pendingCsvClasses = events;
       this.occModal.classList.remove('hidden');
    } else {
       this.importClassesDirectly(events);
    }
  }

  updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const mins = String(now.getMinutes()).padStart(2, '0');
    const formattedHours = String(hours % 12 || 12).padStart(2, '0');
    this.lockTime.innerText = `${formattedHours}:${mins}`;

    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    this.lockDate.innerText = now.toLocaleDateString('en-US', options);
  }

  renderAll() {
    const count = this.classes.length;
    this.slotsBadgeCount.innerText = count;

    // Reset clashing state first
    this.classes.forEach(c => c.isClashing = false);

    const clashes = window.timetableEngine.detectClashes(this.classes);
    if (clashes.length > 0 && count > 0 && !this.ignoreClashes) {
      this.clashAlert.classList.remove('hidden');
      this.clashTitle.innerText = `Schedule Conflict Detected (${clashes.length} Overlap)`;
      this.clashDesc.innerText = `${clashes[0].c1.code} and ${clashes[0].c2.code} overlap on ${clashes[0].c1.day} at ${clashes[0].c1.startTime}.`;
      clashes.forEach(pair => {
        pair.c1.isClashing = true;
        pair.c2.isClashing = true;
      });
    } else {
      this.clashAlert.classList.add('hidden');
    }

    this.renderTimetableGrid();
    this.renderClassList();
  }

  renderTimetableGrid() {
    const days = this.activeDays && this.activeDays.length > 0 ? this.activeDays : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const isPhone = (this.activeDevice === 'phone');
    const timeColWidth = isPhone ? (days.length >= 6 ? '34px' : '40px') : '48px';
    // Use calc() instead of 1fr or minmax(0, 1fr) because html2canvas has bugs with minmax, 
    // and pure 1fr allows grid tracks to grow beyond container bounds if inner text is too long.
    this.universalTimetableGrid.style.gridTemplateColumns = `${timeColWidth} repeat(${days.length}, calc((100% - ${timeColWidth}) / ${days.length}))`;

    // Automatically expand grid hours if any active course is outside the default bounds
    let effectiveStartHour = this.gridStartHour;
    let effectiveEndHour = this.gridEndHour;
    this.classes.forEach(c => {
      if (c.startTime) {
        const startH = parseInt(c.startTime.split(':')[0], 10);
        if (startH < effectiveStartHour) effectiveStartHour = startH;
      }
      if (c.endTime) {
        const endH = parseInt(c.endTime.split(':')[0], 10);
        if (endH > effectiveEndHour) effectiveEndHour = endH;
      }
    });

    const timetableContainer = document.getElementById('lock-timetable-container');
    if (timetableContainer) {
      timetableContainer.style.width = `${this.gridWidthVal || 100}%`;
      timetableContainer.style.transform = 'none';
      timetableContainer.style.marginTop = `${this.gridYPosVal || 0}px`;
      timetableContainer.style.transition = 'margin-top 0.15s ease, width 0.15s ease, background-color 0.3s ease, border-color 0.3s ease';
    }

    const timeSlots = [];
    for (let h = effectiveStartHour; h <= effectiveEndHour; h++) {
      if (this.clockFormat === '24') {
        timeSlots.push({
          hour: h,
          topText: `${String(h).padStart(2, '0')}:00`,
          bottomText: ''
        });
      } else {
        const displayH = h > 12 ? h - 12 : h;
        const ampm = h >= 12 ? 'PM' : 'AM';
        timeSlots.push({
          hour: h,
          topText: `${String(displayH).padStart(2, '0')}:00`,
          bottomText: ampm
        });
      }
    }

    const baseRowH = this.gridHeightVal || 49;
    const numSlots = timeSlots.length;
    let rowH = baseRowH;

    if (this.activeDevice === 'tablet') {
      const maxAvailableH = 430;
      if (numSlots * baseRowH > maxAvailableH) {
        rowH = Math.max(22, Math.floor(maxAvailableH / numSlots));
      }
    } else if (this.activeDevice === 'phone') {
      const maxAvailableH = 510;
      if (numSlots * baseRowH > maxAvailableH) {
        rowH = Math.max(24, Math.floor(maxAvailableH / numSlots));
      }
    }

    this.universalTimetableGrid.innerHTML = '';

    const corner = document.createElement('div');
    corner.className = 'exact-grid-cell-header';
    corner.innerText = '';
    this.universalTimetableGrid.appendChild(corner);

    days.forEach(d => {
      const headerCell = document.createElement('div');
      headerCell.className = 'exact-grid-cell-header';
      headerCell.innerText = d;
      this.universalTimetableGrid.appendChild(headerCell);
    });

    timeSlots.forEach(tObj => {
      const timeCell = document.createElement('div');
      timeCell.className = 'exact-grid-cell-time';
      timeCell.style.height = `${rowH}px`;
      timeCell.style.boxSizing = 'border-box';
      timeCell.innerHTML = `<span>${tObj.topText}</span>${tObj.bottomText ? `<span>${tObj.bottomText}</span>` : ''}`;
      this.universalTimetableGrid.appendChild(timeCell);

      days.forEach(day => {
        const slotCell = document.createElement('div');
        slotCell.className = 'exact-grid-cell-slot';
        slotCell.style.height = `${rowH}px`;
        slotCell.style.minHeight = '0';
        slotCell.style.boxSizing = 'border-box';

        slotCell.style.position = 'relative';

        const matchesInCell = this.classes.filter(c => {
          const dayMatch = c.day.toLowerCase().startsWith(day.toLowerCase());
          const [sh] = c.startTime.split(':').map(Number);
          return dayMatch && (sh === tObj.hour);
        });

        matchesInCell.forEach((matched, idx) => {
          const totalInCell = matchesInCell.length;
          const leftPercent = (idx / totalInCell) * 100;
          const widthPercent = 100 / totalInCell;

          const [sh, sm] = matched.startTime.split(':').map(Number);
          const [eh, em] = matched.endTime.split(':').map(Number);

          const startTotalM = (sh * 60) + (sm || 0);
          const endTotalM = (eh * 60) + (em || 0);
          const durationM = Math.max(15, endTotalM - startTotalM);

          const topPercent = ((sm || 0) / 60) * 100;
          const durationHours = durationM / 60;

          // Adaptive Color Palette Rotation
          const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
          const modeKey = (this.currentMode === 'auto' ? (isDark ? 'dark' : 'light') : this.currentMode);
          const paletteGroup = THEME_PALETTES[modeKey] || THEME_PALETTES.light;
          const activePalette = paletteGroup[this.currentPalette] || paletteGroup.indigo;
          const courseSwatches = activePalette.courseSwatches || ['#1D4ED8', '#2563EB', '#3B82F6', '#10B981'];

          const matchIdx = this.classes.indexOf(matched);
          const adaptiveBg = courseSwatches[matchIdx % courseSwatches.length] || matched.customColor;
          const effectiveBg = this.globalAdaptiveColor ? adaptiveBg : matched.customColor;

          // Smart Auto-Contrast Font Color for Card Text
          const autoContrastFont = this.getContrastColor(effectiveBg);
          const textColor = matched.fontColor || autoContrastFont;

          const cardStyle = (matched.isClashing && !this.ignoreClashes)
            ? 'background: #F43F5E !important; color: #FFFFFF !important;'
            : `background: ${effectiveBg}; color: ${textColor};`;
          
          let formatStart = matched.startTime;
          let formatEnd = matched.endTime;
          if (this.clockFormat === '12') {
            formatStart = `${matched.startTime} ${sh >= 12 ? 'PM' : 'AM'}`;
            formatEnd = `${matched.endTime} ${eh >= 12 ? 'PM' : 'AM'}`;
          }

          // Compute exact pixel height based on duration ratio
          const cardHeightPx = Math.max(16, durationHours * rowH);

          // Dynamically compute adaptive max font size based on cell height
          const numDays = days.length;
          const isPhone = (this.activeDevice === 'phone');
          const widthScale = (this.gridWidthVal || 100) / 100;
          
          const fontFactor = isPhone ? (widthScale < 0.8 ? 38 : 46) : 60;
          const maxAdaptiveFont = Math.min(16, Math.max(5.5, Math.round(fontFactor / numDays)));
          
          const isShortCard = (cardHeightPx < 28);
          
          // Count active text lines per card
          let lineCount = 1;
          if (!isShortCard) {
            if (this.globalCourseType && matched.type) lineCount++;
            if (this.globalCourseRoom && matched.room) lineCount++;
            if (this.globalCourseLecturer && matched.lecturer) lineCount++;
            if (this.globalCourseGroup && matched.group) lineCount++;
            if (this.globalCardTimes && matched.displayTime !== false) lineCount += 2;
          }

          const heightAdaptiveFont = Math.min(16, Math.max(6, Math.floor(cardHeightPx / (lineCount * 1.3))));
          const effectiveMaxFont = Math.min(maxAdaptiveFont, heightAdaptiveFont);

          const codeFontSize = Math.min(this.gridFontSizeVal || 8.5, effectiveMaxFont);
          const timeFontSize = Math.max(4.5, codeFontSize - 1.2);

          const cardContentHTML = isShortCard ? `
            <div class="exact-card-code" style="font-size: ${Math.max(6.5, codeFontSize)}px; font-weight: 700; line-height: 1;">${matched.code}</div>
          ` : `
            <div class="exact-card-code" style="font-size: ${codeFontSize}px; font-weight: 700;">${matched.code}</div>
            ${this.globalCourseType && matched.type ? `<div class="exact-card-type" style="font-size: ${Math.max(4.5, codeFontSize - 1.2)}px; font-style: italic; opacity: 0.9;">${matched.type}</div>` : ''}
            ${this.globalCourseRoom && matched.room ? `<div class="exact-card-room" style="font-size: ${Math.max(4.5, codeFontSize - 1.2)}px; opacity: 0.95;">${matched.room}</div>` : ''}
            ${this.globalCourseLecturer && matched.lecturer ? `<div class="exact-card-lecturer" style="font-size: ${Math.max(4.5, codeFontSize - 1.2)}px; opacity: 0.95;">${matched.lecturer}</div>` : ''}
            ${this.globalCourseGroup && matched.group ? `<div class="exact-card-group" style="font-size: ${Math.max(4.5, codeFontSize - 1.2)}px; opacity: 0.95;">${matched.group}</div>` : ''}
            ${this.globalCardTimes && matched.displayTime !== false ? `<div class="exact-card-time" style="font-size: ${timeFontSize}px; margin-top: 1px; opacity: 0.9;">${formatStart}<br>${formatEnd}</div>` : ''}
          `;

          const cardElement = document.createElement('div');
          cardElement.className = 'exact-course-card';
          cardElement.title = `${matched.title} (${matched.type || ''} - ${matched.room || ''})`;
          cardElement.style.cssText = `
            ${cardStyle}
            position: absolute;
            top: ${topPercent}%;
            left: ${leftPercent}%;
            width: ${widthPercent}%;
            height: ${cardHeightPx}px;
            z-index: 5;
            box-sizing: border-box;
          `;
          cardElement.innerHTML = cardContentHTML;
          slotCell.appendChild(cardElement);
        });

        this.universalTimetableGrid.appendChild(slotCell);
      });
    });
  }

  renderClassList() {
    this.classListContainer.innerHTML = '';
    if (this.classes.length === 0) {
      this.classListContainer.innerHTML = `
        <div class="empty-slate-box">
          <span class="material-symbols-outlined empty-icon">calendar_today</span>
          <p>No classes loaded yet. Fill out "Add A Course" above or scan a timetable screenshot.</p>
        </div>
      `;
      return;
    }

    let resolvedMode = this.currentMode;
    if (resolvedMode === 'auto') {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      resolvedMode = isDark ? 'dark' : 'light';
    }
    const paletteGroup = THEME_PALETTES[resolvedMode] || THEME_PALETTES.light;
    const currentThemeData = paletteGroup[this.currentPalette] || paletteGroup.indigo;
    const swatches = currentThemeData.courseSwatches || ['#1D4ED8', '#2563EB', '#3B82F6', '#10B981', '#F59E0B', '#EC4899'];

    this.classes.forEach(c => {
      const card = document.createElement('div');
      card.className = 'class-item-card expandable-class-card';
      
      const swatchBtnsHTML = swatches.map(hex => `
        <button type="button" class="swatch-dot mini-swatch ${c.customColor === hex ? 'active' : ''}" data-hex="${hex}" style="background: ${hex}"></button>
      `).join('') + `
        <label class="swatch-custom mini-grid-custom" title="Custom Color" style="display:flex;align-items:center;justify-content:center;">
          <span class="material-symbols-outlined icon-xs">colorize</span>
          <input type="color" class="hidden-color-input mini-grid-color-input" value="${c.customColor || swatches[0]}">
        </label>
      `;

      const FONT_COLORS = ['#FFFFFF', '#0F172A', '#1E293B', '#475569'];
      const fontSwatchBtnsHTML = FONT_COLORS.map(hex => `
        <button type="button" class="font-swatch-sq mini-font-swatch ${(c.fontColor || '#FFFFFF') === hex ? 'active' : ''}" data-fonthex="${hex}" style="background: ${hex}"></button>
      `).join('') + `
        <label class="font-swatch-sq font-swatch-custom mini-font-custom" title="Custom Color" style="display:flex;align-items:center;justify-content:center;">
          <span class="material-symbols-outlined icon-xs">colorize</span>
          <input type="color" class="hidden-color-input mini-font-color-input" value="${c.fontColor || '#FFFFFF'}">
        </label>
      `;

      card.innerHTML = `
        <div class="class-card-header">
          <div class="item-info">
            <h4>${c.code}</h4>
            <p class="item-subtext">${c.type ? `${c.type} • ` : ''}${c.room ? `${c.room} • ` : ''}${c.lecturer ? `${c.lecturer} • ` : ''}${c.group ? `${c.group} • ` : ''}${c.day} (${c.startTime} - ${c.endTime})</p>
          </div>
          <div class="class-card-actions">
            <span class="material-symbols-outlined class-expand-arrow">expand_more</span>
            <button type="button" class="btn-delete-pill" data-id="${c.id}" title="Delete Course">
              <span class="material-symbols-outlined icon-delete">delete</span>
            </button>
          </div>
        </div>

        <div class="class-card-editor hidden">
          <div class="editor-row">
            <label>Course Code:</label>
            <input type="text" class="m3-input edit-code" value="${c.code}">
          </div>

          <div class="editor-row">
            <label>Display Time:</label>
            <div class="pill-toggle-group edit-display-time">
              <button type="button" class="pill-btn ${c.displayTime !== false ? 'active' : ''}" data-val="yes">YES</button>
              <button type="button" class="pill-btn ${c.displayTime === false ? 'active' : ''}" data-val="no">NO</button>
            </div>
          </div>

          <div class="editor-row">
            <label>Day:</label>
            <select class="m3-input-time edit-day">
              <option value="Mon" ${c.day && c.day.startsWith('Mon') ? 'selected' : ''}>Mon</option>
              <option value="Tue" ${c.day && c.day.startsWith('Tue') ? 'selected' : ''}>Tue</option>
              <option value="Wed" ${c.day && c.day.startsWith('Wed') ? 'selected' : ''}>Wed</option>
              <option value="Thu" ${c.day && c.day.startsWith('Thu') ? 'selected' : ''}>Thu</option>
              <option value="Fri" ${c.day && c.day.startsWith('Fri') ? 'selected' : ''}>Fri</option>
            </select>
          </div>

          <div class="editor-row">
            <label>Start Time:</label>
            <select class="m3-input-time edit-start">
              <option value="08:00" ${c.startTime === '08:00' ? 'selected' : ''}>08:00 AM</option>
              <option value="09:00" ${c.startTime === '09:00' ? 'selected' : ''}>09:00 AM</option>
              <option value="10:00" ${c.startTime === '10:00' ? 'selected' : ''}>10:00 AM</option>
              <option value="11:00" ${c.startTime === '11:00' ? 'selected' : ''}>11:00 AM</option>
              <option value="12:00" ${c.startTime === '12:00' ? 'selected' : ''}>12:00 PM</option>
              <option value="13:00" ${c.startTime === '13:00' ? 'selected' : ''}>01:00 PM</option>
              <option value="14:00" ${c.startTime === '14:00' ? 'selected' : ''}>02:00 PM</option>
              <option value="15:00" ${c.startTime === '15:00' ? 'selected' : ''}>03:00 PM</option>
              <option value="16:00" ${c.startTime === '16:00' ? 'selected' : ''}>04:00 PM</option>
            </select>
          </div>

          <div class="editor-row">
            <label>End Time:</label>
            <select class="m3-input-time edit-end">
              <option value="09:00" ${c.endTime === '09:00' ? 'selected' : ''}>09:00 AM</option>
              <option value="10:00" ${c.endTime === '10:00' ? 'selected' : ''}>10:00 AM</option>
              <option value="11:00" ${c.endTime === '11:00' ? 'selected' : ''}>11:00 AM</option>
              <option value="12:00" ${c.endTime === '12:00' ? 'selected' : ''}>12:00 PM</option>
              <option value="13:00" ${c.endTime === '13:00' ? 'selected' : ''}>01:00 PM</option>
              <option value="14:00" ${c.endTime === '14:00' ? 'selected' : ''}>02:00 PM</option>
              <option value="15:00" ${c.endTime === '15:00' ? 'selected' : ''}>03:00 PM</option>
              <option value="16:00" ${c.endTime === '16:00' ? 'selected' : ''}>04:00 PM</option>
              <option value="17:00" ${c.endTime === '17:00' ? 'selected' : ''}>05:00 PM</option>
            </select>
          </div>

          <div class="editor-row">
            <label>Course Type:</label>
            <input type="text" class="m3-input edit-type" value="${c.type || ''}" placeholder="">
          </div>

          <div class="editor-row">
            <label>Location:</label>
            <input type="text" class="m3-input edit-room" value="${c.room || ''}" placeholder="">
          </div>

          <div class="editor-row">
            <label>Lecturer:</label>
            <input type="text" class="m3-input edit-lecturer" value="${c.lecturer || ''}" placeholder="">
          </div>

          <div class="editor-row">
            <label>Group:</label>
            <input type="text" class="m3-input edit-group" value="${c.group || ''}" placeholder="">
          </div>

          <div class="editor-row-stack">
            <label>Grid Colour Swatch:</label>
            <div class="swatch-grid mini-swatch-grid">
              ${swatchBtnsHTML}
            </div>
          </div>

          <div class="editor-row-stack">
            <label>Font Colour Swatch:</label>
            <div class="swatch-grid mini-swatch-grid">
              ${fontSwatchBtnsHTML}
            </div>
          </div>
        </div>
      `;

      // Expand / Collapse Accordion Header Event
      const cardHeader = card.querySelector('.class-card-header');
      const cardEditor = card.querySelector('.class-card-editor');
      const expandArrow = card.querySelector('.class-expand-arrow');

      cardHeader.addEventListener('click', (e) => {
        if (e.target.closest('.btn-delete-pill')) return;
        const isHidden = cardEditor.classList.contains('hidden');
        cardEditor.classList.toggle('hidden');
        expandArrow.classList.toggle('open', isHidden);
      });

      // Independent Display Time Toggle Listener
      card.querySelectorAll('.edit-display-time .pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          card.querySelectorAll('.edit-display-time .pill-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          c.displayTime = (btn.getAttribute('data-val') === 'yes');
          this.renderTimetableGrid();
        });
      });

      // In-line Input Change Listeners
      card.querySelector('.edit-code').addEventListener('input', (e) => {
        c.code = e.target.value.trim().toUpperCase() || 'COURSE';
        c.title = c.code;
        card.querySelector('.item-info h4').innerText = c.code;
        this.renderTimetableGrid();
      });

      card.querySelector('.edit-day').addEventListener('change', (e) => {
        c.day = e.target.value;
        this.renderAll();
      });

      card.querySelector('.edit-start').addEventListener('change', (e) => {
        c.startTime = e.target.value;
        this.renderAll();
      });

      card.querySelector('.edit-end').addEventListener('change', (e) => {
        c.endTime = e.target.value;
        this.renderAll();
      });

      card.querySelector('.edit-type').addEventListener('input', (e) => {
        c.type = e.target.value.trim();
        this.renderTimetableGrid();
      });

      card.querySelector('.edit-room').addEventListener('input', (e) => {
        c.room = e.target.value.trim();
        const subtextEl = card.querySelector('.item-subtext');
        if (subtextEl) {
          const subtext = `${c.type ? `${c.type} • ` : ''}${c.room ? `${c.room} • ` : ''}${c.lecturer ? `${c.lecturer} • ` : ''}${c.group ? `${c.group} • ` : ''}${c.day} (${c.startTime} - ${c.endTime})`;
          subtextEl.innerText = subtext;
        }
        this.renderTimetableGrid();
      });

      card.querySelector('.edit-lecturer')?.addEventListener('input', (e) => {
        c.lecturer = e.target.value.trim();
        const subtextEl = card.querySelector('.item-subtext');
        if (subtextEl) {
          const subtext = `${c.type ? `${c.type} • ` : ''}${c.room ? `${c.room} • ` : ''}${c.lecturer ? `${c.lecturer} • ` : ''}${c.group ? `${c.group} • ` : ''}${c.day} (${c.startTime} - ${c.endTime})`;
          subtextEl.innerText = subtext;
        }
        this.renderTimetableGrid();
      });

      card.querySelector('.edit-group')?.addEventListener('input', (e) => {
        c.group = e.target.value.trim();
        const subtextEl = card.querySelector('.item-subtext');
        if (subtextEl) {
          const subtext = `${c.type ? `${c.type} • ` : ''}${c.room ? `${c.room} • ` : ''}${c.lecturer ? `${c.lecturer} • ` : ''}${c.group ? `${c.group} • ` : ''}${c.day} (${c.startTime} - ${c.endTime})`;
          subtextEl.innerText = subtext;
        }
        this.renderTimetableGrid();
      });

      // In-line Colour Swatch Picker (Grid Color)
      card.querySelectorAll('.mini-swatch').forEach(btn => {
        btn.addEventListener('click', () => {
          card.querySelectorAll('.mini-swatch').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          c.customColor = btn.getAttribute('data-hex');
          this.renderTimetableGrid();
        });
      });

      // In-line Custom Colour Picker (Grid Color)
      card.querySelector('.mini-grid-color-input')?.addEventListener('input', (e) => {
        card.querySelectorAll('.mini-swatch').forEach(b => b.classList.remove('active'));
        c.customColor = e.target.value;
        const btn = card.querySelector('.mini-grid-custom');
        if (btn) btn.style.background = e.target.value;
        this.renderTimetableGrid();
      });

      // In-line Font Colour Swatch Picker
      card.querySelectorAll('.mini-font-swatch').forEach(btn => {
        btn.addEventListener('click', () => {
          card.querySelectorAll('.mini-font-swatch').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          c.fontColor = btn.getAttribute('data-fonthex');
          this.renderTimetableGrid();
        });
      });

      // In-line Font Colour Custom Picker
      card.querySelector('.mini-font-color-input')?.addEventListener('input', (e) => {
        c.fontColor = e.target.value;
        this.renderTimetableGrid();
      });

      // Sleek Trash Can Delete Button Event
      card.querySelector('.btn-delete-pill').addEventListener('click', (e) => {
        e.stopPropagation();
        this.classes = this.classes.filter(item => item.id !== c.id);
        this.renderAll();
      });

      this.classListContainer.appendChild(card);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.schedullyApp = new SchedullyApp();
  
  // Fade out loading screen smoothly after initialization
  setTimeout(() => {
    const loader = document.getElementById('app-loading-screen');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 500); // Remove from DOM after transition
    }
  }, 300);
});
