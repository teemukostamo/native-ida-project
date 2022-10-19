import * as React from 'react';
import {IconButton} from 'react-native-paper';

type Props = {
  onNavigate: () => void;
};

const BackButtonContent: React.FC<Props> = ({onNavigate}) => (
  <IconButton
    onPress={() => onNavigate()}
    accessibilityLabel="Go back"
    icon="chevron-left"
    color="white"
    size={40}
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      position: 'absolute',
      top: 600,
      zIndex: 2,
      left: 10,
      backgroundColor: 'rgba(227, 227, 227, 0.8)',
    }}
  />
);

export default BackButtonContent;
