import {
  library,
  IconLookup,
  IconDefinition,
  findIconDefinition,
  IconName,
} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const createIcon = (iconName: IconName) => {
  const Lookup: IconLookup = { prefix: 'fas', iconName };
  const IconDefinition: IconDefinition = findIconDefinition(Lookup);

  return IconDefinition;
};

export default createIcon;
