import { getLocalizedReasonsBlocks } from './getLocalizedReasonsBlocks';
import ReasonsSlider from './ReasonsSlider';

export default async function ReasonsSliderWrapper() {
  const blocks = await getLocalizedReasonsBlocks();
  return <ReasonsSlider blocks={blocks} />;
}
