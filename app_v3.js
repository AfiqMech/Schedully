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
      top: '#10B981', bottom: '#D1FAE5', bg: '#ECFDF5', surface: '#FFFFFF', variant: '#A7F3D0', text: '#064E3B', subtext: '#047857', outline: '#6EE7B7', primaryContainer: '#D1FAE5',
      defaultBg: '#ECFDF5', defaultHeader: '#A7F3D0', defaultSurface: '#F2FDF7',
      swatches: ['#F8FFF9', '#D1FAE5', '#A7F3D0', '#6EE7B7', '#34D399', '#10B981', '#059669', '#047857', '#064E3B'],
      courseSwatches: ['#064E3B', '#047857', '#059669', '#10B981', '#34D399', '#6EE7B7']
    },
    slate: {
      top: '#3D405B', bottom: '#E5E7EB', bg: '#F3F4F6', surface: '#FFFFFF', variant: '#D1D5DB', text: '#1E293B', subtext: '#475569', outline: '#9CA3AF', primaryContainer: '#E5E7EB',
      defaultBg: '#F3F4F6', defaultHeader: '#D1D5DB', defaultSurface: '#F9FAFB',
      swatches: ['#F9FAFB', '#E5E7EB', '#D1D5DB', '#9CA3AF', '#6B7280', '#4B5563', '#374151', '#1F2937', '#111827'],
      courseSwatches: ['#1E293B', '#334155', '#3D405B', '#475569', '#64748B', '#94A3B8']
    },
    sunset: { top: '#E34F26', bottom: '#FFDDC1', bg: '#FFF0E6', surface: '#FFFFFF', variant: '#FFCBA4', text: '#5C1A06', subtext: '#E34F26', outline: '#FFB38A', primaryContainer: '#FFDDC1', defaultBg: '#FFF0E6', defaultHeader: '#FFCBA4', defaultSurface: '#FFF6F0', swatches: ['#FFF6F0', '#FFDDC1', '#FFCBA4', '#FFB38A', '#FF9B70', '#E34F26', '#B83A18', '#8C270D', '#5C1A06'], courseSwatches: ['#5C1A06', '#8C270D', '#B83A18', '#E34F26', '#FF9B70', '#FFB38A'] },
    ocean: { top: '#006D77', bottom: '#EDF6F9', bg: '#F4F9F9', surface: '#FFFFFF', variant: '#83C5BE', text: '#003A40', subtext: '#006D77', outline: '#83C5BE', primaryContainer: '#EDF6F9', defaultBg: '#F4F9F9', defaultHeader: '#83C5BE', defaultSurface: '#F8FBFB', swatches: ['#F8FBFB', '#EDF6F9', '#83C5BE', '#4EA8DE', '#006D77', '#00535B', '#003A40', '#002225', '#001012'], courseSwatches: ['#003A40', '#00535B', '#006D77', '#4EA8DE', '#83C5BE', '#EDF6F9'] },
    forest: { top: '#4D7C0F', bottom: '#ECFCCB', bg: '#F7FEE7', surface: '#FFFFFF', variant: '#D9F99D', text: '#365314', subtext: '#3F6212', outline: '#BEF264', primaryContainer: '#ECFCCB', defaultBg: '#F7FEE7', defaultHeader: '#D9F99D', defaultSurface: '#F7FEE7', swatches: ['#FFFFFF', '#F7FEE7', '#ECFCCB', '#D9F99D', '#BEF264', '#A3E635', '#84CC16', '#65A30D', '#4D7C0F'], courseSwatches: ['#365314', '#3F6212', '#4D7C0F', '#65A30D', '#84CC16', '#A3E635'] },
    sand: { top: '#C2A878', bottom: '#F9F6F0', bg: '#FDFBF7', surface: '#FFFFFF', variant: '#EAE0CC', text: '#4A3F2C', subtext: '#C2A878', outline: '#D6C8A9', primaryContainer: '#F9F6F0', defaultBg: '#FDFBF7', defaultHeader: '#EAE0CC', defaultSurface: '#FEFDFB', swatches: ['#FEFDFB', '#F9F6F0', '#EAE0CC', '#D6C8A9', '#C2A878', '#9B865D', '#756343', '#4A3F2C', '#292217'], courseSwatches: ['#4A3F2C', '#756343', '#9B865D', '#C2A878', '#D6C8A9', '#EAE0CC'] },
    plum: { top: '#6D597A', bottom: '#F3EBF6', bg: '#FAF5FC', surface: '#FFFFFF', variant: '#E3D5E8', text: '#2E2236', subtext: '#6D597A', outline: '#CBB8D4', primaryContainer: '#F3EBF6', defaultBg: '#FAF5FC', defaultHeader: '#E3D5E8', defaultSurface: '#FDF9FE', swatches: ['#FDF9FE', '#F3EBF6', '#E3D5E8', '#CBB8D4', '#B596C1', '#6D597A', '#52415E', '#392C42', '#2E2236'], courseSwatches: ['#2E2236', '#392C42', '#52415E', '#6D597A', '#B596C1', '#CBB8D4'] },
    cherry: { top: '#780000', bottom: '#FCECEC', bg: '#FDF5F5', surface: '#FFFFFF', variant: '#F4C8C8', text: '#3B0000', subtext: '#780000', outline: '#EBA4A4', primaryContainer: '#FCECEC', defaultBg: '#FDF5F5', defaultHeader: '#F4C8C8', defaultSurface: '#FEFAFA', swatches: ['#FEFAFA', '#FCECEC', '#F4C8C8', '#EBA4A4', '#C1121F', '#780000', '#540000', '#3B0000', '#240000'], courseSwatches: ['#3B0000', '#540000', '#780000', '#C1121F', '#EBA4A4', '#F4C8C8'] },
    mint: { top: '#2A9D8F', bottom: '#E6F4F1', bg: '#F2F9F7', surface: '#FFFFFF', variant: '#C0E4DC', text: '#0F3D37', subtext: '#2A9D8F', outline: '#95D1C6', primaryContainer: '#E6F4F1', defaultBg: '#F2F9F7', defaultHeader: '#C0E4DC', defaultSurface: '#F7FCFB', swatches: ['#F7FCFB', '#E6F4F1', '#C0E4DC', '#95D1C6', '#59BBAE', '#2A9D8F', '#1F756A', '#16544C', '#0F3D37'], courseSwatches: ['#0F3D37', '#16544C', '#1F756A', '#2A9D8F', '#59BBAE', '#95D1C6'] },
    rust: { top: '#B04105', bottom: '#FAEEE7', bg: '#FDF6F2', surface: '#FFFFFF', variant: '#F0D4C3', text: '#4D1A00', subtext: '#B04105', outline: '#E4B599', primaryContainer: '#FAEEE7', defaultBg: '#FDF6F2', defaultHeader: '#F0D4C3', defaultSurface: '#FEF9F6', swatches: ['#FEF9F6', '#FAEEE7', '#F0D4C3', '#E4B599', '#D17C4D', '#B04105', '#822D00', '#5F2100', '#4D1A00'], courseSwatches: ['#4D1A00', '#5F2100', '#822D00', '#B04105', '#D17C4D', '#E4B599'] },
    ash: { top: '#7F8C8D', bottom: '#F0F2F2', bg: '#F7F8F8', surface: '#FFFFFF', variant: '#D3D7D7', text: '#2C3E50', subtext: '#7F8C8D', outline: '#BDC3C7', primaryContainer: '#F0F2F2', defaultBg: '#F7F8F8', defaultHeader: '#D3D7D7', defaultSurface: '#FBFCFC', swatches: ['#FBFCFC', '#F0F2F2', '#D3D7D7', '#BDC3C7', '#A0A7A7', '#7F8C8D', '#546363', '#394646', '#2C3E50'], courseSwatches: ['#2C3E50', '#394646', '#546363', '#7F8C8D', '#A0A7A7', '#BDC3C7'] },
    violet: { top: '#8B5CF6', bottom: '#DDD6FE', bg: '#F5F3FF', surface: '#FFFFFF', variant: '#C4B5FD', text: '#4C1D95', subtext: '#6D28D9', outline: '#A78BFA', primaryContainer: '#DDD6FE', defaultBg: '#F5F3FF', defaultHeader: '#C4B5FD', defaultSurface: '#FAF8FF', swatches: ['#FAF8FF', '#DDD6FE', '#C4B5FD', '#A78BFA', '#8B5CF6', '#7C3AED', '#6D28D9', '#5B21B6', '#4C1D95'], courseSwatches: ['#4C1D95', '#6D28D9', '#7C3AED', '#8B5CF6', '#A78BFA', '#C4B5FD'] },
    teal: { top: '#0D9488', bottom: '#CCFBF1', bg: '#F0FDF4', surface: '#FFFFFF', variant: '#99F6E4', text: '#134E4A', subtext: '#0F766E', outline: '#5EEAD4', primaryContainer: '#CCFBF1', defaultBg: '#F0FDF4', defaultHeader: '#99F6E4', defaultSurface: '#F7FEFC', swatches: ['#F7FEFC', '#CCFBF1', '#99F6E4', '#5EEAD4', '#2DD4BF', '#0D9488', '#0F766E', '#115E59', '#134E4A'], courseSwatches: ['#134E4A', '#115E59', '#0F766E', '#0D9488', '#2DD4BF', '#5EEAD4'] },
    amber: { top: '#D97706', bottom: '#FEF3C7', bg: '#FFFBEB', surface: '#FFFFFF', variant: '#FDE68A', text: '#78350F', subtext: '#B45309', outline: '#FCD34D', primaryContainer: '#FEF3C7', defaultBg: '#FFFBEB', defaultHeader: '#FDE68A', defaultSurface: '#FFFDF5', swatches: ['#FFFDF5', '#FEF3C7', '#FDE68A', '#FCD34D', '#FBBF24', '#F59E0B', '#D97706', '#B45309', '#78350F'], courseSwatches: ['#78350F', '#B45309', '#D97706', '#F59E0B', '#FBBF24', '#FCD34D'] },
    rose: { top: '#E11D48', bottom: '#FFE4E6', bg: '#FFF1F2', surface: '#FFFFFF', variant: '#FECDD3', text: '#881337', subtext: '#9F1239', outline: '#FDA4AF', primaryContainer: '#FFE4E6', defaultBg: '#FFF1F2', defaultHeader: '#FECDD3', defaultSurface: '#FFF5F6', swatches: ['#FFF5F6', '#FFE4E6', '#FECDD3', '#FDA4AF', '#FB7185', '#F43F5E', '#E11D48', '#BE123C', '#881337'], courseSwatches: ['#881337', '#9F1239', '#BE123C', '#E11D48', '#F43F5E', '#FB7185'] },
    midnight: { top: '#1E40AF', bottom: '#E0E7FF', bg: '#EEF2FF', surface: '#FFFFFF', variant: '#C7D2FE', text: '#1E1B4B', subtext: '#3730A3', outline: '#818CF8', primaryContainer: '#E0E7FF', defaultBg: '#EEF2FF', defaultHeader: '#C7D2FE', defaultSurface: '#F5F7FF', swatches: ['#F5F7FF', '#E0E7FF', '#C7D2FE', '#A5B4FC', '#818CF8', '#6366F1', '#4F46E5', '#3730A3', '#1E1B4B'], courseSwatches: ['#1E1B4B', '#312E81', '#3730A3', '#4338CA', '#4F46E5', '#6366F1'] },
    espresso: { top: '#3E2723', bottom: '#D7CCC8', bg: '#EFEBE9', surface: '#FFFFFF', variant: '#BCAAA4', text: '#1B0000', subtext: '#4E342E', outline: '#8D6E63', primaryContainer: '#D7CCC8', defaultBg: '#EFEBE9', defaultHeader: '#BCAAA4', defaultSurface: '#F5F2F0', swatches: ['#F5F2F0', '#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63', '#6D4C41', '#5D4037', '#4E342E', '#3E2723'], courseSwatches: ['#3E2723', '#4E342E', '#5D4037', '#6D4C41', '#8D6E63', '#A1887F'] },
    cyan: { top: '#0891B2', bottom: '#CFFAFE', bg: '#ECFEFF', surface: '#FFFFFF', variant: '#A5F3FC', text: '#164E63', subtext: '#0E7490', outline: '#67E8F9', primaryContainer: '#CFFAFE', defaultBg: '#ECFEFF', defaultHeader: '#A5F3FC', defaultSurface: '#F4FEFF', swatches: ['#F4FEFF', '#CFFAFE', '#A5F3FC', '#67E8F9', '#22D3EE', '#06B6D4', '#0891B2', '#0E7490', '#164E63'], courseSwatches: ['#164E63', '#0E7490', '#0891B2', '#06B6D4', '#22D3EE', '#67E8F9'] }
  },
  dark: {
    indigo: {
      top: '#3B82F6', bottom: 'rgba(59, 130, 246, 0.25)', bg: '#0B0F19', surface: '#111827', variant: '#1F2937', text: '#F8FAFC', subtext: '#94A3B8', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(59, 130, 246, 0.25)', onPrimary: '#FFFFFF',
      defaultBg: '#0B0F19', defaultHeader: '#111827', defaultSurface: '#1F2937',
      swatches: ['#0F172A', '#1E293B', '#334155', '#475569', '#64748B', '#94A3B8', '#CBD5E1', '#E2E8F0', '#F4F6FA'],
      courseSwatches: ['#93C5FD', '#60A5FA', '#3B82F6', '#2563EB', '#1D4ED8', '#1E40AF']
    },
    coral: {
      top: '#F59E0B', bottom: 'rgba(245, 158, 11, 0.25)', bg: '#170E03', surface: '#261605', variant: '#3D2409', text: '#FFFBEB', subtext: '#FCD34D', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(245, 158, 11, 0.25)', onPrimary: '#FFFFFF',
      defaultBg: '#170E03', defaultHeader: '#261605', defaultSurface: '#3D2409',
      swatches: ['#451A03', '#78350F', '#B45309', '#D97706', '#F59E0B', '#FBBF24', '#FCD34D', '#FDE68A', '#FFFBEB'],
      courseSwatches: ['#FDE68A', '#FBBF24', '#F59E0B', '#D97706', '#B45309', '#92400E']
    },
    lavender: {
      top: '#A855F7', bottom: 'rgba(168, 85, 247, 0.25)', bg: '#12071F', surface: '#1E0E33', variant: '#2F174D', text: '#FAF5FF', subtext: '#D8B4FE', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(168, 85, 247, 0.25)', onPrimary: '#FFFFFF',
      defaultBg: '#12071F', defaultHeader: '#1E0E33', defaultSurface: '#2F174D',
      swatches: ['#3B0764', '#5B21B6', '#6B21A8', '#7E22CE', '#9333EA', '#A855F7', '#C084FC', '#D8B4FE', '#FAF5FF'],
      courseSwatches: ['#D8B4FE', '#C084FC', '#A855F7', '#8B5CF6', '#7C3AED', '#6D28D9']
    },
    blush: {
      top: '#EC4899', bottom: 'rgba(236, 72, 153, 0.25)', bg: '#1A0510', surface: '#2B0A1C', variant: '#42112C', text: '#FDF2F8', subtext: '#F9A8D4', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(236, 72, 153, 0.25)', onPrimary: '#FFFFFF',
      defaultBg: '#1A0510', defaultHeader: '#2B0A1C', defaultSurface: '#42112C',
      swatches: ['#500724', '#831843', '#9D174D', '#BE185D', '#DB2777', '#EC4899', '#F472B6', '#F9A8D4', '#FDF2F8'],
      courseSwatches: ['#FDA4AF', '#FB7185', '#F43F5E', '#E11D48', '#BE123C', '#9F1239']
    },
    sky: {
      top: '#38BDF8', bottom: 'rgba(56, 189, 248, 0.25)', bg: '#05131D', surface: '#0A2030', variant: '#11324A', text: '#F0F9FF', subtext: '#7DD3FC', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(56, 189, 248, 0.25)', onPrimary: '#FFFFFF',
      defaultBg: '#05131D', defaultHeader: '#0A2030', defaultSurface: '#11324A',
      swatches: ['#0C4A6E', '#075985', '#0369A1', '#0284C7', '#38BDF8', '#7DD3FC', '#BAE6FD', '#E0F2FE', '#F0F9FF'],
      courseSwatches: ['#BAE6FD', '#7DD3FC', '#38BDF8', '#0284C7', '#0369A1', '#075985']
    },
    matcha: {
      top: '#22C55E', bottom: 'rgba(34, 197, 94, 0.25)', bg: '#06170C', surface: '#0D2916', variant: '#163E23', text: '#F0FDF4', subtext: '#86EFAC', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(34, 197, 94, 0.25)', onPrimary: '#FFFFFF',
      defaultBg: '#06170C', defaultHeader: '#0D2916', defaultSurface: '#163E23',
      swatches: ['#14532D', '#166534', '#15803D', '#16A34A', '#22C55E', '#4ADE80', '#86EFAC', '#BBF7D0', '#F0FDF4'],
      courseSwatches: ['#86EFAC', '#4ADE80', '#22C55E', '#16A34A', '#15803D', '#14532D']
    },
    mocha: {
      top: '#D6C6B9', bottom: 'rgba(214, 198, 185, 0.25)', bg: '#171311', surface: '#26201D', variant: '#3A322E', text: '#F5EBE4', subtext: '#CBB4A9', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(214, 198, 185, 0.25)', onPrimary: '#171311',
      defaultBg: '#171311', defaultHeader: '#26201D', defaultSurface: '#3A322E',
      swatches: ['#4E3E37', '#6B4D43', '#7C6B5E', '#8C7868', '#AA9686', '#CBB4A9', '#D6C6B9', '#ECE1D5', '#FCF8F5'],
      courseSwatches: ['#CBB4A9', '#AA9686', '#8C7868', '#7C6B5E', '#6B4D43', '#4E3E37']
    },
    sage: {
      top: '#34D399', bottom: 'rgba(52, 211, 153, 0.25)', bg: '#061D15', surface: '#092B1F', variant: '#0E4230', text: '#ECFDF5', subtext: '#A7F3D0', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(52, 211, 153, 0.25)', onPrimary: '#022C22',
      defaultBg: '#061D15', defaultHeader: '#092B1F', defaultSurface: '#0E4230',
      swatches: ['#022C22', '#064E3B', '#047857', '#059669', '#10B981', '#34D399', '#6EE7B7', '#A7F3D0', '#D1FAE5'],
      courseSwatches: ['#34D399', '#10B981', '#059669', '#047857', '#064E3B', '#022C22']
    },
    slate: {
      top: '#9CA3AF', bottom: 'rgba(156, 163, 175, 0.25)', bg: '#0B0F17', surface: '#141C2B', variant: '#212D42', text: '#F9FAFB', subtext: '#CBD5E1', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(156, 163, 175, 0.25)', onPrimary: '#0B0F17',
      defaultBg: '#0B0F17', defaultHeader: '#141C2B', defaultSurface: '#212D42',
      swatches: ['#111827', '#1F2937', '#374151', '#4B5563', '#6B7280', '#9CA3AF', '#D1D5DB', '#E5E7EB', '#F9FAFB'],
      courseSwatches: ['#9CA3AF', '#6B7280', '#4B5563', '#374151', '#1F2937', '#111827']
    },
    sunset: { top: '#FF9B70', bottom: 'rgba(255, 155, 112, 0.25)', bg: '#1A0A05', surface: '#2B1209', variant: '#421E11', text: '#FFF0E6', subtext: '#FFCBA4', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(255, 155, 112, 0.25)', onPrimary: '#1A0A05', defaultBg: '#1A0A05', defaultHeader: '#2B1209', defaultSurface: '#421E11', swatches: ['#331005', '#5C1A06', '#8C270D', '#B83A18', '#E34F26', '#FF9B70', '#FFB38A', '#FFCBA4', '#FFF0E6'], courseSwatches: ['#FFB38A', '#FF9B70', '#E34F26', '#B83A18', '#8C270D', '#5C1A06'] },
    ocean: { top: '#83C5BE', bottom: 'rgba(131, 197, 190, 0.25)', bg: '#051416', surface: '#0C2326', variant: '#16383D', text: '#F4F9F9', subtext: '#EDF6F9', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(131, 197, 190, 0.25)', onPrimary: '#051416', defaultBg: '#051416', defaultHeader: '#0C2326', defaultSurface: '#16383D', swatches: ['#001A1D', '#003A40', '#00535B', '#006D77', '#4EA8DE', '#83C5BE', '#A9D6D1', '#CBE8E4', '#F4F9F9'], courseSwatches: ['#83C5BE', '#4EA8DE', '#006D77', '#00535B', '#003A40', '#001A1D'] },
    forest: { top: '#A3E635', bottom: 'rgba(163, 230, 53, 0.25)', bg: '#1A2E05', surface: '#243F07', variant: '#365314', text: '#F7FEE7', subtext: '#D9F99D', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(163, 230, 53, 0.25)', onPrimary: '#1A2E05', defaultBg: '#1A2E05', defaultHeader: '#243F07', defaultSurface: '#365314', swatches: ['#1A2E05', '#243F07', '#365314', '#3F6212', '#4D7C0F', '#65A30D', '#84CC16', '#A3E635', '#BEF264'], courseSwatches: ['#A3E635', '#84CC16', '#65A30D', '#4D7C0F', '#3F6212', '#365314'] },
    sand: { top: '#D6C8A9', bottom: 'rgba(214, 200, 169, 0.25)', bg: '#14110C', surface: '#211C15', variant: '#332B21', text: '#FDFBF7', subtext: '#EAE0CC', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(214, 200, 169, 0.25)', onPrimary: '#14110C', defaultBg: '#14110C', defaultHeader: '#211C15', defaultSurface: '#332B21', swatches: ['#292217', '#4A3F2C', '#756343', '#9B865D', '#C2A878', '#D6C8A9', '#EAE0CC', '#F9F6F0', '#FDFBF7'], courseSwatches: ['#D6C8A9', '#C2A878', '#9B865D', '#756343', '#4A3F2C', '#292217'] },
    plum: { top: '#CBB8D4', bottom: 'rgba(203, 184, 212, 0.25)', bg: '#140E18', surface: '#211727', variant: '#32253B', text: '#FAF5FC', subtext: '#E3D5E8', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(203, 184, 212, 0.25)', onPrimary: '#140E18', defaultBg: '#140E18', defaultHeader: '#211727', defaultSurface: '#32253B', swatches: ['#1D1522', '#2E2236', '#392C42', '#52415E', '#6D597A', '#B596C1', '#CBB8D4', '#E3D5E8', '#FAF5FC'], courseSwatches: ['#CBB8D4', '#B596C1', '#6D597A', '#52415E', '#392C42', '#2E2236'] },
    cherry: { top: '#F4C8C8', bottom: 'rgba(244, 200, 200, 0.25)', bg: '#1A0606', surface: '#2C0D0D', variant: '#421616', text: '#FDF5F5', subtext: '#FCECEC', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(244, 200, 200, 0.25)', onPrimary: '#1A0606', defaultBg: '#1A0606', defaultHeader: '#2C0D0D', defaultSurface: '#421616', swatches: ['#170000', '#3B0000', '#540000', '#780000', '#C1121F', '#EBA4A4', '#F4C8C8', '#FCECEC', '#FDF5F5'], courseSwatches: ['#EBA4A4', '#C1121F', '#780000', '#540000', '#3B0000', '#170000'] },
    mint: { top: '#95D1C6', bottom: 'rgba(149, 209, 198, 0.25)', bg: '#081715', surface: '#102623', variant: '#1A3B36', text: '#F2F9F7', subtext: '#C0E4DC', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(149, 209, 198, 0.25)', onPrimary: '#081715', defaultBg: '#081715', defaultHeader: '#102623', defaultSurface: '#1A3B36', swatches: ['#0A2522', '#0F3D37', '#16544C', '#1F756A', '#2A9D8F', '#59BBAE', '#95D1C6', '#C0E4DC', '#F2F9F7'], courseSwatches: ['#95D1C6', '#59BBAE', '#2A9D8F', '#1F756A', '#16544C', '#0F3D37'] },
    rust: { top: '#E4B599', bottom: 'rgba(228, 181, 153, 0.25)', bg: '#1A0C05', surface: '#2B160C', variant: '#422416', text: '#FDF6F2', subtext: '#F0D4C3', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(228, 181, 153, 0.25)', onPrimary: '#1A0C05', defaultBg: '#1A0C05', defaultHeader: '#2B160C', defaultSurface: '#422416', swatches: ['#291100', '#4D1A00', '#5F2100', '#822D00', '#B04105', '#D17C4D', '#E4B599', '#F0D4C3', '#FDF6F2'], courseSwatches: ['#E4B599', '#D17C4D', '#B04105', '#822D00', '#5F2100', '#4D1A00'] },
    ash: { top: '#BDC3C7', bottom: 'rgba(189, 195, 201, 0.25)', bg: '#11161B', surface: '#1D242B', variant: '#2B353E', text: '#F7F8F8', subtext: '#D3D7D7', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(189, 195, 201, 0.25)', onPrimary: '#11161B', defaultBg: '#11161B', defaultHeader: '#1D242B', defaultSurface: '#2B353E', swatches: ['#1C252D', '#2C3E50', '#394646', '#546363', '#7F8C8D', '#A0A7A7', '#BDC3C7', '#D3D7D7', '#F7F8F8'], courseSwatches: ['#BDC3C7', '#A0A7A7', '#7F8C8D', '#546363', '#394646', '#2C3E50'] },
    violet: { top: '#C4B5FD', bottom: 'rgba(196, 181, 253, 0.25)', bg: '#17092B', surface: '#241042', variant: '#371A63', text: '#F5F3FF', subtext: '#DDD6FE', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(196, 181, 253, 0.25)', onPrimary: '#17092B', defaultBg: '#17092B', defaultHeader: '#241042', defaultSurface: '#371A63', swatches: ['#4C1D95', '#5B21B6', '#6D28D9', '#7C3AED', '#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE', '#F5F3FF'], courseSwatches: ['#C4B5FD', '#A78BFA', '#8B5CF6', '#7C3AED', '#6D28D9', '#5B21B6'] },
    teal: { top: '#5EEAD4', bottom: 'rgba(94, 234, 212, 0.25)', bg: '#041D1A', surface: '#0A2E2A', variant: '#11453E', text: '#F0FDF4', subtext: '#99F6E4', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(94, 234, 212, 0.25)', onPrimary: '#041D1A', defaultBg: '#041D1A', defaultHeader: '#0A2E2A', defaultSurface: '#11453E', swatches: ['#134E4A', '#115E59', '#0F766E', '#0D9488', '#2DD4BF', '#5EEAD4', '#99F6E4', '#CCFBF1', '#F0FDF4'], courseSwatches: ['#5EEAD4', '#2DD4BF', '#0D9488', '#0F766E', '#115E59', '#134E4A'] },
    amber: { top: '#FBBF24', bottom: 'rgba(251, 191, 36, 0.25)', bg: '#1C1004', surface: '#2D1A07', variant: '#472B0D', text: '#FFFBEB', subtext: '#FDE68A', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(251, 191, 36, 0.25)', onPrimary: '#1C1004', defaultBg: '#1C1004', defaultHeader: '#2D1A07', defaultSurface: '#472B0D', swatches: ['#78350F', '#B45309', '#D97706', '#F59E0B', '#FBBF24', '#FCD34D', '#FDE68A', '#FEF3C7', '#FFFBEB'], courseSwatches: ['#FDE68A', '#FBBF24', '#F59E0B', '#D97706', '#B45309', '#78350F'] },
    rose: { top: '#FB7185', bottom: 'rgba(251, 113, 133, 0.25)', bg: '#1F060D', surface: '#330B17', variant: '#4F1225', text: '#FFF1F2', subtext: '#FECDD3', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(251, 113, 133, 0.25)', onPrimary: '#1F060D', defaultBg: '#1F060D', defaultHeader: '#330B17', defaultSurface: '#4F1225', swatches: ['#881337', '#9F1239', '#BE123C', '#E11D48', '#F43F5E', '#FB7185', '#FDA4AF', '#FECDD3', '#FFF1F2'], courseSwatches: ['#FB7185', '#F43F5E', '#E11D48', '#BE123C', '#9F1239', '#881337'] },
    midnight: { top: '#818CF8', bottom: 'rgba(129, 140, 248, 0.25)', bg: '#080B1A', surface: '#111633', variant: '#1B224C', text: '#EEF2FF', subtext: '#C7D2FE', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(129, 140, 248, 0.25)', onPrimary: '#080B1A', defaultBg: '#080B1A', defaultHeader: '#111633', defaultSurface: '#1B224C', swatches: ['#1E1B4B', '#312E81', '#3730A3', '#4338CA', '#4F46E5', '#6366F1', '#818CF8', '#A5B4FC', '#C7D2FE'], courseSwatches: ['#A5B4FC', '#818CF8', '#6366F1', '#4F46E5', '#4338CA', '#3730A3'] },
    espresso: { top: '#A1887F', bottom: 'rgba(161, 136, 127, 0.25)', bg: '#120D0B', surface: '#211815', variant: '#332621', text: '#EFEBE9', subtext: '#D7CCC8', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(161, 136, 127, 0.25)', onPrimary: '#120D0B', defaultBg: '#120D0B', defaultHeader: '#211815', defaultSurface: '#332621', swatches: ['#3E2723', '#4E342E', '#5D4037', '#6D4C41', '#8D6E63', '#A1887F', '#BCAAA4', '#D7CCC8', '#EFEBE9'], courseSwatches: ['#BCAAA4', '#A1887F', '#8D6E63', '#6D4C41', '#5D4037', '#4E342E'] },
    cyan: { top: '#22D3EE', bottom: 'rgba(34, 211, 238, 0.25)', bg: '#041B24', surface: '#0A2A38', variant: '#113F54', text: '#ECFEFF', subtext: '#A5F3FC', outline: 'rgba(255,255,255,0.1)', primaryContainer: 'rgba(34, 211, 238, 0.25)', onPrimary: '#041B24', defaultBg: '#041B24', defaultHeader: '#0A2A38', defaultSurface: '#113F54', swatches: ['#164E63', '#0E7490', '#0891B2', '#06B6D4', '#22D3EE', '#67E8F9', '#A5F3FC', '#CFFAFE', '#ECFEFF'], courseSwatches: ['#67E8F9', '#22D3EE', '#06B6D4', '#0891B2', '#0E7490', '#164E63'] }
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
    this.cardCornerStyle = 'rounded';
    this.cardCornerRadiusVal = 8;
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
    this.btnExportCSV = document.getElementById('btn-export-csv');
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
    this.classListContainer = document.getElementById('added-classes-list') || document.getElementById('class-list-container');
    this.courseSearchContainer = document.getElementById('course-search-container');
    this.courseSearchInput = document.getElementById('course-search-input');
    this.clearSearchBtn = document.getElementById('clear-search-btn');
    this.searchQuery = '';
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

    // Universal Importer
    this.universalFileInput = document.getElementById('universal-file-input');
    
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
    root.style.setProperty('--m3-sys-color-primary-container', selectedTheme.bottom || selectedTheme.variant);
    root.style.setProperty('--m3-sys-color-on-primary', '#FFFFFF');

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

    // Imperatively push primary color to all hardcoded-blue elements
    this.applyDynamicThemeToElements(selectedTheme);

    this.renderTimetableGrid();
    this.renderClassList();
  }

  applyDynamicThemeToElements(theme) {
    const primary   = theme.top;
    const container = theme.bottom;
    const onPrimary = theme.onPrimary || '#FFFFFF';
    const surface   = theme.surface;
    const bg        = theme.bg;
    const variant   = theme.variant;
    const textColor = theme.text;
    const subtext   = theme.subtext || theme.text;
    const outline   = theme.outline || '';

    // ── Detect dark mode (bg is dark if luminance < 0.25) ─────────
    const isDark = this._isColorDark(bg);

    // Update CSS variables dynamically
    const root = document.documentElement;
    root.style.setProperty('--m3-sys-color-primary', primary);
    root.style.setProperty('--m3-sys-color-primary-container', container);
    root.style.setProperty('--m3-sys-color-on-primary', onPrimary);
    root.style.setProperty('--m3-sys-color-surface', surface);
    root.style.setProperty('--m3-sys-color-bg', bg);
    root.style.setProperty('--m3-sys-text-primary', textColor);
    root.style.setProperty('--m3-sys-text-secondary', subtext);

    // ── DARK MODE: apply dark surfaces & contrast to all layout elements ──
    document.body.classList.toggle('dark-mode', isDark);
    if (isDark) {
      document.body.style.backgroundColor = bg;
      const mainEl = document.querySelector('main');
      if (mainEl) {
        mainEl.style.backgroundColor = bg;
        mainEl.style.setProperty('--dot-matrix-color', 'rgba(255, 255, 255, 0.09)');
      }

      const leftSidebar  = document.getElementById('left-sidebar');
      const rightSidebar = document.getElementById('right-sidebar');
      if (leftSidebar)  { leftSidebar.style.backgroundColor  = surface; leftSidebar.style.color  = textColor; }
      if (rightSidebar) { rightSidebar.style.backgroundColor = surface; rightSidebar.style.color = textColor; }

      // Top Action Bar header & pill container
      const topHeader = mainEl?.querySelector('header');
      if (topHeader) topHeader.style.backgroundColor = surface + 'DD';

      const topActionBarPill = topHeader?.querySelector('div');
      if (topActionBarPill) {
        topActionBarPill.style.backgroundColor = variant;
        topActionBarPill.style.borderColor = outline || 'rgba(255,255,255,0.15)';
      }

      // Top Action Bar inactive buttons (Calendar, Export CSV, Save as PDF)
      topHeader?.querySelectorAll('button:not(.btn-theme-primary)').forEach(btn => {
        btn.style.color = textColor;
        btn.querySelectorAll('svg').forEach(svg => svg.style.color = textColor);
      });

      // Bottom floating toolbar capsules & inner controls
      const bottomFloatingBar = document.getElementById('bottom-floating-pill-bar');
      if (bottomFloatingBar) {
        bottomFloatingBar.style.backgroundColor = variant;
        bottomFloatingBar.style.borderColor = outline || 'rgba(255,255,255,0.15)';

        // Inner zoom pill containers & theme pill container
        bottomFloatingBar.querySelectorAll('.bg-white').forEach(capsule => {
          capsule.style.backgroundColor = surface;
          capsule.style.borderColor = outline || 'rgba(255,255,255,0.15)';
          capsule.style.color = textColor;
          capsule.querySelectorAll('button, span, svg').forEach(child => {
            if (!child.classList.contains('btn-theme-primary')) {
              child.style.color = textColor;
            }
          });
        });
      }

      // Floating sidebar trigger buttons
      document.querySelectorAll('#btn-expand-left-floating, #btn-expand-right-floating').forEach(btn => {
        btn.style.backgroundColor = variant;
        btn.style.borderColor = outline || 'rgba(255,255,255,0.15)';
        btn.style.color = textColor;
      });

      // Settings toggle button & clear all button
      document.querySelectorAll('#btn-schedule-settings-toggle, #btn-clear-all').forEach(btn => {
        if (btn.id === 'btn-schedule-settings-toggle') {
          btn.style.backgroundColor = variant;
          btn.style.borderColor = outline || 'rgba(255,255,255,0.15)';
          btn.style.color = textColor;
          btn.querySelectorAll('span, svg').forEach(child => child.style.color = textColor);
        } else if (btn.id === 'btn-clear-all') {
          btn.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
          btn.style.borderColor = 'rgba(239, 68, 68, 0.4)';
          btn.style.color = '#EF4444';
          btn.querySelectorAll('span, svg').forEach(child => child.style.color = '#EF4444');
        }
      });

      // Bottom User Profile card
      document.querySelectorAll('.user-profile-card').forEach(el => {
        el.style.backgroundColor = variant;
        el.style.borderColor = outline || 'rgba(255,255,255,0.15)';
        el.style.color = textColor;
        el.querySelectorAll('p, span').forEach(textEl => {
          if (textEl.classList.contains('text-gray-500')) {
            textEl.style.color = subtext;
          } else {
            textEl.style.color = textColor;
          }
        });
      });

      // Force explicitly override the expandable content containers (to bypass CSS caching)
      document.querySelectorAll('.expandable-content, .card-expand-content, #schedule-quick-settings, #canvas-controls-popover').forEach(el => {
        el.style.backgroundColor = surface;
        el.style.borderColor = outline || 'rgba(255,255,255,0.15)';
      });

      // Target Popover controls card (#canvas-controls-popover) in dark mode
      const canvasPopover = document.getElementById('canvas-controls-popover');
      if (canvasPopover) {
        canvasPopover.querySelectorAll('span, p, label').forEach(textEl => {
          if (textEl.classList.contains('text-slate-500') || textEl.classList.contains('text-slate-400') || textEl.classList.contains('text-gray-500')) {
            textEl.style.color = subtext;
          } else if (!textEl.closest('.pill-btn.active') && !textEl.closest('.capsule-btn.active') && !textEl.closest('.btn-theme-primary')) {
            textEl.style.color = textColor;
          }
        });
        canvasPopover.querySelectorAll('.bg-white, #device-type-toggles, .pill-toggle-group').forEach(box => {
          box.style.backgroundColor = variant;
          box.style.borderColor = outline || 'rgba(255,255,255,0.15)';
        });
      }

      // Target ALL form inputs, selects, textareas to fix dark mode white boxes & force rounded corners
      document.querySelectorAll('input, select, textarea, .m3-input, .m3-input-time, .opt-input').forEach(input => {
        if (input.type !== 'checkbox' && input.type !== 'radio') {
          input.style.backgroundColor = variant;
          input.style.borderColor = outline || 'rgba(255,255,255,0.15)';
          input.style.color = textColor;
          input.style.borderRadius = '14px';
        }
      });

      // Stepper number values & buttons in dark mode
      document.querySelectorAll('.stepper-input, .stepper-val, .stepper-btn').forEach(el => {
        el.style.color = textColor;
      });

      // Fix hardcoded white plates (Logo Plate, Empty State Calendar plate, etc)
      const whitePlates = [
        document.querySelector('.bg-white\\/95.rounded-2xl'), // Logo plate
        document.querySelector('.bg-white.p-4.rounded-2xl.shadow-sm') // Empty state plate
      ];
      
      whitePlates.forEach(el => {
        if (el) {
          el.style.backgroundColor = surface;
          el.style.borderColor = outline || 'rgba(255,255,255,0.15)';
        }
      });
      
      // Help widget
      document.querySelectorAll('[class*="F8FAFC"]').forEach(el => {
        el.style.backgroundColor = variant;
        el.style.borderColor = outline;
        el.style.color = textColor;
      });

      // Text & SVG icon colors across sidebars and main layout
      document.querySelectorAll('.card-expand-header svg').forEach(svg => {
        svg.style.color = textColor;
      });

      document.querySelectorAll('#left-sidebar, #right-sidebar, main').forEach(container => {
        container.querySelectorAll('svg, p, span, h1, h2, h3, h4, h5, h6, label').forEach(el => {
          if (!el.closest('.btn-theme-primary') && !el.closest('.pill-btn.active')) {
            if (el.tagName.toLowerCase() === 'svg') {
              el.style.color = textColor;
            } else if (el.classList.contains('text-gray-400') || el.classList.contains('text-gray-500') || el.classList.contains('subtext')) {
              el.style.color = subtext;
            } else if (!el.classList.contains('theme-primary-text')) {
              el.style.color = textColor;
            }
          }
        });
      });

      // Right sidebar badges, clear/settings buttons dark mode readability
      const slotsBadge = document.getElementById('slots-badge-count')?.parentElement;
      if (slotsBadge) {
        slotsBadge.style.backgroundColor = variant;
        slotsBadge.style.color = textColor;
        slotsBadge.style.borderColor = outline;
      }

      document.querySelectorAll('#btn-toggle-right-sidebar, #btn-toggle-left-sidebar').forEach(btn => {
        btn.style.backgroundColor = variant;
        btn.style.color = textColor;
        btn.querySelectorAll('svg').forEach(svg => svg.style.color = textColor);
      });
    } else {
      // ── LIGHT MODE: reset layout to neutral whites ─────────────
      document.body.style.backgroundColor = '';
      const mainEl = document.querySelector('main');
      if (mainEl) {
        mainEl.style.backgroundColor = '';
        mainEl.style.setProperty('--dot-matrix-color', 'rgba(15, 23, 42, 0.08)');
      }

      const leftSidebar  = document.getElementById('left-sidebar');
      const rightSidebar = document.getElementById('right-sidebar');
      if (leftSidebar)  { leftSidebar.style.backgroundColor  = ''; leftSidebar.style.color  = ''; }
      if (rightSidebar) { rightSidebar.style.backgroundColor = ''; rightSidebar.style.color = ''; }

      const topHeader = mainEl?.querySelector('header');
      if (topHeader) topHeader.style.backgroundColor = '';
      const topActionBarPill = topHeader?.querySelector('div');
      if (topActionBarPill) {
        topActionBarPill.style.backgroundColor = '';
        topActionBarPill.style.borderColor = '';
      }
      topHeader?.querySelectorAll('button:not(.btn-theme-primary)').forEach(btn => {
        btn.style.color = '';
        btn.querySelectorAll('svg').forEach(svg => svg.style.color = '');
      });

      const bottomFloatingBar = document.getElementById('bottom-floating-pill-bar');
      if (bottomFloatingBar) {
        bottomFloatingBar.style.backgroundColor = '';
        bottomFloatingBar.style.borderColor = '';
        bottomFloatingBar.querySelectorAll('.bg-white').forEach(capsule => {
          capsule.style.backgroundColor = '';
          capsule.style.borderColor = '';
          capsule.style.color = '';
          capsule.querySelectorAll('button, span, svg').forEach(child => {
            child.style.color = '';
          });
        });
      }

      document.querySelectorAll('#btn-expand-left-floating, #btn-expand-right-floating, #btn-schedule-settings-toggle, #btn-clear-all').forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
        btn.style.color = '';
        btn.querySelectorAll('span, svg').forEach(child => {
          child.style.color = '';
        });
      });

      document.querySelectorAll('.expandable-content, .card-expand-content, #canvas-controls-popover').forEach(el => {
        el.style.backgroundColor = '';
        el.style.borderColor = '';
        el.style.color = '';
      });
      const canvasPopoverReset = document.getElementById('canvas-controls-popover');
      if (canvasPopoverReset) {
        canvasPopoverReset.querySelectorAll('span, p, label').forEach(textEl => {
          textEl.style.color = '';
        });
        canvasPopoverReset.querySelectorAll('.bg-white, #device-type-toggles, .pill-toggle-group').forEach(box => {
          box.style.backgroundColor = '';
          box.style.borderColor = '';
        });
      }
      document.querySelectorAll('input, select, textarea, .m3-input, .m3-input-time, .opt-input').forEach(input => {
        if (input.type !== 'checkbox' && input.type !== 'radio') {
          input.style.backgroundColor = '';
          input.style.borderColor = '';
          input.style.color = '';
          input.style.borderRadius = '14px';
        }
      });
      document.querySelectorAll('.stepper-input, .stepper-val, .stepper-btn').forEach(el => {
        el.style.color = '';
      });

      // Reset white plates
      const whitePlates = [
        document.querySelector('.bg-white\\/95.rounded-2xl'), // Logo plate
        document.querySelector('.bg-white.p-4.rounded-2xl.shadow-sm') // Empty state plate
      ];
      
      whitePlates.forEach(el => {
        if (el) {
          el.style.backgroundColor = '';
          el.style.borderColor = '';
        }
      });
      
      document.querySelectorAll('.pill-btn:not(.active)').forEach(el => {
        el.style.color = '';
      });
      document.querySelectorAll('.user-profile-card, [class*="F8FAFC"]').forEach(el => {
        el.style.backgroundColor = '';
        el.style.borderColor = '';
        el.style.color = '';
      });
      document.querySelectorAll('.card-expand-header svg').forEach(svg => {
        svg.style.color = '';
      });
      document.querySelectorAll('#left-sidebar, #right-sidebar, main').forEach(container => {
        container.querySelectorAll('svg, p, span, h1, h2, h3, h4, h5, h6, label').forEach(el => {
          if (!el.closest('.btn-theme-primary') && !el.closest('.pill-btn.active')) {
            el.style.color = '';
          }
        });
      });

      const slotsBadge = document.getElementById('slots-badge-count')?.parentElement;
      if (slotsBadge) {
        slotsBadge.style.backgroundColor = '';
        slotsBadge.style.color = '';
        slotsBadge.style.borderColor = '';
      }

      document.querySelectorAll('#btn-toggle-right-sidebar, #btn-toggle-left-sidebar, #btn-clear-all, #btn-settings-toggle').forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.color = '';
        btn.querySelectorAll('svg').forEach(svg => svg.style.color = '');
      });
    }

    // ── btn-theme-primary (Download Image, Controls) ──────────────
    document.querySelectorAll('.btn-theme-primary').forEach(el => {
      el.style.backgroundColor = primary;
      el.style.color = onPrimary;
    });

    // ── theme-primary-text (icons, links) ─────────────────────────
    document.querySelectorAll('.theme-primary-text').forEach(el => {
      el.style.color = primary;
    });

    // ── theme-primary-bg ──────────────────────────────────────────
    document.querySelectorAll('.theme-primary-bg').forEach(el => {
      el.style.backgroundColor = primary;
    });

    // ── theme-primary-light-bg (icon backing plates) ──────────────
    document.querySelectorAll('.theme-primary-light-bg').forEach(el => {
      el.style.backgroundColor = container;
    });

    // ── Active pill / capsule buttons ─────────────────────────────
    document.querySelectorAll('.pill-btn.active, .capsule-btn.active').forEach(el => {
      el.style.backgroundColor = primary;
      el.style.color = onPrimary;
    });

    // ── Theme & Layout card inner ─────────────────────────────────
    document.querySelectorAll('.theme-card-inner, .layout-card-inner').forEach(el => {
      el.style.backgroundColor = isDark ? variant : container;
      el.style.borderColor = isDark ? outline : container;
    });

    // ── Aurora orbs ───────────────────────────────────────────────
    if (window.innerWidth > 1280) {
      document.querySelectorAll('.animate-aura').forEach((orb, i) => {
        orb.style.background = i === 0
          ? `radial-gradient(circle, ${primary}35, ${container}25, transparent)`
          : i === 1 ? `radial-gradient(circle, ${primary}20, transparent)`
          : `radial-gradient(circle, ${container}30, transparent)`;
      });
    }

    // ── Logo glow backing ─────────────────────────────────────────
    const logoBacking = document.querySelector('[class*="from-blue-500"]');
    if (logoBacking) {
      logoBacking.style.background = `linear-gradient(to right, ${primary}50, ${primary}30)`;
    }
  }

  // Helper: detect if a hex color is "dark" (luminance < 0.25)
  _isColorDark(hex) {
    if (!hex || !hex.startsWith('#')) return false;
    const r = parseInt(hex.slice(1,3), 16) / 255;
    const g = parseInt(hex.slice(3,5), 16) / 255;
    const b = parseInt(hex.slice(5,7), 16) / 255;
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return lum < 0.25;
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

  toggleAccordion(header, content) {
    if (!content) return;
    const isOpening = content.classList.contains('hidden');

    if (isOpening) {
      content.classList.remove('hidden');
      header?.classList.add('active');

      content.style.overflow = 'hidden';
      content.style.maxHeight = '0px';
      content.style.opacity = '0';
      content.style.transition = 'max-height 0.4s ease-in-out, opacity 0.35s ease';

      void content.offsetHeight;

      const targetHeight = content.scrollHeight;
      content.style.maxHeight = (targetHeight + 40) + 'px';
      content.style.opacity = '1';

      setTimeout(() => {
        if (!content.classList.contains('hidden')) {
          content.style.maxHeight = 'none';
          content.style.overflow = 'visible';
        }
      }, 420);
    } else {
      header?.classList.remove('active');

      content.style.overflow = 'hidden';
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.transition = 'max-height 0.4s ease-in-out, opacity 0.3s ease';

      void content.offsetHeight;

      content.style.maxHeight = '0px';
      content.style.opacity = '0';

      setTimeout(() => {
        if (content.style.maxHeight === '0px') {
          content.classList.add('hidden');
        }
      }, 400);
    }
  }

  bindEvents() {
    if (this.courseSearchInput) {
      this.courseSearchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        if (this.clearSearchBtn) {
          if (this.searchQuery.length > 0) {
            this.clearSearchBtn.classList.remove('hidden');
          } else {
            this.clearSearchBtn.classList.add('hidden');
          }
        }
        this.renderClassList(); // Re-render to filter classes
      });
    }

    if (this.clearSearchBtn) {
      this.clearSearchBtn.addEventListener('click', () => {
        if (this.courseSearchInput) {
          this.courseSearchInput.value = '';
          this.searchQuery = '';
          this.clearSearchBtn.classList.add('hidden');
          this.renderClassList();
        }
      });
    }

    // Global delegated listener for pill-btn / capsule-btn clicks
    // Imperatively applies theme color when .active changes
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-btn, .capsule-btn');
      if (!btn) return;

      // Brief rAF to let classList.add('active') fire first
      requestAnimationFrame(() => {
        const primary = getComputedStyle(document.documentElement)
          .getPropertyValue('--m3-sys-color-primary').trim() || '#2563EB';
        const onPrimary = getComputedStyle(document.documentElement)
          .getPropertyValue('--m3-sys-color-on-primary').trim() || '#FFFFFF';

        // Reset siblings
        const group = btn.closest('.pill-toggle-group, .capsule-group') || btn.parentElement;
        if (group) {
          group.querySelectorAll('.pill-btn, .capsule-btn').forEach(b => {
            if (!b.classList.contains('active')) {
              b.style.backgroundColor = '';
              b.style.color = '';
            }
          });
        }

        // Style active btn
        if (btn.classList.contains('active')) {
          btn.style.backgroundColor = primary;
          btn.style.color = onPrimary;
        }
      });
    });

    // Expandable Card Accordions
    this.headerTheme.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleAccordion(this.headerTheme, this.contentTheme);
    });

    this.headerLayoutOptions.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleAccordion(this.headerLayoutOptions, this.contentLayoutOptions);
    });

    this.headerAddCourse.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleAccordion(this.headerAddCourse, this.contentAddCourse);
    });

    // Swipe-to-Right gesture for expanding cards on touch/swipe
    document.querySelectorAll('.card-expand-header').forEach(header => {
      let startX = 0;
      let startY = 0;

      header.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }, { passive: true });

      header.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = endX - startX;
        const diffY = endY - startY;

        // Swiping right by 25px+ triggers card expansion to the right
        if (diffX > 25 && Math.abs(diffY) < 35) {
          header.click();
        }
      }, { passive: true });
    });

    if (this.headerFileImport) {
      this.headerFileImport.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleAccordion(this.headerFileImport, this.contentFileImport);
      });
    }

    if (this.headerScanner) {
      this.headerScanner.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleAccordion(this.headerScanner, this.contentScanner);
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

    // Card Corners Toggle
    document.querySelectorAll('#toggle-card-corners .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#toggle-card-corners .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.cardCornerStyle = btn.getAttribute('data-val');
        
        const rowCornerRadius = document.getElementById('row-corner-radius');
        if (this.cardCornerStyle === 'sharp') {
          if (rowCornerRadius) rowCornerRadius.style.display = 'none';
        } else {
          if (rowCornerRadius) rowCornerRadius.style.display = 'flex';
        }
        this.renderTimetableGrid();
      });
    });

    // Card Corner Radius Steppers
    const btnRadiusDec = document.getElementById('btn-radius-dec');
    const btnRadiusInc = document.getElementById('btn-radius-inc');
    const gridRadiusValEl = document.getElementById('grid-radius-val');

    gridRadiusValEl?.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      if (!isNaN(val)) {
        this.cardCornerRadiusVal = Math.min(24, Math.max(2, val));
        this.renderTimetableGrid();
      }
    });
    if (btnRadiusDec && gridRadiusValEl) {
      btnRadiusDec.addEventListener('click', () => {
        this.cardCornerRadiusVal = Math.max(2, this.cardCornerRadiusVal - 1);
        gridRadiusValEl.value = this.cardCornerRadiusVal;
        this.renderTimetableGrid();
      });
    }
    if (btnRadiusInc && gridRadiusValEl) {
      btnRadiusInc.addEventListener('click', () => {
        this.cardCornerRadiusVal = Math.min(24, this.cardCornerRadiusVal + 1);
        gridRadiusValEl.value = this.cardCornerRadiusVal;
        this.renderTimetableGrid();
      });
    }

    // SCHEDULE LIST QUICK SETTINGS TOGGLE DRAWER
    const btnScheduleSettings = document.getElementById('btn-schedule-settings-toggle');
    const quickSettingsPanel = document.getElementById('schedule-quick-settings');

    btnScheduleSettings?.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleAccordion(btnScheduleSettings, quickSettingsPanel);
    });

    let setStartX = 0;
    let setStartY = 0;
    btnScheduleSettings?.addEventListener('touchstart', (e) => {
      setStartX = e.touches[0].clientX;
      setStartY = e.touches[0].clientY;
    }, { passive: true });

    btnScheduleSettings?.addEventListener('touchend', (e) => {
      const setEndX = e.changedTouches[0].clientX;
      const setEndY = e.changedTouches[0].clientY;
      const diffX = setEndX - setStartX;
      const diffY = setEndY - setStartY;
      if (Math.abs(diffX) > 25 && Math.abs(diffY) < 35) {
        btnScheduleSettings.click();
      }
    }, { passive: true });

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
      document.querySelectorAll('#toggle-card-corners .pill-btn')[0].click();
      
      const gridRadiusValEl = document.getElementById('grid-radius-val');
      if (gridRadiusValEl) {
        gridRadiusValEl.value = 8;
        this.cardCornerRadiusVal = 8;
      }
      
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
        document.querySelectorAll('.capsule-btn').forEach(b => {
          b.classList.remove('active');
          b.style.backgroundColor = '';
          b.style.color = '';
        });
        btn.classList.add('active');
        const device = btn.getAttribute('data-device');
        this.activeDevice = device;

        const lockUIToggle = document.getElementById('toggle-lock-ui');

        // Apply smooth scale morph class
        this.phoneCanvas.classList.add('device-switching');
        setTimeout(() => this.phoneCanvas.classList.remove('device-switching'), 450);

        if (device === 'tablet') {
          this.phoneCanvas.className = 'm3-phone-canvas canvas-tablet device-switching';
          if (this.stageDeviceLabel) this.stageDeviceLabel.innerText = 'LIVE TABLET LOCKSCREEN PREVIEW';
          if (this.stageTitleBar) this.stageTitleBar.style.maxWidth = '920px';
          document.querySelector('.m3-phone-wrapper').className = 'm3-phone-wrapper tablet-mode';
          if (lockUIToggle) lockUIToggle.style.display = 'flex';
        } else if (device === 'paper') {
          this.phoneCanvas.className = 'm3-phone-canvas canvas-paper device-switching';
          if (this.stageDeviceLabel) this.stageDeviceLabel.innerText = 'LIVE PAPER PREVIEW';
          if (this.stageTitleBar) this.stageTitleBar.style.maxWidth = '720px';
          document.querySelector('.m3-phone-wrapper').className = 'm3-phone-wrapper paper-mode';
          if (lockUIToggle) lockUIToggle.style.display = 'none';
        } else {
          this.phoneCanvas.className = 'm3-phone-canvas canvas-phone device-switching';
          if (this.stageDeviceLabel) this.stageDeviceLabel.innerText = 'LIVE PHONE LOCKSCREEN PREVIEW';
          if (this.stageTitleBar) this.stageTitleBar.style.maxWidth = '380px';
          document.querySelector('.m3-phone-wrapper').className = 'm3-phone-wrapper';
          if (lockUIToggle) lockUIToggle.style.display = 'flex';
        }

        // Reset inline screen size styles if switching device modes
        this.phoneCanvas.style.width = '';
        this.phoneCanvas.style.height = '';

        // Auto-adapt grid & font scaling on device switch
        this.renderTimetableGrid();

        // Smooth scroll scroll area to center new device model
        const scrollArea = document.getElementById('canvas-scroll-area');
        if (scrollArea) {
          setTimeout(() => {
            const targetLeft = Math.max(0, (scrollArea.scrollWidth - scrollArea.clientWidth) / 2);
            scrollArea.scrollTo({ left: targetLeft, behavior: 'smooth' });
          }, 60);
        }

        // On mobile/tablet screens, set zoom to 1.0 (100%) and auto-center scroll
        if (window.innerWidth < 1024) {
          currentZoomScale = 1.0;
          applyZoom();
          const scrollArea = document.getElementById('canvas-scroll-area');
          if (scrollArea) {
            setTimeout(() => {
              scrollArea.scrollLeft = Math.max(0, (scrollArea.scrollWidth - scrollArea.clientWidth) / 2);
            }, 60);
          }
        }
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

    // Zoom and Theme Bottom Controls
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const zoomLabel = document.getElementById('zoom-label-text');
    const btnThemeToggle = document.getElementById('btn-theme-toggle');
    const mainPhoneWrapper = document.getElementById('main-phone-wrapper');
    
    // Default zoom scale: 1.0 (100%) on mobile for 1:1 scale & smooth horizontal swiping, 0.85 (85%) on desktop
    let currentZoomScale = window.innerWidth < 1024 ? 1.0 : 0.85;
    
    const applyZoom = () => {
      if (!mainPhoneWrapper || !zoomLabel) return;
      mainPhoneWrapper.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), zoom 0.2s ease';
      mainPhoneWrapper.style.transformOrigin = 'center center';
      
      if (currentZoomScale === 1.0) {
        mainPhoneWrapper.style.zoom = '';
        mainPhoneWrapper.style.transform = 'none';
      } else if ('zoom' in mainPhoneWrapper.style && !window.navigator.userAgent.includes('Firefox')) {
        mainPhoneWrapper.style.zoom = currentZoomScale;
        mainPhoneWrapper.style.transform = 'none';
      } else {
        mainPhoneWrapper.style.transform = `scale(${currentZoomScale})`;
      }
      const displayPercent = Math.round(currentZoomScale * 100);
      zoomLabel.innerText = `${displayPercent}%`;

      const scrollArea = document.getElementById('canvas-scroll-area');
      if (scrollArea) {
        if (currentZoomScale < 1.0) {
          scrollArea.classList.remove('justify-start');
          scrollArea.classList.add('justify-center');
        } else {
          scrollArea.classList.remove('justify-center');
          scrollArea.classList.add('justify-start');
        }
      }
    };
    this.applyCanvasZoom = applyZoom;

    if (btnZoomIn && btnZoomOut && zoomLabel && mainPhoneWrapper) {
      // Set initial zoom on page load
      applyZoom();

      btnZoomIn.addEventListener('click', () => {
        if (currentZoomScale < 1.5) {
          currentZoomScale = Math.min(1.5, Math.round((currentZoomScale + 0.15) * 100) / 100);
          applyZoom();
        }
      });

      btnZoomOut.addEventListener('click', () => {
        if (currentZoomScale > 0.4) {
          currentZoomScale = Math.max(0.4, Math.round((currentZoomScale - 0.15) * 100) / 100);
          applyZoom();
        }
      });
    }

    if (btnThemeToggle) {
      btnThemeToggle.addEventListener('click', () => {
        this.currentMode = this.currentMode === 'dark' ? 'light' : 'dark';
        this.applyThemeEngine();
      });
    }

    // Randomize Theme Palette Button (Bottom Pill Bar)
    document.getElementById('btn-randomize-theme')?.addEventListener('click', () => {
      const paletteKeys = Object.keys(THEME_PALETTES.light);
      const available = paletteKeys.filter(k => k !== this.currentPalette);
      const randomPalette = available[Math.floor(Math.random() * available.length)];
      if (randomPalette) {
        this.setPalette(randomPalette);
      }
    });

    // Randomize Course Card Colors Button (Bottom Pill Bar)
    document.getElementById('btn-randomize-course-colors')?.addEventListener('click', () => {
      const paletteColors = [
        '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#1D4ED8',
        '#D97706', '#F59E0B', '#FBBF24', '#B45309', '#7C3AED',
        '#A855F7', '#C084FC', '#DB2777', '#EC4899', '#F472B6',
        '#0284C7', '#38BDF8', '#10B981', '#34D399', '#059669',
        '#6D597A', '#B596C1', '#C2A878', '#E34F26', '#006D77'
      ];

      // Turn OFF global adaptive color so custom randomized colors take effect on grid
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

      this.saveToLocal();
      this.renderAll();
    });

    // Expandable Canvas Controls Popover Toggle
    const btnTogglePopover = document.getElementById('btn-toggle-canvas-popover');
    const canvasPopover = document.getElementById('canvas-controls-popover');

    if (btnTogglePopover && canvasPopover) {
      btnTogglePopover.addEventListener('click', (e) => {
        e.stopPropagation();
        canvasPopover.classList.toggle('hidden');
      });

      // Keep popover open while customizing themes/sidebars/controls.
      // Do NOT close when clicking sidebars, theme pickers, theme mode toggles, or bottom toolbar!
      document.addEventListener('click', (e) => {
        const isClickInsidePopover = canvasPopover.contains(e.target);
        const isClickOnToggle = btnTogglePopover.contains(e.target);
        const isClickOnThemeOrSidebar = e.target.closest('#left-sidebar, #right-sidebar, #bottom-floating-pill-bar, .palette-dot, .theme-mode-dot, .color-swatch-btn, .swatch-dot');

        if (!canvasPopover.classList.contains('hidden') && !isClickInsidePopover && !isClickOnToggle && !isClickOnThemeOrSidebar) {
          canvasPopover.classList.add('hidden');
        }
      });
    }

    // Sidebar Collapsing into Single Floating Buttons (Desktop & Mobile Web)
    const leftSidebar = document.getElementById('left-sidebar');
    const rightSidebar = document.getElementById('right-sidebar');
    const btnToggleLeft = document.getElementById('btn-toggle-left-sidebar');
    const btnExpandLeftFloating = document.getElementById('btn-expand-left-floating');
    const btnToggleRight = document.getElementById('btn-toggle-right-sidebar');
    const btnExpandRightFloating = document.getElementById('btn-expand-right-floating');

    const isMobile = () => window.innerWidth <= 1280;

    const showFloatingBtn = (btn) => {
      if (!btn) return;
      btn.classList.remove('hidden');
      btn.style.display = 'flex';
    };

    const hideFloatingBtn = (btn) => {
      if (!btn) return;
      btn.classList.add('hidden');
      btn.style.display = 'none';
    };

    const syncFloatingButtonsState = () => {
      const leftCollapsed = leftSidebar.classList.contains('sidebar-collapsed-left');
      const rightCollapsed = rightSidebar.classList.contains('sidebar-collapsed-right');
      const mobileExportBar = document.getElementById('mobile-export-bar');
      const mobileDropdown = document.getElementById('mobile-export-dropdown');
      const mobileChevron = document.getElementById('mobile-export-chevron');

      if (isMobile()) {
        // MOBILE / TABLET: If EITHER sidebar is open, hide ALL 3 floating top buttons
        if (!leftCollapsed || !rightCollapsed) {
          hideFloatingBtn(btnExpandLeftFloating);
          hideFloatingBtn(btnExpandRightFloating);
          if (mobileExportBar) mobileExportBar.style.display = 'none';
          if (mobileDropdown) mobileDropdown.classList.add('hidden');
          if (mobileChevron) mobileChevron.classList.remove('mobile-export-chevron-open');
        } else {
          // Both sidebars closed: show all 3 floating top buttons
          showFloatingBtn(btnExpandLeftFloating);
          showFloatingBtn(btnExpandRightFloating);
          if (mobileExportBar) mobileExportBar.style.display = 'flex';
        }
      } else {
        // DESKTOP: Show floating Menu/Schedule buttons whenever respective sidebar is collapsed
        if (leftCollapsed) {
          showFloatingBtn(btnExpandLeftFloating);
        } else {
          hideFloatingBtn(btnExpandLeftFloating);
        }

        if (rightCollapsed) {
          showFloatingBtn(btnExpandRightFloating);
        } else {
          hideFloatingBtn(btnExpandRightFloating);
        }

        if (mobileExportBar) mobileExportBar.style.display = '';
      }
    };

    const toggleLeftSidebar = (collapse) => {
      const isCurrentlyCollapsed = leftSidebar.classList.contains('sidebar-collapsed-left');
      const shouldCollapse = collapse !== undefined ? collapse : !isCurrentlyCollapsed;
      
      if (shouldCollapse) {
        leftSidebar.classList.add('sidebar-collapsed-left');
      } else {
        leftSidebar.classList.remove('sidebar-collapsed-left');
        if (isMobile()) {
          rightSidebar.classList.add('sidebar-collapsed-right');
        }
      }
      syncFloatingButtonsState();
    };

    const toggleRightSidebar = (collapse) => {
      const isCurrentlyCollapsed = rightSidebar.classList.contains('sidebar-collapsed-right');
      const shouldCollapse = collapse !== undefined ? collapse : !isCurrentlyCollapsed;
      
      if (shouldCollapse) {
        rightSidebar.classList.add('sidebar-collapsed-right');
      } else {
        rightSidebar.classList.remove('sidebar-collapsed-right');
        if (isMobile()) {
          leftSidebar.classList.add('sidebar-collapsed-left');
        }
      }
      syncFloatingButtonsState();
    };

    btnToggleLeft?.addEventListener('click', () => toggleLeftSidebar(true));
    btnExpandLeftFloating?.addEventListener('click', () => toggleLeftSidebar(false));

    btnToggleRight?.addEventListener('click', () => toggleRightSidebar(true));
    btnExpandRightFloating?.addEventListener('click', () => toggleRightSidebar(false));

    // Initial sidebar state on web app load:
    // Mobile & Tablet (<=1280px): BOTH Menu and Schedule start COLLAPSED (not expanded)
    // Desktop (>1280px): BOTH Menu and Schedule start EXPANDED by default
    if (isMobile()) {
      leftSidebar?.classList.add('sidebar-collapsed-left');
      rightSidebar?.classList.add('sidebar-collapsed-right');
    } else {
      leftSidebar?.classList.remove('sidebar-collapsed-left');
      rightSidebar?.classList.remove('sidebar-collapsed-right');
    }
    syncFloatingButtonsState();

    // Re-check on window resize
    window.addEventListener('resize', () => {
      syncFloatingButtonsState();
    });

    // Close open floating sidebars on mobile/tablet when user taps workspace canvas
    document.querySelector('main')?.addEventListener('click', (e) => {
      if (isMobile()) {
        const clickedFloating = e.target.closest('#btn-expand-left-floating, #btn-expand-right-floating');
        if (!clickedFloating) {
          toggleLeftSidebar(true);
          toggleRightSidebar(true);
        }
      }
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

    // Universal Schedule Importer (Auto-detects CSV, ICS, or Screenshot AI)
    if (this.universalFileInput) {
      this.universalFileInput.addEventListener('change', async (e) => {
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          const fileName = file.name.toLowerCase();
          const isImage = file.type.startsWith('image/') || /\.(png|jpe?g|webp|gif|bmp)$/i.test(fileName);

          if (isImage) {
            // Run AI Screenshot Scanner
            this.ocrLoadingBar.classList.remove('hidden');
            let extracted = [];
            try {
              const provider = document.getElementById('select-api-provider')?.value || 'gemini';
              const apiKey = document.getElementById('input-api-key')?.value.trim() || '';
              
              if (apiKey) {
                localStorage.setItem('schedully_api_key', apiKey);
              }

              extracted = await window.ocrParser.scanWithCloudAPI(file, provider, apiKey, (msg) => {
                this.ocrLoadingText.innerText = msg;
              });
              
              if (!extracted || extracted.length === 0) {
                const scanErrorAlert = document.getElementById('scan-error-alert');
                const scanErrorTitle = document.getElementById('scan-error-title');
                const scanErrorDesc = document.getElementById('scan-error-desc');
                if (scanErrorAlert) {
                  scanErrorAlert.classList.remove('hidden');
                  if (scanErrorTitle) scanErrorTitle.innerText = "Scanning Failed: Image Unreadable";
                  if (scanErrorDesc) scanErrorDesc.innerText = "The scanner could not recognize valid timetable text in this image. Please ensure the image is clear.";
                }
                return;
              }

              this.importClassesDirectly(extracted);
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
          } else {
            // Run CSV or ICS File Parser
            if (!window.ScheduleParser) {
              alert("Schedule parser module is loading. Please select your file again.");
              return;
            }
            const reader = new FileReader();
            reader.onload = (evt) => {
              const content = evt.target.result || '';
              try {
                let parsedEvents = [];
                const upperContent = content.toUpperCase();
                const isICS = fileName.endsWith('.ics') || upperContent.includes('BEGIN:VCALENDAR') || upperContent.includes('BEGIN:VEVENT');

                if (isICS) {
                   parsedEvents = window.ScheduleParser.parseICS(content);
                   if (parsedEvents.length === 0) {
                     alert("No classes found in this ICS file.");
                     return;
                   }
                   this.importClassesDirectly(parsedEvents);
                } else {
                   parsedEvents = window.ScheduleParser.parseCSV(content);
                   if (parsedEvents.length === 0) {
                     alert("No readable classes found in CSV.");
                     return;
                   }
                   this.handleCSVImportWithOCC(parsedEvents);
                }
              } catch (err) {
                console.error("File parsing error:", err);
                alert("Could not parse schedule file: " + (err.message || 'Check file format'));
              }
            };
            reader.readAsText(file);
            this.universalFileInput.value = '';
          }
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
    this.btnExportICal?.addEventListener('click', () => {
      window.timetableEngine.exportToICal(this.classes, `schedully_schedule.ics`);
      alert("📅 Exported .ics Calendar File! Open this file to import into Google Calendar or Apple Calendar.");
    });

    // CSV Export Button
    this.btnExportCSV?.addEventListener('click', () => {
      window.timetableEngine.exportToCSV(this.classes, `schedully_schedule.csv`);
      alert("📊 Exported CSV File!");
    });

    // Wallpaper export — Using dom-to-image-more
    const exportWallpaper = (onComplete) => {
      const originalCanvas = document.getElementById('phone-canvas');
      
      const cssW = originalCanvas.clientWidth + 24; // full width including borders if any
      const cssH = originalCanvas.clientHeight + 24;

      const stagingContainer = document.createElement('div');
      stagingContainer.style.cssText = `
        position: absolute;
        top: -9999px; left: -9999px;
        z-index: -9999;
      `;
      document.body.appendChild(stagingContainer);

      const clone = originalCanvas.cloneNode(true);
      
      // DO NOT strip borders or margins from the clone! Changing the box model causes layout bugs in WebKit/Blink.
      // Instead, we will capture it exactly as is, and then crop the canvas image mathematically.
      
      // CRITICAL FIX: WebKit/Blink SVG Rendering Bug Mitigation
      // Mobile engines notoriously miscalculate clipping masks and shadows when rendering SVGs with scale().
      // By stripping border-radius, overflow, and shadows, we force the engine to draw a plain box, avoiding all shifting bugs.
      clone.style.setProperty('overflow', 'visible', 'important');
      clone.style.setProperty('border-radius', '0', 'important');
      clone.style.setProperty('box-shadow', 'none', 'important');
      
      // Make clock, camera dot, and nav bar INVISIBLE (but preserve their layout space)
      ['.phone-camera-dot', '#phone-lock-header', '.phone-nav-bar'].forEach(sel => {
        const el = clone.querySelector(sel);
        if (el) {
          el.style.setProperty('visibility', 'hidden', 'important');
          el.style.setProperty('opacity', '0', 'important');
        }
      });

      // Micro-adjust text size in the clone to cancel out the SVG kerning bug!
      // Mobile devices require a much more aggressive shrink factor due to how mobile OS fonts map to SVG <foreignObject>.
      const isMobileExport = window.innerWidth <= 1280;
      const shrinkFactor = isMobileExport ? 0.85 : 0.94;
      const letterSpace = isMobileExport ? '-0.25px' : '-0.15px';
      
      clone.querySelectorAll('.exact-card-code').forEach(el => {
        const currentFontSize = parseFloat(el.style.fontSize) || 10;
        el.style.setProperty('font-size', (currentFontSize * shrinkFactor) + 'px', 'important');
        el.style.setProperty('letter-spacing', letterSpace, 'important');
      });
      clone.querySelectorAll('.exact-card-type, .exact-card-room, .exact-card-lecturer, .exact-card-group, .exact-card-time').forEach(el => {
        const currentFontSize = parseFloat(el.style.fontSize) || 8.5;
        el.style.setProperty('font-size', (currentFontSize * shrinkFactor) + 'px', 'important');
        el.style.setProperty('letter-spacing', letterSpace, 'important');
      });

      stagingContainer.appendChild(clone);

      setTimeout(() => {
        const scale = 3;
        const rect = originalCanvas.getBoundingClientRect();
        
        window.domtoimage.toCanvas(clone, {
          width: originalCanvas.offsetWidth * scale,
          height: originalCanvas.offsetHeight * scale,
          style: {
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            width: `${originalCanvas.offsetWidth}px`,
            height: `${originalCanvas.offsetHeight}px`
          }
        }).then(canvas => {
          if (document.body.contains(stagingContainer)) document.body.removeChild(stagingContainer);
          
          // Step 2: Mathematically crop the black bezel from the resulting canvas
          const computedStyle = window.getComputedStyle(originalCanvas);
          const borderTop = parseFloat(computedStyle.borderTopWidth) || 0;
          const borderLeft = parseFloat(computedStyle.borderLeftWidth) || 0;
          const borderBottom = parseFloat(computedStyle.borderBottomWidth) || 0;
          const borderRight = parseFloat(computedStyle.borderRightWidth) || 0;
          
          const finalW = canvas.width - ((borderLeft + borderRight) * scale);
          const finalH = canvas.height - ((borderTop + borderBottom) * scale);
          
          const finalCanvas = document.createElement('canvas');
          finalCanvas.width = finalW;
          finalCanvas.height = finalH;
          const ctx = finalCanvas.getContext('2d');
          
          ctx.drawImage(
            canvas,
            borderLeft * scale, borderTop * scale, finalW, finalH, // Source crop
            0, 0, finalW, finalH // Destination
          );
          
          onComplete(finalCanvas);
        }).catch(err => {
          if (document.body.contains(stagingContainer)) document.body.removeChild(stagingContainer);
          console.error('Wallpaper export failed:', err);
          alert('Export failed. Please try again.');
        });
      }, 150);
    };


    // Download Image Button — Pure clean wallpaper PNG export (Mobile & Desktop)
    this.btnDownloadHD.addEventListener('click', () => {
      exportWallpaper((canvas) => {
        canvas.toBlob((blob) => {
          if (blob && window.timetableEngine?.downloadOrShareFile) {
            window.timetableEngine.downloadOrShareFile(blob, 'schedully_wallpaper.png', 'image/png');
          } else {
            const link = document.createElement('a');
            link.download = 'schedully_wallpaper.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          }
        }, 'image/png');
      });
    });

    // Save As PDF Button — Pure clean wallpaper PDF export (Mobile & Desktop)
    this.btnSavePdf.addEventListener('click', () => {
      exportWallpaper((canvas) => {
        const { jsPDF } = window.jspdf;
        const imgData = canvas.toDataURL('image/png');
        
        // Create PDF with EXACT dimensions of the exported image to prevent white A4 margins
        const pdf = new jsPDF({
          orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
          unit: 'px',
          format: [canvas.width, canvas.height]
        });

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        
        try {
          const pdfArrayBuffer = pdf.output('arraybuffer');
          const pdfBlob = new Blob([pdfArrayBuffer], { type: 'application/pdf' });
          if (window.timetableEngine?.downloadOrShareFile) {
            window.timetableEngine.downloadOrShareFile(pdfBlob, 'schedully_wallpaper.pdf', 'application/pdf');
          } else {
            pdf.save('schedully_wallpaper.pdf');
          }
        } catch (pdfErr) {
          pdf.save('schedully_wallpaper.pdf');
        }
      });
    });

    // ── Mobile Export Dropdown ──────────────────────────────────────────────
    const mobileExportToggle = document.getElementById('btn-mobile-export-toggle');
    const mobileExportDropdown = document.getElementById('mobile-export-dropdown');
    const mobileExportChevron = document.getElementById('mobile-export-chevron');

    const closeMobileDropdown = () => {
      mobileExportDropdown?.classList.add('hidden');
      mobileExportChevron?.classList.remove('mobile-export-chevron-open');
    };

    mobileExportToggle?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !mobileExportDropdown.classList.contains('hidden');
      if (isOpen) {
        closeMobileDropdown();
      } else {
        mobileExportDropdown.classList.remove('hidden');
        mobileExportChevron?.classList.add('mobile-export-chevron-open');
      }
    });

    // Close dropdown when tapping elsewhere
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#mobile-export-bar')) {
        closeMobileDropdown();
      }
    });

    // Proxy mobile buttons → desktop button click handlers
    document.getElementById('btn-download-hd-mobile')?.addEventListener('click', () => {
      closeMobileDropdown();
      this.btnDownloadHD?.click();
    });
    document.getElementById('btn-export-ical-mobile')?.addEventListener('click', () => {
      closeMobileDropdown();
      this.btnExportICal?.click();
    });
    document.getElementById('btn-export-csv-mobile')?.addEventListener('click', () => {
      closeMobileDropdown();
      this.btnExportCSV?.click();
    });
    document.getElementById('btn-save-pdf-mobile')?.addEventListener('click', () => {
      closeMobileDropdown();
      this.btnSavePdf?.click();
    });
    // ────────────────────────────────────────────────────────────────────────
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

    if (!this.occModalBody || !this.occModal) {
      this.importClassesDirectly(events);
      return;
    }

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

    // Smart Auto-Crop Grid Hours based on actual classes
    let effectiveStartHour = this.gridStartHour;
    let effectiveEndHour = this.gridEndHour;
    
    if (this.classes && this.classes.length > 0) {
      let minH = 24;
      let maxH = 0;
      this.classes.forEach(c => {
        if (c.startTime) {
          const sh = parseInt(c.startTime.split(':')[0], 10);
          if (sh < minH) minH = sh;
        }
        if (c.endTime) {
          const [eh, em] = c.endTime.split(':').map(Number);
          const trueEndH = em > 0 ? eh + 1 : eh;
          if (trueEndH > maxH) maxH = trueEndH;
        }
      });
      if (minH < 24) effectiveStartHour = minH;
      if (maxH > 0) effectiveEndHour = Math.max(minH + 2, maxH);
    }

    const timetableContainer = document.getElementById('lock-timetable-container');
    if (timetableContainer) {
      timetableContainer.style.width = `${this.gridWidthVal || 100}%`;
      timetableContainer.style.transform = 'none';
      timetableContainer.style.marginTop = `${this.gridYPosVal || 0}px`;
      timetableContainer.style.transition = 'margin-top 0.15s ease, width 0.15s ease, background-color 0.3s ease, border-color 0.3s ease';
        timetableContainer.style.borderRadius = this.cardCornerStyle === 'sharp' ? '0px' : this.cardCornerRadiusVal + 'px';
        timetableContainer.style.overflow = 'hidden';
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
            const displaySh = sh > 12 ? sh - 12 : (sh === 0 ? 12 : sh);
            const displayEh = eh > 12 ? eh - 12 : (eh === 0 ? 12 : eh);
            formatStart = `${String(displaySh).padStart(2, '0')}:${String(sm || 0).padStart(2, '0')} ${sh >= 12 ? 'PM' : 'AM'}`;
            formatEnd = `${String(displayEh).padStart(2, '0')}:${String(em || 0).padStart(2, '0')} ${eh >= 12 ? 'PM' : 'AM'}`;
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

          const codeFontSize = Math.max(8.0, Math.min(this.gridFontSizeVal || 9, effectiveMaxFont));
          const detailFontSize = Math.max(7.0, codeFontSize - 1.0);

          const cardContentHTML = isShortCard ? `
            <div class="exact-card-code" style="font-size: ${codeFontSize}px; font-weight: 800; line-height: 1.1; color: inherit;">${matched.code}</div>
          ` : `
            <div class="exact-card-code" style="font-size: ${codeFontSize}px; font-weight: 800; line-height: 1.15; color: inherit;">${matched.code}</div>
            ${this.globalCourseType && matched.type ? `<div class="exact-card-type" style="font-size: ${detailFontSize}px; font-style: italic; font-weight: 600; line-height: 1.15; opacity: 1; color: inherit;">${matched.type}</div>` : ''}
            ${this.globalCourseRoom && matched.room ? `<div class="exact-card-room" style="font-size: ${detailFontSize}px; font-weight: 600; line-height: 1.15; opacity: 1; color: inherit;">${matched.room}</div>` : ''}
            ${this.globalCourseLecturer && matched.lecturer ? `<div class="exact-card-lecturer" style="font-size: ${detailFontSize}px; font-weight: 600; line-height: 1.15; opacity: 1; color: inherit;">${matched.lecturer}</div>` : ''}
            ${this.globalCourseGroup && matched.group ? `<div class="exact-card-group" style="font-size: ${detailFontSize}px; font-weight: 600; line-height: 1.15; opacity: 1; color: inherit;">${matched.group}</div>` : ''}
            ${this.globalCardTimes && matched.displayTime !== false ? `<div class="exact-card-time" style="font-size: ${detailFontSize}px; font-weight: 600; line-height: 1.15; opacity: 1; color: inherit;">${formatStart}</div>` : ''}
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
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 2px 3px;
            overflow: hidden;
            border-radius: ${this.cardCornerStyle === 'sharp' ? '0px' : this.cardCornerRadiusVal + 'px'};
          `;
          cardElement.innerHTML = cardContentHTML;
          slotCell.appendChild(cardElement);
        });

        this.universalTimetableGrid.appendChild(slotCell);
      });
    });
  }

  renderClassList() {
    if (!this.classListContainer) {
      this.classListContainer = document.getElementById('added-classes-list') || document.getElementById('class-list-container');
    }
    if (!this.classListContainer) return;

    this.classListContainer.innerHTML = '';
    const emptyStateWrapper = document.getElementById('empty-state-wrapper');
    if (this.classes.length === 0) {
      if (emptyStateWrapper) emptyStateWrapper.style.display = 'flex';
      if (this.courseSearchContainer) this.courseSearchContainer.classList.add('hidden');
      return;
    }
    if (emptyStateWrapper) emptyStateWrapper.style.display = 'none';
    if (this.courseSearchContainer) this.courseSearchContainer.classList.remove('hidden');

    let resolvedMode = this.currentMode;
    if (resolvedMode === 'auto') {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      resolvedMode = isDark ? 'dark' : 'light';
    }
    const paletteGroup = THEME_PALETTES[resolvedMode] || THEME_PALETTES.light;
    const currentThemeData = paletteGroup[this.currentPalette] || paletteGroup.indigo;
    const swatches = currentThemeData.courseSwatches || ['#1D4ED8', '#2563EB', '#3B82F6', '#10B981', '#F59E0B', '#EC4899'];

    let filteredClasses = this.classes;
    if (this.searchQuery && this.searchQuery.length > 0) {
      const query = this.searchQuery.toLowerCase();
      filteredClasses = this.classes.filter(c => {
        return (
          (c.code && c.code.toLowerCase().includes(query)) ||
          (c.title && c.title.toLowerCase().includes(query)) ||
          (c.type && c.type.toLowerCase().includes(query)) ||
          (c.room && c.room.toLowerCase().includes(query)) ||
          (c.lecturer && c.lecturer.toLowerCase().includes(query)) ||
          (c.group && c.group.toLowerCase().includes(query)) ||
          (c.day && c.day.toLowerCase().includes(query))
        );
      });
    }

    if (filteredClasses.length === 0 && this.classes.length > 0) {
       this.classListContainer.innerHTML = '<div class="text-center p-6 text-gray-500 text-sm font-semibold">No courses match your search.</div>';
    }

    filteredClasses.forEach(c => {
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
