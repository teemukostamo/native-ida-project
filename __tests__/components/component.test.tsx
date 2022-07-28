import React from 'react';

import {Text, View} from 'react-native';
import {render} from '@testing-library/react-native';

interface Props {
  name: string;
}

const Greeting: React.FC<Props> = ({name}) => {
  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  );
};

describe('Greeting', () => {
  it('renders a greeting message based on the name prop', () => {
    const {debug, getByText} = render(<Greeting name="Teemu" />);

    debug();

    expect(getByText('Hello Teemu!')).toBeDefined();
  });
});
